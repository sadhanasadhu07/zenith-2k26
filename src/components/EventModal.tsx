import { motion, AnimatePresence } from "motion/react";
import { X, Trophy, Users, Phone, FileText } from "lucide-react";

export interface EventPrize {
    place: string;
    amount: string;
}

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
    prizes: EventPrize[];
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
        transition: { staggerChildren: 0.1 }
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
                className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
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
                    className="relative w-full max-w-5xl bg-cyan-950 border border-cyan-800 rounded-3xl shadow-2xl shadow-black/60 flex flex-col overflow-hidden"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 bg-cyan-950/90 backdrop-blur-xl border-b border-cyan-800 shrink-0">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-2xl md:text-4xl font-display font-black text-slate-100 tracking-tight uppercase"
                        >
                            {event.title}
                        </motion.h2>
                        <motion.button
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            onClick={onClose}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-900 text-slate-300 hover:bg-cyan-800 hover:text-white transition-colors border border-cyan-800 shrink-0"
                        >
                            <X className="w-5 h-5" />
                        </motion.button>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="p-4 md:p-6 grid md:grid-cols-2 gap-8 overflow-y-auto custom-scrollbar md:overflow-visible"
                    >
                        {/* Left Column */}
                        <div className="space-y-6">
                            <motion.div variants={fadeUp} className="space-y-3">
                                <p className="text-slate-300 leading-relaxed text-base">
                                    {event.fullDescription || event.description}
                                </p>
                            </motion.div>

                            <motion.div variants={fadeUp} className="space-y-3">
                                <h3 className="text-xs font-bold text-amber-500 uppercase tracking-widest">Format</h3>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-900 border border-cyan-800 rounded-lg text-slate-200 font-semibold shadow-inner shadow-black/20 text-sm">
                                    <Users className="w-4 h-4 text-cyan-400" />
                                    {event.format}
                                </div>
                            </motion.div>

                            <motion.div variants={fadeUp} className="space-y-4">
                                <h3 className="text-xs font-bold text-amber-500 uppercase tracking-widest">Rounds</h3>
                                <div className="space-y-3">
                                    {event.rounds.map((round, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="text-cyan-400 font-mono font-bold text-xs bg-cyan-900/50 px-2 py-1 rounded h-fit">
                                                {round.name}
                                            </div>
                                            <p className="text-slate-300 text-sm leading-relaxed mt-0.5">
                                                {round.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">

                            <motion.div variants={fadeUp} className="space-y-4">
                                <h3 className="text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-2">
                                    <Trophy className="w-4 h-4" />
                                    Prizes
                                </h3>
                                <div className="bg-cyan-900/40 border border-cyan-800 rounded-2xl p-3 divide-y divide-cyan-800/50">
                                    {event.prizes.map((prize, idx) => (
                                        <div key={idx} className="flex items-center justify-between py-2.5 first:pt-1 last:pb-1">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                                                {prize.place}
                                            </span>
                                            <span className="text-xl font-bold text-cyan-400 font-mono tracking-tight">
                                                {prize.amount}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div variants={fadeUp} className="space-y-4">
                                <h3 className="text-xs font-bold text-amber-500 uppercase tracking-widest">Coordinators</h3>
                                <div className="space-y-3">
                                    {event.coordinators.map((coord, idx) => (
                                        <div key={idx} className="bg-cyan-900/40 border border-cyan-800 rounded-xl p-3 hover:border-cyan-700 transition-colors">
                                            <h4 className="font-bold text-slate-100 text-sm">{coord.name}</h4>
                                            <p className="text-xs text-slate-400 uppercase tracking-wide mt-0.5 mb-2">{coord.role}</p>
                                            <a href={`tel:${coord.phone}`} className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-mono">
                                                <Phone className="w-3.5 h-3.5" />
                                                {coord.phone}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* Footer */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-4 bg-cyan-950/90 backdrop-blur-xl border-t border-cyan-800 flex items-center justify-end gap-3 shrink-0"
                    >
                        {event.documentUrl && (
                            <a
                                href={event.documentUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-900 hover:bg-cyan-800 text-slate-200 hover:text-white font-semibold rounded-xl transition-all border border-cyan-700 hover:border-cyan-500 text-sm"
                            >
                                <FileText className="w-4 h-4" />
                                Read Full Details
                            </a>
                        )}
                        <a
                            href="#registration"
                            onClick={onClose}
                            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)] shadow-amber-500/20 text-sm"
                        >
                            Register Now →
                        </a>
                    </motion.div>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
