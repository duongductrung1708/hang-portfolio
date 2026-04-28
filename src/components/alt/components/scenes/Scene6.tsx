import s from "../../alt.module.css";
import { FOOTER_TEXT } from "../../data";

function Starfield() {
  return (
    <svg viewBox="0 0 120 120" className={s.starSvg} aria-hidden="true">
      <path
        d="M60 14 L66 38 L92 38 L70 52 L78 78 L60 62 L42 78 L50 52 L28 38 L54 38 Z"
        fill="rgba(255,240,170,0.85)"
        stroke="rgba(74,21,21,0.16)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="96" cy="24" r="4" fill="rgba(150,220,190,0.85)" />
      <circle cx="24" cy="30" r="3.6" fill="rgba(255,190,120,0.85)" />
      <circle cx="88" cy="90" r="3.2" fill="rgba(255,140,170,0.78)" />
      <circle cx="34" cy="88" r="2.8" fill="rgba(185,165,245,0.72)" />
    </svg>
  );
}

export function Scene6() {
  return (
    <section className={`${s.sc} ${s.panelScene}`}>
      <div className={s.skyWrap}>
        <div className={s.skyStars} aria-hidden="true">
          <Starfield />
          <Starfield />
          <Starfield />
        </div>
        <div className={s.footerScene}>
          <p className={s.storyEyebrow}>Closing Note</p>
          <h2 className={s.storyTitle}>Cảm ơn bạn đã ghé qua</h2>
          <p className={s.footerMessage}>
            Hy vọng bạn cũng tìm thấy một chút nắng cho riêng mình ngày hôm nay.
          </p>
          <p className={s.footerMeta}>{FOOTER_TEXT}</p>
        </div>
      </div>
    </section>
  );
}
