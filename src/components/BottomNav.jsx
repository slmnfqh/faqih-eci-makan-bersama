import { motion } from "framer-motion";
import { Home, Coffee, CalendarHeart, MapPin, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import "./BottomNav.css";

export default function BottomNav() {
  const [activeId, setActiveId] = useState("hero");

  const navItems = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "family", icon: Coffee, label: "Acara" },
    { id: "date", icon: CalendarHeart, label: "Waktu" },
    { id: "location", icon: MapPin, label: "Lokasi" },
    { id: "closing", icon: Heart, label: "Penutup" },
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

    const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
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
            href={`#${item.id}`}
            className={`bottom-nav-item ${activeId === item.id ? "active" : ""}`}
            onClick={(e) => handleClick(e, item.id)}
            aria-label={`Scroll to ${item.label}`}
          >
            <item.icon size={22} strokeWidth={2.5} className="bottom-nav-icon" />
            <span className="bottom-nav-label">{item.label}</span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
