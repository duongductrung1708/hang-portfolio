import s from "../../alt.module.css";
import { FOOTER_TEXT } from "../../data";

export function Scene6() {
  return (
    <section className={`${s.sc} ${s.panelScene}`}>
      <div className={s.footerScene}>
        <p className={s.storyEyebrow}>Closing Note</p>
        <h2 className={s.storyTitle}>Cảm ơn bạn đã ghé qua</h2>
        <p className={s.footerMessage}>
          Hy vọng bạn cũng tìm thấy một chút nắng cho riêng mình ngày hôm nay.
        </p>
        <p className={s.footerMeta}>{FOOTER_TEXT}</p>
      </div>
    </section>
  );
}
