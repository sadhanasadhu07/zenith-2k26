import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 px-2 sm:px-0">
      {timerItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative min-w-[70px] sm:min-w-[90px] md:min-w-[100px] lg:min-w-[120px] bg-cyan-900 pt-3 sm:pt-4 md:pt-6 pb-2 sm:pb-3 md:pb-4 px-2 sm:px-3 md:px-4 rounded-b-lg sm:rounded-b-xl border-t-2 sm:border-t-4 border-amber-500 shadow-lg sm:shadow-2xl shadow-black/50 border-x border-b border-cyan-800"
        >
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-1 sm:mb-2 font-mono leading-none">
            {String(item.value).padStart(2, '0')}
          </div>
          <div className="text-[8px] sm:text-[9px] md:text-xs uppercase tracking-[0.1em] sm:tracking-[0.2em] font-bold text-slate-500">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
