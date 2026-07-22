import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { invitationData } from "../data/invitation";
import { FlowerCluster, SmallFlower, Tulip, Sunflower } from "./DecorativeFlower";
import "./WelcomeCover.css";

export default function WelcomeCover({ isOpened, onOpen, onPlayMusic }) {
  const [guestName, setGuestName] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to") || params.get("nama");
    setGuestName(to || "Tamu Undangan");
  }, []);

  const handleOpenClick = () => {
    if (onPlayMusic) onPlayMusic();
    setIsTransitioning(true);
    setTimeout(() => {
      onOpen();
    }, 2000);
  };

  const renderBurst = () => {
    const petals = [];
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * 360;
      const dist = 80 + Math.random() * 120;
      const size = 12 + Math.random() * 20;
      const rad = angle * (Math.PI / 180);
      const tx = Math.cos(rad) * dist;
      const ty = Math.sin(rad) * dist;
      petals.push({ tx, ty, size, delay: Math.random() * 0.3, rotate: Math.random() * 360 });
    }

    return (
      <motion.div
        key="burst"
        className="burst-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Center big heart */}
        <motion.div
          className="burst-center-heart"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.4, 1], opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="var(--color-maroon)">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </motion.div>

        {/* Radial flower burst */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = angle * (Math.PI / 180);
          const components = [Sunflower, Tulip, SmallFlower];
          const Comp = components[i % 3];
          const dist = 100 + (i % 2) * 40;
          return (
            <motion.div
              key={`flower-${i}`}
              className="burst-flower"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
              animate={{
                x: Math.cos(rad) * dist,
                y: Math.sin(rad) * dist,
                scale: 1,
                opacity: [0, 1, 1, 0.6],
                rotate: angle * 0.3,
              }}
              transition={{ type: "spring", damping: 14, stiffness: 120, delay: 0.15 + i * 0.06 }}
            >
              <Comp size={40 + (i % 2) * 15} />
            </motion.div>
          );
        })}

        {/* Scattered petals */}
        {petals.map((p, i) => (
          <motion.div
            key={`petal-${i}`}
            className="burst-petal"
            initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
            animate={{
              x: p.tx,
              y: p.ty,
              scale: [0, 1.2, 0.8],
              opacity: [0, 1, 0],
              rotate: p.rotate,
            }}
            transition={{ duration: 1.2, delay: p.delay, ease: "easeOut" }}
          >
            <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill={i % 2 === 0 ? "var(--color-dusty-red)" : "var(--color-gold)"} opacity="0.7">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </motion.div>
        ))}

        {/* Shimmer ring */}
        <motion.div
          className="burst-ring"
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        />
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          className="welcome-cover"
          initial={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
        >
          {/* Animated golden shimmer lines */}
          <div className="cover-shimmer-lines">
            <div className="shimmer-line shimmer-1" />
            <div className="shimmer-line shimmer-2" />
            <div className="shimmer-line shimmer-3" />
          </div>

          {/* Top flower decorations */}
          <motion.div
            className="cover-decor-top"
            initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
            animate={{ opacity: 0.85, scale: 1, rotate: 15 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          >
            <FlowerCluster size={130} variant="beige" />
          </motion.div>

          {/* Bottom flower decorations */}
          <motion.div
            className="cover-decor-bottom"
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            animate={{ opacity: 0.85, scale: 1, rotate: -15 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            <FlowerCluster size={140} variant="sage" flip />
          </motion.div>

          {/* Floating decorations */}
          <div className="cover-floating-decor">
            <motion.div className="decor-item decor-1" animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <SmallFlower size={65} />
            </motion.div>

            <motion.div className="decor-item decor-2" animate={{ y: [0, 12, 0], scale: [1, 1.15, 1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--color-dusty-red)" style={{ opacity: 0.4 }}>
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </motion.div>

            <motion.div className="decor-item decor-3" animate={{ y: [0, -10, 0], rotate: [0, -12, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-gold)" style={{ opacity: 0.35 }}>
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </motion.div>

            <motion.div className="decor-item decor-4" animate={{ y: [0, 20, 0], rotate: [0, -4, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
              <Sunflower size={40} />
            </motion.div>

            <motion.div className="decor-item decor-5" animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
              <Tulip size={48} />
            </motion.div>

            <motion.div className="decor-item decor-6" animate={{ y: [0, -16, 0], x: [0, 8, 0], scale: [0.85, 1.15, 0.85] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="var(--color-dusty-red)" style={{ opacity: 0.5 }}>
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </motion.div>

            <motion.div className="decor-item decor-7" animate={{ y: [0, 12, 0], rotate: [0, -16, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}>
              <SmallFlower size={22} />
            </motion.div>
          </div>

          {/* Main content area */}
          <AnimatePresence mode="wait">
            {!isTransitioning ? (
              <motion.div
                className="cover-content"
                exit={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                key="cover-content"
              >
                {/* Envelope icon */}
                <motion.div
                  className="cover-envelope"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Mail size={20} color="var(--color-gold)" strokeWidth={1.5} />
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  className="cover-subtitle"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  UNDANGAN PERTEMUAN
                </motion.p>

                {/* Names */}
                <motion.div
                  className="cover-title-group"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h1 className="cover-title-name font-handwriting">
                    {invitationData.familyOne}
                  </h1>
                  <div className="cover-ampersand-wrapper">
                    <span className="cover-ampersand font-script">&</span>
                  </div>
                  <h1 className="cover-title-name font-handwriting">
                    {invitationData.familyTwo}
                  </h1>
                </motion.div>

                {/* Divider */}
                <motion.div
                  className="cover-divider"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                />

                {/* Guest info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                  <p className="cover-to">Kepada Yth,<br />Bapak/Ibu/Saudara/i</p>
                  <h2 className="cover-guest-name font-handwriting">{guestName}</h2>
                  <p className="cover-to-bottom">Di Tempat</p>

                  <motion.button
                    className="btn btn-primary cover-btn"
                    onClick={handleOpenClick}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Mail size={16} strokeWidth={2} />
                    <span>Buka Undangan</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            ) : (
              renderBurst()
            )}
          </AnimatePresence>

          {/* Bottom decorations */}
          <div className="cover-decor-bottom">
            <FlowerCluster size={140} variant="sage" flip />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
