import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { useReducedMotion } from "./hooks/useReducedMotion";
import HeroSection from "./sections/HeroSection";
import FamilyIntroSection from "./sections/FamilyIntroSection";
import DateSection from "./sections/DateSection";
import LocationSection from "./sections/LocationSection";
import ClosingSection from "./sections/ClosingSection";
import BottomNav from "./components/BottomNav";
import WelcomeCover from "./components/WelcomeCover";
import LoadingScreen from "./components/LoadingScreen";
import MusicPlayer from "./components/MusicPlayer";
import ImageLightbox from "./components/ImageLightbox";
import "./styles/globals.css";

export default function App() {
  const prefersReduced = useReducedMotion();
  const [isLoading, setIsLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Lock scroll if not opened
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpened]);

  useEffect(() => {
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    if (!isOpened) {
      lenis.stop();
    } else {
      lenis.start();
    }

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [prefersReduced, isOpened]);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      {!isLoading && (
        <WelcomeCover 
          isOpened={isOpened} 
          onPlayMusic={() => {
            const audio = document.getElementById("bg-music");
            if (audio) {
              audio.play().catch(err => console.log("Audio block:", err));
            }
          }}
          onOpen={() => setIsOpened(true)} 
        />
      )}

      <a href="#hero" className="skip-link">
        Skip to main content
      </a>

      <main>
        <HeroSection onImageClick={setLightboxImage} />
        <FamilyIntroSection onImageClick={setLightboxImage} />
        <DateSection />
        <LocationSection />
        <ClosingSection onImageClick={setLightboxImage} />
      </main>

      {isOpened && <BottomNav />}
      <audio id="bg-music" loop src="/assets/music/Waking Up Together With You [XJ1Jigjg1wo].mp3" />
      <MusicPlayer isOpened={isOpened} />
      
      <ImageLightbox 
        src={lightboxImage} 
        onClose={() => setLightboxImage(null)} 
      />
    </>
  );
}
