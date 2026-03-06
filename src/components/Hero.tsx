import { motion, useScroll, useTransform } from "motion/react";
import { Calendar, MapPin, ChevronRight, Smile } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";

const MotionLink = motion.create(Link);

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-amber-500 uppercase bg-amber-500/10 rounded-full border border-amber-400/20 backdrop-blur-sm">
            National Level Technical Symposium
          </span>

          <div className="flex justify-center mb-6 w-full">
            <img src="/logo.png" alt="Zenith 2k26 Logo" className="h-64 md:h-80 w-auto object-contain drop-shadow-[0_0_40px_rgba(245,158,11,0.6)] animate-pulse-slow" />
          </div>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            Unleash your potential at the most awaited technical fest of the year.
            Join us for a day of innovation, competition, and excellence.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <Calendar className="w-5 h-5 text-amber-500" />
              <span>24th March 2026</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-cyan-800" />
            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <Smile className="w-5 h-5 text-amber-500" />
              <span>8:30 AM onwards</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-cyan-800" />
            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <MapPin className="w-5 h-5 text-amber-500" />
              <span>KGiSL Institute of Technology</span>
            </div>
          </div>

          <div className="mb-12">
            <CountdownTimer targetDate="2026-03-24T08:30:00" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#registration"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-amber-500 text-slate-100 rounded-2xl font-bold shadow-lg shadow-cyan-500/20 flex items-center gap-2 hover:bg-amber-600 transition-all"
            >
              Register Now
              <ChevronRight className="w-5 h-5" />
            </motion.a>
            <MotionLink
              to="/events"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-cyan-950 text-slate-100 border border-cyan-800 shadow-md shadow-black/40 rounded-2xl font-bold hover:bg-cyan-900 transition-all"
            >
              Explore Events
            </MotionLink>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-700 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-amber-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
