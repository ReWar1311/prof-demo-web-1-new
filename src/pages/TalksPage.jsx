import PageHero from "../components/PageHero";
import { TALKS } from "../data/content";

function TalkCard({ talk }) {
  return (
    <div className="timeline-row timeline-row-talk">
      <div className="timeline-meta">
        <div>{talk.event}</div>
        <div>{talk.location}</div>
        <div>{talk.date}</div>
      </div>

      <div className="timeline-content">
        <div className="timeline-dot" />
        {talk.type && (
          <div
            style={{
              display: "inline-block",
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              fontSize: "0.68rem",
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
        )}
        <div className="timeline-title" style={{ marginBottom: talk.note ? 6 : 0 }}>
          {talk.title}
        </div>
        {talk.note && (
          <div className="timeline-note">
            {talk.note}
          </div>
        )}
        {(talk.slides || talk.video) && (
          <div className="timeline-links">
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
        )}
      </div>
    </div>
  );
}

function DetailRow({ item }) {
  const period = [item.period, item.duration].filter(Boolean).join(" · ");

  return (
    <div className="timeline-row">
      <div className="timeline-meta">
        {period}
      </div>
      <div className="timeline-content">
        <div className="timeline-dot" />
        <div className="timeline-text">
          {item.description}
        </div>
      </div>
    </div>
  );
}

function DetailSection({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div style={{ marginTop: 48 }}>
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
        {title}
      </div>
      <div className="card timeline-card">
        {items.map((item) => (
          <DetailRow key={item.id} item={item} />
        ))}
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
              {[
                { type: "Invited", label: "Invited Talks" },
                { type: "Seminar", label: "Seminar Talks" },
                { type: "Contributed", label: "Contributed Talks" },
                { type: undefined, label: "Talks" },
              ].map(({ type, label }) => {
                const filtered = TALKS.list.filter((t) => t.type === type);
                if (filtered.length === 0) return null;
                return (
                  <div key={label}>
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
                      {label}
                    </div>
                    <div className="card timeline-card timeline-card-talks">
                    {filtered.map((talk) => (
                      <TalkCard key={talk.id} talk={talk} />
                    ))}</div>
                  </div>
                );
              })}

              <DetailSection
                title={TALKS.researchVisitsTitle}
                items={TALKS.researchVisits}
              />
              <DetailSection
                title={TALKS.scientificActivitiesTitle}
                items={TALKS.scientificActivities}
              />
              <DetailSection
                title={TALKS.outreachTitle}
                items={TALKS.outreach}
              />
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
