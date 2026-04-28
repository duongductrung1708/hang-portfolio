import s from "../../alt.module.css";
import { TIMELINE_CHAPTERS } from "../../data";

function PaperPlaneIcon() {
  return (
    <svg viewBox="0 0 120 120" className={s.toySvg} aria-hidden="true">
      <path
        d="M16 56 L104 18 L72 104 L56 66 L16 56 Z"
        fill="rgba(255,255,255,0.9)"
        stroke="rgba(74,21,21,0.35)"
        strokeWidth="2"
      />
      <path
        d="M56 66 L104 18"
        fill="none"
        stroke="rgba(224,120,120,0.55)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoenixIcon() {
  return (
    <svg viewBox="0 0 120 120" className={s.toySvg} aria-hidden="true">
      <path
        d="M22 80 C35 58, 44 44, 60 28 C78 46, 86 60, 98 82"
        fill="none"
        stroke="rgba(74,21,21,0.35)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[
        { cx: 44, cy: 56, r: 10, c: "rgba(255,140,170,0.85)" },
        { cx: 60, cy: 48, r: 12, c: "rgba(255,190,120,0.82)" },
        { cx: 76, cy: 58, r: 10, c: "rgba(150,220,190,0.8)" },
      ].map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={p.c} stroke="rgba(74,21,21,0.18)" />
      ))}
    </svg>
  );
}

function BoyIcon() {
  return (
    <svg viewBox="0 0 120 120" className={s.toySvg} aria-hidden="true">
      <circle cx="60" cy="50" r="22" fill="rgba(255,225,205,0.95)" stroke="rgba(74,21,21,0.22)" />
      <circle cx="52" cy="48" r="3" fill="rgba(74,21,21,0.75)" />
      <circle cx="68" cy="48" r="3" fill="rgba(74,21,21,0.75)" />
      <path d="M52 60 q8 8 16 0" fill="none" stroke="rgba(224,120,120,0.7)" strokeWidth="3" />
      <path
        d="M42 38 q10 -14 18 -10 q10 -4 20 10"
        fill="none"
        stroke="rgba(74,21,21,0.28)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <rect
        x="34"
        y="76"
        width="52"
        height="28"
        rx="14"
        fill="rgba(150,220,190,0.85)"
        stroke="rgba(74,21,21,0.18)"
      />
      <rect
        x="74"
        y="74"
        width="20"
        height="26"
        rx="10"
        fill="rgba(255,190,120,0.82)"
        stroke="rgba(74,21,21,0.18)"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 120 120" className={s.toySvg} aria-hidden="true">
      <path
        d="M60 16 L70 46 L102 46 L76 64 L86 96 L60 78 L34 96 L44 64 L18 46 L50 46 Z"
        fill="rgba(255,240,170,0.9)"
        stroke="rgba(74,21,21,0.22)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="92" cy="26" r="5" fill="rgba(255,190,120,0.85)" />
      <circle cx="26" cy="30" r="4" fill="rgba(150,220,190,0.85)" />
    </svg>
  );
}

export function Scene2() {
  return (
    <section className={`${s.sc} ${s.storyScene} ${s.timelineScene}`}>
      <div className={s.scrapWrap}>
        <div className={s.scrapRight}>
          <div className={s.scrapTimelineLine} aria-hidden="true" />
          <div className={s.scrapScroll}>
            {TIMELINE_CHAPTERS.map((chapter, index) => {
              const icon =
                index === 0 ? (
                  <PaperPlaneIcon />
                ) : index === 1 ? (
                  <BoyIcon />
                ) : index === 2 ? (
                  <StarIcon />
                ) : (
                  <PhoenixIcon />
                );

              return (
                <article
                  key={chapter.title}
                  className={`${s.scrapNote} ${index % 2 === 0 ? s.scrapNoteA : s.scrapNoteB} ${
                    index % 2 === 0 ? s.scrapSideLeft : s.scrapSideRight
                  }`}
                >
                  <div className={s.scrapDot} aria-hidden="true" />
                  <div className={s.scrapPaper}>
                    <div className={s.toyWrap}>{icon}</div>
                    <div className={s.scrapContent}>
                      <p className={s.timelinePeriod}>{chapter.period}</p>
                      <h3 className={s.scrapTitle}>
                        <span className={s.scrapIndex}>{index + 1}.</span> {chapter.title}
                      </h3>
                      <p className={s.scrapText}>{chapter.content}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
