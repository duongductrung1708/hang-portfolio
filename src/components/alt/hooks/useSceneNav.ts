import { useCallback, useEffect, useRef, useState } from "react";

interface Args {
  total: number;
  enterAt: number; // scroll progress at which we should auto-enter
  introHeight: () => number;
}

/**
 * Manages the horizontal-scroll scene state once intro reaches enterAt.
 * Wires wheel/keyboard/touch as scene navigation while in HScroll mode.
 *
 * IMPORTANT: After exiting we deliberately ignore the auto-enter trigger for a
 * short cooldown window. Otherwise, exiting back into the intro lands the
 * scroll position at p ≈ 0.997, which would immediately re-enter and trap
 * the user.
 */
export function useSceneNav({ total, enterAt, introHeight }: Args, p: number) {
  const [inHScroll, setInHScroll] = useState(false);
  const [scene, setScene] = useState(0);
  const wheelLock = useRef(false);
  const tsx = useRef(0);
  // Block re-entry for a moment after exit, and also block exit (wheel-up)
  // for a moment right after enter to avoid double-fire on a single gesture.
  const exitedAt = useRef(0);
  const enteredAt = useRef(0);
  const REENTRY_COOLDOWN_MS = 700;
  const EXIT_COOLDOWN_MS = 500;

  const enter = useCallback(() => {
    setInHScroll((prev) => {
      if (prev) return prev;
      document.body.style.overflow = "hidden";
      enteredAt.current = Date.now();
      return true;
    });
    setScene(0);
  }, []);

  const exit = useCallback(() => {
    setInHScroll((prev) => {
      if (!prev) return prev;
      document.body.style.overflow = "";
      exitedAt.current = Date.now();
      // release any pending wheel lock so the user can scroll freely again
      wheelLock.current = false;
      // Land 2px before the very bottom so progress is < enterAt and the
      // auto-enter effect does NOT immediately re-fire.
      const target = Math.max(0, introHeight() - window.innerHeight - 24);
      window.scrollTo({ top: target, behavior: "auto" });
      return false;
    });
  }, [introHeight]);

  const go = useCallback(
    (i: number) => {
      setScene(Math.max(0, Math.min(total - 1, i)));
    },
    [total],
  );

  // Auto-enter when scroll reaches threshold (with cooldown after exit)
  useEffect(() => {
    if (inHScroll) return;
    if (p < enterAt) return;
    if (Date.now() - exitedAt.current < REENTRY_COOLDOWN_MS) return;
    enter();
  }, [p, enterAt, inHScroll, enter]);

  // Wheel
  useEffect(() => {
    if (!inHScroll) return;
    const onWheel = (e: WheelEvent) => {
      if (wheelLock.current) return;
      const d = e.deltaY || e.deltaX;
      if (Math.abs(d) < 8) return;
      wheelLock.current = true;
      setTimeout(() => (wheelLock.current = false), 700);
      setScene((cur) => {
        if (d > 0) {
          return cur < total - 1 ? cur + 1 : cur;
        }
        if (cur > 0) return cur - 1;
        // Only allow wheel-up to exit if we've been in HScroll for a moment.
        if (Date.now() - enteredAt.current < EXIT_COOLDOWN_MS) return cur;
        queueMicrotask(exit);
        return cur;
      });
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [inHScroll, total, exit]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!inHScroll) return;
      if (e.key === "ArrowRight") setScene((c) => Math.min(total - 1, c + 1));
      else if (e.key === "ArrowLeft")
        setScene((c) => {
          if (c === 0) {
            queueMicrotask(exit);
            return c;
          }
          return c - 1;
        });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [inHScroll, total, exit]);

  // Touch
  useEffect(() => {
    const onStart = (e: TouchEvent) => {
      tsx.current = e.touches[0]!.clientX;
    };
    const onEnd = (e: TouchEvent) => {
      if (!inHScroll) return;
      const dx = e.changedTouches[0]!.clientX - tsx.current;
      if (Math.abs(dx) < 40) return;
      if (dx < 0) setScene((c) => Math.min(total - 1, c + 1));
      else
        setScene((c) => {
          if (c === 0) {
            if (Date.now() - enteredAt.current < EXIT_COOLDOWN_MS) return c;
            queueMicrotask(exit);
            return c;
          }
          return c - 1;
        });
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [inHScroll, total, exit]);

  // Cleanup body overflow on unmount in case we leave the page mid-HScroll.
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return { inHScroll, scene, enter, exit, go };
}
