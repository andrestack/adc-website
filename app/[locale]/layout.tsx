import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const gardaempty = localFont({
  src: "../../public/fonts/Gardaempty.ttf",
  variable: "--font-gardaempty",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aldeia Djembe Camp | West African Drumming & Dance Retreat",
  description: "Join us for an immersive West African drumming and dance experience. Connect with rhythm, nature, and community at Aldeia Djembe Camp.",
};

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!['en', 'pt'].includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${inter.variable} ${gardaempty.variable} font-sans antialiased bg-white text-charcoal`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
