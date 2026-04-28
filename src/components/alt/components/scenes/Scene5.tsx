import s from "../../alt.module.css";
import { BIO_TEXT } from "../../data";

export function Scene5() {
  return (
    <section className={`${s.sc} ${s.panelScene}`}>
      <div className={`${s.panelHeader} ${s.panelHeaderNarrow}`}>
        <p className={s.storyEyebrow}>Bio</p>
        <h2 className={s.storyTitle}>Lời tự sự kết nối</h2>
      </div>
      <div className={s.bioCard}>
        {BIO_TEXT.split("\n").map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  );
}
