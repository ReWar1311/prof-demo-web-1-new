import PageHero from "../components/PageHero";
import { MISC } from "../data/content";

export default function MiscPage() {
  return (
    <>
      <PageHero
        eyebrow="CQuInf · Miscellaneous"
        title="Misc"
        subtitle="Additional resources, links, and information from the group."
      />

      <section className="section misc-section">
        <div className="container">

          {MISC.comingSoon || MISC.content.length === 0 ? (
            <div className="coming-soon-banner">
              <div className="coming-soon-icon">🗂</div>
              <h3
                className="display display-sm"
                style={{ color: "var(--white)", marginTop: 8 }}
              >
                Content Coming Soon
              </h3>
              <div className="coming-soon-text">
                Miscellaneous resources, links, and information will appear here.
              </div>
            </div>
          ) : (
            <div>
              {MISC.content.map((item, i) => (
                <div key={i} className="card" style={{ padding: "28px 32px", marginBottom: 16 }}>
                  {item.title && (
                    <h3
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: "var(--navy)",
                        marginBottom: 10,
                      }}
                    >
                      {item.title}
                    </h3>
                  )}
                  {item.body && (
                    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.75 }}>
                      {item.body}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          <div
            style={{
              background: "var(--white)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "28px 32px",
              marginTop: 32,
              fontSize: "0.85rem",
              color: "var(--text-muted)",
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
                marginBottom: 8,
              }}
            >
              Update Instructions
            </div>
            Add content to <code style={{ background: "#f0f0f0", padding: "1px 5px", borderRadius: 3 }}>MISC.content</code> in{" "}
            <code style={{ background: "#f0f0f0", padding: "1px 5px", borderRadius: 3 }}>src/data/content.js</code>.
            Set <code style={{ background: "#f0f0f0", padding: "1px 5px", borderRadius: 3 }}>MISC.comingSoon = false</code> when ready.
          </div>

        </div>
      </section>
    </>
  );
}
