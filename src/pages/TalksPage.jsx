import PageHero from "../components/PageHero";
import { TALKS } from "../data/content";

function TalkCard({ talk }) {
  return (
    <div
      className="card"
      style={{ padding: "28px 32px", marginBottom: 16 }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "inline-block",
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: talk.type === "Invited" ? "var(--gold)" : "var(--slate)",
              border: `1px solid ${talk.type === "Invited" ? "rgba(200,146,42,0.3)" : "var(--border)"}`,
              padding: "3px 10px",
              borderRadius: 2,
              marginBottom: 10,
            }}
          >
            {talk.type}
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              fontSize: "1rem",
              color: "var(--navy)",
              marginBottom: 6,
            }}
          >
            {talk.title}
          </div>
          <div style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
            {talk.event}
          </div>
          <div style={{ fontSize: "0.82rem", color: "var(--slate)", marginTop: 4 }}>
            {talk.location} · {talk.date}
          </div>
          {talk.note && (
            <div style={{ fontSize: "0.8rem", color: "var(--slate)", marginTop: 4, fontStyle: "italic" }}>
              {talk.note}
            </div>
          )}
        </div>
        <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
          {talk.slides && (
            <a
              href={talk.slides}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ fontSize: "0.72rem", padding: "7px 14px" }}
            >
              Slides
            </a>
          )}
          {talk.video && (
            <a
              href={talk.video}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ fontSize: "0.72rem", padding: "7px 14px" }}
            >
              Video
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TalksPage() {
  return (
    <>
      <PageHero
        eyebrow="CQuInf · Dissemination"
        title="Talks and Travel"
        subtitle={TALKS.introText}
      />

      <section className="section talks-section">
        <div className="container">

          {TALKS.comingSoon || TALKS.list.length === 0 ? (
            <div className="coming-soon-banner">
              <div className="coming-soon-icon">🎙</div>
              <h3
                className="display display-sm"
                style={{ color: "var(--white)", marginTop: 8 }}
              >
                Talks & Presentations Coming Soon
              </h3>
              <div className="coming-soon-text">
                Details of invited talks, seminars, and conference presentations will be listed here.
              </div>
            </div>
          ) : (
            <>
              {TALKS.description && (
                <div
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.75,
                    marginBottom: 32,
                    padding: "20px",
                    background: "var(--bg-light)",
                    borderLeft: "4px solid var(--primary)",
                    borderRadius: "4px",
                  }}
                >
                  {TALKS.description}
                </div>
              )}
              {/* Group by type: Invited first */}
              {["Invited", "Seminar", "Contributed"].map((type) => {
                const filtered = TALKS.list.filter((t) => t.type === type);
                if (filtered.length === 0) return null;
                return (
                  <div key={type} style={{ marginBottom: 48 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        marginBottom: 20,
                        paddingBottom: 10,
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      {type} Talks
                    </div>
                    {filtered.map((talk) => (
                      <TalkCard key={talk.id} talk={talk} />
                    ))}
                  </div>
                );
              })}
            </>
          )}

          {/* <div
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
            Add talks to the <code style={{ background: "#f0f0f0", padding: "1px 5px", borderRadius: 3, fontSize: "0.82rem" }}>TALKS.list</code> array in{" "}
            <code style={{ background: "#f0f0f0", padding: "1px 5px", borderRadius: 3, fontSize: "0.82rem" }}>src/data/content.jsx</code>.
            Each entry supports: title, event, location, date, type (Invited/Contributed/Seminar), slides URL, video URL.
          </div> */}

        </div>
      </section>
    </>
  );
}
