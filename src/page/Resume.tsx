import { Plasma } from "@cruxgarden/plasma-ui";
import { career, copy, education, skills, text, type Language } from "../content";

interface ResumeProps {
  language: Language;
}

export function Resume({ language }: ResumeProps) {
  return (
    <main className="resume" id="main-content">
      <Plasma as="section" id="education" className="content-panel section-anchor" padding={28} aria-labelledby="education-title">
        <div className="panel-content">
          <p className="section-number">01</p>
          <h2 id="education-title">{text(copy.headings.education, language)}</h2>
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-item" key={item.school.en}>
                <img
                  src={item.logo.src}
                  srcSet={item.logo.srcSet}
                  sizes="(max-width: 600px) 44px, 56px"
                  width="56"
                  height="56"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <div className="item-heading">
                    <h3>{text(item.school, language)}</h3>
                    <span>{text(item.degree, language)}</span>
                  </div>
                  <p>{text(item.detail, language)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Plasma>

      <div className="resume-row">
        <Plasma as="section" id="career" className="content-panel career-panel section-anchor" padding={28} aria-labelledby="career-title">
          <div className="panel-content">
            <p className="section-number">02</p>
            <h2 id="career-title">{text(copy.headings.career, language)}</h2>
            <div className="timeline">
              {career.map((item) => (
                <article className="career-item" key={item.company.en}>
                  <span className="timeline-dot" aria-hidden="true" />
                  <h3>{text(item.company, language)}</h3>
                  <p>{text(item.role, language)}</p>
                </article>
              ))}
            </div>
          </div>
        </Plasma>

        <Plasma as="section" id="skills" className="content-panel skills-panel section-anchor" padding={28} aria-labelledby="skills-title">
          <div className="panel-content">
            <p className="section-number">03</p>
            <h2 id="skills-title">{text(copy.headings.skills, language)}</h2>
            <dl className="skills-list">
              {skills.map((skill) => (
                <div key={skill.label.en}>
                  <dt>{text(skill.label, language)}</dt>
                  <dd>{text(skill.value, language)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Plasma>
      </div>
    </main>
  );
}
