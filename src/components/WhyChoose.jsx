export default function WhyChoose() {
  const features = [
    {
      title: "Hire in 24 Hours",
      description:
        "Get access to skilled student talent and start your project within a day.",
    },
    {
      title: "Cost Effective",
      description:
        "Reduce hiring costs while getting quality work from motivated young professionals.",
    },
    {
      title: "Verified Talent",
      description:
        "Every student goes through profile verification and skill validation.",
    },
    {
      title: "Project Ready Skills",
      description:
        "Developers, Designers, Marketers, Researchers and Content Creators.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-green-500 font-semibold uppercase tracking-wider">
            Why Funngro
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Why Companies Choose Funngro
          </h2>

          <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg">
            Connect with ambitious students ready to contribute to real business
            projects and deliver measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-10 rounded-3xl border border-slate-200 bg-white hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-2xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center text-white text-2xl mb-6">
                ✦
              </div>

              <h3 className="text-3xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-500 group-hover:text-slate-300 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}