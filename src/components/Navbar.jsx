import { useState } from "react";
import { NAV_LINKS, SITE } from "../data/content";

export default function Navbar({ currentPath, navigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <button
            className="nav-brand"
            onClick={() => handleNav("/")}
            style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
          >
            <span className="nav-brand-name">{SITE.groupName}</span>
            <span className="nav-brand-sub">IIT Delhi · EE</span>
          </button>

          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                className={`nav-link ${currentPath === link.path ? "active" : ""}`}
                onClick={() => handleNav(link.path)}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span style={{ transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile-menu ${mobileOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            className={`nav-mobile-link ${currentPath === link.path ? "active" : ""}`}
            onClick={() => handleNav(link.path)}
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  );
}
