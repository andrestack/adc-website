"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Accommodation() {
  const t = useTranslations("Accommodation");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = t.raw("items") as { title: string; description: string; subtitle: string }[];

  return (
    <section id="accommodation" className="bg-cream rounded-t-section py-section lg:py-section -mt-10 relative z-20 text-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 lg:mb-32">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, ease: easing, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="font-display text-4xl lg:text-5xl uppercase">{item.title}</h3>
                <span className="text-xs uppercase tracking-[0.25em] px-3 py-1 rounded-full bg-forest text-lime">
                  {item.subtitle}
                </span>
              </div>
              <p className="text-lg leading-relaxed text-charcoal/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 60 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.9, ease: easing }}
           className="bg-sage/20 rounded-organic p-10 lg:p-16"
        >
          <h3 className="font-display text-4xl lg:text-5xl uppercase mb-6">{t("foodTitle")}</h3>
          <p className="text-lg leading-relaxed text-charcoal/80 max-w-2xl">{t("foodDesc")}</p>
        </motion.div>
      </div>
    </section>
  );
}
