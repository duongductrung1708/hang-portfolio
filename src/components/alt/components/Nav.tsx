import s from "../alt.module.css";
import { SCENES } from "../data";

interface Props {
  scene: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onMenu: () => void;
  onInfo: () => void;
  onDot: (i: number) => void;
  visible: boolean;
}

export function Nav({ scene, total, onPrev, onNext, onMenu, onInfo, onDot, visible }: Props) {
  const meta = SCENES[scene];
  return (
    <nav className={`${s.nav} ${visible ? s.on : ""}`}>
      <span className={s.scName}>
        {scene + 1}/{total} · {meta?.name ?? ""}
      </span>

      <button className={s.nb} onClick={onInfo} aria-label="About" data-nb>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="11" x2="12" y2="17" />
          <circle cx="12" cy="7.5" r="1.2" fill="currentColor" />
        </svg>
      </button>
      <div className={s.nsep} />
      <button className={s.nb} onClick={onMenu} aria-label="Menu" data-nb>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </svg>
      </button>
      <div className={s.nsep} />
      <button
        className={s.nb}
        onClick={onPrev}
        aria-label="Previous"
        data-nb
        style={{ opacity: scene === 0 ? 0.35 : undefined }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="14 6 8 12 14 18" />
        </svg>
      </button>
      <div className={s.ndots}>
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            className={`${s.nd} ${i === scene ? s.A : ""}`}
            onClick={() => onDot(i)}
            aria-label={`Scene ${i + 1}`}
            data-nd
          />
        ))}
      </div>
      <button
        className={s.nb}
        onClick={onNext}
        aria-label="Next"
        data-nb
        style={{ opacity: scene === total - 1 ? 0.35 : undefined }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="10 6 16 12 10 18" />
        </svg>
      </button>
    </nav>
  );
}
