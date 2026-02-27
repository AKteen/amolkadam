import React from "react";

const images = [
  "/m1.jpeg",
  "/m2.jpeg",
  "/m3.jpeg",
  "/m4.jpeg",
  "/m5.jpeg",
  "/m6.jpeg",
  "/m7.jpeg",
  "/m8.jpeg",
  "/m9.jpeg",
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

        {/* CSS Columns Masonry */}
        <div
          style={{
            columnCount: 3,
            columnGap: '12px',
          }}
          className="[column-count:2] md:[column-count:3]"
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="mb-3 overflow-hidden rounded-xl break-inside-avoid"
            >
              <img
                src={src}
                alt={`Wedding ${i + 1}`}
                className="w-full h-auto block transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;