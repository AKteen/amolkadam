import React from 'react';

const testimonials = [
  {
    name: "Priya & Rohan Mehta",
    event: "Wedding · Pune",
    text: "Amol has an incredible eye for detail. He captured every little moment of our wedding day so beautifully — we still can't stop looking at our photos. Highly recommend!",
    stars: 5,
  },
  {
    name: "Sneha Kulkarni",
    event: "Pre-Wedding Shoot · Lonavala",
    text: "Such a calm and professional photographer. He made us feel so comfortable during our pre-wedding shoot. The photos turned out absolutely stunning!",
    stars: 5,
  },
  {
    name: "Ankit & Pooja Desai",
    event: "Wedding · Nashik",
    text: "We couldn't have asked for a better photographer. Amol understood exactly what we wanted and delivered beyond our expectations. Worth every penny.",
    stars: 5,
  },
  {
    name: "Meera Joshi",
    event: "Newborn Session · Pune",
    text: "The newborn photos are pure magic. Amol was so gentle and patient with our baby. We will treasure these photos for the rest of our lives.",
    stars: 5,
  },
  {
    name: "Rahul & Kavita Patil",
    event: "Wedding · Mumbai",
    text: "From the first call to the final gallery delivery, Amol was a pleasure to work with. Professional, friendly and genuinely talented. 10/10!",
    stars: 5,
  },
  {
    name: "Divya & Saurabh Nair",
    event: "Engagement Shoot · Pune",
    text: "We were nervous in front of the camera but Amol made it so easy and fun. The pictures are gorgeous and we get compliments on them all the time!",
    stars: 5,
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-black text-sm">★</span>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-[#fafafa] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-3 font-light">
            Kind Words
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            What Couples Say
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <Stars count={t.stars} />

              {/* Quote */}
              <p className="text-gray-500 font-light leading-relaxed text-sm mb-6">
                "{t.text}"
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-gray-200 mb-6" />

              {/* Name & Event */}
              <div>
                <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs mt-1 tracking-wide">{t.event}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;