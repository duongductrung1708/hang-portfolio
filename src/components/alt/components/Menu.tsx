import s from "../alt.module.css";

interface Props {
  open: boolean;
  onClose: () => void;
  onGo: (sceneIndex: number) => void;
  onAbout: () => void;
}

const ITEMS: Array<{ label: string; go?: number; action?: "about" }> = [
  { label: "H.H /khởi-đầu", go: 0 },
  { label: "MÌNH LÀ AI?", action: "about" },
  { label: "HÀNH TRÌNH LỚN LÊN", go: 1 },
  { label: "MY LITTLE WORLD", go: 2 },
  { label: "DIGITAL ALBUM", go: 3 },
  { label: "LỜI TỰ SỰ", go: 4 },
  { label: "LỜI KẾT", go: 5 },
];

export function Menu({ open, onClose, onGo, onAbout }: Props) {
  return (
    <div
      className={`${s.menu} ${open ? s.on : ""}`}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={s.mcard}>
        <button className={s.mclose} onClick={onClose} aria-label="Đóng menu">
          ×
        </button>
        <div className={s.mname}>Nguyễn Thị Hằng</div>
        <div className={s.memail}>hanhang0602@gmail.com</div>
        <hr className={s.mdash} />
        <div className={s.mrow}>
          <span>Bảo Bình ♒</span>
          <span>Vibrant & Dreamy</span>
        </div>
        <hr className={s.meqdash} />
        {ITEMS.map((it) => (
          <div
            key={it.label}
            className={s.mitem}
            data-mitem
            onClick={() => {
              onClose();
              if (it.action === "about") onAbout();
              else if (typeof it.go === "number") onGo(it.go);
            }}
          >
            {it.label}
          </div>
        ))}
        <div className={s.mbar}>||||||||||||||</div>
        <div className={s.mfoot}>
          LÀM TẠI <u>VIỆT NAM</u>
          <br />
          Hankang 2026
          <br />
          <br />
          một chút nắng cho hôm nay
        </div>
        <div className={s.mham}>═</div>
      </div>
    </div>
  );
}
