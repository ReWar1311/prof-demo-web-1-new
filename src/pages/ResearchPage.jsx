import PageHero from "../components/PageHero";
import { RESEARCH } from "../data/content";

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="CQuInf · Research"
        title="Research"
        subtitle={RESEARCH.introText}
      />

      <section className="section research-section">
        <div className="container">

          {RESEARCH.comingSoon && (
            <div className="coming-soon-banner">
              <div className="coming-soon-icon">⚗</div>
              <h3
                className="display display-sm"
                style={{ color: "var(--white)", marginTop: 8 }}
              >
                Detailed Research Page Coming Soon
              </h3>
              <div className="coming-soon-text">
                Publications, preprints, and detailed research descriptions will be added shortly.
              </div>
            </div>
          )}

          {/* Research Areas — always shown */}
          <div>
            <div className="section-header">
              <div className="eyebrow">Research Areas</div>
              <h2 className="display display-lg" style={{ marginTop: 10 }}>
                Areas of Investigation
              </h2>
            </div>

            <div className="grid grid-2" style={{ gap: 28 }}>
              {RESEARCH.areas.map((area) => (
                <div
                  key={area.title}
                  className="card"
                  style={{ padding: "32px 36px" }}
                >
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "2rem",
                      fontWeight: 300,
                      color: "var(--gold)",
                      marginBottom: 14,
                    }}
                  >
                    {area.icon}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontWeight: 600,
                      fontSize: "1.05rem",
                      color: "var(--navy)",
                      marginBottom: 10,
                    }}
                  >
                    {area.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.75 }}>
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Publications placeholder */}
          <div className="divider-full" />
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Publications & Preprints</div>
            <div
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "40px",
                textAlign: "center",
                color: "var(--text-muted)",
              }}
            >
              <div style={{ fontSize: "1.6rem", marginBottom: 12, opacity: 0.4 }}>📄</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
                Publications list will appear here.
              </div>
              <div style={{ fontSize: "0.8rem", marginTop: 6, opacity: 0.7 }}>
                To add publications, update the <code>RESEARCH.publications</code> array in{" "}
                <code>src/data/content.js</code>.
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
