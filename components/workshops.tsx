"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const workshops = [
  {
    title: "Djembe",
    description: "Aprende os ritmos tradicionais da África Ocidental. Desde os padrões básicos até às técnicas avançadas de solo.",
    level: "Todos os níveis",
  },
  {
    title: "Dança",
    description: "Movimento que conta histórias. Dança tradicional guineense para todos os corpos e ritmos.",
    level: "Todos os níveis",
  },
  {
    title: "Balafon",
    description: "O piano de madeira da África. Uma introdução ao instrumento ancestral com o mestre Famoudou.",
    level: "Iniciante / Intermédio",
  },
];

function WorkshopCard({ workshop, index }: { workshop: typeof workshops[0]; index: number }) {
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
          {workshop.level}
        </p>
        <h3 className="font-display text-4xl lg:text-5xl uppercase mb-6 text-charcoal">
          {workshop.title}
        </h3>
        <p className="text-base leading-relaxed text-charcoal/70">
          {workshop.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Workshops() {
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
            WORKSHOPS
          </h2>
        </motion.div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {workshops.map((workshop, index) => (
            <WorkshopCard key={workshop.title} workshop={workshop} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
