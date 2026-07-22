import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Disc, Pause, Play } from "lucide-react";
import "./MusicPlayer.css";

export default function MusicPlayer({ isOpened }) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("bg-music");
    if (audio) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      
      audio.addEventListener("play", handlePlay);
      audio.addEventListener("pause", handlePause);
      
      // If it's already playing when mounted
      if (!audio.paused) {
        setIsPlaying(true);
      }
      
      return () => {
        audio.removeEventListener("play", handlePlay);
        audio.removeEventListener("pause", handlePause);
      };
    }
  }, [isOpened]);

  const togglePlay = () => {
    const audio = document.getElementById("bg-music");
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(e => console.log(e));
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpened && (
        <motion.button
          className={`music-toggle-btn ${isPlaying ? "playing" : ""}`}
          onClick={togglePlay}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ delay: 1, duration: 0.5, type: "spring" }}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          <div className="music-icon-wrapper">
            <Disc size={24} className="disc-icon" />
            <div className="status-icon">
              {isPlaying ? <Pause size={10} fill="currentColor" /> : <Play size={10} fill="currentColor" />}
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
