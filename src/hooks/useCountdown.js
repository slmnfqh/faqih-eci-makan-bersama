import { useState, useEffect, useCallback, useRef } from "react";
import { toZonedTime } from "date-fns-tz";

/**
 * Calculate countdown values to a target date in a specific timezone.
 * Handles three states: counting, ongoing event, and finished event.
 */
export function getCountdownValues(targetStart, targetEnd, timezone) {
  const now = toZonedTime(new Date(), timezone);
  const start = toZonedTime(new Date(targetStart), timezone);
  const end = toZonedTime(new Date(targetEnd), timezone);

  const diffToStart = start.getTime() - now.getTime();
  const diffToEnd = end.getTime() - now.getTime();

  if (diffToStart > 0) {
    // Event hasn't started
    const totalSeconds = Math.floor(diffToStart / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
      status: "counting",
    };
  }

  if (diffToEnd > 0) {
    // Event is ongoing
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      status: "ongoing",
    };
  }

  // Event is finished
  return {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    status: "finished",
  };
}

export function useCountdown(targetStart, targetEnd, timezone) {
  const [mounted, setMounted] = useState(false);
  const [values, setValues] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    status: "counting",
  });
  const intervalRef = useRef(null);

  const update = useCallback(() => {
    setValues(getCountdownValues(targetStart, targetEnd, timezone));
  }, [targetStart, targetEnd, timezone]);

  useEffect(() => {
    // Initial calculation after mount to avoid hydration mismatch
    update();
    setMounted(true);

    intervalRef.current = setInterval(update, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [update]);

  return { ...values, mounted };
}
