import { HOME, PI, SITE, RESEARCH } from "../data/content";

function getInitials(name) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export default function HomePage({ navigate }) {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-grid-overlay" />
        <div className="container">
          <div className="hero-inner">
            <div>
              <div className="hero-kicker">{SITE.groupName} · {SITE.institution}</div>
              <h1>
                {HOME.heroHeadline.split("and")[0]}
                <br />
                and{" "}
                <span className="hero-accent">{HOME.heroHeadline.split("and")[1].split("Information")[0]} Information</span>
                {HOME.heroHeadline.split("Information")[1]}
              </h1>
              <p className="hero-desc">{HOME.heroSubtext}</p>

              <div className="hero-tags">
                {HOME.heroTags.map((t) => (
                  <span key={t} className="hero-tag">{t}</span>
                ))}
              </div>

              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => navigate("/research")}>
                  Our Research
                </button>
                <button className="btn btn-outline" onClick={() => navigate("/contact")}>
                  Join the Group
                </button>
              </div>
            </div>

            <div className="hero-aside">
              <div className="hero-pi-card">
                <div className="hero-pi-card-header">
                  <div className="pi-avatar">
                    {PI.photo
                      ? <img src={PI.photo} alt={PI.name} />
                      : getInitials(PI.name)}
                  </div>
                  <div>
                    <div className="pi-card-name">{PI.name}</div>
                    <div className="pi-card-role">{PI.title} · {PI.department}</div>
                  </div>
                </div>
                <div className="pi-card-body">
                  {HOME.piCardDescription}
                </div>
              </div>

              <div className="hero-stat-row">
                {HOME.stats.map((stat) => (
                  <div className="hero-stat" key={stat.label}>
                    <div className="hero-stat-val">{stat.value}</div>
                    <div className="hero-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Theme Strip ─────────────────────────────────────── */}
      <div className="theme-strip">
        <div className="container">
          <div className="theme-strip-inner">
            <span className="theme-strip-label">Primary Theme</span>
            <span className="theme-strip-text">{HOME.primaryTheme}</span>
          </div>
        </div>
      </div>

      {/* ── About / PI Bio ──────────────────────────────────── */}
      <section className="section about-section">
        <div className="container">
          <div className="about-inner">
            {/* Timeline */}
            <div>
              <div className="eyebrow">Principal Investigator</div>
              <h2 className="display display-lg" style={{ color: "var(--navy)", margin: "12px 0 32px" }}>
                {PI.name}
              </h2>
              <div className="about-timeline">
                {PI.bio.map((item, i) => (
                  <div className="timeline-item" key={i}>
                    <div className="timeline-period">{item.period}</div>
                    <div style={{ position: "relative" }}>
                      <div className="timeline-dot" />
                      <div className="timeline-body">
                        <div className="timeline-role">{item.role}</div>
                        <div className="timeline-theme">{item.theme}</div>
                        <div className="timeline-inst">{item.institution}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About the Group */}
            <div className="about-right">
              <div className="eyebrow">About the Group</div>
              <h2 className="display display-lg">
                {SITE.groupFullName}
              </h2>
              <div className="divider" />
              <p className="body-lg">
                {HOME.introText}
              </p>
              <p>
                {HOME.aboutDescription}
              </p>
              <p>
                {HOME.institutionText}
              </p>

              <div className="research-tags">
                {PI.researchInterests.map((tag) => (
                  <span key={tag} className="research-tag">{tag}</span>
                ))}
              </div>

              <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn btn-primary" onClick={() => navigate("/group")}>
                  Meet the Group
                </button>
                <button className="btn btn-outline" onClick={() => navigate("/contact")}>
                  Open Positions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Research Areas Preview ───────────────────────────── */}
      <section className="section areas-section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Research Focus</div>
            <h2 className="display display-lg" style={{ marginTop: 10 }}>
              Areas of Investigation
            </h2>
            <p>
              {HOME.researchDescription}
            </p>
          </div>

          <div className="grid grid-3">
            {RESEARCH.areas.map((area) => (
              <div className="area-card" key={area.title}>
                <span className="area-icon">{area.icon}</span>
                <div className="area-title">{area.title}</div>
                <div className="area-desc">{area.description}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button className="btn btn-primary" onClick={() => navigate("/research")}>
              View Research Details
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA Strip ───────────────────────────────────────── */}
      <section
        className="section-sm"
        style={{ background: "var(--navy)", borderTop: "1px solid var(--border)" }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>
            Open Positions
          </div>
          <h2
            className="display display-md"
            style={{ color: "var(--white)", margin: "12px 0 16px" }}
          >
            Join the CQuInf Group
          </h2>
          <p
            style={{
              color: "var(--slate-light)",
              maxWidth: 540,
              margin: "0 auto 28px",
              fontSize: "0.95rem",
            }}
          >
            {HOME.ctaText}
          </p>
          <button className="btn btn-primary" onClick={() => navigate("/contact")}>
            Contact & Open Positions →
          </button>
        </div>
      </section>
    </>
  );
}
