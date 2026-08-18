"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useHighScore } from "../../hooks/useHighScore";

const CANVAS_WIDTH = 420;
const CANVAS_HEIGHT = 300;
const PADDLE_WIDTH = 64;
const PADDLE_HEIGHT = 10;
const PADDLE_Y = CANVAS_HEIGHT - 22;
const PADDLE_SPEED = 6;
const BALL_RADIUS = 5;
const BALL_SPEED = 2.8;

const BRICK_ROWS = 4;
const BRICK_COLS = 7;
const BRICK_HEIGHT = 14;
const BRICK_GAP = 4;
const BRICK_MARGIN = 8;
const BRICK_WIDTH = (CANVAS_WIDTH - BRICK_MARGIN * 2 - BRICK_GAP * (BRICK_COLS - 1)) / BRICK_COLS;

interface Brick {
    row: number;
    col: number;
    alive: boolean;
}

interface Ball {
    x: number;
    y: number;
    dx: number;
    dy: number;
}

function buildBricks(): Brick[] {
    const bricks: Brick[] = [];
    for (let row = 0; row < BRICK_ROWS; row++) {
        for (let col = 0; col < BRICK_COLS; col++) {
            bricks.push({ row, col, alive: true });
        }
    }
    return bricks;
}

function brickRect(brick: Brick) {
    return {
        x: BRICK_MARGIN + brick.col * (BRICK_WIDTH + BRICK_GAP),
        y: BRICK_MARGIN + brick.row * (BRICK_HEIGHT + BRICK_GAP),
        width: BRICK_WIDTH,
        height: BRICK_HEIGHT,
    };
}

function initialBall(): Ball {
    return { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT - 40, dx: BALL_SPEED, dy: -BALL_SPEED };
}

function readColor(variable: string, fallback: string) {
    if (typeof window === "undefined") return fallback;
    const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    return value || fallback;
}

