"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Teachers() {
  const t = useTranslations("Teachers");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = t.raw("items") as { name: string; role: string }[];

  return (
    <section id="teachers" className="bg-forest rounded-t-section py-section lg:py-section -mt-10 relative z-10 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: easing }}
          className="mb-16 lg:mb-24"
        >
          <h2 className="font-display text-[12vw] lg:text-[10vw] leading-[0.85] tracking-[-0.01em] uppercase text-lime">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, ease: easing, delay: index * 0.1 }}
              className="flex flex-col gap-4 group cursor-default"
            >
              <div className="w-full aspect-square bg-sage/20 rounded-organic overflow-hidden relative transition-transform duration-500 group-hover:scale-[1.03]">
                <div className="absolute inset-0 flex items-center justify-center text-sage text-4xl font-display uppercase opacity-30">
                  {item.name.charAt(0)}
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl lg:text-3xl uppercase text-white mb-2">{item.name}</h3>
                <p className="text-xs uppercase tracking-[0.25em] text-lime">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
