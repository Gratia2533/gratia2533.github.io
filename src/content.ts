import nsysuLogo56 from "./NSYSU-56.webp";
import nsysuLogo112 from "./NSYSU-112.webp";
import nsysuLogo168 from "./NSYSU-168.webp";

export type Language = "en" | "zh";

export interface LocalizedText {
  en: string;
  zh: string;
}

interface EducationItem {
  school: LocalizedText;
  degree: LocalizedText;
  detail: LocalizedText;
  logo: {
    src: string;
    srcSet: string;
  };
}

interface CareerItem {
  company: LocalizedText;
  role: LocalizedText;
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
    eyebrow: {
      en: "Applied AI, LLM Agents, RAG Systems, Production AI, Computer Vision",
      zh: "Applied AI, LLM Agents, RAG Systems, Production AI, Computer Vision",
    },
    name: { en: "Yu-Hsuan, Gratia Li", zh: "李祐瑄, Gratia" },
    tagline: { en: "Bringing AI into the real world.", zh: "讓 AI 不只理解世界，也能真正參與世界" },
    introduction: {
      en: "I'm Gratia. I like to get to the heart of things, question assumptions, then build the answer myself.",
      zh: "I'm Gratia. I like to get to the heart of things, question assumptions, then build the answer myself.",
    },
    explore: { en: "Explore my work", zh: "探索我的經歷" },
  },
  headings: {
    education: { en: "Education", zh: "學歷" },
    career: { en: "Career", zh: "工作經歷" },
    skills: { en: "Skills", zh: "專業技能" },
    contact: { en: "Contact", zh: "聯絡方式" },
  },
  skipLink: { en: "Skip to content", zh: "跳至主要內容" },
  primaryNavigation: { en: "Primary navigation", zh: "主要導覽" },
  openMenu: { en: "Open menu", zh: "開啟選單" },
  closeMenu: { en: "Close menu", zh: "關閉選單" },
  switchLanguage: { en: "Switch to Chinese", zh: "切換為英文" },
} as const;

export const education: EducationItem[] = [
  {
    school: { en: "National Sun Yat-sen University", zh: "國立中山大學" },
    degree: { en: "Master", zh: "碩士" },
    detail: { en: "Department of Applied Mathematics", zh: "應用數學系研究所" },
    logo: {
      src: nsysuLogo56,
      srcSet: `${nsysuLogo56} 56w, ${nsysuLogo112} 112w, ${nsysuLogo168} 168w`,
    },
  },
];

export const career: CareerItem[] = [
  {
    company: { en: "1111 Job Bank", zh: "壹一壹一科技股份有限公司（1111 人力銀行）" },
    role: { en: "Research and Development Substitute", zh: "研發替代役" },
  },
  {
    company: { en: "Linkou Chang Gung Memorial Hospital", zh: "林口長庚醫院早期療育中心" },
    role: { en: "Research Assistant", zh: "研究助理" },
  },
];

export const skills: SkillGroup[] = [
  {
    label: { en: "Languages", zh: "語言能力" },
    value: { en: "Chinese; English technical reading and documentation", zh: "中文、英文技術閱讀／文件撰寫" },
  },
  {
    label: { en: "Programming", zh: "程式技能" },
    value: {
      en: "Python, TypeScript, SQL",
      zh: "Python、TypeScript、SQL",
    },
  },
  {
    label: { en: "Tools", zh: "工具應用" },
    value: {
      en: "Git, Docker, LangChain, LiteLLM, MCP, TensorFlow",
      zh: "Git、Docker、LangChain、LiteLLM、MCP、TensorFlow",
    },
  },
  {
    label: { en: "Expertise", zh: "專長領域" },
    value: {
      en: "LLM, AI Agents, RAG, Voice AI, Computer Vision, Low-SNR Object Detection, NMS, Machine Learning",
      zh: "LLM、Agent、RAG、語音 AI、Computer Vision、低信噪比物件偵測、NMS、Machine Learning",
    },
  },
  {
    label: { en: "Cloud & Infrastructure", zh: "雲端服務" },
    value: {
      en: "AWS Serverless, Containers, Databases, OpenSearch, Linux",
      zh: "AWS Serverless、Container、Database、OpenSearch、Linux",
    },
  },
];

export function text(value: LocalizedText, language: Language): string {
  return value[language];
}
