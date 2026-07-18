import { ImageResponse } from "next/og";

export const alt = "Arun Lal — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    backgroundColor: "#0a0a0a",
                    backgroundImage: "radial-gradient(circle at 85% 20%, rgba(191,74,26,0.35), transparent 60%)",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
                    <div style={{ display: "flex", width: 14, height: 14, borderRadius: 7, backgroundColor: "#bf4a1a", marginRight: 16 }} />
                    <div style={{ display: "flex", fontSize: 28, color: "#8f8f8f", letterSpacing: 4, textTransform: "uppercase" }}>
                        Portfolio
                    </div>
                </div>
                <div style={{ display: "flex", fontSize: 120, fontWeight: 700, color: "#efedea", lineHeight: 1.05 }}>
                    Arun Lal
                </div>
                <div style={{ display: "flex", fontSize: 40, color: "#efedea", marginTop: 24 }}>
                    Software Engineer
                </div>
                <div style={{ display: "flex", fontSize: 28, color: "#8f8f8f", marginTop: 16, maxWidth: 900 }}>
                    Building thoughtful, reliable digital products
                </div>
            </div>
        ),
        { ...size }
    );
}
