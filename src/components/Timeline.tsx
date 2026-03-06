import { motion, useScroll, useTransform } from "motion/react";
import { Clock, CheckCircle2, Circle } from "lucide-react";
import { useRef } from "react";

interface TimelineItem {
  time: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

const schedule: TimelineItem[] = [
    {
    time: "09:00 AM",
    title: "Inauguration Ceremony",
    description: "Official commencement of Zenith 2k26 with our chief guests.",
    status: "upcoming",
  },
  {
    time: "10.00 AM",
    title: "Technical Events",
    description: "Indrudex45, UI Matrix, Prompt to Pick and Rev Arena.",
    status: "upcoming",
  },
  {
    time: "12:30 PM",
    title: "Lunch",
    description: "Enjoy a delicious lunch and connect with fellow participants.",
    status: "upcoming",
  },
  {
    time: "01:30 PM",
    title: "Non-Technical",
    description: "E-Sports, IPL Auction, Chess and Spot and Solve.",
    status: "upcoming",
  },
  {
    time: "03.15 PM",
    title: "Fun Events",
    description: "Find the Song.",
    status: "upcoming",
  },
  {
    time: "03:45 PM",
    title: "Prize Distribution",
    description: "Prize distribution and closing remarks.",
    status: "upcoming",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the entire timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Calculate the height of the active/glowing line based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto px-2 sm:px-4 py-6 sm:py-10">
      {/* Background Dim Vertical Line */}
      <div className="absolute left-3 sm:left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyan-900 -translate-x-1/2 hidden md:block" />

      {/* Active Glowing Vertical Line */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-3 sm:left-4 md:left-1/2 top-0 w-1 bg-gradient-to-b from-amber-500 via-cyan-400 to-amber-500 -translate-x-1/2 hidden md:block rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)] z-0 origin-top"
      />

      <div className="space-y-8 sm:space-y-10 md:space-y-12">
        {schedule.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
            className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Desktop Center Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: [0, 1.5, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="absolute left-3 sm:left-4 md:left-1/2 w-4 sm:w-5 h-4 sm:h-5 bg-cyan-950 border-3 sm:border-4 border-amber-500 rounded-full -translate-x-1/2 z-10 hidden md:flex items-center justify-center shadow-[0_0_10px_rgba(245,158,11,0.4)]"
            >
              {/* Inner pulse */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="w-full h-full bg-amber-500 rounded-full"
              />
            </motion.div>

            {/* Mobile Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
              className="absolute left-3 sm:left-4 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-amber-500 rounded-full -translate-x-1/2 z-10 md:hidden mt-1.5"
            />

            {/* Content Card */}
            <div className={`w-full md:w-[45%] pl-8 sm:pl-10 md:pl-0 ${index % 2 === 0 ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"
              }`}>
              <motion.div
                whileHover={{ scale: 1.05, rotateX: index % 2 === 0 ? 2 : -2, rotateY: index % 2 === 0 ? -2 : 2 }}
                className="bg-cyan-950/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-2xl border border-cyan-800 shadow-md shadow-black/40 hover:shadow-[0_0_30px_rgba(8,51,68,0.8)] hover:border-cyan-500/50 transition-all cursor-pointer relative overflow-hidden group style-[transform-style:preserve-3d]"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-amber-500/0 group-hover:from-cyan-500/10 group-hover:via-transparent group-hover:to-amber-500/10 transition-all duration-500" />

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}
                >
                  <Clock className="w-3 sm:w-4 h-3 sm:h-4 text-amber-500 group-hover:animate-pulse flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-amber-500 uppercase tracking-wider">
                    {item.time}
                  </span>
                </motion.div>

                <motion.h4
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                  className="text-base sm:text-lg md:text-xl font-bold text-slate-100 mb-2 group-hover:text-amber-400 transition-colors"
                >
                  {item.title}
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                  className="text-slate-300 text-xs sm:text-sm leading-relaxed"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </div>

            {/* Spacer for desktop */}
            <div className="hidden md:block w-[10%]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
