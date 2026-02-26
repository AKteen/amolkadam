import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] flex items-end justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/wed2.jpg"
          alt="Wedding photography"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Content - bottom center */}
      <div className="relative z-20 text-center text-white px-6 pb-28">

        {/* Eyebrow */}
        <p
          className="text-xs uppercase tracking-[0.4em] text-white/70 mb-4 font-light"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s',
          }}
        >
          Wedding Photographer · Pune
        </p>

        {/* Name */}
        <h1
          className="text-5xl md:text-6xl font-bold tracking-tight mb-4"
          style={{
            fontFamily: "'Georgia', serif",
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s',
          }}
        >
          Amol Kadam
        </h1>

        {/* Tagline */}
        <p
          className="text-sm md:text-base text-white/80 font-light tracking-wide mb-8"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s',
          }}
        >
          Capturing moments that last a lifetime.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-row items-center justify-center gap-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.9s ease 0.55s, transform 0.9s ease 0.55s',
          }}
        >
          <button
            onClick={() => scrollTo('contact')}
            className="bg-white text-black text-sm font-semibold px-7 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 tracking-wide"
          >
            Book a Shoot
          </button>
          <button
            onClick={() => scrollTo('portfolio')}
            className="border border-white/60 text-white text-sm font-medium px-7 py-3 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 tracking-wide"
          >
            View Work
          </button>
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease 1s',
        }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>

    </section>
  );
};

export default Hero;