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
          </div>
          <a className="contact-email" href="mailto:gratia2533@gmail.com">
            gratia2533@gmail.com
          </a>
        </div>
      </Plasma>
      <p className="license-note">
        © {new Date().getFullYear()} Gratia2533 · Licensed under{" "}
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noreferrer">
          CC BY-NC-SA 4.0
        </a>
        . Please fork with attribution.
        {" "}Page UI built with{" "}
        <a href="https://github.com/CruxGarden/plasma-ui" target="_blank" rel="noreferrer">
          plasma-ui
        </a>
        .
      </p>
    </footer>
  );
}
