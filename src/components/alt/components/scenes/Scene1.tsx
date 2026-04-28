import { useEffect, useMemo, useState } from "react";
import s from "../../alt.module.css";
import scene1Img from "@/assets/scene1.png";

/* ============================================================
 * Scene 1 — HELLO WORLD: code editor + terminal on a desk
 * ============================================================ */
export function Scene1() {
  const [{ hh, mm, ss }, setT] = useState(() => ({
    hh: "00",
    mm: "00",
    ss: "00",
  }));

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setT({
        hh: String(d.getHours()).padStart(2, "0"),
        mm: String(d.getMinutes()).padStart(2, "0"),
        ss: String(d.getSeconds()).padStart(2, "0"),
      });
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const timeLabel = useMemo(() => `${hh}:${mm}:${ss}`, [hh, mm, ss]);

  return (
    <section className={`${s.sc} ${s.scFullscreen}`}>
      <img className={s.sceneImg} src={scene1Img} alt="Scene 1" />
      <div className={s.sceneHud} aria-label={`Current time ${timeLabel}`}>
        <div className={s.sceneClock}>{timeLabel}</div>
        <div className={s.sceneClockSub}>tiết dạy: đang diễn ra</div>
      </div>

      <div className={s.sceneNote} role="note" aria-label="Ghi chú công việc">
        <ul className={s.sceneNoteList}>
          <li>Soạn giáo án</li>
          <li>Chấm bài</li>
          <li>Chuẩn bị đồ dùng</li>
          <li>Nhập điểm</li>
        </ul>
      </div>
    </section>
  );
}