export default function BreakoutGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const paddleXRef = useRef((CANVAS_WIDTH - PADDLE_WIDTH) / 2);
    const ballRef = useRef<Ball>(initialBall());
    const bricksRef = useRef<Brick[]>(buildBricks());
    const keysRef = useRef<Set<string>>(new Set());
    const scoreRef = useRef(0);
    const livesRef = useRef(3);
    const frameRef = useRef<number | null>(null);
    const [status, setStatus] = useState<"idle" | "playing" | "over" | "won">("idle");
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const { best, reportScore } = useHighScore("breakout");

    const draw = useCallback(() => {
        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;

        ctx.fillStyle = readColor("--tt-bg-color", "#0a0a0a");
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        ctx.fillStyle = readColor("--tt-main-color", "#bf4a1a");
        for (const brick of bricksRef.current) {
            if (!brick.alive) continue;
            const rect = brickRect(brick);
            ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        }

        ctx.fillStyle = readColor("--tt-text-color", "#efedea");
        ctx.fillRect(paddleXRef.current, PADDLE_Y, PADDLE_WIDTH, PADDLE_HEIGHT);

        ctx.beginPath();
        ctx.arc(ballRef.current.x, ballRef.current.y, BALL_RADIUS, 0, Math.PI * 2);
        ctx.fill();
    }, []);

    useEffect(() => {
        draw();
    }, [draw]);

    const resetRound = useCallback(() => {
        paddleXRef.current = (CANVAS_WIDTH - PADDLE_WIDTH) / 2;
        ballRef.current = initialBall();
    }, []);

    function handleStart() {
        bricksRef.current = buildBricks();
        scoreRef.current = 0;
        livesRef.current = 3;
        setScore(0);
        setLives(3);
        resetRound();
        setStatus("playing");
    }

    useEffect(() => {
        if (status !== "playing") return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                event.preventDefault();
                keysRef.current.add(event.key);
            }
        }
        function handleKeyUp(event: KeyboardEvent) {
            keysRef.current.delete(event.key);
        }
        function handlePointerMove(event: PointerEvent) {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            const scale = CANVAS_WIDTH / rect.width;
            const x = (event.clientX - rect.left) * scale - PADDLE_WIDTH / 2;
            paddleXRef.current = Math.min(Math.max(x, 0), CANVAS_WIDTH - PADDLE_WIDTH);
        }

        const canvas = canvasRef.current;
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        canvas?.addEventListener("pointermove", handlePointerMove);

        function tick() {
            if (keysRef.current.has("ArrowLeft")) {
                paddleXRef.current = Math.max(0, paddleXRef.current - PADDLE_SPEED);
            }
            if (keysRef.current.has("ArrowRight")) {
                paddleXRef.current = Math.min(CANVAS_WIDTH - PADDLE_WIDTH, paddleXRef.current + PADDLE_SPEED);
            }

            const ball = ballRef.current;
            ball.x += ball.dx;
            ball.y += ball.dy;

            if (ball.x - BALL_RADIUS < 0 || ball.x + BALL_RADIUS > CANVAS_WIDTH) {
                ball.dx *= -1;
                ball.x = Math.min(Math.max(ball.x, BALL_RADIUS), CANVAS_WIDTH - BALL_RADIUS);
            }
            if (ball.y - BALL_RADIUS < 0) {
                ball.dy *= -1;
                ball.y = BALL_RADIUS;
            }

            const paddleX = paddleXRef.current;
            if (
                ball.dy > 0 &&
                ball.y + BALL_RADIUS >= PADDLE_Y &&
                ball.y + BALL_RADIUS <= PADDLE_Y + PADDLE_HEIGHT &&
                ball.x >= paddleX &&
                ball.x <= paddleX + PADDLE_WIDTH
            ) {
                const hitPos = (ball.x - (paddleX + PADDLE_WIDTH / 2)) / (PADDLE_WIDTH / 2);
                ball.dx = hitPos * BALL_SPEED * 1.5;
                ball.dy = -Math.abs(ball.dy);
            }

            for (const brick of bricksRef.current) {
                if (!brick.alive) continue;
                const rect = brickRect(brick);
                const closestX = Math.min(Math.max(ball.x, rect.x), rect.x + rect.width);
                const closestY = Math.min(Math.max(ball.y, rect.y), rect.y + rect.height);
                const dx = ball.x - closestX;
                const dy = ball.y - closestY;
                if (dx * dx + dy * dy < BALL_RADIUS * BALL_RADIUS) {
                    brick.alive = false;
                    ball.dy *= -1;
                    scoreRef.current += 1;
                    setScore(scoreRef.current);
                    break;
                }
            }

            if (ball.y - BALL_RADIUS > CANVAS_HEIGHT) {
                livesRef.current -= 1;
                setLives(livesRef.current);
                if (livesRef.current <= 0) {
                    setStatus("over");
                    reportScore(scoreRef.current);
                    draw();
                    return;
                }
                resetRound();
            }

            if (bricksRef.current.every((brick) => !brick.alive)) {
                setStatus("won");
                reportScore(scoreRef.current);
                draw();
                return;
            }

            draw();
            frameRef.current = requestAnimationFrame(tick);
        }

        frameRef.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
            canvas?.removeEventListener("pointermove", handlePointerMove);
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, [status, draw, resetRound, reportScore]);

    function pressStart(key: string) {
        keysRef.current.add(key);
    }
    function pressEnd(key: string) {
        keysRef.current.delete(key);
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative">
                <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} className="touch-none rounded-lg border border-tt-border" />
                {status !== "playing" && (
                    <button
                        type="button"
                        onClick={handleStart}
                        className="tt-magnetic-item absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-lg bg-tt-bg/90 text-sm uppercase tracking-wide"
                    >
                        <span>
                            {status === "over"
                                ? `Game over — score ${score}`
                                : status === "won"
                                  ? `You cleared it! Score ${score}`
                                  : "Click to play"}
                        </span>
                        <span className="rounded-md bg-tt-main px-4 py-2 text-white">{status === "idle" ? "Start" : "Retry"}</span>
                    </button>
                )}
            </div>

            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onMouseDown={() => pressStart("ArrowLeft")}
                    onMouseUp={() => pressEnd("ArrowLeft")}
                    onMouseLeave={() => pressEnd("ArrowLeft")}
                    onTouchStart={() => pressStart("ArrowLeft")}
                    onTouchEnd={() => pressEnd("ArrowLeft")}
                    className="tt-magnetic-item rounded-md border border-tt-border px-4 py-2"
                    aria-label="Move paddle left"
                >
                    ◀
                </button>
                <button
                    type="button"
                    onMouseDown={() => pressStart("ArrowRight")}
                    onMouseUp={() => pressEnd("ArrowRight")}
                    onMouseLeave={() => pressEnd("ArrowRight")}
                    onTouchStart={() => pressStart("ArrowRight")}
                    onTouchEnd={() => pressEnd("ArrowRight")}
                    className="tt-magnetic-item rounded-md border border-tt-border px-4 py-2"
                    aria-label="Move paddle right"
                >
                    ▶
                </button>
            </div>

            <p className="text-xs uppercase tracking-wide text-tt-text-muted">
                Score: {score} · Lives: {lives}
                {best !== null ? ` · Best: ${best}` : ""}
            </p>
        </div>
    );
}
