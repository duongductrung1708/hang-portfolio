import s from "../../alt.module.css";
import { LITTLE_WORLD_ITEMS } from "../../data";

function BookIcon() {
  return (
    <svg viewBox="0 0 120 120" className={s.toySvg} aria-hidden="true">
      <path
        d="M26 30 h52 a10 10 0 0 1 10 10 v56 a10 10 0 0 1-10 10 H26 a10 10 0 0 1-10-10 V40 a10 10 0 0 1 10-10 Z"
        fill="rgba(255,240,170,0.92)"
        stroke="rgba(74,21,21,0.22)"
        strokeWidth="2"
      />
      <path d="M34 40 h44" stroke="rgba(74,21,21,0.25)" strokeWidth="3" strokeLinecap="round" />
      <path d="M34 52 h38" stroke="rgba(224,120,120,0.55)" strokeWidth="3" strokeLinecap="round" />
      <path d="M34 64 h42" stroke="rgba(150,220,190,0.55)" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M78 30 h10 a10 10 0 0 1 10 10 v56 a10 10 0 0 1-10 10 H78"
        fill="rgba(255,190,120,0.38)"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 120 120" className={s.toySvg} aria-hidden="true">
      <path
        d="M60 98 C34 78, 22 64, 22 48 C22 36, 31 28, 42 28 C50 28, 57 32, 60 38 C63 32, 70 28, 78 28 C89 28, 98 36, 98 48 C98 64, 86 78, 60 98 Z"
        fill="rgba(255,140,170,0.86)"
        stroke="rgba(74,21,21,0.22)"
        strokeWidth="2"
      />
      <circle cx="86" cy="40" r="6" fill="rgba(255,255,255,0.75)" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg viewBox="0 0 120 120" className={s.toySvg} aria-hidden="true">
      <path
        d="M60 20 C36 20, 20 38, 20 60 C20 82, 38 100, 60 100 C70 100, 74 92, 72 86 C70 80, 74 76, 82 76 H86 C98 76, 104 66, 100 54 C95 36, 80 20, 60 20 Z"
        fill="rgba(255,225,205,0.95)"
        stroke="rgba(74,21,21,0.22)"
        strokeWidth="2"
      />
      {[
        { cx: 44, cy: 50, c: "rgba(255,140,170,0.85)" },
        { cx: 60, cy: 44, c: "rgba(255,190,120,0.85)" },
        { cx: 74, cy: 54, c: "rgba(150,220,190,0.85)" },
        { cx: 56, cy: 66, c: "rgba(185,165,245,0.85)" },
      ].map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r="6" fill={p.c} stroke="rgba(74,21,21,0.16)" />
      ))}
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 120 120" className={s.toySvg} aria-hidden="true">
      <circle cx="60" cy="60" r="20" fill="rgba(255,240,170,0.92)" stroke="rgba(74,21,21,0.2)" />
      {Array.from({ length: 10 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 10;
        const x1 = 60 + Math.cos(a) * 30;
        const y1 = 60 + Math.sin(a) * 30;
        const x2 = 60 + Math.cos(a) * 42;
        const y2 = 60 + Math.sin(a) * 42;
        return (
          <path
            key={i}
            d={`M ${x1} ${y1} L ${x2} ${y2}`}
            stroke="rgba(255,190,120,0.75)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export interface Scene3Props {
  onOpenDoor?: () => void;
}

export function Scene3(_props: Scene3Props = {}) {
  const icons = [<BookIcon />, <HeartIcon />, <PaletteIcon />, <SunIcon />];

  return (
    <section className={`${s.sc} ${s.panelScene} ${s.scene3Scene}`}>
      <div className={s.toyGrid}>
        {LITTLE_WORLD_ITEMS.map((item, index) => (
          <article
            className={`${s.toyCard} ${index % 2 === 0 ? s.toyCardWarm : s.toyCardMint}`}
            key={item.title}
          >
            <div className={s.toyTop}>
              <div className={s.toyBadge}>0{index + 1}</div>
              <div className={s.toyIcon}>{icons[index % icons.length]}</div>
            </div>
            <h3 className={s.toyTitle}>{item.title}</h3>
            <p className={s.toySubtitle}>{item.subtitle}</p>
            <p className={s.toyDesc}>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
