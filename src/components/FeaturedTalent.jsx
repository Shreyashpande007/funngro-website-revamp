export default function FeaturedTalent() {
  const talents = [
    {
      name: "Web Development",
      description:
        "Build modern websites, dashboards and business applications.",
      skills: ["React", "Next.js", "Node.js"],
    },
    {
      name: "Digital Marketing",
      description:
        "SEO, Meta Ads, Google Ads and complete growth strategies.",
      skills: ["SEO", "Meta Ads", "Google Ads"],
    },
    {
      name: "UI / UX Design",
      description:
        "Modern interfaces, branding and user experiences.",
      skills: ["Figma", "Wireframes", "Branding"],
    },
    {
      name: "Video Editing",
      description:
        "Short form content, reels and promotional videos.",
      skills: ["Premiere Pro", "After Effects", "CapCut"],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-green-500 font-semibold uppercase tracking-wider">
            Talent Categories
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Find Talent For Any Project
          </h2>

          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            Access a diverse network of skilled students ready to work on
            real business challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {talents.map((talent, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-bold text-slate-900">
                {talent.name}
              </h3>

              <p className="text-slate-600 mt-4">
                {talent.description}
              </p>

              <div className="flex gap-2 mt-6 flex-wrap">
                {talent.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}