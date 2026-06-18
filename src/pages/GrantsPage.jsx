import PageHero from "../components/PageHero";
import { GRANTS } from "../data/content";

export default function GrantsPage() {
  return (
    <>
      <PageHero
        eyebrow="CQuInf · Funding"
        title="Grants & Funding"
        subtitle="Research at CQuInf is supported by generous funding from national agencies and institutional sources."
      />

      <section className="section grants-section">
        <div className="container">

          <div className="section-header">
            <div className="eyebrow">Active Grants</div>
            <h2 className="display display-lg" style={{ marginTop: 10 }}>
              Current Funding
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {GRANTS.map((grant) => (
              <div className="grant-card" key={grant.id}>
                <div className="grant-badge">
                  <div className="grant-agency">{grant.agency}</div>
                  <div className="grant-scheme-short">{grant.scheme.split(" ").slice(-2).join(" ")}</div>
                </div>
                <div>
                  <div className="grant-title">{grant.title}</div>
                  <div className="grant-scheme">{grant.scheme}</div>
                  <div className="grant-period">
                    <span>📅</span>
                    {grant.period}
                  </div>
                  {grant.description && (
                    <p style={{ marginTop: 14, fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                      {grant.description}
                    </p>
                  )}
                  {grant.amount && (
                    <div
                      style={{
                        marginTop: 10,
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        color: "var(--gold)",
                      }}
                    >
                      Amount: {grant.amount}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Note for future grants */}
          <div
            className="divider-full"
            style={{ marginTop: 56 }}
          />
          <div
            style={{
              background: "var(--white)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "28px 32px",
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
            To add or update grants, edit the <code style={{ background: "#f0f0f0", padding: "1px 5px", borderRadius: 3, fontSize: "0.82rem" }}>GRANTS</code> array in{" "}
            <code style={{ background: "#f0f0f0", padding: "1px 5px", borderRadius: 3, fontSize: "0.82rem" }}>src/data/content.js</code>.
          </div>
        </div>
      </section>
    </>
  );
}
