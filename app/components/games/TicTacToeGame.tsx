"use client";

import { useEffect, useRef, useState } from "react";
import { useHighScore } from "../../hooks/useHighScore";

type Cell = "X" | "O" | null;
type Board = Cell[];
type Result = "X" | "O" | "draw" | null;

const LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkResult(board: Board): Result {
    for (const [a, b, c] of LINES) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
    }
    return board.every((cell) => cell !== null) ? "draw" : null;
}

function minimax(board: Board, player: "X" | "O"): { score: number; move: number | null } {
    const result = checkResult(board);
    if (result === "O") return { score: 1, move: null };
    if (result === "X") return { score: -1, move: null };
    if (result === "draw") return { score: 0, move: null };

    const moves = board.reduce<number[]>((acc, cell, index) => {
        if (cell === null) acc.push(index);
        return acc;
    }, []);

    let best = player === "O" ? { score: -Infinity, move: moves[0] } : { score: Infinity, move: moves[0] };

    for (const move of moves) {
        const next = [...board];
        next[move] = player;
        const { score } = minimax(next, player === "O" ? "X" : "O");
        if (player === "O" ? score > best.score : score < best.score) {
            best = { score, move };
        }
    }

    return best;
}

function emptyBoard(): Board {
    return Array(9).fill(null);
}

export default function TicTacToeGame() {
    const [board, setBoard] = useState<Board>(emptyBoard);
    const [result, setResult] = useState<Result>(null);
    const winsRef = useRef(0);
    const { best, reportScore } = useHighScore("tic-tac-toe");

    useEffect(() => {
        if (result || !board.includes(null)) return;

        const xCount = board.filter((cell) => cell === "X").length;
        const oCount = board.filter((cell) => cell === "O").length;
        if (xCount <= oCount) return;

        const timeout = setTimeout(() => {
            const { move } = minimax(board, "O");
            if (move === null) return;
            const next = [...board];
            next[move] = "O";
            setBoard(next);
            const outcome = checkResult(next);
            if (outcome) {
                setResult(outcome);
                if (outcome === "O") {
                    winsRef.current += 1;
                    reportScore(winsRef.current);
                }
            }
        }, 400);

        return () => clearTimeout(timeout);
    }, [board, result, reportScore]);

    function handleCellClick(index: number) {
        if (result || board[index] !== null) return;
        const xCount = board.filter((cell) => cell === "X").length;
        const oCount = board.filter((cell) => cell === "O").length;
        if (xCount > oCount) return;

        const next = [...board];
        next[index] = "X";
        setBoard(next);
        setResult(checkResult(next));
    }

    function handleRestart() {
        setBoard(emptyBoard());
        setResult(null);
    }

    const statusLabel = result === "X" ? "You win!" : result === "O" ? "CPU wins" : result === "draw" ? "Draw" : "Your turn (X)";

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative grid w-full max-w-[300px] grid-cols-3 gap-2">
                {board.map((cell, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => handleCellClick(index)}
                        disabled={cell !== null || result !== null}
                        className="flex aspect-square items-center justify-center rounded-lg border border-tt-border bg-tt-bg text-3xl font-medium"
                    >
                        {cell === "X" && <span className="text-tt-main">X</span>}
                        {cell === "O" && <span className="text-tt-text">O</span>}
                    </button>
                ))}
            </div>

            <p className="text-xs uppercase tracking-wide text-tt-text-muted">{statusLabel}</p>

            {result && (
                <button type="button" onClick={handleRestart} className="tt-magnetic-item rounded-md bg-tt-main px-5 py-2 text-sm text-white">
                    Play again
                </button>
            )}

            <p className="text-xs uppercase tracking-wide text-tt-text-muted">
                {best !== null ? `Wins: ${best}` : "No wins yet"}
            </p>
        </div>
    );
}
