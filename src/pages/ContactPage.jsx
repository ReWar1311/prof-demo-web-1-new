import PageHero from "../components/PageHero";
import { CONTACT } from "../data/content";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CQuInf · Join Us"
        title="Contact & Open Positions"
        subtitle={CONTACT.lookingFor}
      />

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* Left: Positions */}
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>Open Positions</div>

              {CONTACT.positions.map((pos) => (
                <div className="position-card" key={pos.id}>
                  <div className="position-num">{pos.id}</div>
                  <div>
                    <div className="position-level">{pos.level}</div>
                    <div className="position-desc">{pos.description}</div>
                    {pos.note && pos.noteLink && (
                      <a
                        href={pos.noteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="position-link"
                      >
                        ↗ {pos.note}
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* Important Note */}
              <div className="important-box" style={{ marginTop: 32 }}>
                <div className="important-box-label">⚠ Important Note</div>
                {CONTACT.importantNote}
              </div>

              <div className="important-box" style={{ borderColor: "rgba(141,164,191,0.3)", background: "rgba(141,164,191,0.05)" }}>
                <div className="important-box-label" style={{ color: "var(--slate)" }}>
                  No Quantum Background?
                </div>
                {CONTACT.quantumNote}
              </div>

              <div className="intern-note">
                <strong>For Interns:</strong> {CONTACT.internNote}
              </div>
            </div>

            {/* Right: Contact Info */}
            <div className="contact-aside">
              <div className="contact-info-card">
                <div className="contact-info-title">Postal Address</div>
                <div className="contact-info-name">{CONTACT.address.name}</div>
                <div
                  className="contact-info-detail"
                  style={{ marginTop: 8 }}
                >
                  {CONTACT.address.title}
                  <br />
                  {CONTACT.address.room}
                  <br />
                  {CONTACT.address.institution}
                  <br />
                  {CONTACT.address.area}
                </div>
                <div className="contact-email">
                  <span>✉</span>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    style={{ color: "inherit" }}
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div
                className="card"
                style={{ padding: "24px 28px" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 12,
                  }}
                >
                  Useful Links
                </div>
                <a
                  href={CONTACT.departmentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    color: "var(--navy)",
                    padding: "10px 0",
                    borderBottom: "1px solid var(--border)",
                    transition: "color 0.15s",
                  }}
                >
                  ↗ EE Department, IIT Delhi
                </a>
                <a
                  href={CONTACT.msAdmissionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    color: "var(--navy)",
                    padding: "10px 0",
                    transition: "color 0.15s",
                  }}
                >
                  ↗ MS(R) Admissions — EE Dept
                </a>
              </div>

              <div
                style={{
                  background: "var(--navy)",
                  borderRadius: "var(--radius-lg)",
                  padding: "24px 28px",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 14,
                  }}
                >
                  Mathematical Prerequisites
                </div>
                {[
                  "Linear Algebra",
                  "Real Analysis",
                  "Measure Theoretic Probability",
                  "Signals & Systems",
                ].map((topic) => (
                  <div
                    key={topic}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.82rem",
                      color: "var(--slate-light)",
                    }}
                  >
                    <span style={{ color: "var(--gold)", fontSize: "0.65rem" }}>▸</span>
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
