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
            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
              {MISC.content.map((item, i) => (
                <div key={i}>
                  {item.type === "about" && (
                    <div
                      style={{
                        display: "flex",
                        gap: 40,
                        alignItems: "stretch",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      {item.photo && (
                        <div style={{
                          flexShrink: 0,
                          width: "100%",
                          
                          ...(window.innerWidth >= 968? {
                          width: "400px",
                          height: "300px",
                          }:{maxWidth: "280px",}),
                        }}>
                          <img
                            src={item.photo}
                            alt={item.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "12px",
                              objectFit: "cover",
                              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                              display: "block",
                            }}
                          />
                        </div>
                      )}
                      <div style={{ flex: 1, minWidth: "280px" }}>
                        {item.title && (
                          <h2
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontWeight: 700,
                              fontSize: "1.6rem",
                              color: "var(--navy)",
                              marginBottom: 20,
                            }}
                          >
                            {item.title}
                          </h2>
                        )}
                        <p
                          style={{
                            fontSize: "1rem",
                            color: "var(--text-muted)",
                            lineHeight: 1.9,
                            maxWidth: "800px",
                          }}
                        >
                          {Array.isArray(item.text) ? (
                            item.text.map((part, idx) =>
                              typeof part === "string" ? (
                                <span key={idx}>{part}</span>
                              ) : part.type === "link" ? (
                                <a
                                  key={idx}
                                  href={part.url}
                                  target={part.target || "_blank"}
                                  rel="noopener noreferrer"
                                  style={{
                                    color: "var(--primary)",
                                    textDecoration: "none",
                                    fontWeight: 600,
                                    borderBottom: "2px solid var(--gold)",
                                    transition: "all 0.2s ease",
                                    wordBreak: "break-word",
                                    overflowWrap: "break-word",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "var(--gold)";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "var(--primary)";
                                  }}
                                >
                                  {part.label}
                                </a>
                              ) : null
                            )
                          ) : (
                            item.text
                          )}
                        </p>
                      </div>
                    </div>
                  )}

                  {item.type === "links" && (
                    <div>
                      {item.title && (
                        <h2
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontWeight: 700,
                            fontSize: "1.4rem",
                            color: "var(--navy)",
                            marginBottom: 28,
                            paddingBottom: 16,
                            borderBottom: "2px solid var(--gold)",
                          }}
                        >
                          {item.title}
                        </h2>
                      )}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                          gap: 16,
                        }}
                      >
                        {item.links.map((link, linkIdx) => (
                          <a
                            key={linkIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 12,
                              padding: "16px 20px",
                              background: "var(--white)",
                              border: "1px solid var(--border)",
                              borderRadius: "8px",
                              textDecoration: "none",
                              transition: "all 0.2s ease",
                              cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "rgba(0, 102, 204, 0.05)";
                              e.currentTarget.style.borderColor = "var(--primary)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "var(--white)";
                              e.currentTarget.style.borderColor = "var(--border)";
                            }}
                          >
                            <span
                              style={{
                                fontSize: "1.2rem",
                                flexShrink: 0,
                              }}
                            >
                              🔗
                            </span>
                            <span
                              style={{
                                flex: 1,
                                fontSize: "0.9rem",
                                color: "var(--primary)",
                                wordBreak: "break-word",
                                fontFamily: "var(--font-mono)",
                              }}
                            >
                              {link.title}
                            </span>
                          </a>
                        ))}
                      </div>
                      {item.description && (
                        <p
                          style={{
                            fontSize: "0.95rem",
                            color: "var(--text-muted)",
                            marginTop: 16,
                            lineHeight: 1.6,
                          }}
                        >
                          {item.description}
                        </p>
                      )}
                    </div>
                  )}

                  {item.type === "text" && (
                    <div
                      style={{
                        background: "var(--white)",
                        border: "2px solid var(--gold)",
                        borderRadius: "12px",
                        padding: "32px",
                      }}
                    >
                      {item.title && (
                        <h2
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontWeight: 700,
                            fontSize: "1.3rem",
                            color: "var(--navy)",
                            marginBottom: 16,
                          }}
                        >
                          {item.title}
                        </h2>
                      )}
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "var(--text-muted)",
                          lineHeight: 1.8,
                          // maxWidth: "600px",
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
