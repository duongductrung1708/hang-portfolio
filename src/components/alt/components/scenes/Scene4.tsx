import s from "../../alt.module.css";
import { DIGITAL_ALBUMS } from "../../data";

export function Scene4() {
  return (
    <section className={`${s.sc} ${s.panelScene}`}>
      <div className={s.panelHeader}>
        <p className={s.storyEyebrow}>Digital Album</p>
        <h2 className={s.storyTitle}>Trái tim của website</h2>
      </div>
      <div className={s.albumGrid}>
        {DIGITAL_ALBUMS.map((album) => (
          <article className={s.albumCard} key={album.tag}>
            <div className={s.albumTag}>[{album.tag}]</div>
            <h3>{album.title}</h3>
            <p>{album.description}</p>
            <div className={s.albumMoments}>
              {album.moments.map((moment) => (
                <span key={moment}>{moment}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
