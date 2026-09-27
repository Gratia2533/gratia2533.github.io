import { useEffect, useState } from "react";
import { copy, text, type Language } from "./content";
import { GlassScene } from "./glass/GlassScene";
import { Contact } from "./page/Contact";
import { Introduction } from "./page/Introduction";
import { Navigation } from "./page/Navigation";
import { Resume } from "./page/Resume";

const LANGUAGE_KEY = "gratia-portfolio-language";

function getInitialLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_KEY);
    if (stored === "en" || stored === "zh") return stored;
  } catch {
    // Browser privacy settings may disable persistent storage.
  }
  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

export function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
    try {
      window.localStorage.setItem(LANGUAGE_KEY, language);
    } catch {
      // The language still applies for this session when storage is unavailable.
    }
  }, [language]);

  return (
    <GlassScene>
      <a className="skip-link" href="#main-content">
        {text(copy.skipLink, language)}
      </a>
      <Navigation language={language} onLanguageChange={setLanguage} />
      <div id="top" className="page-shell">
        <Introduction language={language} />
        <Resume language={language} />
        <Contact language={language} />
      </div>
    </GlassScene>
  );
}
