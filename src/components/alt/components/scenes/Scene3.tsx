import s from "../../alt.module.css";
import { LITTLE_WORLD_ITEMS } from "../../data";

export interface Scene3Props {
  onOpenDoor?: () => void;
}

export function Scene3(_props: Scene3Props = {}) {
  return (
    <section className={`${s.sc} ${s.panelScene}`}>
      <div className={s.panelHeader}>
        <p className={s.storyEyebrow}>My Little World</p>
        <h2 className={s.storyTitle}>Những điều làm mình rực rỡ</h2>
      </div>
      <div className={s.worldGrid}>
        {LITTLE_WORLD_ITEMS.map((item, index) => (
          <article className={s.worldCard} key={item.title}>
            <span className={s.worldIndex}>0{index + 1}</span>
            <h3>{item.title}</h3>
            <p className={s.worldSubtitle}>{item.subtitle}</p>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
