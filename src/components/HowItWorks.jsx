export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Post Your Project",
      description:
        "Tell us what you need and the skills required for your project.",
    },
    {
      number: "02",
      title: "Get Matched",
      description:
        "We connect you with talented students who fit your requirements.",
    },
    {
      number: "03",
      title: "Collaborate",
      description:
        "Work directly with students through milestones and project goals.",
    },
    {
      number: "04",
      title: "Get Results",
      description:
        "Receive quality work while helping students gain real experience.",
    },
  ];

  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-20">

          <span className="text-green-400 font-semibold uppercase tracking-wider">
            How It Works
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Hire Student Talent In 4 Simple Steps
          </h2>

          <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
            Start projects faster with a streamlined hiring process
            designed for modern businesses.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-3xl p-8"
            >
              <div className="text-green-400 text-5xl font-bold mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>

              <p className="text-slate-400">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}