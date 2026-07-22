import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "./ImageLightbox.css";

export default function ImageLightbox({ src, alt, onClose }) {
  // Prevent scrolling on body when lightbox is open
  // This is handled by lenis/overflow if we want, but since scroll is locked, it's fine.

  if (!src) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ zIndex: 9999 }}
      >
        <button
          className="lightbox-close-btn"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Tutup"
        >
          <X size={28} />
        </button>

        <motion.div
          className="lightbox-content"
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img src={src} alt={alt || "View"} className="lightbox-image" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
