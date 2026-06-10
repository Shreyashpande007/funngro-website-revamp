import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Seo from "../components/Seo";
import { brandStats, companyPage } from "../data/content";

const companySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Funngro for Companies",
  description:
    "Youth campaign platform for brand promotion, sampling, UGC, referrals, research and app testing with young Indian creators.",
  provider: {
    "@type": "Organization",
    name: "Funngro",
    url: "https://www.funngro.com/",
  },
  areaServed: "IN",
  serviceType: "Gen Z campaign execution",
};

function StatBand() {
  return (
    <section className="metric-band" aria-label="Funngro scale">
      <div className="container metric-grid">
        {brandStats.map((stat) => (
          <div className="metric-item" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CompanyVisual() {
  return (
    <div className="visual-stack company-stack" aria-label="Campaign dashboard preview">
      <img
        className="brand-image"
        src="/funngro-og.jpg"
        alt="Funngro brand visual"
      />

      <div className="dashboard-panel">
        <div className="panel-topline">
          <span>Campaign console</span>
          <strong>Live</strong>
        </div>
        <div className="campaign-progress">
          <span style={{ width: "72%" }} />
        </div>
        <div className="dashboard-row">
          <span>Sampling brief</span>
          <strong>2,480 proofs</strong>
        </div>
        <div className="dashboard-row">
          <span>UGC reels</span>
          <strong>640 assets</strong>
        </div>
        <div className="dashboard-row">
          <span>App testing</span>
          <strong>185 reports</strong>
        </div>
      </div>

      <div className="verification-card">
        <span className="status-dot" />
        <div>
          <strong>Proof-first workflow</strong>
          <p>Every action can be approved with screenshots, links or test notes.</p>
        </div>
      </div>
    </div>
  );
}

export default function Company() {
  return (
    <>
      <Seo {...companyPage.meta} structuredData={companySchema} />
      <Navbar />
      <main>
        <section className="hero hero-company">
          <div className="container hero-grid">
            <div className="hero-copy-block">
              <p className="eyebrow">{companyPage.hero.eyebrow}</p>
              <h1>{companyPage.hero.title}</h1>
              <p className="hero-lead">{companyPage.hero.body}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">
                  {companyPage.hero.primary}
                </a>
                <a className="btn btn-outline" href="#services">
                  {companyPage.hero.secondary}
                </a>
              </div>
              <div className="trust-line">
                Built for brand promotion, sampling, referrals, UGC, research and
                product testing in India.
              </div>
            </div>
            <CompanyVisual />
          </div>
        </section>

        <StatBand />

        <section className="content-band" id="services">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Campaign services</p>
              <h2>One platform for youth marketing work that needs real output.</h2>
              <p>
                Each service is written for measurable action: who should do it,
                what proof is required and how performance will be judged.
              </p>
            </div>

            <div className="service-grid">
              {companyPage.services.map((service, index) => (
                <article className="service-card" key={service.label}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{service.label}</h3>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="split-band">
          <div className="container split-grid">
            <div>
              <p className="eyebrow">How companies launch</p>
              <h2>From campaign idea to verified submissions in four moves.</h2>
              <p className="section-copy">
                Funngro's strongest value is operational clarity. The revamp makes
                the company journey obvious before a sales call is needed.
              </p>
            </div>
            <div className="step-list">
              {companyPage.process.map((step, index) => (
                <article className="step-item" key={step.title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="proof-band" id="success">
          <div className="container proof-grid">
            <div>
              <p className="eyebrow">Outcome focused</p>
              <h2>Designed around cost per action, completion and creator quality.</h2>
              <p>
                The company page should not only look good. It should answer the
                business question a marketing leader has: what will I get, how do I
                measure it and why should I trust this audience?
              </p>
            </div>
            <div className="proof-cards">
              {companyPage.proof.map((item) => (
                <div className="proof-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band" id="contact">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow">Ready for a pilot</p>
              <h2>Build a smarter youth campaign with Funngro.</h2>
              <p>
                Share the audience, objective and proof type. The first campaign can
                be scoped as promotion, sampling, survey, referral, UGC or app testing.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-dark" href="mailto:hello@funngro.com">
                Email Funngro
              </a>
              <a
                className="btn btn-outline"
                href="https://www.funngro.com/for-brands"
                target="_blank"
                rel="noreferrer"
              >
                Official brand page
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
