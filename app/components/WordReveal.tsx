import { Children, CSSProperties, ReactNode, createElement, isValidElement } from "react";

const WRAP_STYLE: CSSProperties = { display: "inline-flex", overflow: "hidden" };
const WORD_STYLE: CSSProperties = { display: "inline-block", willChange: "transform" };

function wrapWords(text: string, keyPrefix: string): ReactNode[] {
    return text.split(/(\s+)/).map((chunk, index) => {
        if (!chunk || /^\s+$/.test(chunk)) return chunk;
        return (
            <span className="tt-cap-word-wrap" style={WRAP_STYLE} key={`${keyPrefix}-${index}`}>
                <span className="tt-cap-word" style={WORD_STYLE}>{chunk}</span>
            </span>
        );
    });
}

interface WordRevealProps {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children: ReactNode;
}

export default function WordReveal({ as = "div", className, children }: WordRevealProps) {
    const content = Children.toArray(children).flatMap((child, index) => {
        if (typeof child === "string") return wrapWords(child, `w${index}`);
        if (isValidElement(child)) return [child];
        return [];
    });

    return createElement(as, { className }, content);
}
