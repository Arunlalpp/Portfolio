"use client";
import "./globals.css";
import { ReactNode } from "react";
import Cursor from "@/components/Cursor";
import SmoothProvider from "@/components/SmoothProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <SmoothProvider>
          <Cursor />
          {children}
        </SmoothProvider>
      </body>
    </html>
  );
}
