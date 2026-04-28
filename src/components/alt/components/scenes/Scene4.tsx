import s from "../../alt.module.css";
import { DIGITAL_ALBUMS } from "../../data";

export function Scene4() {
  return (
    <section className={`${s.sc} ${s.panelScene}`}>
      <div className={s.albumShelf}>
        {DIGITAL_ALBUMS.map((album, index) => (
          <article
            className={`${s.albumBook} ${index === 0 ? s.albumBookPink : index === 1 ? s.albumBookMint : s.albumBookSun}`}
            key={album.tag}
          >
            <div className={s.albumSpine} aria-hidden="true" />
            <div className={s.albumCover}>
              <div className={s.albumTag}>[{album.tag}]</div>
              <h3 className={s.albumTitle}>{album.title}</h3>
              <p className={s.albumDesc}>{album.description}</p>
              <div className={s.albumMoments}>
                {album.moments.map((moment) => (
                  <span key={moment}>{moment}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
