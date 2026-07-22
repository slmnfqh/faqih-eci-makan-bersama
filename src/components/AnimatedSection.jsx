import { motion } from "framer-motion";
import { motionTokens } from "../data/invitation";

export default function AnimatedSection({ children, className = "", id }) {
  return (
    <motion.section
      id={id}
      className={`section ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: motionTokens.durationBase,
        ease: motionTokens.easeSoft,
      }}
    >
      {children}
    </motion.section>
  );
}
