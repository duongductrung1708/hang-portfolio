import s from "../alt.module.css";

export function About({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`${s.about} ${open ? s.on : ""}`}>
      <button className={s.aboutBack} onClick={onClose}>
        ← TRỞ LẠI
      </button>
      <div className={s.amirror}>
        <h2>Về mình?</h2>
        <p>
          Mình là Hàn Hằng - một Bảo Bình yêu tự do và sự chân thành. Website này là nơi mình lưu
          giữ hành trình từ cô nữ sinh cấp 3 đầy mơ mộng đến một sinh viên đại học đang học cách yêu
          cuộc sống qua những điều giản đơn nhất.
        </p>
        <a className={s.acta} href="mailto:hanhang0602@gmail.com" title="Gửi lời chào">
          ✉
        </a>
      </div>
    </div>
  );
}
