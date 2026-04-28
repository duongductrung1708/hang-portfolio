import s from "../alt.module.css";

export function Webby({ visible }: { visible: boolean }) {
  return (
    <aside className={`${s.webby} ${visible ? s.on : ""}`}>
      <span className={s.w}>T.</span>
      <span className={s.n}>Hằng</span>
    </aside>
  );
}
