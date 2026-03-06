import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code, Gamepad2, Smile } from "lucide-react";

import EventModal, { EventDetails } from "../components/EventModal";
import { technicalEvents, nonTechnicalEvents, funEvents } from "../data/events";

type CategoryKey = "Technical" | "Non-Technical" | "Fun";

const categories = [
    {
        key: "Technical" as CategoryKey,
        label: "Technical Events",
        icon: <Code className="w-5 h-5" />,
        color: "text-amber-500",
        activeBg: "bg-amber-500/10",
        activeBorder: "border-amber-500",
        badge: "bg-amber-500/20 text-amber-300",
        events: technicalEvents,
    },
    {
        key: "Non-Technical" as CategoryKey,
        label: "Non-Technical Events",
        icon: <Gamepad2 className="w-5 h-5" />,
        color: "text-cyan-400",
        activeBg: "bg-cyan-500/10",
        activeBorder: "border-cyan-500",
        badge: "bg-cyan-500/20 text-cyan-300",
        events: nonTechnicalEvents,
    },
    {
        key: "Fun" as CategoryKey,
        label: "Fun Events",
        icon: <Smile className="w-5 h-5" />,
        color: "text-teal-400",
        activeBg: "bg-teal-500/10",
        activeBorder: "border-teal-500",
        badge: "bg-teal-500/20 text-teal-300",
        events: funEvents,
    },
];

const EventRow = ({
    event,
    index,
    onShowMore,
}: {
    event: EventDetails;
    index: number;
    onShowMore: () => void;
    key?: string | number;
}) => {
    const reversed = index % 2 !== 0;
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: Math.min(index * 0.1, 0.3) }}
            className={`flex flex-col items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 py-12 sm:py-16 md:py-20 lg:py-24 border-b border-cyan-800/20 last:border-0 relative ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
        >
            {/* Subtle background grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(0,0,0,0.02),rgba(0,0,0,0.01),rgba(0,0,0,0.02))] z-0" />

            {/* Image */}
            <div className="w-full lg:w-5/12 relative group z-10">
                <div className="relative aspect-[4/3] w-full rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden bg-[#0A0F1C] border-2 sm:border-[3px] border-white/80 shadow-lg sm:shadow-2xl shadow-black/60 group-hover:border-white transition-all duration-300">
                    <img
                        src={event.image}
                        alt={event.altText || event.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-opacity duration-700 mix-blend-lighten"
                        crossOrigin="anonymous"
                    />
                    {/* Bottom gradient fade */}
                    <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                </div>
            </div>

            {/* Text */}
            <div className="w-full lg:w-7/12 space-y-4 sm:space-y-6 md:space-y-8 flex flex-col justify-center z-10 px-2 sm:px-0">
                <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display font-bold text-slate-100 leading-tight tracking-tight">
                        {event.title}
                    </h3>
                    {event.shortName && event.shortName !== event.title && (
                        <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-200 mt-2 font-display">
                            + {event.shortName}.
                        </h4>
                    )}
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 leading-relaxed font-light max-w-2xl">
                    {event.fullDescription || event.description}
                </p>
                <div className="pt-2">
                    <button
                        onClick={onShowMore}
                        className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-2.5 sm:py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded font-medium transition-all overflow-hidden shadow-[0_0_20px_rgba(8,145,178,0.3)] shadow-cyan-500/20 text-xs sm:text-sm"
                    >
                        <span className="relative z-10 tracking-wide">Show More</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default function EventsPage() {
    const [activeCategory, setActiveCategory] = useState<CategoryKey>("Technical");
    const [selectedEvent, setSelectedEvent] = useState<EventDetails | null>(null);

    const currentCat = categories.find((c) => c.key === activeCategory)!;

    return (
        <div className="pt-24 min-h-screen relative overflow-hidden bg-transparent">
            {/* Ambient lights */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/40 via-cyan-950/0 to-transparent rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[1000px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/30 via-cyan-950/0 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />

            <section id="events" className="relative z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1400px] pt-4 sm:pt-6 pb-4 sm:pb-6 md:pb-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-14 sm:mt-16"
                    >

                        <p className="text-amber-500 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">Discover &amp; Compete</p>
                        <div className="w-12 sm:w-16 h-[2px] bg-amber-500/50 mb-6 sm:mb-8" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-slate-100 mb-4 sm:mb-6 tracking-tight">
                            Events <span className="bg-gradient-to-r from-amber-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Lineup.</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl">
                            Select a category to explore all events in that section.
                        </p>
                    </motion.div>
                </div>

                {/* ── Fixed Category Tabs ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="fixed top-16 sm:top-18 md:top-20 left-0 right-0 z-40 backdrop-blur-md bg-[#0A0F1C]/80 border-b border-white/10 py-3 sm:py-4 overflow-x-auto"
                >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1400px] min-w-full">
                        <div className="flex gap-2 sm:gap-3 flex-nowrap">
                            {categories.map((cat) => {
                                const isActive = activeCategory === cat.key;
                                return (
                                    <button
                                        key={cat.key}
                                        onClick={() => setActiveCategory(cat.key)}
                                        className={`flex items-center gap-2.5 px-6 py-2.5 rounded-xl border font-mono text-sm uppercase tracking-widest transition-all duration-300
                                            ${isActive
                                                ? `${cat.activeBg} ${cat.activeBorder} ${cat.color} shadow-lg`
                                                : "bg-white/3 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/6 hover:border-white/20"
                                            }`}
                                    >
                                        {cat.icon}
                                        <span className="hidden sm:inline">{cat.label}</span>
                                        <span className="sm:hidden">{cat.key}</span>
                                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${isActive ? cat.badge : "bg-white/8 text-slate-500"}`}>
                                            {cat.events.length}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Spacer so content clears the fixed tab bar (~64px tall) */}
                <div className="h-16" />

                <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] py-16 lg:py-24">


                    {/* Events List */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Category heading */}
                            <div className={`flex items-center gap-3 mb-4 border-b border-cyan-800/30 pb-4`}>
                                <span className={currentCat.color}>{currentCat.icon}</span>
                                <h2 className={`text-2xl font-mono tracking-widest uppercase ${currentCat.color}`}>
                                    {currentCat.label}
                                </h2>
                            </div>

                            {/* Alternating event rows */}
                            <div className="flex flex-col">
                                {currentCat.events.map((event, idx) => (
                                    <EventRow
                                        key={`${activeCategory}-${event.title}`}
                                        event={event}
                                        index={idx}
                                        onShowMore={() => setSelectedEvent(event)}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        </div>
    );
}
