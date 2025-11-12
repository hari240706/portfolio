import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setCursorVariant("hover");
      } else {
        setCursorVariant("default");
      }
    };

    const handleClick = (e) => {
      const ripple = document.createElement("div");
      ripple.className = "click-ripple";
      ripple.style.left = `${e.clientX - 20}px`;
      ripple.style.top = `${e.clientY - 20}px`;
      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  // Scroll to top - GUARANTEED VERSION
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleRouteChangeStart = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    const handleRouteChangeComplete = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    // Scroll on mount
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      scale: 1,
    },
    hover: {
      x: cursorPos.x - 24,
      y: cursorPos.y - 24,
      scale: 1.5,
    },
  };

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="custom-cursor-main"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="cursor-core"></div>
        <div className="cursor-ring"></div>
      </motion.div>

      {/* Cursor Trail */}
      <motion.div
        className="custom-cursor-trail"
        animate={{
          x: cursorPos.x - 4,
          y: cursorPos.y - 4,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />

      {/* Page Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;