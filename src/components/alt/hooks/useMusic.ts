import { useCallback, useRef, useState } from "react";

/** Toggleable lofi audio. Returns audio ref + playing flag + toggle. */
export function useMusic(volume = 0.45) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);

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
