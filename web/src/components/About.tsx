export function About() {
  return (
    <section id="about" className="section">
      <div className="wrap about-grid">
        <h2>About</h2>
        <div className="about-content">
          <p className="about-text">
            I'm a full-stack software engineer with roots in finance and data analytics. Before writing production
            code full-time, I spent several years building models and dashboards that translated messy data into
            actionable business decisions — an experience that still shapes how I think about product design.
          </p>
          <p className="about-text">
            Today I build end-to-end web applications with a focus on clean architecture and practical UX. My
            primary stack spans <span className="highlight">React</span> and{" "}
            <span className="highlight">Node.js / Express</span> on the application layer,{" "}
            <span className="highlight">SQL</span> databases for structured data, and{" "}
            <span className="highlight">Python</span> for data pipelines and analytics tooling.
          </p>
        </div>
      </div>
    </section>
  );
}
