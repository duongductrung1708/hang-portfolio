import s from "../alt.module.css";

interface Props {
  open: boolean;
  onClose: () => void;
  onGo: (sceneIndex: number) => void;
  onAbout: () => void;
}

const ITEMS: Array<{ label: string; go?: number; action?: "about" }> = [
  { label: "ALt. /trang-chủ", go: 0 },
  { label: "MÌNH LÀ AI?", action: "about" },
  { label: "VÀO LỚP", go: 1 },
  { label: "CHẤM BÀI", go: 2 },
  { label: "KỸ NĂNG & KINH NGHIỆM", go: 4 },
  { label: "LIÊN HỆ", go: 5 },
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
        <div className={s.mname}>Duong Duc Trung</div>
        <div className={s.memail}>trungyna1708@gmail.com</div>
        <hr className={s.mdash} />
        <div className={s.mrow}>
          <span>Lớp: 4A</span>
          <span>Tiết: 1</span>
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
          ALt. 2026
          <br />
          <br />
          CẢM ƠN :)
        </div>
        <div className={s.mham}>═</div>
      </div>
    </div>
  );
}
