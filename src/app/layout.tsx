import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Julian Flieller - AppliedAI Research & Insights",
  description:
    "The latest AI research papers, and professional insights by Julian Flieller",
  keywords: [
    "AI",
    "research",
    "machine learning",
    "artificial intelligence",
    "tech insights",
  ],
  authors: [{ name: "Julian Flieller" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-white text-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}
