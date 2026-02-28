"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const letterVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easing,
      delay: i * 0.04,
    },
  }),
};

function AnimatedText({ text, className }: { text: string; className?: string }) {
  const letters = text.split("");

  return (
    <span className={`inline-flex ${className}`}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        {/* Main Hero Text */}
        <div className="flex flex-col items-center justify-center text-center mb-20 lg:mb-32">
          <h1 className="font-display text-[15vw] lg:text-[18vw] leading-[0.85] tracking-[-0.01em] uppercase text-charcoal">
            <AnimatedText text={t("title1")} />
            <br />
            <AnimatedText text={t("title2")} />
          </h1>
        </div>

        {/* Two Column Info Block */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easing, delay: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left: Poetic Intro */}
          <div>
            <p className="text-lg lg:text-xl leading-relaxed text-charcoal/80 max-w-md">
              {t("subtitle")}
              <br />
              <br />
              {t("subtitle2")}
            </p>
          </div>

          {/* Right: Date & Location */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-charcoal/60 mb-2">
                {t("dateLabel")}
              </p>
              <p className="text-2xl lg:text-3xl font-display uppercase text-charcoal">
                {t("dates")}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-charcoal/60 mb-2">
                {t("locationLabel")}
              </p>
              <p className="text-2xl lg:text-3xl font-display uppercase text-charcoal">
                {t("locationValue")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
