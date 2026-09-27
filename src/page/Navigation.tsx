import { useEffect, useState } from "react";
import { Plasma } from "@cruxgarden/plasma-ui";
import { copy, text, type Language } from "../content";

interface NavigationProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const links = ["about", "education", "career", "skills", "contact"] as const;

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <div className="nav-shell">
      <Plasma
        as="nav"
        className="site-nav"
        fuse={false}
        lean={false}
        padding={10}
        aria-label={text(copy.primaryNavigation, language)}
      >
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-links"
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
          <span className="sr-only">
            {text(open ? copy.closeMenu : copy.openMenu, language)}
          </span>
        </button>
        <div id="primary-links" className="nav-links" data-open={open || undefined}>
          {links.map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>
              {text(copy.nav[link], language)}
            </a>
          ))}
        </div>
        <button
          className="language-toggle"
          type="button"
          aria-label={text(copy.switchLanguage, language)}
          title={text(copy.switchLanguage, language)}
          onClick={() => onLanguageChange(language === "en" ? "zh" : "en")}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.3 2.45 3.5 5.45 3.5 9S14.3 18.55 12 21M12 3C9.7 5.45 8.5 8.45 8.5 12S9.7 18.55 12 21" />
          </svg>
        </button>
      </Plasma>
    </div>
  );
}
