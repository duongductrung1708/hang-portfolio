import { useEffect, useRef, useState } from "react";
import { TITLE_FONTS } from "../data";

const FONT_TICK = 120; // ms between font swaps

/**
 * Cycles the big "ALt." title font until disabled.
 * When disabled, keeps the last font (so the header can lock-in).
 */
export function useFontCycle(enabled: boolean) {
  const [idx, setIdx] = useState(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      if (timer.current != null) {
        window.clearInterval(timer.current);
        timer.current = null;
      }
      return;
    }

    timer.current = window.setInterval(() => {
      setIdx((prev) => (prev + 1) % TITLE_FONTS.length);
    }, FONT_TICK);

    return () => {
      if (timer.current != null) {
        window.clearInterval(timer.current);
        timer.current = null;
      }
    };
  }, [enabled]);

  return TITLE_FONTS[idx];
}
