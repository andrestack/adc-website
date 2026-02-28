"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Location() {
  const t = useTranslations("Location");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="bg-lime rounded-t-section py-section lg:py-section relative z-40 text-charcoal -mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: easing }}
          className="mb-16 lg:mb-24"
        >
          <h2 className="font-display text-[12vw] lg:text-[10vw] leading-[0.85] tracking-[-0.01em] uppercase text-charcoal max-w-4xl">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 text-charcoal/80 text-lg">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easing, delay: 0.1 }}
          >
            <p className="font-display text-4xl mb-4 text-charcoal">{t("park")}</p>
            <p className="uppercase tracking-[0.25em] text-xs font-semibold">{t("city")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easing, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.25em] text-charcoal/50">Car</span>
              <p>{t("car")}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.25em] text-charcoal/50">Bus</span>
              <p>{t("bus")}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.25em] text-charcoal/50">Taxi</span>
              <p>{t("taxi")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
