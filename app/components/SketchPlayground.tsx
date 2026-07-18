"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import TextReveal from "./TextReveal";
import { supabase } from "../lib/supabase";

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 320;
const COLORS = ["#bf4a1a", "#efedea", "#121212", "#2b6cb0", "#2f855a"];
const SIZES = [2, 5, 10];
const GALLERY_LIMIT = 24;

interface Sketch {
    id: string;
    image_data: string;
}

export default function SketchPlayground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isDrawingRef = useRef(false);
    const undoStackRef = useRef<ImageData[]>([]);
    const redoStackRef = useRef<ImageData[]>([]);
    const [color, setColor] = useState(COLORS[0]);
    const [size, setSize] = useState(SIZES[1]);
    const [sketches, setSketches] = useState<Sketch[]>([]);
    const [isPublishing, setIsPublishing] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);

    const getContext = useCallback(() => canvasRef.current?.getContext("2d") ?? null, []);

    useEffect(() => {
        let cancelled = false;

        async function loadSketches() {
            const { data } = await supabase
                .from("sketches")
                .select("id, image_data")
                .order("created_at", { ascending: false })
                .limit(GALLERY_LIMIT);
            if (!cancelled && data) setSketches(data);
        }

        loadSketches();
        return () => {
            cancelled = true;
        };
    }, []);

    function pushUndoSnapshot() {
        const canvas = canvasRef.current;
        const ctx = getContext();
        if (!canvas || !ctx) return;
        undoStackRef.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        redoStackRef.current = [];
    }

    function getCoords(event: React.PointerEvent<HTMLCanvasElement>) {
        const canvas = canvasRef.current!;
        const rect = canvas.getBoundingClientRect();
        return {
            x: ((event.clientX - rect.left) / rect.width) * canvas.width,
            y: ((event.clientY - rect.top) / rect.height) * canvas.height,
        };
    }

    function handlePointerDown(event: React.PointerEvent<HTMLCanvasElement>) {
        const ctx = getContext();
        if (!ctx) return;
        event.currentTarget.setPointerCapture(event.pointerId);
        setFeedback(null);
        pushUndoSnapshot();
        isDrawingRef.current = true;
        const { x, y } = getCoords(event);
        ctx.strokeStyle = color;
        ctx.lineWidth = size;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    function handlePointerMove(event: React.PointerEvent<HTMLCanvasElement>) {
        if (!isDrawingRef.current) return;
        const ctx = getContext();
        if (!ctx) return;
        const { x, y } = getCoords(event);
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    function handlePointerUp() {
        isDrawingRef.current = false;
    }

    function handleUndo() {
        const canvas = canvasRef.current;
        const ctx = getContext();
        if (!canvas || !ctx || undoStackRef.current.length === 0) return;
        redoStackRef.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        const previous = undoStackRef.current.pop()!;
        ctx.putImageData(previous, 0, 0);
    }

    function handleRedo() {
        const canvas = canvasRef.current;
        const ctx = getContext();
        if (!canvas || !ctx || redoStackRef.current.length === 0) return;
        undoStackRef.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        const next = redoStackRef.current.pop()!;
        ctx.putImageData(next, 0, 0);
    }

    function handleClear() {
        const canvas = canvasRef.current;
        const ctx = getContext();
        if (!canvas || !ctx) return;
        pushUndoSnapshot();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function handleDownload() {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const link = document.createElement("a");
        link.download = "sketch.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    }

    function isCanvasBlank(canvas: HTMLCanvasElement) {
        const ctx = canvas.getContext("2d");
        if (!ctx) return true;
        const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 3; i < data.length; i += 4) {
            if (data[i] !== 0) return false;
        }
        return true;
    }

    async function handlePublish() {
        const canvas = canvasRef.current;
        if (!canvas || isPublishing) return;
        if (isCanvasBlank(canvas)) {
            setFeedback("Draw something before publishing.");
            return;
        }
        setIsPublishing(true);
        const imageData = canvas.toDataURL("image/png");
        const { data, error } = await supabase
            .from("sketches")
            .insert({ image_data: imageData })
            .select("id, image_data")
            .single();
        if (!error && data) {
            setSketches((current) => [data, ...current].slice(0, GALLERY_LIMIT));
        }
        setIsPublishing(false);
    }

    return (
        <div id="sketch-playground" className="tt-section xl:pt-[120px]">
            <div className="tt-section-inner tt-wrap">
                <div className="tt-heading tt-heading-xxxlg tt-heading-center">
                    <TextReveal as="h3" className="tt-heading-subtitle">Leave Your Mark</TextReveal>
                    <TextReveal as="h2" className="tt-heading-title">Sketch Playground</TextReveal>
                    <TextReveal as="p" className="max-w-[500px] uppercase leading-[1.2]">
                        Doodle something and publish it for other visitors to see
                    </TextReveal>
                </div>

                <div className="mt-10 flex flex-col items-center gap-6">
                    <canvas
                        ref={canvasRef}
                        width={CANVAS_WIDTH}
                        height={CANVAS_HEIGHT}
                        role="img"
                        aria-label="Drawing canvas"
                        className="w-full max-w-[600px] touch-none rounded-lg border border-tt-border bg-tt-bg"
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                    />

                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            {COLORS.map((c) => (
                                <button
                                    key={c}
                                    type="button"
                                    aria-label={`Color ${c}`}
                                    onClick={() => setColor(c)}
                                    className={`size-6 rounded-full border transition ${
                                        color === c ? "ring-2 ring-tt-main ring-offset-2 ring-offset-tt-bg" : "border-tt-border"
                                    }`}
                                    style={{ backgroundColor: c }}
                                />
                            ))}
                            <input
                                type="color"
                                value={color}
                                onChange={(event) => setColor(event.target.value)}
                                aria-label="Custom color"
                                className="size-6 cursor-pointer rounded-full border border-tt-border bg-transparent p-0"
                            />
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-2">
                            {SIZES.map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    aria-label={`Brush size ${s}`}
                                    onClick={() => setSize(s)}
                                    className={`flex size-8 items-center justify-center rounded-full border transition ${
                                        size === s ? "border-tt-main" : "border-tt-border"
                                    }`}
                                >
                                    <span className="rounded-full bg-tt-text" style={{ width: s, height: s }} />
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <button type="button" onClick={handleUndo} className="tt-magnetic-item rounded-md border border-tt-border px-4 py-2 text-sm">
                                Undo
                            </button>
                            <button type="button" onClick={handleRedo} className="tt-magnetic-item rounded-md border border-tt-border px-4 py-2 text-sm">
                                Redo
                            </button>
                            <button type="button" onClick={handleClear} className="tt-magnetic-item rounded-md border border-tt-border px-4 py-2 text-sm">
                                Clear
                            </button>
                            <button type="button" onClick={handleDownload} className="tt-magnetic-item rounded-md border border-tt-border px-4 py-2 text-sm">
                                Download
                            </button>
                            <button
                                type="button"
                                onClick={handlePublish}
                                disabled={isPublishing}
                                className="tt-magnetic-item rounded-md bg-tt-main px-5 py-2 text-sm text-white disabled:opacity-50"
                            >
                                {isPublishing ? "Publishing…" : "Publish"}
                            </button>
                        </div>

                        {feedback && <div className="w-full text-center text-xs text-tt-text-muted">{feedback}</div>}
                    </div>

                    {sketches.length > 0 && (
                        <div className="mt-6 w-full">
                            <div className="mb-3 text-center text-xs uppercase tracking-wide text-tt-text-muted">
                                Visitor&apos;s Sketches
                            </div>
                            <div className="flex gap-3 overflow-x-auto pb-2">
                                {sketches.map((sketch) => (
                                    // eslint-disable-next-line @next/next/no-img-element -- data URLs can't go through next/image
                                    <img
                                        key={sketch.id}
                                        src={sketch.image_data}
                                        alt="Visitor sketch"
                                        className="h-20 w-32 flex-none rounded-md border border-tt-border bg-tt-bg object-cover"
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
