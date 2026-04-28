// Static data for the ALt. portfolio (Teacher everyday life edition).

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
  { name: "Bắt đầu ngày mới", label: "// BẮT ĐẦU NGÀY MỚI - BÀN LÀM VIỆC & GIÁO ÁN" },
  { name: "Vào lớp", label: "// VÀO LỚP - LÊN LỚP, ĐIỂM DANH, TƯƠNG TÁC" },
  { name: "Chấm bài", label: "// CHẤM BÀI - NHẬN XÉT, GHI CHÚ" },
  { name: "Sổ sách", label: "// SỔ ĐIỂM - KẾ HOẠCH, BÁO CÁO" },
  { name: "Kinh nghiệm", label: "// KINH NGHIỆM - KỸ NĂNG & DẤU ẤN" },
  { name: "Liên hệ", label: "// LIÊN HỆ - KẾT NỐI PHỤ HUYNH / ĐỒNG NGHIỆP" },
];

export interface FeaturedProject {
  title: string;
  urlLabel: string; // shown in the browser frame title/address bar
  href: string; // opened when user clicks the card
  desc: string;
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    title: "café-shaped",
    urlLabel: "alt.trung.dev",
    href: "https://example.com/",
    desc: "interactive scroll-driven portfolio (this site)",
  },
  {
    title: "lumen ui",
    urlLabel: "lumen.trung.dev",
    href: "https://example.com/",
    desc: "open-source React + Tailwind component kit",
  },
  {
    title: "drip ☕",
    urlLabel: "drip.trung.dev",
    href: "https://example.com/",
    desc: "slow-feed reader, lo-fi reading lists",
  },
];

export const LOFI_SRC =
  "https://cdn.pixabay.com/download/audio/2021/06/07/audio_cdfb955189.mp3?filename=ambient-atmospheric-4947.mp3";

export const LOFI_TITLE = "Ambient phòng giáo viên";

export const HOVER_SEL =
  "button, a, [data-mitem], [data-mug], [data-nd], [data-nb], [data-music-btn], [data-hover]";
