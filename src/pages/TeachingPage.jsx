import PageHero from "../components/PageHero";
import { TEACHING } from "../data/content";

function TeachingItem({ item }) {
  return (
    <div className="timeline-row timeline-row-teaching">
      <div className="timeline-meta">
        {item.term}
      </div>
      <div className="timeline-content">
        <div className="timeline-dot" />
        <div className="timeline-title" style={{ marginBottom: 6 }}>
          {item.course}
        </div>
        <div className="timeline-text">
          {item.summary || `${item.level} in the ${item.department}, ${item.institution}.`}
        </div>
        <div className="timeline-note">
          {item.description}
        </div>
      </div>
    </div>
  );
}

export default function TeachingPage() {
  return (
    <>
      <PageHero
        eyebrow={TEACHING.heroEyebrow}
        title={TEACHING.heroTitle}
        subtitle={TEACHING.introText}
      />

      <section className="section teaching-section">
        <div className="container">
          {TEACHING.comingSoon || TEACHING.list.length === 0 ? (
            <div className="coming-soon-banner">
              <div className="coming-soon-icon">📚</div>
              <h3
                className="display display-sm"
                style={{ color: "var(--white)", marginTop: 8 }}
              >
                Teaching Details Coming Soon
              </h3>
              <div className="coming-soon-text">
                Courses and teaching experience will be listed here.
              </div>
            </div>
          ) : (
            <>
              <div className="section-header">
                <div className="eyebrow">{TEACHING.sectionTitle}</div>
                <h2 className="display display-lg" style={{ marginTop: 10 }}>
                  Courses and Tutorials
                </h2>
              </div>

              <div className="card timeline-card timeline-card-teaching">
                {TEACHING.list.map((item) => (
                  <TeachingItem key={item.id} item={item} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
