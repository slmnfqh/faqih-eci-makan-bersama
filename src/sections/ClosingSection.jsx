import { motion } from "framer-motion";
import { ChevronUp, ZoomIn } from "lucide-react";
import { motionTokens } from "../data/invitation";
import InvitationCard from "../components/InvitationCard";
import AnimatedSection from "../components/AnimatedSection";
import { HeartIcon, HeartOutline, RibbonBow } from "../components/FloatingOrnament";
import { Sunflower, Tulip } from "../components/DecorativeFlower";
import "./ClosingSection.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatingHearts = [
  { top: "15%", right: "8%", size: 24, delay: 0, color: "var(--color-gold)" },
  { top: "25%", right: "5%", size: 18, delay: 1.5, color: "var(--color-beige)" },
  { top: "60%", left: "5%", size: 22, delay: 0.8, color: "var(--color-gold)" },
  { bottom: "25%", left: "8%", size: 16, delay: 2, color: "var(--color-beige)" },
  { bottom: "15%", right: "10%", size: 20, delay: 0.5, color: "var(--color-gold)" },
  { top: "40%", left: "10%", size: 14, delay: 1.2, color: "var(--color-taupe)" },
  { bottom: "35%", right: "6%", size: 16, delay: 1.8, color: "var(--color-taupe)" },
];

export default function ClosingSection({ onImageClick }) {
  return (
    <AnimatedSection className="closing-section" id="closing">
      {/* Floating hearts */}
      {floatingHearts.map((heart, i) => (
        <motion.div
          key={i}
          className="closing-floating-heart animate-float"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: heart.delay * 0.5, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: heart.top,
            bottom: heart.bottom,
            left: heart.left,
            right: heart.right,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${3 + heart.delay}s`,
            zIndex: 5,
            pointerEvents: "none",
          }}
        >
          <HeartOutline size={heart.size} color={heart.color} />
        </motion.div>
      ))}

      {/* Decorative New Flowers */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{ position: "absolute", bottom: "120px", left: "10px", zIndex: 10, pointerEvents: "none" }}
      >
        <Sunflower size={100} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
        style={{ position: "absolute", bottom: "160px", right: "10px", zIndex: 10, pointerEvents: "none" }}
      >
        <Tulip size={90} />
      </motion.div>

      <InvitationCard>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="closing-content"
        >
          {/* Main heart */}
          <motion.div
            variants={itemVariants}
            className="closing-main-heart"
          >
            <HeartIcon size={48} color="var(--color-maroon)" />
          </motion.div>

          {/* Decorative branch lines */}
          <motion.div variants={itemVariants} className="closing-branch" aria-hidden="true">
            <svg width="120" height="30" viewBox="0 0 120 30" fill="none">
              <path
                d="M20 20 C30 10, 40 15, 50 12 C55 10, 58 15, 60 15"
                stroke="var(--color-sage)"
                strokeWidth="1"
                opacity="0.5"
              />
              <path
                d="M100 20 C90 10, 80 15, 70 12 C65 10, 62 15, 60 15"
                stroke="var(--color-sage)"
                strokeWidth="1"
                opacity="0.5"
              />
              <path
                d="M35 18 C38 8, 45 14, 48 10"
                stroke="var(--color-maroon)"
                strokeWidth="0.8"
                opacity="0.4"
              />
              <path
                d="M85 18 C82 8, 75 14, 72 10"
                stroke="var(--color-maroon)"
                strokeWidth="0.8"
                opacity="0.4"
              />
            </svg>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="closing-title font-script"
            id="closing-heading"
          >
            sampai bertemu
          </motion.h2>

          {/* Divider with ribbon */}
          <motion.div variants={itemVariants} className="closing-divider">
            <div className="closing-line" />
            <RibbonBow size={36} />
            <div className="closing-line" />
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
            {/* Photo 2: Rangkul */}
            <motion.div 
              variants={itemVariants} 
              className="closing-photo-wrapper"
              onClick={() => onImageClick && onImageClick("/assets/faqih-eci-rangkul.png")}
              style={{ position: 'relative', cursor: 'pointer' }}
            >
              <img 
                src="/assets/faqih-eci-rangkul.png" 
                alt="Faqih & Eci" 
                className="closing-photo clickable-image"
              />
              <div className="zoom-icon-overlay">
                <ZoomIn size={16} color="#fff" />
              </div>
            </motion.div>

            {/* Photo 3: Seragam */}
            <motion.div 
              variants={itemVariants} 
              className="closing-photo-wrapper"
              onClick={() => onImageClick && onImageClick("/assets/faqih-eci-seragam.png")}
              style={{ position: 'relative', cursor: 'pointer' }}
            >
              <img 
                src="/assets/faqih-eci-seragam.png" 
                alt="Faqih & Eci Seragam" 
                className="closing-photo clickable-image"
              />
              <div className="zoom-icon-overlay">
                <ZoomIn size={16} color="#fff" />
              </div>
            </motion.div>
          </div>

          {/* Prayer text */}
          <motion.div variants={itemVariants} className="closing-prayer">
            <p className="closing-prayer-text font-handwriting">
              semoga pertemuan ini
              <br />
              membawa banyak doa baik,
              <br />
              kebersamaan, dan menjadi
              <br />
              awal dari keluarga yang
              <br />
              semakin dekat
            </p>
          </motion.div>

          {/* See you soon */}
          <motion.p
            variants={itemVariants}
            className="closing-see-you font-handwriting"
          >
            ~see you soon 👋~
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="closing-see-you font-handwriting"
          >
            ~🌻🌷~
          </motion.p>
          
          <motion.button
            variants={itemVariants}
            className="closing-back-to-top"
            onClick={() => {
              const hero = document.getElementById("hero");
              if (hero) hero.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Kembali ke Atas"
          >
            <ChevronUp size={28} strokeWidth={2} />
          </motion.button>
        </motion.div>
      </InvitationCard>

      {/* Footer */}
      <motion.footer
        className="closing-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
      </motion.footer>
    </AnimatedSection>
  );
}
