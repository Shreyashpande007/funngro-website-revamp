import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Seo from "../components/Seo";
import { teenPage } from "../data/content";

const teenSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Funngro",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android, iOS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  description:
    "Funngro helps young Indians earn online through verified brand campaigns, content, referrals, surveys and app testing.",
};

function TeenVisual() {
  const tasks = [
    { name: "Create product reel", amount: "INR 700" },
    { name: "App feedback test", amount: "INR 350" },
    { name: "Refer friends", amount: "INR 500" },
  ];

  return (
    <div className="visual-stack teen-stack" aria-label="Teen earning app preview">
      <img
        className="brand-image teen-brand-image"
        src="/funngro-og.jpg"
        alt="Funngro earning online with brands visual"
      />
      <div className="phone-shell">
        <div className="phone-top">
          <span>funngro</span>
          <strong>Wallet</strong>
        </div>
        <div className="wallet-card">
          <span>Available earnings</span>
          <strong>INR 4,120</strong>
        </div>
        <div className="task-stack">
          {tasks.map((task) => (
            <div className="task-row" key={task.name}>
              <span>{task.name}</span>
              <strong>{task.amount}</strong>
            </div>
          ))}
        </div>
        <div className="phone-bottom">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="floating-note">
        <strong>Proof uploaded</strong>
        <span>Review in progress</span>
      </div>
    </div>
  );
}

export default function Teen() {
  return (
    <>
      <Seo {...teenPage.meta} structuredData={teenSchema} />
      <Navbar />
      <main>
        <section className="hero hero-teen">
          <div className="container hero-grid">
            <div className="hero-copy-block">
              <p className="eyebrow">{teenPage.hero.eyebrow}</p>
              <h1>{teenPage.hero.title}</h1>
              <p className="hero-lead">{teenPage.hero.body}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#steps">
                  {teenPage.hero.primary}
                </a>
                <a className="btn btn-outline" href="/company">
                  {teenPage.hero.secondary}
                </a>
              </div>
              <div className="trust-line">
                Designed for teen earners, students, creators and first-time
                freelancers in India.
              </div>
            </div>
            <TeenVisual />
          </div>
        </section>

        <section className="content-band" id="steps">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">How earning works</p>
              <h2>Five simple steps from first campaign to first payout.</h2>
              <p>
                The page explains the earning journey in plain language so teens
                and parents can quickly understand what happens next.
              </p>
            </div>

            <div className="timeline-grid">
              {teenPage.steps.map((step, index) => (
                <article className="timeline-card" key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="split-band">
          <div className="container split-grid">
            <div>
              <p className="eyebrow">Income ladder</p>
              <h2>Start small, learn the rules and unlock better campaigns.</h2>
              <p className="section-copy">
                The SEO copy targets high-intent searches like earn online as a
                teen in India, teen earning app, UPI earning and student freelancing.
              </p>
            </div>
            <div className="ladder-grid">
              {teenPage.ladder.map((item) => (
                <article className="ladder-card" key={item.stage}>
                  <span>{item.stage}</span>
                  <strong>{item.range}</strong>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="proof-band">
          <div className="container category-layout">
            <div>
              <p className="eyebrow">Campaign categories</p>
              <h2>Choose work that matches your interests and skills.</h2>
            </div>
            <div className="category-pills">
              {teenPage.categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="content-band compact-band">
          <div className="container split-grid">
            <div>
              <p className="eyebrow">Trust and safety</p>
              <h2>Clear briefs and proof-based approvals reduce confusion.</h2>
              <p className="section-copy">
                A teen-focused page must build confidence. This section makes the
                safety and payout expectations visible instead of hiding them in a FAQ.
              </p>
            </div>
            <div className="safety-list">
              {teenPage.safety.map((item) => (
                <div className="safety-item" key={item}>
                  <span aria-hidden="true" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow">Start with one task</p>
              <h2>Build your first income story with Funngro.</h2>
              <p>
                Explore brand campaigns, submit quality work and use each approved
                task as proof that you can work with real companies.
              </p>
            </div>
            <div className="cta-actions">
              <a
                className="btn btn-dark"
                href="https://www.funngro.com/earn"
                target="_blank"
                rel="noreferrer"
              >
                Official earn page
              </a>
              <a className="btn btn-outline" href="/company">
                For companies
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
