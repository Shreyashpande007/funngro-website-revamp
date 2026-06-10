export default function TalentCategories() {
  const categories = [
    {
      title: "Web Development",
      description:
        "Build modern websites, dashboards and business applications.",
      icon: "💻",
    },
    {
      title: "Digital Marketing",
      description:
        "SEO, Google Ads, Meta Ads and complete growth strategies.",
      icon: "📈",
    },
    {
      title: "UI / UX Design",
      description:
        "Create stunning interfaces, branding and user experiences.",
      icon: "🎨",
    },
    {
      title: "Video Editing",
      description:
        "Short-form content, reels, promotional videos and motion graphics.",
      icon: "🎬",
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
            Find Talent For Every Project
          </h2>

          <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg">
            From development to marketing, discover students
            ready to contribute to your business.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl border border-slate-200 hover:bg-slate-900 transition-all duration-300"
            >
              <div className="text-5xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600 group-hover:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}