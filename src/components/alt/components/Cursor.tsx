import s from "../alt.module.css";
import { useCursor } from "../hooks/useCursor";

export function Cursor() {
  const ref = useCursor();
  return <div ref={ref} className={`${s.cur} ${s.dot ?? ""} dot`} aria-hidden />;
}
