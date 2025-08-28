import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from '@/components/toaster/toaster'

const bungeeTint = Outfit({
  variable: "--font-aleatoria-tint",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Gerando um portfolio com Next.js e tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="overflow-y-auto 
      [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:bg-zinc-800
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-orange-600
      dark:[&::-webkit-scrollbar-track]:bg-zinc-800
      dark:[&::-webkit-scrollbar-thumb]:bg-orange-600">
      <body
        className={`${bungeeTint.variable}antialiased ` } suppressHydrationWarning
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
