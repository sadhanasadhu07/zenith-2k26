import { motion } from "motion/react";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { teamMembers } from "../data/teamMembers";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function TeamSection() {
    return (
        <section id="team" className="py-12 sm:py-16 md:py-24 bg-cyan-950 relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-0 left-1/4 w-[300px] sm:w-[400px] md:w-[600px] h-[200px] sm:h-[300px] md:h-[400px] bg-amber-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[400px] md:w-[600px] h-[200px] sm:h-[300px] md:h-[400px] bg-cyan-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-14 md:mb-16"
                >
                    <p className="text-amber-500 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
                        The People Behind It
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-100 mb-3 sm:mb-4">
                        Our{" "}
                        <span className="bg-gradient-to-r from-amber-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                            Team
                        </span>
                    </h2>
                    {/* Accent line */}
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="w-6 sm:w-8 h-[2px] bg-amber-500/40 rounded-full" />
                        <div className="w-12 sm:w-16 h-[2px] bg-amber-500 rounded-full" />
                        <div className="w-6 sm:w-8 h-[2px] bg-amber-500/40 rounded-full" />
                    </div>
                    <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
                        Meet the dedicated people who make Zenith 2k26 possible.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
                >
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.name}
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="group relative flex flex-col items-center text-center p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl
                bg-white/[0.03] backdrop-blur-sm
                border border-white/[0.08]
                hover:border-cyan-500/40
                hover:bg-white/[0.06]
                hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]
                transition-all duration-300 cursor-default"
                        >
                            {/* Profile Image */}
                            <div className="relative mb-4 sm:mb-5">
                                <div
                                    className="w-20 sm:w-24 h-20 sm:h-24 rounded-full overflow-hidden border-2 border-white/10
                    group-hover:border-amber-500/60 transition-all duration-300
                    group-hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                                >
                                    <motion.img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src =
                                                `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(member.name)}&backgroundColor=0891b2&textColor=ffffff`;
                                        }}
                                    />
                                </div>
                                {/* Glow ring on hover */}
                                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-amber-500/30 ring-offset-2 ring-offset-transparent" />
                            </div>

                            {/* Name & Role */}
                            <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-100 mb-1 leading-tight">
                                {member.name}
                            </h3>
                            <p className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1">
                                {member.role}
                            </p>
                            {member.department && (
                                <p className="text-slate-500 text-xs mb-4 sm:mb-5">{member.department}</p>
                            )}

                            {/* Social Icons — fade in on hover */}
                            <motion.div
                                className="flex items-center gap-2 sm:gap-3 mt-auto pt-3 sm:pt-4"
                                initial={{ opacity: 0, y: 6 }}
                                whileInView={{ opacity: 1, y: 0 }}
                            >
                                {member.linkedin && member.linkedin !== "#" ? (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
                                        aria-label={`${member.name} LinkedIn`}
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                ) : (
                                    <span className="p-2 rounded-xl bg-white/5 text-slate-600 cursor-default">
                                        <Linkedin className="w-4 h-4" />
                                    </span>
                                )}

                                {member.instagram && member.instagram !== "#" ? (
                                    <a
                                        href={member.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-200"
                                        aria-label={`${member.name} Instagram`}
                                    >
                                        <Instagram className="w-4 h-4" />
                                    </a>
                                ) : (
                                    <span className="p-2 rounded-xl bg-white/5 text-slate-600 cursor-default">
                                        <Instagram className="w-4 h-4" />
                                    </span>
                                )}

                                {member.email && member.email !== "#" ? (
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-amber-400 hover:bg-amber-500/10 transition-all duration-200"
                                        aria-label={`Email ${member.name}`}
                                    >
                                        <Mail className="w-4 h-4" />
                                    </a>
                                ) : (
                                    <span className="p-2 rounded-xl bg-white/5 text-slate-600 cursor-default">
                                        <Mail className="w-4 h-4" />
                                    </span>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
