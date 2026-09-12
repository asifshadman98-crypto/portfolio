import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Set to the production URL when building for GitHub Pages (see next.config.mjs)
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";
const siteUrl = isGithubPages
  ? "https://asifshadman98-crypto.github.io/portfolio/"
  : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Asif Shadman Khan | Software Engineering Student",
  description:
    "Portfolio of Asif Shadman Khan, a third-year Software Engineering student at Metropolitan University, learning and building projects with Python, Java, React, and Next.js.",
  keywords: [
    "Asif Shadman Khan",
    "Software Engineering Student",
    "Metropolitan University",
    "Portfolio",
  ],
  authors: [{ name: "Asif Shadman Khan" }],
  openGraph: {
    title: "Asif Shadman Khan | Software Engineering Student",
    description:
      "Third-year Software Engineering student at Metropolitan University. Learning, building projects, and developing technical skills.",
    type: "website",
    url: siteUrl ?? "/",
    siteName: "Asif Shadman Khan — Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
