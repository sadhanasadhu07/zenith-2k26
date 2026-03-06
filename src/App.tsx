import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";

import Home from "./pages/Home";
import EventsPage from "./pages/EventsPage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Scroll to section based on hash when location changes
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen transition-opacity duration-1000 flex flex-col ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <AnimatedBackground />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
        </main>

        <footer className="py-8 sm:py-10 md:py-12 bg-cyan-950 text-slate-100 border-t border-cyan-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <div className="mb-6 sm:mb-8">
              <a href="/#home" className="text-2xl sm:text-3xl font-bold tracking-normal mb-3 sm:mb-4 inline-flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <span className="text-slate-100 uppercase drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]" style={{ fontFamily: '"Times New Roman", Times, serif' }}>ZENITH <span className="text-amber-500 tracking-tight ml-1 text-xl sm:text-2xl">2K26</span></span>
              </a>
              <p className="text-slate-500 text-sm sm:text-base mt-2 sm:mt-3">KGiSL Institute of Technology</p>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm">
              © 2026 Zenith Symposium. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
