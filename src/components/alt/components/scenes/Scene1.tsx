import s from "../../alt.module.css";
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
      <div className={s.sc1Stage} aria-label="Bàn làm việc - cảnh mở đầu">
        <div className={s.sc1Backdrop} aria-hidden="true" />
        <div className={s.sc1Desk} aria-hidden="true" />

        <div className={s.sc1Clock} aria-label={`Đồng hồ ${timeLabel}`}>
          <div className={s.sc1ClockKnob} aria-hidden="true" />
          <div className={s.sc1ClockKnob2} aria-hidden="true" />
          <div className={s.sc1ClockGlass} aria-hidden="true" />
          <div className={s.sc1ClockFace}>
            <div className={s.sc1ClockTime}>{timeLabel}</div>
            <div className={s.sc1ClockSub}>uptime: ∞</div>
          </div>
        </div>

        <div className={s.sc1Cactus} aria-hidden="true">
          <div className={s.sc1CactusPot} />
          <div className={s.sc1CactusBody} />
          <div className={s.sc1CactusArm} />
          <div className={s.sc1CactusFace}>
            <span />
            <span />
            <i />
          </div>
        </div>

        <div className={s.sc1Todo} role="note" aria-label="Ghi chú">
          <div className={s.sc1TodoClip} aria-hidden="true" />
          <div className={s.sc1TodoPaper}>
            <div className={s.sc1TodoHeader}>TO-DO:</div>
            <ul className={s.sc1TodoList}>
              <li>Cố gắng ăn uống đầy đủ</li>
              <li>Ngủ đủ giấc</li>
              <li>Nước dừa</li>
            </ul>
          </div>
        </div>

        <div className={s.sc1Monitor} aria-label="Màn hình laptop">
          <div className={s.sc1MonitorBezel} aria-hidden="true" />
          <div className={s.monitorScreen}>
            <div className={s.monitorInner}>
              <p className={s.monitorEyebrow}>The Beginning of Light</p>
              <h1 className={s.monitorTitle}>Hàn Hằng</h1>
              <p className={s.monitorSubtitle}>{HERO_SUBTITLE}</p>
            </div>
          </div>
          <div className={s.sc1MonitorBase} aria-hidden="true" />
        </div>

        <div className={s.sc1Keyboard} aria-hidden="true">
          <div className={s.sc1KeyboardKeys} />
        </div>
        <div className={s.sc1Mouse} aria-hidden="true">
          <div className={s.sc1MouseWheel} />
        </div>
      </div>
    </section>
  );
}
