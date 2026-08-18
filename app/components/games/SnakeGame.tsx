"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useHighScore } from "../../hooks/useHighScore";

const GRID_SIZE = 20;
const CELL = 16;
const CANVAS_SIZE = GRID_SIZE * CELL;
const TICK_MS = 140;

type Point = { x: number; y: number };
type Direction = "up" | "down" | "left" | "right";

const DELTAS: Record<Direction, Point> = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 },
};

const OPPOSITE: Record<Direction, Direction> = {
    up: "down",
    down: "up",
    left: "right",
    right: "left",
};

const KEY_MAP: Record<string, Direction> = {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right",
    w: "up",
    s: "down",
    a: "left",
    d: "right",
};

function randomCell(exclude: Point[]): Point {
    let cell: Point;
    do {
        cell = { x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) };
    } while (exclude.some((p) => p.x === cell.x && p.y === cell.y));
    return cell;
}

function readColor(variable: string, fallback: string) {
    if (typeof window === "undefined") return fallback;
    const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    return value || fallback;
}

export default function SnakeGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const snakeRef = useRef<Point[]>([
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 },
    ]);
    const directionRef = useRef<Direction>("right");
    const nextDirectionRef = useRef<Direction>("right");
    const foodRef = useRef<Point>({ x: 14, y: 10 });
    const scoreRef = useRef(0);
    const [status, setStatus] = useState<"idle" | "playing" | "over">("idle");
    const [score, setScore] = useState(0);
    const { best, reportScore } = useHighScore("snake");

    const draw = useCallback(() => {
        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;

        ctx.fillStyle = readColor("--tt-bg-color", "#0a0a0a");
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

        ctx.fillStyle = readColor("--tt-main-color", "#bf4a1a");
        for (const segment of snakeRef.current) {
            ctx.fillRect(segment.x * CELL, segment.y * CELL, CELL - 1, CELL - 1);
        }

        ctx.fillStyle = readColor("--tt-text-color", "#efedea");
        ctx.fillRect(foodRef.current.x * CELL, foodRef.current.y * CELL, CELL - 1, CELL - 1);
    }, []);

    const resetGame = useCallback(() => {
        snakeRef.current = [
            { x: 10, y: 10 },
            { x: 9, y: 10 },
            { x: 8, y: 10 },
        ];
        directionRef.current = "right";
        nextDirectionRef.current = "right";
        foodRef.current = randomCell(snakeRef.current);
        scoreRef.current = 0;
        setScore(0);
        draw();
    }, [draw]);

    useEffect(() => {
        draw();
    }, [draw]);

    useEffect(() => {
        if (status !== "playing") return;

        function handleKey(event: KeyboardEvent) {
            const next = KEY_MAP[event.key];
            if (!next) return;
            event.preventDefault();
            if (next !== OPPOSITE[directionRef.current]) nextDirectionRef.current = next;
        }

        window.addEventListener("keydown", handleKey);

        const interval = setInterval(() => {
            directionRef.current = nextDirectionRef.current;
            const delta = DELTAS[directionRef.current];
            const head = snakeRef.current[0];
            const newHead = { x: head.x + delta.x, y: head.y + delta.y };

            const hitWall = newHead.x < 0 || newHead.y < 0 || newHead.x >= GRID_SIZE || newHead.y >= GRID_SIZE;
            const ateFood = newHead.x === foodRef.current.x && newHead.y === foodRef.current.y;
            const bodyToCheck = ateFood ? snakeRef.current : snakeRef.current.slice(0, -1);
            const hitSelf = bodyToCheck.some((segment) => segment.x === newHead.x && segment.y === newHead.y);

            if (hitWall || hitSelf) {
                setStatus("over");
                reportScore(scoreRef.current);
                return;
            }

            snakeRef.current = [newHead, ...snakeRef.current];
            if (ateFood) {
                foodRef.current = randomCell(snakeRef.current);
                scoreRef.current += 1;
                setScore(scoreRef.current);
            } else {
                snakeRef.current.pop();
            }

            draw();
        }, TICK_MS);

        return () => {
            window.removeEventListener("keydown", handleKey);
            clearInterval(interval);
        };
    }, [status, draw, reportScore]);

    function handleStart() {
        resetGame();
        setStatus("playing");
    }

    function press(direction: Direction) {
        if (status !== "playing") return;
        if (direction !== OPPOSITE[directionRef.current]) nextDirectionRef.current = direction;
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative">
                <canvas
                    ref={canvasRef}
                    width={CANVAS_SIZE}
                    height={CANVAS_SIZE}
                    className="rounded-lg border border-tt-border"
                />
                {status !== "playing" && (
                    <button
                        type="button"
                        onClick={handleStart}
                        className="tt-magnetic-item absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-lg bg-tt-bg/90 text-sm uppercase tracking-wide"
                    >
                        <span>{status === "over" ? `Game over — score ${score}` : "Click to play"}</span>
                        <span className="rounded-md bg-tt-main px-4 py-2 text-white">
                            {status === "over" ? "Retry" : "Start"}
                        </span>
                    </button>
                )}
            </div>

            <div className="grid grid-cols-3 gap-2">
                <span />
                <button type="button" onClick={() => press("up")} className="tt-magnetic-item rounded-md border border-tt-border px-4 py-2" aria-label="Move up">
                    ▲
                </button>
                <span />
                <button type="button" onClick={() => press("left")} className="tt-magnetic-item rounded-md border border-tt-border px-4 py-2" aria-label="Move left">
                    ◀
                </button>
                <button type="button" onClick={() => press("down")} className="tt-magnetic-item rounded-md border border-tt-border px-4 py-2" aria-label="Move down">
                    ▼
                </button>
                <button type="button" onClick={() => press("right")} className="tt-magnetic-item rounded-md border border-tt-border px-4 py-2" aria-label="Move right">
                    ▶
                </button>
            </div>

            <p className="text-xs uppercase tracking-wide text-tt-text-muted">
                Score: {score}
                {best !== null ? ` · Best: ${best}` : ""}
            </p>
        </div>
    );
}
