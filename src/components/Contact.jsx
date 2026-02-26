import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    event_type: "",
    event_date: "",
    venue: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-[#fafafa] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-3 font-light">
            Get In Touch
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Let's Work Together
          </h2>
          <p className="text-gray-400 font-light mt-4 text-sm">
            Fill in the form and Amol will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT: FORM */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Thank You!
                </h3>
                <p className="text-gray-400 font-light text-sm">
                  Your enquiry has been received. Amol will reach out shortly.
                </p>
              </div>
            ) : (

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Priya Sharma"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-[#fafafa] focus:outline-none focus:border-black transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-[#fafafa] focus:outline-none focus:border-black transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="priya@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-[#fafafa] focus:outline-none focus:border-black transition"
                  />
                </div>

                {/* Event Type + Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">
                      Event Type *
                    </label>
                    <select
                      name="event_type"
                      required
                      value={formData.event_type}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-[#fafafa] focus:outline-none focus:border-black transition"
                    >
                      <option value="">Select...</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Pre-Wedding">Pre-Wedding</option>
                      <option value="Newborn">Newborn</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="event_date"
                      value={formData.event_date}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-[#fafafa] focus:outline-none focus:border-black transition"
                    />
                  </div>
                </div>

                {/* Venue */}
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">
                    Venue / Location
                  </label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    placeholder="Hotel Taj, Pune"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-[#fafafa] focus:outline-none focus:border-black transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me a little about your event..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-[#fafafa] focus:outline-none focus:border-black transition resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-black text-white text-sm font-semibold py-3.5 rounded-full hover:bg-gray-800 transition"
                >
                  Send Enquiry
                </button>

              </form>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">

            <div className="rounded-2xl overflow-hidden shadow-sm w-full h-72">
              <iframe
                title="Location"
                src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                  Phone / WhatsApp
                </p>
                <a
                  href="https://wa.me/919765509815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 text-sm font-medium hover:opacity-60"
                >
                  +91 97655 09815
                </a>
              </div>

              <div className="h-px bg-gray-100" />

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                  Email
                </p>
                <a
                  href="mailto:amol@weddingstudio.in"
                  className="text-gray-700 text-sm font-medium hover:opacity-60"
                >
                  amol@weddingstudio.in
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;