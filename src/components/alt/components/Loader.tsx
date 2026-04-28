import s from "../alt.module.css";

export function Loader({ text, out }: { text: string; out: boolean }) {
  return (
    <div className={`${s.load} ${out ? s.out : ""}`}>
      <span>{text}</span>
    </div>
  );
}
