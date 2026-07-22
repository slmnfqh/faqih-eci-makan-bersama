import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./ScrollHint.css";

export default function ScrollHint() {
  return (
    <motion.div
      className="scroll-hint"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.6 }}
      aria-hidden="true"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={24} color="var(--color-muted)" strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  );
}
