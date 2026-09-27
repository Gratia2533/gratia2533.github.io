import cycuLogo from "./CYCU.svg";
import fjuLogo from "./FJU.png";
import ncueLogo from "./NCUE.png";
import nsysuLogo from "./NSYSU.png";

export type Language = "en" | "zh";

export interface LocalizedText {
  en: string;
  zh: string;
}

interface EducationItem {
  school: LocalizedText;
  degree: LocalizedText;
  detail: LocalizedText;
  period: string;
  logo: string;
}

interface CareerItem {
  company: LocalizedText;
  role: LocalizedText;
  period: LocalizedText;
}

interface SkillGroup {
  label: LocalizedText;
  value: LocalizedText;
}

export const copy = {
  nav: {
    about: { en: "About", zh: "關於" },
    education: { en: "Education", zh: "學歷" },
    career: { en: "Career", zh: "經歷" },
    skills: { en: "Skills", zh: "技能" },
    contact: { en: "Contact", zh: "聯絡" },
  },
  hero: {
    eyebrow: { en: "AI · DATA · SOFTWARE", zh: "AI · 資料 · 軟體" },
    name: { en: "Yu-Hsuan, Gratia Li", zh: "李祐瑄, Gratia" },
    tagline: { en: "Bringing AI into the real world.", zh: "把 AI 帶進現實生活。" },
    introduction: {
      en: "Hi, I'm Gratia.",
      zh: "我是 Gratia，一位對創意與科技充滿熱情的設計師／開發者。",
    },
    explore: { en: "Explore my work", zh: "探索我的經歷" },
    dragHint: { en: "Drag me · I snap and fuse", zh: "拖曳我 · 感受吸附與融合" },
    badge: { en: "AI → Reality", zh: "AI → 現實" },
  },
  headings: {
    education: { en: "Education", zh: "學歷" },
    career: { en: "Career", zh: "工作經歷" },
    skills: { en: "Skills", zh: "專業技能" },
    contact: { en: "Let's connect", zh: "保持聯絡" },
  },
  contact: {
    body: {
      en: "See what I'm building and learning on GitHub.",
      zh: "歡迎到 GitHub 看看我正在開發與學習的內容。",
    },
    action: { en: "Visit GitHub", zh: "前往 GitHub" },
  },
  languageLabel: { en: "Language", zh: "語言" },
  skipLink: { en: "Skip to content", zh: "跳至主要內容" },
  primaryNavigation: { en: "Primary navigation", zh: "主要導覽" },
  openMenu: { en: "Open menu", zh: "開啟選單" },
  closeMenu: { en: "Close menu", zh: "關閉選單" },
} as const;

export const education: EducationItem[] = [
  {
    school: { en: "National Sun Yat-sen University", zh: "國立中山大學" },
    degree: { en: "Master", zh: "碩士" },
    detail: { en: "Department of Applied Mathematics", zh: "應用數學系研究所" },
    period: "2023 – 2025",
    logo: nsysuLogo,
  },
  {
    school: { en: "National Changhua University of Education", zh: "國立彰化師範大學" },
    degree: { en: "Bachelor", zh: "學士" },
    detail: {
      en: "Department of Mathematics (Information track)",
      zh: "數學系（資訊組）",
    },
    period: "2020 – 2022",
    logo: ncueLogo,
  },
  {
    school: { en: "Chung Yuan Christian University", zh: "中原大學" },
    degree: { en: "Transfer", zh: "轉學" },
    detail: {
      en: "Department of Information and Computer Engineering",
      zh: "資訊工程學系研究所",
    },
    period: "2022 – 2023",
    logo: cycuLogo,
  },
  {
    school: { en: "Fu Jen Catholic University", zh: "輔仁大學" },
    degree: { en: "Transfer", zh: "轉學" },
    detail: { en: "Department of Applied Mathematics", zh: "應用數學系（資訊數學組）" },
    period: "2018 – 2020",
    logo: fjuLogo,
  },
];

export const career: CareerItem[] = [
  {
    company: { en: "1111 Job Bank", zh: "壹一壹一科技股份有限公司（1111 人力銀行）" },
    role: { en: "Research and Development Substitute", zh: "研發替代役" },
    period: { en: "Jun 2025 – Present", zh: "2025/06 – 至今" },
  },
  {
    company: { en: "Linkou Chang Gung Memorial Hospital", zh: "林口長庚醫院早期療育中心" },
    role: { en: "Research Assistant", zh: "研究助理" },
    period: { en: "Jul 2022 – Aug 2022", zh: "2022/07 – 2022/08" },
  },
];

export const skills: SkillGroup[] = [
  {
    label: { en: "Language", zh: "語言能力" },
    value: { en: "English · TOEIC 780", zh: "英文 · 多益 780" },
  },
  {
    label: { en: "Programming", zh: "程式技能" },
    value: {
      en: "Python / R / SQL / TensorFlow / Git / GitHub",
      zh: "Python / R / SQL / TensorFlow / Git / GitHub",
    },
  },
  {
    label: { en: "Tools", zh: "工具應用" },
    value: {
      en: "Power BI / Word / PowerPoint / Excel",
      zh: "Power BI / Word / PowerPoint / Excel",
    },
  },
  {
    label: { en: "Focus", zh: "專長領域" },
    value: {
      en: "Computer Vision / Deep Learning / NLP / Data Analysis",
      zh: "電腦視覺 / 深度學習 / 自然語言處理 / 資料分析",
    },
  },
  {
    label: { en: "Cloud", zh: "雲端服務" },
    value: { en: "AWS / GCP / Akamai", zh: "AWS / GCP / Akamai" },
  },
];

export function text(value: LocalizedText, language: Language): string {
  return value[language];
}
