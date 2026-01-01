import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DORKSENSE | Bold Wellness Revolution",
  description:
    "Where Human Transformation Meets Intelligent Frequency Wellness. Break the mold. Find your clarity. Join the wellness revolution.",
  keywords: [
    "wellness",
    "frequency wellness",
    "neobrutalist",
    "transformation",
    "coaching",
    "emotional clarity",
    "holistic wellness",
    "dorksense",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-neo-white text-neo-black`}
        style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
