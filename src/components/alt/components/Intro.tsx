import { forwardRef } from "react";
import s from "../alt.module.css";

interface Props {
  bigWrapStyle: React.CSSProperties;
  bigWrapRef?: React.Ref<HTMLDivElement>;
  titleFont: string;
  showLine1: boolean;
  showLine2: boolean;
}

/**
 * The 300vh intro section. Caller manages scroll progress and passes computed
 * styles + flags. The forwarded ref is the outer scrollable section element.
 */
export const Intro = forwardRef<HTMLElement, Props>(function Intro(
  { bigWrapStyle, bigWrapRef, titleFont, showLine1, showLine2 },
  ref,
) {
  return (
    <section ref={ref} className={s.intro}>
      <div className={s.sticky}>
        <div ref={bigWrapRef} className={s.bigWrap} style={bigWrapStyle}>
          <div className={`${s.bigTitle} ${s.bigTitleUp}`} style={{ fontFamily: titleFont }}>
            ALt.
          </div>
          <div className={s.bigSub}>(portfolio đời thường của giáo viên)</div>
        </div>

        <div className={s.gather}>
          <div className={`${s.gline} ${s.line1} ${showLine1 ? s.show : ""}`}>
            portfolio đời thường của Hằng
          </div>
          <div className={`${s.gline} ${s.line2} ${showLine2 ? s.show : ""}`}>
            cuộn xuống — bắt đầu một ngày đi dạy
          </div>
        </div>
      </div>
    </section>
  );
});
