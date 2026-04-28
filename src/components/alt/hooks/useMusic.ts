import { useCallback, useEffect, useRef, useState } from "react";

/** Toggleable lofi audio. Returns audio ref + playing flag + toggle. */
export function useMusic(volume = 0.45) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);

  const tryPlay = useCallback(async () => {
    const a = audioRef.current;
    if (!a) return false;
    a.volume = volume;
    try {
      await a.play();
      setPlaying(true);
      setBlocked(false);
      return true;
    } catch {
      setPlaying(false);
      setBlocked(true);
      return false;
    }
  }, [volume]);

  // Auto-play on load; if blocked, retry once on first user gesture.
  useEffect(() => {
    let cleanedUp = false;
    let onGesture: (() => void) | null = null;

    const attempt = async () => {
      if (cleanedUp) return;
      const ok = await tryPlay();
      if (ok || cleanedUp) return;

      onGesture = () => {
        void tryPlay();
        cleanup();
      };

      const opts: AddEventListenerOptions = { passive: true, once: true };
      window.addEventListener("pointerdown", onGesture, opts);
      window.addEventListener("touchstart", onGesture, opts);
      window.addEventListener("keydown", onGesture, opts);
      window.addEventListener("wheel", onGesture, opts);
    };

    const cleanup = () => {
      if (!onGesture) return;
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("keydown", onGesture);
      window.removeEventListener("wheel", onGesture);
      onGesture = null;
    };

    void attempt();
    return () => {
      cleanedUp = true;
      cleanup();
    };
  }, [tryPlay]);

  const toggle = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = volume;
    if (!playing) {
      a.play()
        .then(() => {
          setPlaying(true);
          setBlocked(false);
        })
        .catch(() => {
          setPlaying(false);
          setBlocked(true);
        });
    } else {
      a.pause();
      setPlaying(false);
    }
  }, [playing, volume]);

  return { audioRef, playing, blocked, toggle };
}
