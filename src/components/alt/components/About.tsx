import s from "../alt.module.css";

export function About({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`${s.about} ${open ? s.on : ""}`}>
      <button className={s.aboutBack} onClick={onClose}>
        ← BACK
      </button>
      <div className={s.amirror}>
        <h2>Về mình?</h2>
        <p>
          Mình là Hàn Hằng — một giáo viên ở Việt Nam. Mình thích ghi lại những khoảnh khắc đời
          thường trong lớp học: từ soạn giáo án, lên lớp, chấm bài, đến những câu chuyện nhỏ của học
          trò. Mình tin rằng sự kiên nhẫn, kỷ luật và một chút ấm áp mỗi ngày sẽ tạo nên khác biệt.
        </p>
        <a className={s.acta} href="mailto:trungyna1708@gmail.com" title="Say hi">
          ✉
        </a>
      </div>
    </div>
  );
}
