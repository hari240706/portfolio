import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if device supports touch (mobile/tablet)
    const checkTouchDevice = () => {
      const hasTouch = 'ontouchstart' in window || 
                       navigator.maxTouchPoints > 0 || 
                       navigator.msMaxTouchPoints > 0;
      setIsTouchDevice(hasTouch);
    };
    
    checkTouchDevice();
    
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

    // Only add cursor events if NOT a touch device
    if (!isTouchDevice) {
      window.addEventListener("mousemove", moveCursor);
      window.addEventListener("mouseover", handleMouseOver);
    }
    
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleClick);
    };
  }, [isTouchDevice]);

  // Scroll to top - GUARANTEED VERSION
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToTop = () => {
      window.scrollTo(0, 0);
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    const handleRouteChangeStart = () => {
      scrollToTop();
    };

    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        scrollToTop();
      }, 0);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    scrollToTop();

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
      {/* Custom Cursor - Only show on desktop (non-touch devices) */}
      {!isTouchDevice && (
        <>
          <motion.div
            className="custom-cursor-main"
            variants={cursorVariants}
            animate={cursorVariant}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
          >
            <div className="cursor-core"></div>
            <div className="cursor-ring"></div>
          </motion.div>

          <motion.div
            className="custom-cursor-trail"
            animate={{
              x: cursorPos.x - 4,
              y: cursorPos.y - 4,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          />
        </>
      )}

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