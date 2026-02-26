import React from "react";

const services = [
  {
    title: "Wedding Photography",
    description:
      "From the morning rituals to the final farewell — every emotion, every detail, captured authentically. We blend into your day so you can live it fully.",
    features: ["Full day coverage", "Edited digital gallery", "Print-ready files"],
    icon: "💍",
  },
  {
    title: "Pre-Wedding Shoot",
    description:
      "A relaxed session before the big day to tell your unique love story. Choose your location, your vibe — we'll take care of the rest.",
    features: ["2-4 hour session", "Location of your choice", "50+ edited photos"],
    icon: "🌅",
  },
  {
    title: "Newborn Photography",
    description:
      "Those tiny fingers, sleepy yawns and pure innocence — captured forever in the first few weeks of your baby's life. Gentle, safe and beautiful.",
    features: ["Studio & home sessions", "Safe posing techniques", "Soft natural lighting"],
    icon: "🍼",
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-3 font-light">
            What I Offer
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-[#fafafa]"
            >
              {/* Icon */}
              <div className="text-4xl mb-6">{service.icon}</div>

              {/* Title */}
              <h3
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 font-light leading-relaxed text-sm mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://wa.me/919765509815?text=Hi%20Amol%2C%20I%27m%20interested%20in%20your%20services!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-black border-b border-black pb-0.5 hover:opacity-50 transition-opacity duration-200"
              >
                Enquire Now →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;