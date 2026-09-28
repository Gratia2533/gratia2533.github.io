import { useCallback, useEffect, useState } from "react";
import { copy, text, type Language } from "./content";
import { GlassScene } from "./glass/GlassScene";
import { Contact } from "./page/Contact";
import { Introduction } from "./page/Introduction";
import { Navigation } from "./page/Navigation";
import { Resume } from "./page/Resume";

interface AppProps {
  initialLanguage: Language;
}

export function languageFromPathname(pathname: string): Language {
  return pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
}

function pathForLanguage(language: Language): string {
  return language === "zh" ? "/zh/" : "/";
}

export function App({ initialLanguage }: AppProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const changeLanguage = useCallback((nextLanguage: Language) => {
    const nextPath = pathForLanguage(nextLanguage);
    if (window.location.pathname !== nextPath) {
      window.history.pushState(null, "", `${nextPath}${window.location.hash}`);
    }
    setLanguage(nextLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
  }, [language]);

  useEffect(() => {
    const syncLanguageFromRoute = () => {
      setLanguage(languageFromPathname(window.location.pathname));
    };
    window.addEventListener("popstate", syncLanguageFromRoute);
    return () => window.removeEventListener("popstate", syncLanguageFromRoute);
  }, []);

  return (
    <GlassScene>
      <a className="skip-link" href="#main-content">
        {text(copy.skipLink, language)}
      </a>
      <Navigation language={language} onLanguageChange={changeLanguage} />
      <div id="top" className="page-shell">
        <Introduction language={language} />
        <Resume language={language} />
        <Contact language={language} />
      </div>
    </GlassScene>
  );
}
