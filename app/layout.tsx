import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aldeia Djembe Camp | West African Drumming & Dance Retreat",
  description: "Join us for an immersive West African drumming and dance experience. Connect with rhythm, nature, and community at Aldeia Djembe Camp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
