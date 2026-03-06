import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Schedule", href: "/#schedule" },
  { name: "Events", href: "/events" },
  { name: "Registration", href: "/#registration" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy Logic
      const sections = navLinks
        .filter(link => link.href.startsWith("/#"))
        .map(link => link.href.substring(2));

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (window.location.pathname === "/events") {
        setActiveSection("events");
      } else if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-cyan-950/40 backdrop-blur-2xl border-b border-cyan-400/20 shadow-lg shadow-black/40" : "py-6 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/#home" className="text-3xl font-bold tracking-normal flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <span className="text-slate-100 uppercase drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]" style={{ fontFamily: '"Times New Roman", Times, serif' }}>ZENITH <span className="text-amber-500 tracking-tight ml-1 text-2xl">2K26</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionName = link.href.startsWith("/#") ? link.href.substring(2) : "events";
            const isActive = activeSection === sectionName || (location.pathname === "/events" && link.href === "/events");

            return (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-sm font-medium transition-colors py-1 ${isActive ? "text-amber-500" : "text-slate-300 hover:text-amber-500"
                  }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <Link
            to="/#registration"
            className="px-5 py-2.5 bg-amber-500 text-slate-100 text-sm font-bold rounded-xl hover:bg-amber-600 transition-all hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            Register
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyan-950 border-t border-cyan-800 overflow-hidden shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const sectionName = link.href.startsWith("/#") ? link.href.substring(2) : "events";
                const isActive = activeSection === sectionName || (location.pathname === "/events" && link.href === "/events");

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-lg font-medium transition-colors ${isActive ? "text-amber-500" : "text-slate-300 hover:text-amber-500"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/#registration"
                className="w-full py-4 bg-amber-500 text-slate-100 text-center font-bold rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
