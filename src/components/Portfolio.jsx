import React from "react";

const images = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80", span: "" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80", span: "" },
  { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80", span: "" },
  { src: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=600&q=80", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80", span: "" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80", span: "" },
  { src: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=600&q=80", span: "" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full bg-[#fafafa] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-3 font-light">
            Our Work
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Moments We've Captured
          </h2>
        </div>

        {/* Masonry Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl ${img.span}`}
            >
              <img
                src={img.src}
                alt={`Wedding ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* CTA */}

        {/* <div className="text-center mt-12">
          <a
            href="https://wa.me/919765509815?text=Hi%20Amol%2C%20I%27d%20like%20to%20see%20more%20of%20your%20work!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-black text-black text-sm font-semibold px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 tracking-wide"
          >
            See More Work
          </a>
        </div> */}

      </div>
    </section>
  );
};

export default Portfolio;