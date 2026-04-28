import s from "../alt.module.css";
import { LOFI_TITLE } from "../data";

interface Props {
  showLogo: boolean;
  showLeft: boolean;
  playing: boolean;
  onToggleMusic: () => void;
  logoRef?: React.Ref<HTMLDivElement>;
  logoFont?: string;
}

export function Header({ showLogo, showLeft, playing, onToggleMusic, logoRef, logoFont }: Props) {
  return (
    <header className={s.hdr}>
      <div className={`${s.hdrLeft} ${showLeft ? s.on : ""}`}>
        (một bảo bình gom nắng vào lòng)
      </div>
      <div
        ref={logoRef}
        className={`${s.hdrLogo} ${showLogo ? s.on : ""}`}
        style={logoFont ? { fontFamily: logoFont } : undefined}
      >
        H.H
      </div>
      <div className={s.hdrRight}>
        <span className={`${s.nowPlay} ${playing ? s.show : ""}`} aria-live="polite">
          {LOFI_TITLE}
        </span>
        <button
          className={`${s.musicBtn} ${playing ? s.playing : ""}`}
          onClick={onToggleMusic}
          aria-label="Bật/tắt nhạc"
          title={playing ? "Tạm dừng nhạc" : "Bật nhạc"}
          data-music-btn
        >
          <span className={s.ic}>{playing ? null : <span className={s.playTri} />}</span>
          <span className={s.eq} aria-hidden>
            <i />
            <i />
            <i />
            <i />
          </span>
        </button>
      </div>
    </header>
  );
}
