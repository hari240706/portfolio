import { motion, AnimatePresence } from "framer-motion";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="relative max-w-md w-full p-8 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-2xl">✕</span>
              </button>

              {/* Content */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">📄</div>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  My Resume
                </h2>
                <p className="text-gray-400">
                  Choose an option to continue
                </p>
              </div>

              {/* Options */}
              <div className="space-y-4">
                {/* View Resume */}
                <motion.a
                  href="\Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-2 border-blue-500/50 rounded-xl hover:border-blue-500 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">👁️</div>
                    <div className="flex-1 text-left">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        View Resume
                      </h3>
                      <p className="text-sm text-gray-400">
                        Open in new tab
                      </p>
                    </div>
                    <motion.div
                      className="text-blue-400 text-xl"
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                    >
                      →
                    </motion.div>
                  </div>
                </motion.a>

                {/* Download Resume */}
                <motion.a
                  href="/Resume.pdf"
                  download="Hariprasad_R_Resume.pdf"
                  className="block w-full p-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-2 border-green-500/50 rounded-xl hover:border-green-500 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">⬇️</div>
                    <div className="flex-1 text-left">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
                        Download Resume
                      </h3>
                      <p className="text-sm text-gray-400">
                        Save PDF to device
                      </p>
                    </div>
                    <motion.div
                      className="text-green-400 text-xl"
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                    >
                      →
                    </motion.div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}