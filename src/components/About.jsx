import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Image - left */}
        <div className="w-full md:w-2/5 flex justify-center">
          <img
            src="/amlkdm.png"
            alt="Amol Kadam"
            className="w-72 md:w-80 h-[480px] object-cover object-center rounded-2xl shadow-lg"
          />
        </div>

        {/* Text - right */}
        <div className="w-full md:w-3/5 text-left">

          {/* Eyebrow */}
          <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-4 font-light">
            About Me
          </p>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Hi, I'm Amol Kadam
          </h2>

          {/* Bio */}
          <p className="text-gray-500 font-light leading-relaxed mb-4">
            I'm a wedding photographer based in Pune, Maharashtra with over 7 years of experience
            capturing love stories across India. I believe every couple deserves beautiful,
            honest photographs that feel natural — not staged.
          </p>

          <p className="text-gray-500 font-light leading-relaxed mb-10">
            My approach is simple — blend into your day, stay patient, and capture the real
            moments. The laughter, the tears, the quiet glances. Those are the ones you'll
            treasure forever.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mb-10">
            {[
              { number: "200+", label: "Weddings Shot" },
              { number: "7+", label: "Years Experience" },
              { number: "500+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-3xl font-bold text-gray-900"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {stat.number}
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/918975102118?text=Hi%20Amol%2C%20I%27d%20love%20to%20know%20more!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 tracking-wide"
          >
            Let's Talk
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;