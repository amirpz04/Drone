import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/app/providers/LanguageProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drone Perspectives | Exterior Real Estate Photography",
  description: "Calm, confident, and real drone photography for real estate. Exterior visuals that build trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" dir="ltr">
      <body className={`${outfit.variable} font-[family-name:var(--font-outfit)] antialiased bg-[#0a0a0a] text-[#ededed] transition-colors duration-300`}>
        <LanguageProvider>
          <Navigation />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
