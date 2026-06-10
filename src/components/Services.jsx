export default function Services() {
  const services = [
    "Website Development",
    "Mobile App Development",
    "Digital Marketing",
    "Graphic Design",
    "Video Editing",
    "Content Writing",
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-green-500 font-semibold uppercase tracking-wider">
            Services
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            What Students Can Help With
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {service}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}