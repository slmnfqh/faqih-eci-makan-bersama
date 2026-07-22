import { motion } from "framer-motion";
import { invitationData, motionTokens } from "../data/invitation";
import InvitationCard from "../components/InvitationCard";
import SectionDivider from "../components/SectionDivider";
import AnimatedSection from "../components/AnimatedSection";
import {
  LocationPin,
  RibbonLarge,
  DiningTable,
  StarIcon,
} from "../components/FloatingOrnament";
import { FlowerCluster, SageLeaf, Sunflower, Tulip, SmallFlower } from "../components/DecorativeFlower";
import { Navigation } from "lucide-react";
import "./LocationSection.css";

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

export default function LocationSection() {
  return (
    <AnimatedSection className="location-section" id="location">
      {/* Ribbon - top right */}
      <motion.div
        className="location-ribbon"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <RibbonLarge />
      </motion.div>

      {/* Sage leaves and flowers - bottom left */}
      <motion.div
        className="location-leaf-flowers"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <SageLeaf size={160} />
        <FlowerCluster
          size={70}
          variant="beige"
          style={{ position: "absolute", bottom: "20px", left: "15px" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="animate-float"
        style={{ position: "absolute", top: "15%", left: "5%", zIndex: 10, pointerEvents: "none" }}
      >
        <Sunflower size={85} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="animate-sway"
        style={{ position: "absolute", bottom: "20%", right: "8%", zIndex: 10, pointerEvents: "none" }}
      >
        <Tulip size={75} />
      </motion.div>

      {/* Extra animated flowers */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
        className="animate-sway"
        style={{ position: "absolute", top: "55%", left: "3%", zIndex: 10, pointerEvents: "none", animationDelay: "1.5s" }}
      >
        <Tulip size={60} flip />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.55 }} viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="animate-float"
        style={{ position: "absolute", top: "30%", right: "5%", zIndex: 10, pointerEvents: "none", animationDelay: "0.8s" }}
      >
        <SmallFlower size={35} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} viewport={{ once: true }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="animate-float"
        style={{ position: "absolute", bottom: "12%", left: "10%", zIndex: 10, pointerEvents: "none", animationDelay: "2.5s" }}
      >
        <Sunflower size={50} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} viewport={{ once: true }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="animate-sway"
        style={{ position: "absolute", bottom: "40%", right: "3%", zIndex: 10, pointerEvents: "none", animationDelay: "1s" }}
      >
        <SmallFlower size={28} />
      </motion.div>

      {/* Star accent */}
      <motion.div
        className="location-star animate-twinkle"
        style={{ animationDelay: "1s" }}
      >
        <StarIcon size={28} color="var(--color-gold)" />
      </motion.div>

      <InvitationCard>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="location-content"
        >
          {/* Location pin */}
          <motion.div
            variants={itemVariants}
            className="location-pin"
          >
            <LocationPin size={48} />
          </motion.div>

          <SectionDivider width={140} />

          {/* Lokasi title */}
          <motion.h2
            variants={itemVariants}
            className="location-title font-script"
            id="location-heading"
          >
            lokasi
          </motion.h2>

          {/* Location name */}
          <motion.p variants={itemVariants} className="location-name">
            {invitationData.locationName.split(" ").slice(0, 2).join(" ")}
            <br />
            {invitationData.locationName.split(" ").slice(2).join(" ")}
          </motion.p>

          {/* Embedded Google Maps */}
          <motion.div variants={itemVariants} className="location-map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.488206164526!2d106.87308569999999!3d-6.3307343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed01827b9615%3A0xd7524fd8722534ab!2sKampung%20kecil%20ciracas!5e0!3m2!1sid!2sid!4v1784705427830!5m2!1sid!2sid"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi"
            ></iframe>
          </motion.div>

          {/* Google Maps button */}
          <motion.div variants={itemVariants}>
            <a
              href={invitationData.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary location-btn"
              aria-label="Buka lokasi di Google Maps"
            >
              <Navigation size={18} aria-hidden="true" />
              Buka Google Maps
            </a>
          </motion.div>
        </motion.div>
      </InvitationCard>
    </AnimatedSection>
  );
}
