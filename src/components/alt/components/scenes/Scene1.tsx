import s from "../../alt.module.css";
import scene1Img from "@/assets/scene1.png";
import { HERO_SUBTITLE } from "../../data";
import { useEffect, useMemo, useRef, useState } from "react";

/* ============================================================
 * Scene 1 — HERO: on the monitor
 * ============================================================ */
export function Scene1() {
  const [{ hh, mm, ss }, setT] = useState(() => ({
    hh: "00",
    mm: "00",
    ss: "00",
  }));

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [cover, setCover] = useState<{
    scale: number;
    offsetX: number;
    offsetY: number;
    natW: number;
    natH: number;
  } | null>(null);

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

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    const compute = () => {
      const natW = img.naturalWidth || 0;
      const natH = img.naturalHeight || 0;
      if (!natW || !natH) return;
      const rect = wrap.getBoundingClientRect();
      const cw = rect.width;
      const ch = rect.height;
      if (!cw || !ch) return;

      const scale = Math.max(cw / natW, ch / natH); // object-fit: cover
      const renderedW = natW * scale;
      const renderedH = natH * scale;
      const offsetX = (cw - renderedW) / 2;
      const offsetY = (ch - renderedH) / 2;

      setCover({ scale, offsetX, offsetY, natW, natH });
    };

    compute();
    const ro = new ResizeObserver(() => compute());
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  const timeLabel = useMemo(() => `${hh}:${mm}:${ss}`, [hh, mm, ss]);

  const pos = useMemo(() => {
    if (!cover) return null;
    const { scale, offsetX, offsetY, natW, natH } = cover;

    // Anchors defined as fractions of the original image (scene1.png)
    const clock = { x: 0.245, y: 0.29, w: 0.15, h: 0.085 };
    const todo = { x: 0.335, y: 0.63, w: 0.08, h: 0.15 };
    const monitor = { x: 0.43, y: 0.3, w: 0.25, h: 0.34 };

    const rect = (a: { x: number; y: number; w: number; h: number }) => {
      const left = offsetX + a.x * natW * scale;
      const top = offsetY + a.y * natH * scale;
      const width = a.w * natW * scale;
      const height = a.h * natH * scale;
      return { left, top, width, height };
    };

    return { clock: rect(clock), todo: rect(todo), monitor: rect(monitor) };
  }, [cover]);

  return (
    <section className={`${s.sc} ${s.scFullscreen}`}>
      <div className={s.sc1Wrap} ref={wrapRef}>
        <img
          ref={imgRef}
          className={s.sc1Img}
          src={scene1Img}
          alt="Bàn làm việc"
          onLoad={() => {
            // Trigger a recompute once natural sizes are available
            const wrap = wrapRef.current;
            const img = imgRef.current;
            if (!wrap || !img) return;
            const natW = img.naturalWidth || 0;
            const natH = img.naturalHeight || 0;
            if (!natW || !natH) return;
            const rect = wrap.getBoundingClientRect();
            const cw = rect.width;
            const ch = rect.height;
            if (!cw || !ch) return;
            const scale = Math.max(cw / natW, ch / natH);
            const renderedW = natW * scale;
            const renderedH = natH * scale;
            const offsetX = (cw - renderedW) / 2;
            const offsetY = (ch - renderedH) / 2;
            setCover({ scale, offsetX, offsetY, natW, natH });
          }}
        />

        <div
          className={s.sc1Clock}
          aria-label={`Đồng hồ ${timeLabel}`}
          style={pos ? pos.clock : undefined}
        >
          <div className={s.sc1ClockTime}>{timeLabel}</div>
          <div className={s.sc1ClockSub}>uptime: ∞</div>
        </div>

        <div
          className={s.sc1Todo}
          role="note"
          aria-label="Ghi chú"
          style={pos ? pos.todo : undefined}
        >
          <ul className={s.sc1TodoList}>
            <li>Cố gắng ăn uống đầy đủ</li>
            <li>Ngủ đủ giấc</li>
            <li>Nước dừa</li>
          </ul>
        </div>

        <div
          className={s.monitorScreen}
          aria-label="Nội dung trên màn hình máy tính"
          style={pos ? pos.monitor : undefined}
        >
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
