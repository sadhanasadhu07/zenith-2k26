import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-cyan-950 flex flex-col items-center justify-center text-slate-100"
    >
      {/* Thumping Zenith Logo */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="mb-12"
      >
        <img src="/logo.png" alt="Zenith 2k26 Logo" className="h-32 w-auto object-contain drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]" />
      </motion.div>

      <div className="w-72 h-1.5 bg-cyan-800 rounded-full overflow-hidden relative border border-cyan-800">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-500 to-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
        {/* Glow effect on the progress bar */}
        <motion.div
          className="absolute inset-y-0 bg-cyan-950/40 w-8 blur-sm"
          animate={{ left: ["-20%", "120%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Initialising Systems</div>
        <motion.div
          className="text-lg font-mono text-amber-500 min-w-[3rem] text-right"
          key={progress}
        >
          {progress}%
        </motion.div>
      </div>

      {/* Technical scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.02)_50%),linear-gradient(90deg,rgba(0,0,0,0.01),rgba(0,0,0,0.005),rgba(0,0,0,0.01))] bg-[length:100%_4px,3px_100%]" />
    </motion.div>
  );
}
