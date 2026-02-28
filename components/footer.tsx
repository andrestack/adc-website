"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-charcoal text-white/70 py-12 relative z-[60] -mt-10 rounded-t-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center text-xs uppercase tracking-[0.2em]">
          <p>{t("copy")}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-lime transition-colors">Instagram</a>
            <a href="#" className="hover:text-lime transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
