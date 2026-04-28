import s from "../../alt.module.css";
import scene1Img from "@/assets/scene1.png";
import { HERO_SUBTITLE } from "../../data";
import { useEffect, useMemo, useState } from "react";

/* ============================================================
 * Scene 1 — HERO: on the monitor
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
      <div className={s.sc1Wrap}>
        <img className={s.sc1Img} src={scene1Img} alt="Bàn làm việc" />

        <div className={s.sc1Clock} aria-label={`Đồng hồ ${timeLabel}`}>
          <div className={s.sc1ClockTime}>{timeLabel}</div>
          <div className={s.sc1ClockSub}>uptime: ∞</div>
        </div>

        <div className={s.sc1Todo} role="note" aria-label="Ghi chú">
          <ul className={s.sc1TodoList}>
            <li>Cố gắng ăn uống đầy đủ</li>
            <li>Ngủ đủ giấc</li>
            <li>Nước dừa</li>
          </ul>
        </div>

        <div className={s.monitorScreen} aria-label="Nội dung trên màn hình máy tính">
          <div className={s.monitorInner}>
            <p className={s.monitorEyebrow}>The Beginning of Light</p>
            <h1 className={s.monitorTitle}>Hàn Hằng</h1>
            <p className={s.monitorSubtitle}>{HERO_SUBTITLE}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
