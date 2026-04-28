// Static data for Han Hang's personal portfolio.

// First and last MUST be Special Elite (= header logo font) so the title
// visibly "morphs" into the header logo at the end of the intro.
export const TITLE_FONTS = [
  '"Special Elite", serif',
  '"Playfair Display", serif',
  '"Bebas Neue", sans-serif',
  '"Caveat", cursive',
  '"Abril Fatface", serif',
  '"DM Serif Display", serif',
  '"Major Mono Display", monospace',
  '"Pacifico", cursive',
  '"Courier Prime", monospace',
  '"Special Elite", serif',
];

export interface SceneInfo {
  name: string;
  label: string;
}

export const SCENES: SceneInfo[] = [
  { name: "Khởi đầu ánh sáng", label: "// HERO - THE BEGINNING OF LIGHT" },
  { name: "Hành trình lớn lên", label: "// TIMELINE - THE JOURNEY OF GROWTH" },
  { name: "Thế giới nhỏ", label: "// MY LITTLE WORLD - NHỮNG ĐIỀU MÌNH YÊU" },
  { name: "Album số", label: "// DIGITAL ALBUM - NHỮNG MẢNH GHÉP KỶ NIỆM" },
  { name: "Lời tự sự", label: "// BIO - ĐIỀU MÌNH MUỐN KỂ" },
  { name: "Lời kết", label: "// FOOTER - MADE WITH LOVE AND STARDUST" },
];

export interface TimelineChapter {
  title: string;
  period: string;
  content: string;
  visual: string;
}

export const TIMELINE_CHAPTERS: TimelineChapter[] = [
  {
    title: "Thanh xuân năm ấy",
    period: "Cấp 3",
    content:
      "Những năm tháng gắn liền với chiếc áo trắng, những buổi ôn thi muộn và những tiếng cười của lớp học ấy, và cả gia đình của mình. Dù gia đình mình không giàu sang, chính sự giản đơn ấy đã nuôi dưỡng một Hàn Hằng biết trân trọng mọi giá trị của cuộc sống.",
    visual: "Máy bay giấy và hoa phượng",
  },
  {
    title: "Giấc mơ Đại học",
    period: "Những ngày đầu tự lập",
    content:
      "Bước chân vào giảng đường, mình bắt đầu cuộc sống tự lập tại một mảnh đất xa lạ. Đây là nơi mình gặp hội bạn đáng yêu, gặp cậu học trò lớp 5 luôn gọi mình là 'chị' một cách ngây ngô, và gặp cả một trạm sạc tâm lý dịu dàng luôn đứng phía sau bảo vệ mình.",
    visual: "Cậu bé lớp 5 và chiếc balo nhỏ",
  },
  {
    title: "Tương lai phía trước",
    period: "Đang viết tiếp",
    content:
      "Mình vẫn đang học cách yêu cuộc sống, yêu nghề và yêu chính mình một cách dịu dàng hơn mỗi ngày.",
    visual: "Ngôi sao nhỏ đang được nối tiếp",
  },
];

export interface LittleWorldItem {
  title: string;
  subtitle: string;
  description: string;
}

export const LITTLE_WORLD_ITEMS: LittleWorldItem[] = [
  {
    title: "Morning Ritual",
    subtitle: "Một cốc nước dừa ở góc giường nhỏ",
    description:
      "Bắt đầu ngày mới bằng chút mát lành, chậm rãi và đủ dịu để trái tim kịp thức dậy.",
  },
  {
    title: "The Teacher's Heart",
    subtitle: "Niềm vui từ những tiến bộ nhỏ",
    description: "Không gì ấm hơn khoảnh khắc thấy cậu học trò lớp 5 tiến bộ thêm từng ngày.",
  },
  {
    title: "Soulmates",
    subtitle: "Người yêu và những người bạn",
    description:
      "Những buổi hẹn hò cùng anh người yêu và những lần tụ tập quên lối về với bạn bè thân thiết.",
  },
  {
    title: "Aesthetic Art",
    subtitle: "3D cartoon và gam màu vibrant",
    description:
      "Mình mê những hình khối dễ thương, màu pastel rực rỡ và cảm giác mộng mơ đầy ánh sáng.",
  },
];

export interface AlbumItem {
  tag: string;
  title: string;
  description: string;
  moments: string[];
}

export const DIGITAL_ALBUMS: AlbumItem[] = [
  {
    tag: "17",
    title: "Màu áo dài và nắng sân trường",
    description: "Ảnh cấp 3 và những kỷ niệm trong veo cùng bạn bè cũ.",
    moments: ["Áo dài trắng", "Nắng sân trường", "Bạn thân năm ấy"],
  },
  {
    tag: "21",
    title: "Góc nhỏ giường tầng",
    description: "Cuộc sống ký túc xá, góc làm việc và nhịp sống đời thường giản dị.",
    moments: ["Ký túc xá", "Góc học tập", "Những tối yên bình"],
  },
  {
    tag: "Love",
    title: "Những mảnh ghép yêu thương",
    description: "Gia đình, anh người yêu và những khoảnh khắc vui vẻ cùng nhóm bạn thân.",
    moments: ["Gia đình", "Người thương", "Nhóm bạn"],
  },
];

export const HERO_SUBTITLE = "Một Bảo Bình gom nắng vào lòng, dệt thơ từ những điều nhỏ bé.";

export const HERO_CODE = `const me = {
  hometown_love: "Gia đình là điểm tựa duy nhất",
  current_vibe: "Vibrant & Dreamy",
  astrology: "Sun in Aquarius ♒",
  status: "Đang lớn lên giữa yêu thương"
};`;

export const BIO_TEXT = `Mình là Hàn Hằng - một Bảo Bình yêu tự do và sự chân thành.
Website này là nơi mình lưu giữ hành trình từ cô nữ sinh cấp 3 đầy mơ mộng đến một sinh viên đại học đang học cách yêu cuộc sống qua những điều giản đơn nhất.
Mình không có một gia đình giàu có về vật chất, nhưng mình có tất cả sự giàu sang của tình yêu: từ mẹ, từ anh chị, từ anh người yêu, từ cậu trò nhỏ và từ những người bạn tuyệt vời.
Cảm ơn bạn đã ghé thăm thế giới nhỏ bé nhưng luôn rực rỡ nắng của mình.
Hy vọng bạn cũng tìm thấy chút nắng cho riêng mình ngày hôm nay!`;

export const FOOTER_TEXT = "Hankang 2026 | Made with love and a bit of stardust";

export const LOFI_SRC =
  "https://cdn.pixabay.com/download/audio/2021/06/07/audio_cdfb955189.mp3?filename=ambient-atmospheric-4947.mp3";

export const LOFI_TITLE = "Một chút nắng cho hôm nay";

export const HOVER_SEL =
  "button, a, [data-mitem], [data-mug], [data-nd], [data-nb], [data-music-btn], [data-hover]";
