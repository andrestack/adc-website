"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const workshopKeys = ["djembe", "dance", "balafon"] as const;

function WorkshopCard({ workshopKey, index }: { workshopKey: typeof workshopKeys[number]; index: number }) {
  const t = useTranslations(`Workshops.items.${workshopKey}`);
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: easing, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-[#F5F0E8] rounded-[3rem] p-8 lg:p-10 h-full transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_-12px_rgba(45,59,45,0.15)]">
        <p className="text-xs uppercase tracking-[0.25em] text-charcoal/50 mb-4">
          {t("level")}
        </p>
        <h3 className="font-display text-4xl lg:text-5xl uppercase mb-6 text-charcoal">
          {t("title")}
        </h3>
        <p className="text-base leading-relaxed text-charcoal/70">
          {t("description")}
        </p>
      </div>
    </motion.div>
  );
}

export function Workshops() {
  const t = useTranslations("Workshops");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="workshops" className="bg-white py-section lg:py-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: easing }}
          className="mb-16 lg:mb-24"
        >
          <h2 className="font-display text-[12vw] lg:text-[10vw] leading-[0.85] tracking-[-0.01em] uppercase text-charcoal">
            {t("title")}
          </h2>
        </motion.div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {workshopKeys.map((key, index) => (
            <WorkshopCard key={key} workshopKey={key} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
