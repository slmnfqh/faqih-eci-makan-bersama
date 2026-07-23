import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { invitationData, motionTokens } from "../data/invitation";
import InvitationCard from "../components/InvitationCard";
import SectionDivider from "../components/SectionDivider";
import ScrollHint from "../components/ScrollHint";
import {
  HeartIcon,
  RibbonOutline,
  EnvelopeIcon,
} from "../components/FloatingOrnament";
import { FlowerCluster, Tulip, Sunflower, SmallFlower } from "../components/DecorativeFlower";
import "./HeroSection.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.durationBase,
      ease: motionTokens.easeSoft,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: motionTokens.easeGentle,
    },
  },
};

export default function HeroSection({ onImageClick }) {
  return (
    <section className="section hero-section" id="hero" aria-labelledby="hero-heading">
      {/* Background decorations */}
      <motion.div
        className="hero-ribbon-outline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <RibbonOutline />
      </motion.div>

      <motion.div
        className="hero-flower-top-right"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: motionTokens.easeGentle }}
      >
        <FlowerCluster size={140} variant="beige" />
      </motion.div>

      <motion.div
        className="hero-flower-bottom-left"
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: motionTokens.easeGentle }}
      >
        <FlowerCluster size={130} variant="beige" flip />
      </motion.div>

      <motion.div
        className="hero-envelope"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <EnvelopeIcon size={60} />
      </motion.div>

      <motion.div
        className="hero-tulip"
        initial={{ opacity: 0, x: -20, rotate: -15 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{ position: "absolute", top: "15%", left: "5%", zIndex: 10, pointerEvents: "none" }}
      >
        <Tulip size={80} />
      </motion.div>

      {/* Extra animated flowers */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.7 }} viewport={{ once: true }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="animate-float"
        style={{ position: "absolute", bottom: "8%", right: "2%", zIndex: 10, pointerEvents: "none", animationDelay: "0.5s" }}
      >
        <Sunflower size={50} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="animate-sway"
        style={{ position: "absolute", top: "40%", left: "1%", zIndex: 10, pointerEvents: "none", animationDelay: "1s" }}
      >
        <SmallFlower size={35} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} viewport={{ once: true }}
        transition={{ delay: 2, duration: 0.8 }}
        className="animate-float"
        style={{ position: "absolute", top: "55%", right: "8%", zIndex: 10, pointerEvents: "none", animationDelay: "2s" }}
      >
        <SmallFlower size={28} />
      </motion.div>

      {/* Main card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        style={{ width: "100%", maxWidth: "520px" }}
      >
        <InvitationCard>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-content"
          >
            {/* Heart icon */}
            <motion.div variants={itemVariants} className="hero-heart">
              <HeartIcon size={28} color="var(--color-maroon)" />
            </motion.div>

            {/* You're */}
            <motion.p variants={itemVariants} className="hero-youre">
              You&apos;re
            </motion.p>

            {/* Invited */}
            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="hero-invited font-script"
            >
              Invited
            </motion.h1>

            <SectionDivider width={160} />

            {/* Photo 1: Gandengan */}
            <motion.div 
              variants={itemVariants} 
              className="hero-photo-wrapper"
              onClick={() => onImageClick && onImageClick("/assets/faqih-eci-gandengan.png")}
              style={{ position: 'relative', cursor: 'pointer' }}
            >
              <img 
                src="/assets/faqih-eci-gandengan.png" 
                alt="Faqih & Eci" 
                className="hero-photo clickable-image"
              />
              <div className="zoom-icon-overlay">
                <ZoomIn size={16} color="#fff" />
              </div>
            </motion.div>

            {/* Greeting & Intro */}
            <motion.p variants={itemVariants} className="hero-greeting">
              Assalamu&apos;alaikum Wr. Wb.
            </motion.p>
            <motion.p variants={itemVariants} className="hero-intro">
              Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i pada acara makan bersama.
            </motion.p>

            {/* Undangan */}
            <motion.p variants={itemVariants} className="hero-undangan font-handwriting">
              Undangan
            </motion.p>

            {/* Pertemuan Dua Keluarga */}
            <motion.h2 variants={itemVariants} className="hero-title">
              Pertemuan
              <br />
              Dua Keluarga
            </motion.h2>

            {/* Sparkle lines */}
            <motion.div variants={itemVariants} className="hero-sparkle-lines" aria-hidden="true">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                <path d="M15 10 L20 2 L25 10 L20 18 Z" stroke="var(--color-maroon)" strokeWidth="1" opacity="0.5" />
                <line x1="18" y1="10" x2="5" y2="10" stroke="var(--color-maroon)" strokeWidth="0.8" opacity="0.3" />
                <line x1="22" y1="10" x2="35" y2="10" stroke="var(--color-maroon)" strokeWidth="0.8" opacity="0.3" />
              </svg>
            </motion.div>

            {/* Family names */}
            <motion.div variants={itemVariants} className="hero-families">
              <div className="hero-family">
                <span className="hero-family-label">Keluarga</span>
                <span className="hero-family-name">{invitationData.familyOne.replace("Keluarga ", "")}</span>
              </div>

              <span className="hero-ampersand font-script">&amp;</span>

              <div className="hero-family">
                <span className="hero-family-label">Keluarga</span>
                <span className="hero-family-name">{invitationData.familyTwo.replace("Keluarga ", "")}</span>
              </div>
            </motion.div>
          </motion.div>
        </InvitationCard>
      </motion.div>

      <ScrollHint />
    </section>
  );
}
