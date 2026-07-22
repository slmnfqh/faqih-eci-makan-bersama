import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { invitationData } from "../data/invitation";
import { FlowerCluster, SmallFlower, Tulip, Sunflower } from "./DecorativeFlower";
import "./WelcomeCover.css";

export default function WelcomeCover({ isOpened, onOpen, onPlayMusic }) {
  const [guestName, setGuestName] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Get guest name from URL, default to empty
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to") || params.get("nama");
    if (to) {
      setGuestName(to);
    } else {
      setGuestName("Tamu Undangan");
    }
  }, []);

  const handleOpenClick = () => {
    if (onPlayMusic) onPlayMusic();
    setIsTransitioning(true);
    setTimeout(() => {
      onOpen();
    }, 1800); // 1.8s delay for burst animation to play
  };

  const renderBurst = () => {
    const elements = [
      { type: 'sunflower', angle: 0, dist: 120, size: 70 },
      { type: 'tulip', angle: 45, dist: 140, size: 60 },
      { type: 'heart', angle: 90, dist: 110, size: 40 },
      { type: 'smallflower', angle: 135, dist: 90, size: 50 },
      { type: 'sunflower', angle: 180, dist: 130, size: 65 },
      { type: 'tulip', angle: 225, dist: 150, size: 55 },
      { type: 'heart', angle: 270, dist: 120, size: 45 },
      { type: 'smallflower', angle: 315, dist: 100, size: 50 },
      // Center heart
      { type: 'bigheart', angle: 0, dist: 0, size: 100 },
    ];

    return (
      <motion.div 
        key="burst"
        className="transition-burst-container"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 100, pointerEvents: 'none' }}
      >
        {elements.map((el, i) => {
          const isHeart = el.type === 'heart' || el.type === 'bigheart';
          const Comp = isHeart ? () => (
            <svg width={el.size} height={el.size} viewBox="0 0 24 24" fill="var(--color-maroon)" stroke="var(--color-maroon)">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          ) : el.type === 'sunflower' ? Sunflower : el.type === 'tulip' ? Tulip : SmallFlower;

          const rad = el.angle * (Math.PI / 180);
          const targetX = Math.cos(rad) * el.dist;
          const targetY = Math.sin(rad) * el.dist;

          return (
            <motion.div
              key={i}
              initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
              animate={{ 
                x: targetX, 
                y: targetY, 
                scale: 1, 
                opacity: 1, 
                rotate: el.dist === 0 ? 0 : targetX * 0.5 
              }}
              transition={{
                type: "spring",
                damping: 12,
                stiffness: 100,
                delay: el.dist === 0 ? 0 : 0.1 + (i % 3) * 0.1
              }}
              style={{ position: 'absolute', marginLeft: -el.size/2, marginTop: -el.size/2 }}
            >
              {isHeart ? <Comp /> : <Comp size={el.size} />}
            </motion.div>
          );
        })}
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
          {/* Top decorations */}
          <div className="cover-decor-top">
            <FlowerCluster size={120} variant="beige" />
          </div>

          {/* Floating animations */}
          <div className="cover-floating-decor">
            {/* Big Flower */}
            <motion.div className="decor-item decor-1" animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <SmallFlower size={80} />
            </motion.div>
            
            {/* Medium Heart */}
            <motion.div className="decor-item decor-2" animate={{ y: [0, 15, 0], scale: [1, 1.2, 1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--color-dusty-red)" stroke="var(--color-dusty-red)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </motion.div>
            
            {/* Small Heart */}
            <motion.div className="decor-item decor-3" animate={{ y: [0, -10, 0], rotate: [0, -15, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
               <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="var(--color-gold)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4 }}>
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </motion.div>

            {/* Sunflower */}
            <motion.div className="decor-item decor-4" animate={{ y: [0, 25, 0], rotate: [0, -5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
              <Sunflower size={45} />
            </motion.div>

            {/* Tulip */}
            <motion.div className="decor-item decor-5" animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
              <Tulip size={55} />
            </motion.div>

            {/* Tiny Heart */}
            <motion.div className="decor-item decor-6" animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}>
               <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-dusty-red)" stroke="var(--color-dusty-red)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </motion.div>

            {/* Very Small Flower */}
            <motion.div className="decor-item decor-7" animate={{ y: [0, 15, 0], rotate: [0, -20, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}>
              <SmallFlower size={25} />
            </motion.div>
          </div>

          <AnimatePresence>
            {!isTransitioning ? (
              <motion.div 
                className="cover-content"
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key="cover-content"
              >
                <motion.p
                  className="cover-subtitle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  UNDANGAN PERTEMUAN
                </motion.p>
                
                <motion.div
                  className="cover-title-group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
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

                <motion.div
                  className="cover-guest-box"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <p className="cover-to">Kepada Yth;<br/>Bapak/Ibu/Saudara/i</p>
                  <h2 className="cover-guest-name">{guestName}</h2>
                  <p className="cover-to-bottom">Di Tempat</p>
                  
                  <button className="btn btn-primary cover-btn" onClick={handleOpenClick}>
                    Buka Undangan
                  </button>
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
