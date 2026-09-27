import { useEffect, useState } from "react";
import { Plasma } from "@cruxgarden/plasma-ui";
import { copy, text, type Language } from "../content";

interface IntroductionProps {
  language: Language;
}

function useTypedText(value: string): string {
  const [typed, setTyped] = useState(value);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(value);
      return;
    }

    setTyped("");
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTyped(value.slice(0, index));
      if (index >= value.length) window.clearInterval(timer);
    }, 48);

    return () => window.clearInterval(timer);
  }, [value]);

  return typed;
}

export function Introduction({ language }: IntroductionProps) {
  const tagline = text(copy.hero.tagline, language);
  const typedTagline = useTypedText(tagline);

  return (
    <header id="about" className="hero section-anchor">
      <div className="hero-cluster">
        <Plasma as="section" className="hero-card" padding={32} elevation={0.58} aria-labelledby="hero-title">
          <div className="panel-content hero-content">
            <p className="eyebrow">{text(copy.hero.eyebrow, language)}</p>
            <h1 id="hero-title">{text(copy.hero.name, language)}</h1>
            <p className="tagline" aria-label={tagline}>
              {typedTagline}<span className="typing-caret" aria-hidden="true" />
            </p>
            <p className="hero-copy">{text(copy.hero.introduction, language)}</p>
            <a className="primary-link" href="#career">
              {text(copy.hero.explore, language)} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </Plasma>
      </div>
    </header>
  );
}
