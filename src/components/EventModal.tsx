import { motion, AnimatePresence } from "motion/react";
import { X, Users, Phone, FileText, Download, ScrollText } from "lucide-react";



export interface EventRound {
    name: string;
    description: string;
}

export interface EventCoordinator {
    name: string;
    role: string;
    phone: string;
}

export interface EventDetails {
    title: string;
    shortName?: string;
    category: string;
    participants: number | string;
    description: string;
    image?: string;
    altText?: string;
    format: string;
    fullDescription?: string;
    rounds: EventRound[];
    rules: string[];
    coordinators: EventCoordinator[];
    documentUrl?: string;
}

interface EventModalProps {
    event: EventDetails | null;
    onClose: () => void;
}

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function EventModal({ event, onClose }: EventModalProps) {
    if (!event) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6"
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-cyan-950/80 backdrop-blur-md"
                    onClick={onClose}
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-6xl bg-cyan-950 border border-cyan-800 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/60 flex flex-col overflow-hidden max-h-[92vh]"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 sm:px-8 py-3 sm:py-4 bg-cyan-950/90 backdrop-blur-xl border-b border-cyan-800 shrink-0">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-lg sm:text-2xl md:text-3xl font-display font-black text-slate-100 tracking-tight uppercase"
                        >
                            {event.title}
                        </motion.h2>
                        <motion.button
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            onClick={onClose}
                            className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center rounded-full bg-cyan-900 text-slate-300 hover:bg-cyan-800 hover:text-white transition-colors border border-cyan-800 shrink-0 ml-4"
                        >
                            <X className="w-4 sm:w-5 h-4 sm:h-5" />
                        </motion.button>
                    </div>

                    {/* Body — two‑column layout */}
                    <div className="flex flex-col lg:flex-row gap-0 overflow-y-auto custom-scrollbar flex-1">

                        {/* ── Left Column: Poster ── */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.45, delay: 0.15 }}
                            className="lg:w-[40%] shrink-0 flex flex-col gap-4 p-5 sm:p-8 lg:border-r border-cyan-800"
                        >
                            {/* Poster image */}
                            <div className="overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-black/40 group">
                                {event.image ? (
                                    <img
                                        src={event.image}
                                        alt={event.altText || event.title}
                                        className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    /* Placeholder when no image is provided */
                                    <div className="w-full aspect-[3/4] flex flex-col items-center justify-center bg-cyan-900/40 rounded-xl text-slate-500 gap-3">
                                        <FileText className="w-12 h-12 opacity-30" />
                                        <span className="text-xs uppercase tracking-widest opacity-40">No Poster</span>
                                    </div>
                                )}
                            </div>

                            {/* Download Poster button */}
                            {event.image && (
                                <a
                                    href={event.image}
                                    download
                                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-black font-semibold rounded-xl transition-all duration-200 shadow-[0_0_18px_rgba(245,158,11,0.25)] hover:shadow-[0_0_28px_rgba(245,158,11,0.45)] text-sm"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Poster
                                </a>
                            )}
                        </motion.div>

                        {/* ── Right Column: Event Details ── */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="show"
                            className="flex-1 flex flex-col p-5 sm:p-8 space-y-6 overflow-y-auto"
                        >
                            {/* Description */}
                            <motion.div variants={fadeUp} className="space-y-2">
                                <h3 className="text-[10px] sm:text-xs font-bold text-amber-500 uppercase tracking-widest">About</h3>
                                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                                    {event.fullDescription || event.description}
                                </p>
                            </motion.div>

                            {/* Format */}
                            <motion.div variants={fadeUp} className="space-y-2">
                                <h3 className="text-[10px] sm:text-xs font-bold text-amber-500 uppercase tracking-widest">Format</h3>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-900 border border-cyan-800 rounded-lg text-slate-200 font-semibold shadow-inner shadow-black/20 text-xs sm:text-sm">
                                    <Users className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                    {event.format}
                                </div>
                            </motion.div>

                            {/* Rounds */}
                            {event.rounds.length > 0 && (
                                <motion.div variants={fadeUp} className="space-y-3">
                                    <h3 className="text-[10px] sm:text-xs font-bold text-amber-500 uppercase tracking-widest">Rounds</h3>
                                    <div className="space-y-3">
                                        {event.rounds.map((round, idx) => (
                                            <div key={idx} className="flex gap-3 sm:gap-4">
                                                <div className="text-cyan-400 font-mono font-bold text-[9px] sm:text-xs bg-cyan-900/50 px-2 py-1 rounded h-fit flex-shrink-0">
                                                    {round.name}
                                                </div>
                                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-0.5">
                                                    {round.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Rules */}
                            {event.rules && event.rules.length > 0 && (
                                <motion.div variants={fadeUp} className="space-y-3">
                                    <h3 className="text-[10px] sm:text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-2">
                                        <ScrollText className="w-3.5 h-3.5" />
                                        Rules
                                    </h3>
                                    <ol className="space-y-2">
                                        {event.rules.map((rule, idx) => (
                                            <li key={idx} className="flex gap-3 items-start">
                                                <span className="text-cyan-400 font-mono font-bold text-[10px] sm:text-xs bg-cyan-900/50 px-2 py-0.5 rounded shrink-0 mt-0.5">
                                                    {String(idx + 1).padStart(2, "0")}
                                                </span>
                                                <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">{rule}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </motion.div>
                            )}

                            {/* Coordinators */}
                            {event.coordinators.length > 0 && (
                                <motion.div variants={fadeUp} className="space-y-3">
                                    <h3 className="text-[10px] sm:text-xs font-bold text-amber-500 uppercase tracking-widest">Coordinators</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {event.coordinators.map((coord, idx) => (
                                            <div key={idx} className="bg-cyan-900/40 border border-cyan-800 rounded-xl p-3 hover:border-cyan-700 transition-colors">
                                                <h4 className="font-bold text-slate-100 text-xs sm:text-sm">{coord.name}</h4>
                                                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wide mt-0.5 mb-2">{coord.role}</p>
                                                <a href={`tel:${coord.phone}`} className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-mono">
                                                    <Phone className="w-3 sm:w-3.5 h-3 sm:h-3.5 flex-shrink-0" />
                                                    {coord.phone}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Action buttons */}
                            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-2">
                                {event.documentUrl && (
                                    <a
                                        href={event.documentUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-900 hover:bg-cyan-800 text-slate-200 hover:text-white font-semibold rounded-xl transition-all border border-cyan-700 hover:border-cyan-500 text-xs sm:text-sm"
                                    >
                                        <FileText className="w-4 h-4 flex-shrink-0" />
                                        Get Event Details
                                    </a>
                                )}
                                <a
                                    href="#registration"
                                    onClick={onClose}
                                    className="flex-1 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all hover:scale-[1.02] shadow-[0_0_24px_rgba(245,158,11,0.3)] text-xs sm:text-sm text-center"
                                >
                                    Register Now →
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
