import { motion } from "framer-motion";
import { invitationData, motionTokens } from "../data/invitation";
import InvitationCard from "../components/InvitationCard";
import SectionDivider from "../components/SectionDivider";
import AnimatedSection from "../components/AnimatedSection";
import Countdown from "../components/Countdown";
import {
  CalendarIcon,
  AlarmClock,
  SparkleIcon,
  RibbonBow,
} from "../components/FloatingOrnament";
import { FlowerCluster, Sunflower, Tulip, SmallFlower } from "../components/DecorativeFlower";
import "./DateSection.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.durationBase,
      ease: motionTokens.easeSoft,
    },
  },
};

export default function DateSection() {
  return (
    <AnimatedSection className="date-section" id="date">
      {/* White flower - top left */}
      <motion.div
        className="date-flower-top-left"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <FlowerCluster size={120} variant="white" />
      </motion.div>

      {/* Beige flower - bottom right */}
      <motion.div
        className="date-flower-bottom-right"
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <FlowerCluster size={130} variant="sage" flip />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="animate-sway"
        style={{ position: "absolute", bottom: "10%", left: "5%", zIndex: 10, pointerEvents: "none" }}
      >
        <Tulip size={80} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="animate-float"
        style={{ position: "absolute", top: "15%", right: "8%", zIndex: 10, pointerEvents: "none" }}
      >
        <Sunflower size={90} />
      </motion.div>

      {/* Extra animated flowers */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.65 }} viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
        className="animate-float"
        style={{ position: "absolute", top: "50%", left: "4%", zIndex: 10, pointerEvents: "none", animationDelay: "1.5s" }}
      >
        <Sunflower size={55} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="animate-sway"
        style={{ position: "absolute", bottom: "25%", right: "5%", zIndex: 10, pointerEvents: "none", animationDelay: "0.8s" }}
      >
        <Tulip size={65} flip />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} viewport={{ once: true }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="animate-float"
        style={{ position: "absolute", top: "35%", left: "8%", zIndex: 10, pointerEvents: "none", animationDelay: "2s" }}
      >
        <SmallFlower size={30} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} viewport={{ once: true }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="animate-sway"
        style={{ position: "absolute", top: "65%", right: "10%", zIndex: 10, pointerEvents: "none", animationDelay: "1s" }}
      >
        <SmallFlower size={25} />
      </motion.div>

      {/* Sparkles */}
      <motion.div
        className="date-sparkle-left animate-twinkle"
        style={{ animationDelay: "0.5s" }}
      >
        <SparkleIcon size={16} />
      </motion.div>
      <motion.div
        className="date-sparkle-right animate-twinkle"
        style={{ animationDelay: "1.5s" }}
      >
        <SparkleIcon size={20} />
      </motion.div>
      <motion.div
        className="date-sparkle-right-2 animate-twinkle"
        style={{ animationDelay: "2.5s" }}
      >
        <SparkleIcon size={14} />
      </motion.div>
      <motion.div
        className="date-sparkle-left-2 animate-twinkle"
        style={{ animationDelay: "0s" }}
      >
        <SparkleIcon size={18} />
      </motion.div>

      <InvitationCard>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="date-content"
        >
          {/* Calendar icon */}
          <motion.div variants={itemVariants} className="date-calendar">
            <CalendarIcon size={56} />
          </motion.div>

          {/* Save the date */}
          <motion.h2
            variants={itemVariants}
            className="date-title font-script"
            id="date-heading"
          >
            save the date
          </motion.h2>

          <SectionDivider width={160} />

          {/* Day name */}
          <motion.p variants={itemVariants} className="date-day">
            {invitationData.dayName}
          </motion.p>

          {/* Date */}
          <motion.p variants={itemVariants} className="date-date">
            {invitationData.dateFormatted}
          </motion.p>

          {/* Divider with ribbon */}
          <motion.div variants={itemVariants} className="date-ribbon-divider">
            <div className="date-line" />
            <RibbonBow size={40} />
            <div className="date-line" />
          </motion.div>

          {/* Time */}
          <motion.div variants={itemVariants} className="date-time">
            <AlarmClock size={28} />
            <span className="date-time-text">
              {invitationData.startTime.replace(":", ".")} -{" "}
              {invitationData.endTime.replace(":", ".")}
            </span>
          </motion.div>

          {/* Countdown */}
          <motion.div variants={itemVariants}>
            <Countdown />
          </motion.div>
        </motion.div>
      </InvitationCard>
    </AnimatedSection>
  );
}
