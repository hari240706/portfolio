import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function CertificateModal({
  isOpen,
  onClose,
  certificate,
  gallery = [],
  currentIndex = 0,
  setCurrentIndex,
  setSelectedCertificate,
}) {
  const hasGallery =
  Array.isArray(gallery) &&
  gallery.length > 1 &&
  gallery.some(
    (item) =>
      item?.title !== certificate?.title ||
      item?.pdf !== certificate?.pdf
  );

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}

          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Fixed Close Button */}

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-[110] w-12 h-12 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/10 text-white text-2xl hover:text-red-400 hover:border-red-400/50 transition-all duration-300"
          >
            ✕
          </button>

          {/* Modal */}

          <motion.div
            className="fixed inset-0 flex items-start md:items-center justify-center p-2 md:p-4 z-[101]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="bg-[#0f172a] border border-white/10 rounded-3xl w-full max-w-5xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto">

              {/* Header */}

              <div className="p-6 border-b border-white/10">

                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {certificate.title}
                </h2>

                {hasGallery && gallery.length > 1 && (
                  <p className="text-cyan-400 text-sm mt-1">
                    Certificate {currentIndex + 1} of {gallery.length}
                  </p>
                )}

              </div>

              {/* Content */}

              <div className="p-6">

                <img
                  src={certificate.preview}
                  alt={certificate.title}
                  draggable={false}
                  className="w-full h-auto max-h-[70vh] md:max-h-none object-contain rounded-2xl border border-white/10 select-none"
                />

                {/* Gallery Navigation */}

                {hasGallery && gallery.length > 1 && (
                  <div className="flex justify-center gap-4 mt-6">

                    <button
                      disabled={currentIndex === 0}
                      onClick={() => {
                        const newIndex = currentIndex - 1;

                        if (newIndex >= 0) {
                          setCurrentIndex(newIndex);
                          setSelectedCertificate(gallery[newIndex]);
                        }
                      }}
                      className="px-5 py-2 rounded-lg bg-white/10 text-white disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      ← Previous
                    </button>

                    <button
                      disabled={currentIndex === gallery.length - 1}
                      onClick={() => {
                        const newIndex = currentIndex + 1;

                        if (newIndex < gallery.length) {
                          setCurrentIndex(newIndex);
                          setSelectedCertificate(gallery[newIndex]);
                        }
                      }}
                      className="px-5 py-2 rounded-lg bg-white/10 text-white disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Next →
                    </button>

                  </div>
                )}

                {/* Download */}

                <div className="mt-6 flex justify-center">

                  <a
                    href={certificate.pdf}
                    download
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:scale-105 transition-transform"
                  >
                    📥 Download Certificate
                  </a>

                </div>

              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}