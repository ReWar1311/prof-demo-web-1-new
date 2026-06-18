import { NAV_LINKS, SITE, CONTACT } from "../data/content";

export default function Footer({ navigate }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand-name">{SITE.groupName}</div>
            <div className="footer-brand-tagline">
              {SITE.groupFullName}
            </div>
            <div className="footer-inst">IIT Delhi</div>
          </div>

          <div>
            <div className="footer-col-title">Navigation</div>
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                className="footer-link"
                onClick={() => navigate(link.path)}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div>
            <div className="footer-col-title">Contact</div>
            <div style={{ fontSize: "0.82rem", lineHeight: 1.8, color: "var(--slate)" }}>
              <div>{CONTACT.address.name}</div>
              <div>{CONTACT.address.room}</div>
              <div>{CONTACT.address.institution}</div>
              <div style={{ marginTop: 8 }}>
                <a
                  href={`mailto:${CONTACT.email}`}
                  style={{ color: "var(--gold)", fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © {year} {SITE.groupName} · {SITE.institution}
          </div>
          <div className="footer-iit">
            Department of Electrical Engineering<br />
            Indian Institute of Technology Delhi
          </div>
        </div>
      </div>
    </footer>
  );
}
