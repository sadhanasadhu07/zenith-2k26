import { motion } from "motion/react";
import { committeeMembers, groupOrder } from "../data/committeeMembers";

const groupAccent: Record<string, string> = {
    "Principal": "text-amber-400",
    "Head of Department": "text-cyan-400",
    "Staff Coordinators": "text-teal-400",
    "Student Coordinators": "text-slate-300",
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function CommitteeSection() {
    // Group members by their group label
    const grouped = groupOrder.map((groupName) => ({
        label: groupName,
        members: committeeMembers.filter((m) => m.group === groupName),
    }));

    return (
        <section id="committee" className="py-12 sm:py-16 md:py-24 bg-cyan-950 relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] bg-amber-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[130px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] md:w-[600px] h-[250px] sm:h-[350px] md:h-[400px] bg-cyan-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[130px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-12 md:mb-16"
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
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="w-6 sm:w-8 h-[2px] bg-amber-500/40 rounded-full" />
                        <div className="w-12 sm:w-16 h-[2px] bg-amber-500 rounded-full" />
                        <div className="w-6 sm:w-8 h-[2px] bg-amber-500/40 rounded-full" />
                    </div>
                    <p className="text-slate-400 text-sm sm:text-base md:text-lg">
                        The organizing committee behind Zenith 2k26.
                    </p>
                </motion.div>

                {/* Grouped card rows */}
                {grouped.map((group, gIdx) => (
                    <div key={group.label} className="mb-10 sm:mb-12 md:mb-14 last:mb-0">
                        {/* Group label */}
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.05 }}
                            className={`text-center font-mono text-xs tracking-widest uppercase mb-4 sm:mb-6 ${groupAccent[group.label] ?? "text-slate-400"}`}
                        >
                            {group.label}
                        </motion.p>

                        {/* Cards row — centered */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ staggerChildren: 0.1 }}
                            className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5"
                        >
                            {group.members.map((member) => (
                                <motion.div
                                    key={member.name}
                                    variants={cardVariants}
                                    whileHover={{ y: -6 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col items-center text-center w-36 sm:w-40 md:w-44 cursor-default"
                                >
                                    {/* Avatar */}
                                    <div className="w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 rounded-full overflow-hidden border-2 border-white/10 hover:border-amber-500/50 transition-all duration-300 mb-3 sm:mb-4 hover:shadow-[0_0_18px_rgba(245,158,11,0.2)]">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src =
                                                    `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(member.name)}&backgroundColor=0891b2&textColor=ffffff`;
                                            }}
                                        />
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-xs sm:text-sm font-bold text-slate-100 leading-snug mb-1">
                                        {member.name}
                                    </h3>

                                    {/* Role */}
                                    <p className={`text-[11px] sm:text-xs font-medium uppercase tracking-wider ${groupAccent[group.label] ?? "text-slate-400"}`}>
                                        {member.role}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Divider */}
                        {gIdx < grouped.length - 1 && (
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                whileInView={{ opacity: 1, scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="mt-10 sm:mt-12 h-px w-48 sm:w-56 md:w-64 mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
