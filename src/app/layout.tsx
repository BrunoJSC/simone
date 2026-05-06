import type { Metadata } from "next";
import { Forum } from "next/font/google";
import { Header } from "@/components/layout/header";
import "./globals.css";

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Mercado Babilônia — Joias Autorais desde 1993",
  description:
    "Ateliê de joias autorais fundado por Simone Levy na Vila Madalena, São Paulo. Peças únicas esculpidas à mão com influências étnicas e pedras de poder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${forum.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-forum" suppressHydrationWarning>
        <Header />
        <main className="flex-1 pt-20">{children}</main>
      </body>
    </html>
  );
}
