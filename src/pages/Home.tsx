import { motion } from "motion/react";
import { User, Phone, Mail, ExternalLink, MapPin } from "lucide-react";

import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import Timeline from "../components/Timeline";
import CommitteeSection from "../components/CommitteeSection";

export default function Home() {
    return (
        <div className="pt-20">
            <Hero />

            {/* About Section */}
            <section id="about" className="py-12 sm:py-16 md:py-24 bg-cyan-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <SectionHeader
                                title="About Zenith 2k26"
                                subtitle="A flagship event organized by the departments of IT, AI&ML, and Cyber Security at KGiSL Institute of Technology."
                                centered={false}
                            />
                            <div className="space-y-4 sm:space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
                                <p>
                                    Zenith 2k26 is more than just a symposium; it's a platform where innovation meets execution.
                                    We bring together the brightest minds to compete, collaborate, and create.
                                </p>
                                <p>
                                    Our mission is to foster a culture of technical excellence and provide students with
                                    real-world challenges that push their boundaries.
                                </p>
                                <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
                                    {["Information Technology", "AI & Machine Learning", "Cyber Security"].map((dept) => (
                                        <span key={dept} className="px-3 sm:px-4 py-2 bg-cyan-900 text-slate-200 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl border border-cyan-800">
                                            {dept}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/50">
                                <img
                                    src="https://picsum.photos/seed/college/800/800"
                                    alt="KGiSL Campus"
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 p-4 sm:p-8 bg-amber-500 text-slate-100 rounded-2xl sm:rounded-3xl shadow-xl hidden md:block">
                                <p className="text-2xl sm:text-4xl font-bold mb-1">10+</p>
                                <p className="text-xs sm:text-sm font-medium opacity-80 uppercase tracking-wider">Exciting Events</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Schedule Section */}
            <section id="schedule" className="py-12 sm:py-16 md:py-24 bg-cyan-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <SectionHeader
                        title="Event Schedule"
                        subtitle="Plan your day at Zenith 2k26. Don't miss out on any of our flagship sessions."
                    />
                    <Timeline />
                </div>
            </section>

            {/* Poster Section */}
            <section id="poster" className="py-24 bg-cyan-950">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        title="Symposium Poster"
                        subtitle="Official poster for Zenith 2k26 National Level Technical Symposium."
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-cyan-800"
                    >
                        <img
                            src="https://picsum.photos/seed/poster/1200/800"
                            alt="Zenith 2k26 Official Poster"
                            className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                            referrerPolicy="no-referrer"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Registration Section */}
            <section id="registration" className="py-12 sm:py-16 md:py-24 bg-cyan-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto bg-cyan-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-slate-100 relative overflow-hidden shadow-xl border border-cyan-800">
                        <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-amber-500/5 rounded-full blur-3xl -mr-20 sm:-mr-32 -mt-20 sm:-mt-32" />
                        <div className="absolute bottom-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-amber-500/5 rounded-full blur-3xl -ml-20 sm:-ml-32 -mb-20 sm:-mb-32" />

                        <div className="relative z-10 text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 text-slate-100"
                            >
                                Ready to join Zenith?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-xl mx-auto"
                            >
                                Registration is open! Secure your spot now and be part of the most exciting symposium of 2k26.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
                            >
                                <div className="p-4 sm:p-6 bg-cyan-950 rounded-xl sm:rounded-2xl border border-cyan-800 shadow-md shadow-black/40">
                                    <p className="text-slate-500 text-xs sm:text-sm mb-2 uppercase tracking-wider">Registration Fee</p>
                                    <p className="text-xl sm:text-2xl font-bold text-slate-100">₹250 / Person</p>
                                </div>
                                <div className="p-4 sm:p-6 bg-cyan-950 rounded-xl sm:rounded-2xl border border-cyan-800 shadow-md shadow-black/40">
                                    <p className="text-slate-500 text-xs sm:text-sm mb-2 uppercase tracking-wider">Last Date</p>
                                    <p className="text-xl sm:text-2xl font-bold text-slate-100">22nd March</p>
                                </div>
                                <div className="p-4 sm:p-6 bg-cyan-950 rounded-xl sm:rounded-2xl border border-cyan-800 shadow-md shadow-black/40 sm:col-span-2 md:col-span-1">
                                    <p className="text-slate-500 text-xs sm:text-sm mb-2 uppercase tracking-wider">On-Spot</p>
                                    <p className="text-xl sm:text-2xl font-bold text-slate-100">Available</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                            >
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfcAEgGAK4hzb6sBqy6F-cB9-yOndYrjvXFfHc-vazbtyqsEA/viewform?usp=publish-editor"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-amber-500 text-slate-100 font-bold rounded-xl sm:rounded-2xl hover:bg-amber-600 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 text-sm sm:text-base"
                                >
                                    Register via Google Form
                                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-slate-500 text-xs sm:text-sm italic mt-4 sm:mt-6"
                            >
                                * Includes lunch and participation certificate
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Venue Section */}
            <section id="venue" className="py-24 bg-cyan-900/50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionHeader
                            title="How to reach us"
                            subtitle="Visit us at KGiSL Institute of Technology campus."
                        />
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="p-8 bg-cyan-950 rounded-3xl shadow-md shadow-black/40 border border-cyan-800 hover:border-cyan-700 transition-colors">
                                <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-100">
                                    <MapPin className="w-5 h-5 text-amber-500" />
                                    Location
                                </h4>
                                <address className="not-italic text-slate-300 leading-relaxed mb-6">
                                    KGiSL INSTITUTE OF TECHNOLOGY<br />
                                    KGiSL Campus, 365, Thudiyalur Road,<br />
                                    Saravanampatti, Coimbatore – 641035
                                </address>
                                <a
                                    href="https://maps.app.goo.gl/eStWs43Eo7NUvqF96"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-slate-100 rounded-xl hover:bg-amber-600 transition-colors text-sm font-bold shadow-lg shadow-cyan-500/20"
                                >
                                    Open in Google Maps
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="p-8 bg-cyan-950 rounded-3xl shadow-md shadow-black/40 border border-cyan-800 hover:border-cyan-700 transition-colors">
                                <h4 className="text-xl font-bold mb-4 text-slate-100">Scan for Location</h4>
                                <div className="aspect-square bg-cyan-900 rounded-2xl overflow-hidden flex items-center justify-center border border-cyan-800">
                                    <img
                                        src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://maps.app.goo.gl/eStWs43Eo7NUvqF96"
                                        alt="Location QR Code"
                                        className="w-full h-full object-contain p-4 mix-blend-multiply"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Organizing Committee */}
            <CommitteeSection />

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-cyan-950">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        title="Contact Coordinators"
                        subtitle="Have questions? Reach out to our team."
                    />

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Staff Coordinator */}
                        <motion.div
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="p-8 bg-cyan-950/30 backdrop-blur-2xl rounded-3xl border border-cyan-400/20 shadow-xl shadow-black/40 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                                    <User className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-100">Shirley Josphine Mary</h4>
                                    <p className="text-sm font-medium text-amber-500 uppercase tracking-wider">Staff Coordinator</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <a href="tel:123456789" className="flex items-center gap-3 text-slate-300 hover:text-amber-500 transition-colors">
                                    <Phone className="w-5 h-5" />
                                    <span>123456789</span>
                                </a>
                                <a href="mailto:shirleyjosephinemary@kgkite.ac.in" className="flex items-center gap-3 text-slate-300 hover:text-amber-500 transition-colors">
                                    <Mail className="w-5 h-5" />
                                    <span className="truncate">shirleyjosephinemary@kgkite.ac.in</span>
                                </a>
                            </div>
                        </motion.div>

                        {/* Student Coordinator */}
                        <motion.div
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="p-8 bg-cyan-950/30 backdrop-blur-2xl rounded-3xl border border-cyan-400/20 shadow-xl shadow-black/40 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-cyan-900 flex items-center justify-center text-slate-500">
                                    <User className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-100">Parvinkumar K</h4>
                                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Student Coordinator</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <a href="tel:987654321" className="flex items-center gap-3 text-slate-300 hover:text-amber-500 transition-colors">
                                    <Phone className="w-5 h-5" />
                                    <span>987654321</span>
                                </a>
                                <a href="mailto:parvin@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-amber-500 transition-colors">
                                    <Mail className="w-5 h-5" />
                                    <span>parvin@gmail.com</span>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
