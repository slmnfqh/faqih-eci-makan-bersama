import { AnimatePresence, motion } from "framer-motion";
import { useCountdown } from "../hooks/useCountdown";
import { invitationData, motionTokens } from "../data/invitation";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useEffect, useRef } from "react";
import "./Countdown.css";

const targetStart = `${invitationData.date}T${invitationData.startTime}:00+07:00`;
const targetEnd = `${invitationData.date}T${invitationData.endTime}:00+07:00`;

function CountdownDigit({ value, label }) {
  const displayValue = String(value).padStart(2, "0");

  return (
    <div className="countdown-item">
      <div className="countdown-digit-wrapper">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={displayValue}
            className="countdown-digit"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{
              duration: motionTokens.durationFast,
              ease: motionTokens.easeSoft,
            }}
          >
            {displayValue}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="countdown-label">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds, status, mounted } = useCountdown(
    targetStart,
    targetEnd,
    invitationData.timezone
  );
  const prefersReduced = useReducedMotion();
  const confettiFired = useRef(false);

  useEffect(() => {
    if (status === "ongoing" && !confettiFired.current && !prefersReduced) {
      confettiFired.current = true;
      import("canvas-confetti").then((mod) => {
        const confetti = mod.default;
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#8f1f24", "#c7b29c", "#9c8424", "#fff9e8", "#b74a52"],
          disableForReducedMotion: true,
        });
      });
    }
  }, [status, prefersReduced]);

  if (!mounted) {
    return (
      <div className="countdown-container" aria-label="Countdown menuju acara">
        <div className="countdown-grid">
          <CountdownDigit value={0} label="Hari" />
          <CountdownDigit value={0} label="Jam" />
          <CountdownDigit value={0} label="Menit" />
          <CountdownDigit value={0} label="Detik" />
        </div>
      </div>
    );
  }

  if (status === "ongoing") {
    return (
      <div className="countdown-container">
        <motion.p
          className="countdown-message"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: motionTokens.durationBase }}
        >
          Acara sedang berlangsung
        </motion.p>
      </div>
    );
  }

  if (status === "finished") {
    return (
      <div className="countdown-container">
        <motion.p
          className="countdown-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: motionTokens.durationBase }}
        >
          Acara telah selesai. Terima kasih sudah menjadi bagian dari momen ini 🤍
        </motion.p>
      </div>
    );
  }

  return (
    <div className="countdown-container" aria-label="Countdown menuju acara">
      <div className="countdown-grid">
        <CountdownDigit value={days} label="Hari" />
        <CountdownDigit value={hours} label="Jam" />
        <CountdownDigit value={minutes} label="Menit" />
        <CountdownDigit value={seconds} label="Detik" />
      </div>
    </div>
  );
}
