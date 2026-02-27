import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    event_type: '',
    event_date: '',
    venue: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '860bdf79-ed62-4a2c-9a15-6659d95e4a96',
          subject: `New Enquiry from ${formData.name}`,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send. Please check your connection.');
    } finally {
      setLoading(false);
    }
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

          {/* LEFT — Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Thank You!
                </h3>
                <p className="text-gray-400 font-light text-sm">
                  Your enquiry has been received. Amol will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Priya Sharma"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-black bg-[#fafafa]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-black bg-[#fafafa]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="priya@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-black bg-[#fafafa]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">Event Type *</label>
                    <select
                      name="event_type"
                      required
                      value={formData.event_type}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-black bg-[#fafafa]"
                    >
                      <option value="">Select...</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Pre-Wedding">Pre-Wedding</option>
                      <option value="Newborn">Newborn</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">Event Date</label>
                    <input
                      type="date"
                      name="event_date"
                      value={formData.event_date}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-black bg-[#fafafa]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">Venue / Location</label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    placeholder="Hotel Taj, Pune"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-black bg-[#fafafa]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me a little about your event..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-black bg-[#fafafa] resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white text-sm font-semibold py-3.5 rounded-full hover:bg-gray-800 transition disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Enquiry'}
                </button>

              </form>
            )}
          </div>

          {/* RIGHT — Map + Contact Info */}
          <div className="flex flex-col gap-6">

            <div className="rounded-2xl overflow-hidden shadow-sm w-full h-72">
              <iframe
                title="Little Smile Studio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.181!2d77.6863147!3d19.6049816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1931181c0cfbf%3A0xffe7e19380f02861!2sLittle%20Smile%20Studio!5e0!3m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-5">

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Location</p>
                <p className="text-gray-700 text-sm font-medium">Pune, Maharashtra, India</p>
              </div>

              <div className="w-full h-px bg-gray-100" />

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Phone / WhatsApp</p>
                <a
                  href="https://wa.me/918975102118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 text-sm font-medium hover:opacity-60"
                >
                  +91 89751 02118
                </a>
              </div>

              <div className="w-full h-px bg-gray-100" />

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
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