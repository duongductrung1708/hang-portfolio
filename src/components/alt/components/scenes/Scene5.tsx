import s from "../../alt.module.css";
import { BIO_TEXT } from "../../data";

export function Scene5() {
  return (
    <section className={`${s.sc} ${s.panelScene}`}>
      <div className={s.letterWrap}>
        <div className={s.letterPin} aria-hidden="true" />
        <div className={s.letterStamp} aria-hidden="true">
          ✉
        </div>
        <div className={s.letterPaper}>
          {BIO_TEXT.split("\n").map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
