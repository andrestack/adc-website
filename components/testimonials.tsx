"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Testimonials() {
  const t = useTranslations("Testimonials");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = t.raw("items") as { text: string; author: string }[];

  return (
    <section id="testimonials" className="bg-charcoal rounded-t-section py-section lg:py-section relative z-30 text-lime -mt-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: easing }}
          className="mb-20 lg:mb-32"
        >
          <h2 className="font-display text-[12vw] lg:text-[10vw] leading-[0.85] tracking-[-0.01em] uppercase text-white">
            {t("title")}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: easing, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <p className="font-display text-4xl lg:text-5xl italic leading-tight mb-8 text-lime max-w-3xl">
                "{item.text}"
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                — {item.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
