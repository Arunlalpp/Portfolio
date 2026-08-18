"use client";

import { useState } from "react";
import TextReveal from "./TextReveal";
import SnakeGame from "./games/SnakeGame";
import Game2048 from "./games/Game2048";
import TicTacToeGame from "./games/TicTacToeGame";
import BreakoutGame from "./games/BreakoutGame";

const GAMES = [
    { id: "snake", label: "Snake", Component: SnakeGame },
    { id: "2048", label: "2048", Component: Game2048 },
    { id: "tic-tac-toe", label: "Tic-Tac-Toe", Component: TicTacToeGame },
    { id: "breakout", label: "Breakout", Component: BreakoutGame },
] as const;

export default function PlaygroundGames() {
    const [activeId, setActiveId] = useState<(typeof GAMES)[number]["id"]>("snake");
    const ActiveGame = GAMES.find((game) => game.id === activeId)!.Component;

    return (
        <div id="playground-games" className="tt-section xl:pt-[60px]">
            <div className="tt-section-inner tt-wrap">
                <div className="tt-heading tt-heading-xxxlg tt-heading-center">
                    <TextReveal as="h3" className="tt-heading-subtitle">Take a Break</TextReveal>
                    <TextReveal as="h2" className="tt-heading-title">Mini Games</TextReveal>
                </div>

                <div className="mt-10 flex flex-col items-center gap-8">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {GAMES.map((game) => (
                            <button
                                key={game.id}
                                type="button"
                                onClick={() => setActiveId(game.id)}
                                className={`tt-magnetic-item rounded-md border px-4 py-2 text-sm transition-colors ${
                                    activeId === game.id ? "border-tt-main bg-tt-main text-white" : "border-tt-border"
                                }`}
                            >
                                {game.label}
                            </button>
                        ))}
                    </div>

                    <ActiveGame key={activeId} />
                </div>
            </div>
        </div>
    );
}
