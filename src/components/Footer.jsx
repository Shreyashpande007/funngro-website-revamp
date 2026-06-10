export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="brand-lockup footer-brand" href="/company">
            <span className="brand-mark" aria-hidden="true">
              f
            </span>
            <span>
              <span className="brand-name">funngro</span>
              <span className="brand-line">first income, real projects</span>
            </span>
          </a>
          <p className="footer-copy">
            A two-page website revamp concept for Funngro, focused on companies
            that want youth action and teens who want safe earning opportunities.
          </p>
        </div>

        <div>
          <h2>Explore</h2>
          <a href="/company">For Companies</a>
          <a href="/teen">For Teens</a>
          <a href="/company#services">Services</a>
          <a href="/funngro-seo-audit-report.html">SEO Audit Report</a>
        </div>

        <div>
          <h2>Official Links</h2>
          <a href="https://www.funngro.com/" target="_blank" rel="noreferrer">
            Funngro website
          </a>
          <a href="https://www.funngro.com/earn" target="_blank" rel="noreferrer">
            Current earn page
          </a>
          <a
            href="https://www.funngro.com/for-brands"
            target="_blank"
            rel="noreferrer"
          >
            Current brands page
          </a>
          <a href="mailto:hello@funngro.com">hello@funngro.com</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>Funngro revamp concept, 2026.</span>
        <span>Built with React and Vite.</span>
      </div>
    </footer>
  );
}
