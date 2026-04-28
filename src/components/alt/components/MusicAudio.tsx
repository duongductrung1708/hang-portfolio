import { forwardRef } from "react";
import { LOFI_SRC } from "../data";

export const MusicAudio = forwardRef<HTMLAudioElement>(function MusicAudio(_, ref) {
  return (
    <audio ref={ref} loop preload="none" crossOrigin="anonymous">
      <source src={LOFI_SRC} type="audio/mpeg" />
    </audio>
  );
});
