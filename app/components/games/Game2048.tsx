"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useHighScore } from "../../hooks/useHighScore";

const GRID_SIZE = 4;

type Board = number[][];
type Direction = "up" | "down" | "left" | "right";

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

const TILE_TEXT_LIGHT = new Set([2, 4]);

function createEmptyBoard(): Board {
    return Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0));
}

function emptyCells(board: Board) {
    const cells: { row: number; col: number }[] = [];
    board.forEach((row, r) => row.forEach((value, c) => value === 0 && cells.push({ row: r, col: c })));
    return cells;
}

function addRandomTile(board: Board): Board {
    const cells = emptyCells(board);
    if (cells.length === 0) return board;
    const { row, col } = cells[Math.floor(Math.random() * cells.length)];
    const next = board.map((r) => [...r]);
    next[row][col] = Math.random() < 0.9 ? 2 : 4;
    return next;
}

function slideAndMergeLine(line: number[]): { line: number[]; gained: number } {
    const values = line.filter((value) => value !== 0);
    const result: number[] = [];
    let gained = 0;

    for (let i = 0; i < values.length; i++) {
        if (values[i] === values[i + 1]) {
            const merged = values[i] * 2;
            result.push(merged);
            gained += merged;
            i++;
        } else {
            result.push(values[i]);
        }
    }

    while (result.length < line.length) result.push(0);
    return { line: result, gained };
}

function transpose(board: Board): Board {
    return board[0].map((_, col) => board.map((row) => row[col]));
}

function reverseRows(board: Board): Board {
    return board.map((row) => [...row].reverse());
}

function applyMove(board: Board, direction: Direction): { board: Board; gained: number; moved: boolean } {
    let working = board.map((row) => [...row]);
    if (direction === "up" || direction === "down") working = transpose(working);
    if (direction === "down" || direction === "right") working = reverseRows(working);

    let gained = 0;
    working = working.map((row) => {
        const { line, gained: rowGain } = slideAndMergeLine(row);
        gained += rowGain;
        return line;
    });

    if (direction === "down" || direction === "right") working = reverseRows(working);
    if (direction === "up" || direction === "down") working = transpose(working);

    const moved = working.some((row, r) => row.some((value, c) => value !== board[r][c]));
    return { board: working, gained, moved };
}

function canMove(board: Board) {
    if (emptyCells(board).length > 0) return true;
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            const value = board[r][c];
            if (c < GRID_SIZE - 1 && board[r][c + 1] === value) return true;
            if (r < GRID_SIZE - 1 && board[r + 1][c] === value) return true;
        }
    }
    return false;
}

function startingBoard(): Board {
    return addRandomTile(addRandomTile(createEmptyBoard()));
}

const TILE_COLORS: Record<number, string> = {
    2: "bg-tt-border/40",
    4: "bg-tt-border/60",
    8: "bg-tt-main/40",
    16: "bg-tt-main/55",
    32: "bg-tt-main/70",
    64: "bg-tt-main/85",
    128: "bg-tt-main",
};

export default function Game2048() {
    const [board, setBoard] = useState<Board>(startingBoard);
    const [score, setScore] = useState(0);
    const [status, setStatus] = useState<"playing" | "over">("playing");
    const scoreRef = useRef(0);
    const { best, reportScore } = useHighScore("2048");

    const move = useCallback(
        (direction: Direction) => {
            if (status !== "playing") return;
            const result = applyMove(board, direction);
            if (!result.moved) return;

            const withNewTile = addRandomTile(result.board);
            scoreRef.current += result.gained;
            setScore(scoreRef.current);
            setBoard(withNewTile);

            if (!canMove(withNewTile)) {
                setStatus("over");
                reportScore(scoreRef.current);
            }
        },
        [status, board, reportScore]
    );

    useEffect(() => {
        function handleKey(event: KeyboardEvent) {
            const direction = KEY_MAP[event.key];
            if (!direction) return;
            event.preventDefault();
            move(direction);
        }
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [move]);

    function handleRestart() {
        scoreRef.current = 0;
        setScore(0);
        setStatus("playing");
        setBoard(startingBoard());
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative grid w-full max-w-[360px] grid-cols-4 gap-2 rounded-lg border border-tt-border bg-tt-bg p-2">
                {board.map((row, r) =>
                    row.map((value, c) => (
                        <div
                            key={`${r}-${c}`}
                            className={`flex aspect-square items-center justify-center rounded-md text-lg font-medium ${
                                value ? (TILE_COLORS[value] ?? "bg-tt-main") : "bg-tt-border/15"
                            } ${value && !TILE_TEXT_LIGHT.has(value) ? "text-white" : "text-tt-text"}`}
                        >
                            {value !== 0 && value}
                        </div>
                    ))
                )}

                {status === "over" && (
                    <button
                        type="button"
                        onClick={handleRestart}
                        className="tt-magnetic-item absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-lg bg-tt-bg/90 text-sm uppercase tracking-wide"
                    >
                        <span>Game over — score {score}</span>
                        <span className="rounded-md bg-tt-main px-4 py-2 text-white">Retry</span>
                    </button>
                )}
            </div>

            <div className="grid grid-cols-3 gap-2">
                <span />
                <button type="button" onClick={() => move("up")} className="tt-magnetic-item rounded-md border border-tt-border px-4 py-2" aria-label="Slide up">
                    ▲
                </button>
                <span />
                <button type="button" onClick={() => move("left")} className="tt-magnetic-item rounded-md border border-tt-border px-4 py-2" aria-label="Slide left">
                    ◀
                </button>
                <button type="button" onClick={() => move("down")} className="tt-magnetic-item rounded-md border border-tt-border px-4 py-2" aria-label="Slide down">
                    ▼
                </button>
                <button type="button" onClick={() => move("right")} className="tt-magnetic-item rounded-md border border-tt-border px-4 py-2" aria-label="Slide right">
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
