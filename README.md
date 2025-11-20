# Gratia's Space - Volumetric Liquid Glass Portfolio

A modern, physics-inspired personal portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **React Three Fiber**.

## 核心功能 (Core Features)

*   **沉浸式視覺 (Immersive Visuals)**: 
    *   基於 GLSL Shader 的即時流體背景 (Simplex Noise Fluid Dynamics)。
    *   深邃靛藍 (Deep Indigo) 與霓虹極光 (Neon Aurora) 配色。
*   **玻璃擬態設計 (Glassmorphism UI)**: 
    *   高度客製化的 Tailwind Utility Classes (`glass-panel`)。
    *   模擬真實玻璃的折射、邊緣光 (Rim Light) 與內部暈光。
*   **Bento Grid 佈局**:
    *   模組化、響應式的卡片設計展示學歷、經歷與技能。
*   **多語言支援**:
    *   即時中/英切換 (React State Management)。

## 專案架構 (Architecture)

```
src/
├── components/
│   ├── Background.tsx   # R3F Canvas component featuring custom GLSL Fragment Shader
│   └── UI.tsx          # Main HTML Overlay, Bento Grid, and Framer Motion animations
├── data/
│   └── content.ts      # Centralized text content for i18n (English/Chinese)
├── styles/
│   └── index.css       # Tailwind directives & Custom CSS layers for Glass effects
├── App.tsx             # Entry point combining WebGL Background & HTML UI
└── main.tsx            # React DOM Root
```

## 開發指南 (Development)

### 1. 安裝依賴
```bash
npm install
```

### 2. 啟動開發伺服器
```bash
npm run dev
```

### 3. 建置生產版本
```bash
npm run build
```

## 設計哲學 (Design Philosophy)
本專案遵循 "Volumetric Liquid Glass" 設計語言。我們不使用靜態圖片作為背景，而是創造一個「活的」流體空間。UI 介面被視為懸浮於深淵之上的晶體，透過光影互動 (Hover Effects) 增強使用者的沉浸感。
