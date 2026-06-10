import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteLinks } from "../data/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link to="/company" className="brand-lockup" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            f
          </span>
          <span>
            <span className="brand-name">funngro</span>
            <span className="brand-line">youth work network</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteLinks.map((link) =>
            link.external || link.path.includes("#") ? (
              <a key={link.label} href={link.path} className="nav-link">
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-soft desktop-only" href="/teen#steps">
            Start earning
          </a>
          <a className="btn btn-primary" href="/company#contact">
            Start campaign
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {siteLinks.map((link) =>
            link.external || link.path.includes("#") ? (
              <a key={link.label} href={link.path} onClick={closeMenu}>
                {link.label}
              </a>
            ) : (
              <NavLink key={link.label} to={link.path} onClick={closeMenu}>
                {link.label}
              </NavLink>
            )
          )}
          <a className="btn btn-primary" href="/company#contact" onClick={closeMenu}>
            Start campaign
          </a>
        </nav>
      )}
    </header>
  );
}
