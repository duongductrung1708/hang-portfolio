import s from "../../alt.module.css";
import { TIMELINE_CHAPTERS } from "../../data";

export function Scene2() {
  return (
    <section className={`${s.sc} ${s.storyScene} ${s.timelineScene}`}>
      <div className={s.storyShell}>
        <div className={s.storyIntro}>
          <p className={s.storyEyebrow}>The Journey of Growth</p>
          <h2 className={s.storyTitle}>Hành trình lớn lên</h2>
          <p className={s.storyText}>
            Một timeline nhỏ gom lại những đoạn mình đã đi qua: thời áo trắng, những ngày đầu xa nhà
            và cả khoảng trời đang chờ mình bước tới.
          </p>
        </div>

        <div className={s.timelineScroll}>
          {TIMELINE_CHAPTERS.map((chapter, index) => (
            <article className={s.timelineCard} key={chapter.title}>
              <div className={s.timelineDot}>{index + 1}</div>
              <div className={s.timelineBody}>
                <p className={s.timelinePeriod}>{chapter.period}</p>
                <h3>{chapter.title}</h3>
                <p>{chapter.content}</p>
                <span className={s.timelineVisual}>{chapter.visual}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
