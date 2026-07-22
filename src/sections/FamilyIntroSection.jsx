import { motion } from "framer-motion";
import { motionTokens } from "../data/invitation";
import InvitationCard from "../components/InvitationCard";
import SectionDivider from "../components/SectionDivider";
import AnimatedSection from "../components/AnimatedSection";
import {
  RibbonBow,
  SmallStars,
} from "../components/FloatingOrnament";
import { SageLeaf, SmallFlower, Sunflower, Tulip } from "../components/DecorativeFlower";
import { Users, Heart, MessageCircle, Smile, Coffee } from "lucide-react";
import "./FamilyIntroSection.css";

const activities = [
  { icon: Users, text: "cuma ingin duduk bareng" },
  { icon: Heart, text: "saling kenalan" },
  { icon: MessageCircle, text: "ngobrol santai" },
  { icon: Smile, text: "ketawa bareng" },
  { icon: Coffee, text: "menikmati momen bersama" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionTokens.stagger * 2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, x: -8 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: motionTokens.durationBase,
      ease: motionTokens.easeSoft,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: motionTokens.durationFast,
      ease: motionTokens.easeSoft,
    },
  },
};

export default function FamilyIntroSection({ onImageClick }) {
  return (
    <AnimatedSection className="family-section" id="family">
      {/* Sage leaf decoration - left */}
      <motion.div
        className="family-sage-leaf"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <SageLeaf size={200} />
      </motion.div>

      {/* Small flower - bottom right */}
      <motion.div
        className="family-flower"
        initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <SmallFlower size={40} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.8 }}
        style={{ position: "absolute", top: "20%", right: "10%", zIndex: 10, pointerEvents: "none" }}
      >
        <Sunflower size={80} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.8 }}
        style={{ position: "absolute", bottom: "30%", left: "5%", zIndex: 10, pointerEvents: "none" }}
      >
        <Tulip size={70} flip />
      </motion.div>

      {/* Ribbon bow - top right */}
      <motion.div
        className="family-ribbon"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <RibbonBow size={70} />
      </motion.div>

      {/* Stars decoration */}
      <motion.div
        className="family-stars animate-twinkle"
        style={{ animationDelay: "1s" }}
      >
        <SmallStars />
      </motion.div>

      <InvitationCard>
        {/* Title */}
        <motion.div
          className="family-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: motionTokens.durationBase }}
        >
          <h2 className="family-title font-script" id="family-heading">
            Halloo
            <br />
            Keluarga
          </h2>

          <motion.div
            className="family-icon-group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <g stroke="var(--color-maroon)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
                <circle cx="14" cy="10" r="4" />
                <path d="M14 14 L14 24" />
                <path d="M14 18 L8 22" />
                <path d="M14 18 L20 22" />
                <circle cx="26" cy="13" r="3" />
                <path d="M26 16 L26 24" />
                <path d="M26 19 L22 22" />
                <path d="M26 19 L30 22" />
              </g>
            </svg>
          </motion.div>
        </motion.div>

        <SectionDivider width={180} />

        {/* Activity list */}
        <motion.ul
          className="family-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <motion.li key={index} className="family-list-item" variants={itemVariants}>
                <motion.span className="family-list-icon" variants={iconVariants}>
                  <IconComponent
                    size={22}
                    color="var(--color-dusty-red)"
                    strokeWidth={2}
                  />
                </motion.span>
                <span className="family-list-text font-handwriting">
                  {activity.text}
                </span>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Bottom heart decoration */}
        <motion.div
          className="family-bottom-heart"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <svg width="60" height="30" viewBox="0 0 60 30" fill="none" aria-hidden="true">
            <path
              d="M10 15 Q30 -5, 50 15"
              stroke="var(--color-dusty-red)"
              strokeWidth="1.2"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M30 25 C28 20, 22 18, 22 22 C22 26, 30 30, 30 30 C30 30, 38 26, 38 22 C38 18, 32 20, 30 25"
              fill="var(--color-dusty-red)"
              opacity="0.4"
            />
          </svg>
        </motion.div>
      </InvitationCard>
    </AnimatedSection>
  );
}
