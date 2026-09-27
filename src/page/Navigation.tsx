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
        <a className="brand" href="#top" aria-label="Gratia's Space home">
          G<span>.</span>
        </a>
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
        <label className="language-control">
          <span aria-hidden="true">◎</span>
          <span className="sr-only">{text(copy.languageLabel, language)}</span>
          <select
            value={language}
            onChange={(event) => onLanguageChange(event.target.value as Language)}
            aria-label={text(copy.languageLabel, language)}
          >
            <option value="en">EN</option>
            <option value="zh">中文</option>
          </select>
        </label>
      </Plasma>
    </div>
  );
}
