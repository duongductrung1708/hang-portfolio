import s from "../alt.module.css";
import cloudImg from "@/assets/cloud.png";

/** 4 drifting clouds. `opacity` overrides the .in default value. */
export function Clouds({ visible, opacity }: { visible: boolean; opacity: number }) {
  const cls = visible ? s.in : "";
  const style = { opacity: visible ? opacity : 0 } as const;

  return (
    <>
      <div className={`${s.cloud} ${s.cd1} ${cls}`} style={style}>
        <img src={cloudImg} alt="" className={s.cloudImg} />
      </div>
      <div className={`${s.cloud} ${s.cd2} ${cls}`} style={style}>
        <img src={cloudImg} alt="" className={s.cloudImg} />
      </div>
      <div className={`${s.cloud} ${s.cd3} ${cls}`} style={style}>
        <img src={cloudImg} alt="" className={s.cloudImg} />
      </div>
      <div className={`${s.cloud} ${s.cd4} ${cls}`} style={style}>
        <img src={cloudImg} alt="" className={s.cloudImg} />
      </div>
    </>
  );
}
