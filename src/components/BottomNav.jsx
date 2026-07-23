import { motion, AnimatePresence } from "framer-motion";
import { Home, Coffee, CalendarHeart, MapPin, Heart, Info, X } from "lucide-react";
import { useState, useEffect } from "react";
import "./BottomNav.css";

export default function BottomNav() {
  const [activeId, setActiveId] = useState("hero");
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const navItems = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "family", icon: Coffee, label: "Acara" },
    { id: "date", icon: CalendarHeart, label: "Waktu" },
    { id: "location", icon: MapPin, label: "Lokasi" },
    { id: "closing", icon: Heart, label: "Penutup" },
    { id: "info", icon: Info, label: "Info", isAction: true },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    const sections = navItems.filter(item => !item.isAction).map(item => document.getElementById(item.id)).filter(Boolean);
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navItems]);

  const handleClick = (e, item) => {
    e.preventDefault();
    if (item.isAction) {
      if (item.id === "info") {
        setShowDisclaimer(true);
      }
      return;
    }
    
    const el = document.getElementById(item.id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav 
        className="bottom-nav"
        initial={{ y: "100%", x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="bottom-nav-inner">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.isAction ? "#" : `#${item.id}`}
              className={`bottom-nav-item ${activeId === item.id ? "active" : ""}`}
              onClick={(e) => handleClick(e, item)}
              aria-label={item.isAction ? item.label : `Scroll to ${item.label}`}
            >
              <item.icon size={22} strokeWidth={2.5} className="bottom-nav-icon" />
              <span className="bottom-nav-label">{item.label}</span>
            </a>
          ))}
        </div>
      </motion.nav>

      <AnimatePresence>
        {showDisclaimer && (
          <motion.div 
            className="disclaimer-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDisclaimer(false)}
          >
            <motion.div 
              className="disclaimer-modal-content"
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="disclaimer-close-btn"
                onClick={() => setShowDisclaimer(false)}
                aria-label="Close"
              >
                <X size={20} strokeWidth={2} />
              </button>
              
              <Info size={32} color="var(--color-maroon)" className="disclaimer-modal-icon" />
              <h3 className="disclaimer-modal-title font-handwriting">Disclaimer Tipis-tipis 🤏</h3>
              <p className="disclaimer-modal-text">
                Semua foto ilustrasi di undangan ini murni hasil editan AI (Artificial Intelligence) yaa :) Kalau versi aslinya.. InsyaAllah nanti yaa ketika sudah halal! hihii ✨
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
