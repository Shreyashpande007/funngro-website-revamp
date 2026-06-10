import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="bg-[#0F172A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
              <span>🚀</span>
              <span>Trusted by 5000+ Companies</span>
            </div>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              The Future
              <br />
              Workforce
              <br />
              <span className="text-green-400">
                Starts Here
              </span>
            </h1>

            <p className="mt-8 text-xl text-slate-400 max-w-2xl leading-relaxed">
              Connect ambitious students with real companies,
              real projects and real opportunities.
              Build faster, hire smarter and discover
              the next generation of talent.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition">
                Hire Talent
              </button>

              <button className="border border-slate-600 hover:border-slate-400 text-white px-8 py-4 rounded-xl font-semibold transition">
                Explore Platform
              </button>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>
                <h3 className="text-4xl font-bold text-white">
                  70L+
                </h3>

                <p className="text-slate-400 mt-2">
                  Teen Users
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">
                  5000+
                </h3>

                <p className="text-slate-400 mt-2">
                  Companies
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">
                  1M+
                </h3>

                <p className="text-slate-400 mt-2">
                  Projects
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">

            <div className="absolute w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

            <img
              src={heroImage}
              alt="Future Workforce"
              className="relative z-10 w-full max-w-md"
            />

          </div>

        </div>

      </div>
    </section>
  );
}