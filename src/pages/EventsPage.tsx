import { useState } from "react";
import { motion } from "motion/react";
import { Code, Gamepad2, Smile, ChevronRight } from "lucide-react";

import EventModal, { EventDetails } from "../components/EventModal";
import { technicalEvents, nonTechnicalEvents, funEvents } from "../data/events";

export default function EventsPage() {
    const [selectedEvent, setSelectedEvent] = useState<EventDetails | null>(null);

    const EventRow = ({ event, index }: { key?: string; event: EventDetails, index: number }) => (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: Math.min(index * 0.1, 0.3) }}
            className={`flex flex-col items-center gap-12 lg:gap-20 py-24 border-b border-cyan-800/20 last:border-0 relative ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
        >
            {/* Decorative background grid/lines subtle */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(0,0,0,0.02),rgba(0,0,0,0.01),rgba(0,0,0,0.02))] z-0" />

            {/* Left side: Event Poster */}
            <div className="w-full lg:w-5/12 relative group z-10">
                {/* Glowing effect behind image */}
                <div className="absolute inset-0 bg-cyan-600/20 rounded-2xl blur-[60px] group-hover:bg-cyan-500/30 transition-all duration-700"></div>

                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#0A0F1C] border border-cyan-800/40 shadow-2xl">
                    <img
                        src={event.image}
                        alt={event.altText || event.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 mix-blend-lighten"
                        crossOrigin="anonymous"
                    />

                    {/* Tech overlays like in reference image */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
                    <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50"></div>
                    <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-70"></div>
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400 opacity-70"></div>

                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none flex gap-2">
                        <div className="w-6 h-1 bg-white/40 rounded-full"></div>
                        <div className="w-2 h-1 bg-white/20 rounded-full"></div>
                        <div className="w-2 h-1 bg-white/20 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Right side: Description */}
            <div className="w-full lg:w-7/12 space-y-8 flex flex-col justify-center z-10">
                <div>
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-100 leading-tight tracking-tight">
                        {event.title}
                    </h3>
                    {event.shortName && event.shortName !== event.title && (
                        <h4 className="text-2xl sm:text-3xl text-slate-200 mt-2 font-display">
                            + {event.shortName}.
                        </h4>
                    )}
                </div>

                <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-light max-w-2xl">
                    {event.fullDescription || event.description}
                </p>

                <div className="pt-2">
                    <button
                        onClick={() => setSelectedEvent(event)}
                        className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded font-medium transition-all overflow-hidden shadow-[0_0_20px_rgba(8,145,178,0.3)] shadow-cyan-500/20"
                    >
                        <span className="relative z-10 text-sm tracking-wide">Show More</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="pt-24 min-h-screen relative overflow-hidden bg-transparent">

            {/* Ambient Background Lights imitating standard deep purple tech gradients */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/40 via-cyan-950/0 to-transparent rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[1000px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/30 via-cyan-950/0 to-transparent rounded-full blur-[120px] pointer-events-none z-0"></div>

            <section id="events" className="relative z-10 py-16 lg:py-24">
                <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-24"
                    >
                        <p className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">Discover & Compete</p>
                        <div className="w-16 h-[2px] bg-amber-500/50 mb-8"></div>

                        <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-100 mb-6 tracking-tight">
                            Events <span className="text-slate-100">Lineup.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl">
                            Discover our top technical and non-technical challenges designed to push your skills to the limit.
                        </p>
                    </motion.div>

                    <div className="space-y-24">
                        {/* Technical */}
                        <div>
                            <div className="flex items-center gap-4 mb-4 border-b border-cyan-800/30 pb-4">
                                <Code className="w-6 h-6 text-amber-500" />
                                <h2 className="text-2xl font-mono text-slate-300 tracking-widest uppercase">Technical Events</h2>
                            </div>
                            <div className="flex flex-col">
                                {technicalEvents.map((event, idx) => (
                                    <EventRow key={event.title} event={event} index={idx} />
                                ))}
                            </div>
                        </div>

                        {/* Non-Technical */}
                        <div>
                            <div className="flex items-center gap-4 mb-4 border-b border-cyan-800/30 pb-4 mt-16">
                                <Gamepad2 className="w-6 h-6 text-cyan-400" />
                                <h2 className="text-2xl font-mono text-slate-300 tracking-widest uppercase">Non-Technical Events</h2>
                            </div>
                            <div className="flex flex-col">
                                {nonTechnicalEvents.map((event, idx) => (
                                    <EventRow key={event.title} event={event} index={idx} />
                                ))}
                            </div>
                        </div>

                        {/* Fun */}
                        <div>
                            <div className="flex items-center gap-4 mb-4 border-b border-cyan-800/30 pb-4 mt-16">
                                <Smile className="w-6 h-6 text-teal-400" />
                                <h2 className="text-2xl font-mono text-slate-300 tracking-widest uppercase">Fun Events</h2>
                            </div>
                            <div className="flex flex-col">
                                {funEvents.map((event, idx) => (
                                    <EventRow key={event.title} event={event} index={idx} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Event Modal Overlay */}
            <EventModal
                event={selectedEvent}
                onClose={() => setSelectedEvent(null)}
            />
        </div>
    );
}
