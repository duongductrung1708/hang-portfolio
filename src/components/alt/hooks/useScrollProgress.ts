import { useEffect, useState } from "react";

/**
 * Tracks scroll progress (0..1) of a target element relative to its scrollable
 * range (offsetHeight - viewport). Recomputes on scroll/resize.
 */
export function useScrollProgress(targetRef: React.RefObject<HTMLElement | null>, enabled = true) {
  const [p, setP] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const update = () => {
      const el = targetRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) {
        setP(0);
        return;
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setP(scrolled / total);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetRef, enabled]);

  return p;
}
