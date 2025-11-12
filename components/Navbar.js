import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ResumeModal from "./ResumeModal";

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollY } = useScroll();
  const navbarBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / height) * 100;
      setScrollProgress(progress);
      setScrolled(scrolled > 50);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{ backgroundColor: navbarBackground }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className={`backdrop-blur-xl border-b transition-all duration-500 ${
          scrolled ? "border-white/10 shadow-2xl shadow-blue-500/10" : "border-transparent"
        }`}>
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-20">
              
              {/* Mobile Menu Button - Left Side */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white p-2 z-50 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Desktop Nav Items - Centered */}
              <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
                {navItems.map((item, index) => {
                  const isActive = router.pathname === item.path;
                  return (
                    <Link key={item.path} href={item.path}>
                      <motion.div
                        className="relative group px-4 py-2 cursor-pointer"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -2 }}
                      >
                        <span
                          className={`relative z-10 font-medium transition-colors duration-300 ${
                            isActive
                              ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
                              : "text-gray-300 group-hover:text-white"
                          }`}
                        >
                          {item.name}
                        </span>
                        
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        
                        {isActive && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                            layoutId="activeNav"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        
                        <motion.div
                          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 -z-10"
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </Link>
                  );
                })}
              </div>

              {/* CTA Buttons - Right Side */}
              <motion.div
                className="flex items-center gap-2 md:gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Resume Button */}
                <motion.button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="relative px-3 md:px-5 py-2 md:py-2.5 rounded-full font-semibold text-white border-2 border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 overflow-hidden group flex items-center gap-1 md:gap-2 text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 text-lg">📄</span>
                  <span className="relative z-10 hidden sm:inline">Resume</span>
                  
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-blue-500/30 to-cyan-500/30 -z-10"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                {/* Hire Me Button */}
                <Link href="/contact">
                  <motion.button
                    className="relative px-4 md:px-6 py-2 md:py-2.5 rounded-full font-semibold text-white overflow-hidden group text-sm md:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Hire Me</span>
                    
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      style={{ backgroundSize: "200% 200%" }}
                    />
                    
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-blue-500 to-purple-500 -z-10"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-900/30">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-100"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-xl z-40"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            {navItems.map((item, index) => {
              const isActive = router.pathname === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <motion.div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span
                      className={`text-2xl font-bold transition-colors ${
                        isActive
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
                          : "text-white hover:text-blue-400"
                      }`}
                    >
                      {item.name}
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </>
  );
}