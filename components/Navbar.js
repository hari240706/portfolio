import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
      const progress = height > 0 ? (scrolled / height) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(scrolled > 50);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = "";
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
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
          <div className="w-full px-4 md:px-12 lg:px-16">
            <div className="flex items-center justify-between h-16 md:h-20 w-full">
              
              {/* Logo - Always Left-aligned */}
              <Link href="/" className="z-10 flex items-center">
                <motion.div
                  className="flex items-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 blur-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20" />
                    <h1 className="text-3xl font-black tracking-tight">
                      <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-500">
                        H
                      </span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-purple-500">
                        R
                      </span>
                    </h1>
                  </div>
                </motion.div>
              </Link>
 
              {/* Desktop Nav Items - Centered */}
              <div className="hidden md:flex items-center justify-center gap-2">
                {navItems.map((item, index) => {
                  const isActive = router.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        document.body.style.overflow = "";
                      }}
                    >
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

              {/* Right Side Controls (CTA Group + Mobile Hamburger) */}
              <div className="flex items-center gap-3 md:gap-4 z-10">
                {/* Resume Button */}
                <motion.button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="relative px-4 py-2.5 rounded-full font-semibold text-white border-2 border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 overflow-hidden group flex items-center gap-2 text-sm md:text-base min-h-[44px] min-w-[44px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 text-lg">📄</span>
                  <span className="relative z-10 hidden md:inline">
                    Resume
                  </span>
                  
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-blue-500/30 to-cyan-500/30 -z-10"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                {/* Contact Me Button - Desktop Only */}
                <Link href="/contact" className="hidden md:block">
                  <motion.button
                    className="relative px-5 py-2.5 rounded-full font-semibold text-white border-2 border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 overflow-hidden group flex items-center gap-2 text-sm md:text-base min-h-[44px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Contact Me</span>
                    
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-blue-500/30 to-cyan-500/30 -z-10"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>

                {/* Mobile Menu Button - Hamburger */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden flex items-center justify-center text-white p-3 hover:bg-white/10 rounded-lg transition-colors min-w-[44px] min-h-[44px]"
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
              </div>
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

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black/98 backdrop-blur-2xl z-40 w-full h-screen"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 pt-24 pb-8 overflow-y-auto">
              {navItems.map((item, index) => {
                const isActive = router.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      document.body.style.overflow = "";
                    }}
                  >
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
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
      </AnimatePresence>

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </>
  );
}