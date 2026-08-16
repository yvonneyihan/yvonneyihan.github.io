import { EDUCATION, EXPERIENCE } from "../data";

type TimelineEntry = {
  key: string;
  period: string;
  title: string;
  org: string;
  bullets: string[];
};

function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <div className="timeline-row" key={item.key}>
          <div className="timeline-dot-col">
            <span className="timeline-dot" />
            {i < items.length - 1 && <span className="timeline-line" />}
          </div>
          <div className="timeline-row-body">
            <span className="timeline-period">{item.period}</span>
            <h3 className="timeline-row-title">{item.title}</h3>
            <p className="timeline-row-org">{item.org}</p>
            {item.bullets.length === 1 ? (
              <p className="timeline-row-desc">{item.bullets[0]}</p>
            ) : (
              <ul className="timeline-row-bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

const experienceItems: TimelineEntry[] = EXPERIENCE.map((job) => ({
  key: `${job.company}-${job.role}`,
  period: `${job.start} – ${job.end}`,
  title: job.role,
  org: `${job.company} · ${job.location}`,
  bullets: job.bullets,
}));

const educationItems: TimelineEntry[] = EDUCATION.map((edu) => ({
  key: edu.school,
  period: `${edu.start} – ${edu.end}`,
  title: edu.degree,
  org: edu.school,
  bullets: edu.details ?? [],
}));

export function ExperienceEducation() {
  return (
    <section id="experience" className="section">
      <div className="wrap exp-edu-grid">
        <div>
          <h2>Experience</h2>
          <Timeline items={experienceItems} />
        </div>
        <div id="education" className="exp-edu-education">
          <h2>Education</h2>
          <Timeline items={educationItems} />
        </div>
      </div>
    </section>
  );
}
