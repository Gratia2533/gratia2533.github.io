import { Plasma } from "@cruxgarden/plasma-ui";
import { copy, text, type Language } from "../content";

interface ContactProps {
  language: Language;
}

export function Contact({ language }: ContactProps) {
  return (
    <footer id="contact" className="footer section-anchor">
      <Plasma as="section" className="contact-panel" padding={28} lean={false} aria-labelledby="contact-title">
        <div className="panel-content contact-content">
          <div>
            <p className="section-number">04</p>
            <h2 id="contact-title">{text(copy.headings.contact, language)}</h2>
            <p>{text(copy.contact.body, language)}</p>
          </div>
          <a className="github-link" href="https://github.com/Gratia2533" target="_blank" rel="noreferrer">
            {text(copy.contact.action, language)} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Plasma>
      <p className="license-note">
        © {new Date().getFullYear()} Gratia2533 · Licensed under{" "}
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noreferrer">
          CC BY-NC-SA 4.0
        </a>
        . Please fork with attribution.
      </p>
    </footer>
  );
}
