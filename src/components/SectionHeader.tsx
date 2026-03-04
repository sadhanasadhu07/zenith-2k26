import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-100 mb-4 tracking-tight">
          {title}
        </h2>
        <div className={`h-1.5 w-20 bg-amber-500 rounded-full mb-6 ${centered ? "mx-auto" : ""}`} />
        <p className={`max-w-2xl text-lg text-slate-300 ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
}
