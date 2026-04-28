import { useEffect, useRef } from "react";
import { HOVER_SEL } from "../data";

/** Smooth lerped custom cursor + hover/click body classes. */
export function useCursor() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Don't flash the cursor at screen center on refresh.
    // We only reveal it after the first mouse move.
    el.style.opacity = "0";
    let hasMoved = false;

    let cx = 0;
    let cy = 0;
    let tx = 0;
    let ty = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      if (!hasMoved) {
        hasMoved = true;
        cx = e.clientX;
        cy = e.clientY;
        tx = cx;
        ty = cy;
        el.style.opacity = "";
      }
      tx = e.clientX;
      ty = e.clientY;
    };
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest(HOVER_SEL)) document.body.classList.add("HOVERING");
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest(HOVER_SEL))
        document.body.classList.remove("HOVERING");
    };
    const onDown = () => document.body.classList.add("CLICKING");
    const onUp = () => document.body.classList.remove("CLICKING");

    const loop = () => {
      if (!hasMoved) {
        raf = requestAnimationFrame(loop);
        return;
      }
      cx += (tx - cx) * 0.25;
      cy += (ty - cy) * 0.25;
      el.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;

      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
    };
  }, []);

  return ref;
}
