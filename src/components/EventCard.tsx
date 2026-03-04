import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "motion/react";

interface EventCardProps {
  title: string;
  description: string;
  category: string;
  delay?: number;
  participants?: string | number;
  shortName?: string;
  image?: string;
  altText?: string;
  onClick?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  category,
  delay = 0,
  participants = "4",
  shortName,
  image = "https://picsum.photos/seed/tech/400/400",
  altText,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Parallax for image
  const imgX = useTransform(mouseXSpring, [-0.5, 0.5], ["-15px", "15px"]);
  const imgY = useTransform(mouseYSpring, [-0.5, 0.5], ["-15px", "15px"]);

  // Category-specific styles
  const categoryStyles = {
    Technical: {
      border: "border-amber-400/20",
      accent: "bg-amber-500",
      glow: "shadow-lg shadow-amber-500/10",
      radar: "border-amber-200",
      dot: "bg-amber-500",
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }
    },
    "Non-Technical": {
      border: "border-cyan-800",
      accent: "bg-cyan-800",
      glow: "shadow-lg shadow-slate-100/50",
      radar: "border-slate-300",
      dot: "bg-cyan-800",
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.6, delay, ease: "backOut" }
    },
    Fun: {
      border: "border-amber-500/20",
      accent: "bg-amber-500",
      glow: "shadow-lg shadow-amber-500/20",
      radar: "border-amber-200",
      dot: "bg-amber-500",
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay
      }
    }
  }[category as "Technical" | "Non-Technical" | "Fun"] || {
    border: "border-cyan-800",
    accent: "bg-cyan-800",
    glow: "",
    radar: "border-slate-300",
    dot: "bg-cyan-800",
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={categoryStyles.initial}
      whileInView={categoryStyles.whileInView}
      whileHover={{ y: -15, scale: 1.05 }}
      viewport={{ once: true }}
      transition={categoryStyles.transition}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative aspect-square w-full max-w-[300px] mx-auto cursor-pointer group border ${categoryStyles.border} bg-cyan-950/30 backdrop-blur-2xl perspective-1000 ${categoryStyles.glow} overflow-hidden rounded-2xl shadow-xl transition-shadow duration-500 hover:shadow-cyan-500/20`}
    >
      {/* Animated Light Beam Border (Hover) */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute -inset-[150%] animate-[spin_4s_linear_infinite] opacity-50" style={{ background: 'conic-gradient(from 0deg, transparent 0 280deg, #06b6d4 320deg, #f59e0b 360deg)' }} />
        <div className="absolute inset-[2px] bg-cyan-950/80 backdrop-blur-xl rounded-[14px]" />
      </div>
      {/* Sunburst Background Effect (Front Only) */}
      {!isHovered && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          {/* Rotating Rays */}
          <div className="absolute w-[180%] h-[180%] animate-[spin_120s_linear_infinite] opacity-10">
            {[...Array(36)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
                style={{ transform: `translate(-50%, -50%) rotate(${i * 5}deg)` }}
              />
            ))}
          </div>

          {/* Static Sun Glow */}
          <div className="absolute w-48 h-48 bg-amber-500/5 rounded-full blur-3xl" />
        </div>
      )}

      {/* Glitch Overlay (on hover) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.05, 0.02, 0.08, 0] }}
            transition={{ duration: 0.2, repeat: Infinity }}
            className={`absolute inset-0 z-30 ${categoryStyles.accent}/5 pointer-events-none mix-blend-overlay`}
          />
        )}
      </AnimatePresence>

      {/* Corner Brackets */}
      <div className={`absolute top-4 left-4 w-3 h-3 border-t border-l ${categoryStyles.radar} z-10 opacity-60`} />
      <div className={`absolute top-4 right-4 w-3 h-3 border-t border-r ${categoryStyles.radar} z-10 opacity-60`} />
      <div className={`absolute bottom-4 left-4 w-3 h-3 border-b border-l ${categoryStyles.radar} z-10 opacity-60`} />
      <div className={`absolute bottom-4 right-4 w-3 h-3 border-b border-r ${categoryStyles.radar} z-10 opacity-60`} />

      {/* Top Right Number */}
      <div className="absolute top-4 right-6 text-[10px] font-bold text-slate-500 z-10" style={{ transform: "translateZ(20px)" }}>
        {participants}
      </div>

      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div
              key="front"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6"
              style={{ transform: "translateZ(0px)" }}
            >
              {/* Celestial Elements (Logo Style) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Outer Rings */}
                <div className="absolute w-[75%] h-[75%] border border-cyan-800 rounded-full" />
                <div className="absolute w-[60%] h-[60%] border border-cyan-800 rounded-full" />

                {/* Crescent Moon Silhouette */}
                <div className="absolute w-32 h-32 rounded-full border-r-[6px] border-amber-100 -rotate-12 translate-x-2 blur-[1px]" />

                {/* Top Star */}
                <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-500 rotate-45 shadow-[0_0_12px_rgba(245,158,11,0.4)] z-20" />
              </div>

              <h3
                className="relative z-10 text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-amber-800 tracking-[0.25em] uppercase text-center drop-shadow-md shadow-black/40"
                style={{ transform: "translateZ(40px)" }}
              >
                {shortName || title}
              </h3>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="absolute inset-0 z-20 overflow-hidden"
              style={{ transform: "translateZ(0px)" }}
            >
              <motion.img
                src={image}
                alt={altText || `Illustration representing ${title}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ x: imgX, y: imgY, scale: 1.1 }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-cyan-950/80 flex flex-col justify-between p-4 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className={`bg-cyan-950 p-2 rounded border-l-4 ${categoryStyles.accent.replace('bg-', 'border-')} shadow-md shadow-black/40`}
                  style={{ transform: "translateZ(30px)" }}
                >
                  <h3 className="text-sm font-black text-slate-100 uppercase leading-tight">
                    {title}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="space-y-2"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <p className="text-[10px] text-slate-300 font-medium leading-tight line-clamp-3">
                    {description}
                  </p>
                  <div className={`inline-block ${categoryStyles.accent} px-3 py-1 rounded-sm shadow-md`}>
                    <span className="text-[10px] font-black text-slate-100 uppercase">
                      {participants} Participants
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-40 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(0,0,0,0.02),rgba(0,0,0,0.01),rgba(0,0,0,0.02))] bg-[length:100%_2px,3px_100%]" />
    </motion.div>
  );
};


export default EventCard;
