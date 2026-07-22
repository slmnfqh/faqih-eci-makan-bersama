import { motion, AnimatePresence } from "framer-motion";
import { FlowerCluster } from "./DecorativeFlower";
import "./LoadingScreen.css";

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="loading-floral"
            animate={{ 
              scale: [1, 1.15, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <FlowerCluster size={80} variant="beige" />
          </motion.div>
          <motion.p
            className="loading-text font-handwriting"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            Memuat...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
