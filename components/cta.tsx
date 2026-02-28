"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function CTA() {
  const t = useTranslations("CTA");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-sage rounded-t-section py-section lg:py-section relative z-50 text-white -mt-10 overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: easing }}
          className="mb-12"
        >
          <h2 className="font-display text-[15vw] lg:text-[12vw] leading-[0.85] tracking-[-0.01em] uppercase text-forest">
            {t("title")}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: easing, delay: 0.1 }}
          className="text-lg lg:text-xl text-forest/80 mb-12 max-w-2xl mx-auto"
        >
          {t("desc")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: easing, delay: 0.2 }}
        >
          <Link
            href="/inscricoes"
            className="inline-block bg-forest text-lime font-display uppercase tracking-widest px-12 py-6 rounded-full text-xl hover:bg-charcoal hover:text-white transition-colors duration-300"
          >
            {t("button")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
