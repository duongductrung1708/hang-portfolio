import s from "../alt.module.css";

export function About({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`${s.about} ${open ? s.on : ""}`}>
      <button className={s.aboutBack} onClick={onClose}>
        ← BACK
      </button>
      <div className={s.amirror}>
        <h2>about me?</h2>
        <p>
          I'm Trung — a frontend developer based in Vietnam. I build interfaces at the intersection
          of clean code, motion and quiet weirdness. I balance intuition with structure, chaos with
          clarity, and I always order a flat white while debugging.
        </p>
        <a className={s.acta} href="mailto:trungyna1708@gmail.com" title="Say hi">
          ✉
        </a>
      </div>
    </div>
  );
}
