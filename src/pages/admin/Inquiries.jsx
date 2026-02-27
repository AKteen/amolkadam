import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

const Inquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInquiries = async () => {
      const { data } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      setInquiries(data || []);
      setLoading(false);
    };

    fetchInquiries();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="text-sm text-gray-500 hover:text-black transition"
        >
          ← Back
        </button>

        <h1
          className="text-2xl font-bold text-gray-900"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Inquiries
        </h1>

        <div />
      </div>

      <div className="max-w-5xl mx-auto px-8 py-12">
        {loading ? (
          <p className="text-center text-gray-400 text-sm">Loading...</p>
        ) : inquiries.length === 0 ? (
          <p className="text-center text-gray-400 text-sm">
            No inquiries yet.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {inquiries.map((inq) => (
              <div
                key={inq.id}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gray-900 font-semibold">
                      {inq.name}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">
                      {new Date(inq.created_at).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>

                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                    {inq.event_type || 'General'}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm mb-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${inq.phone}`}
                      className="text-gray-700 hover:opacity-60"
                    >
                      {inq.phone}
                    </a>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${inq.email}`}
                      className="text-gray-700 hover:opacity-60"
                    >
                      {inq.email}
                    </a>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                      Event Date
                    </p>
                    <p className="text-gray-700">
                      {inq.event_date || '—'}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                      Venue
                    </p>
                    <p className="text-gray-700">
                      {inq.venue || '—'}
                    </p>
                  </div>
                </div>

                {inq.message && (
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                      Message
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {inq.message}
                    </p>
                  </div>
                )}

                <div className="mt-4">
                  {/* ✅ Fixed anchor */}
                  <a
                    href={`https://wa.me/${inq.phone?.replace(
                      /[^0-9]/g,
                      ''
                    )}?text=Hi ${inq.name}, thank you for your enquiry!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-semibold bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
                  >
                    Reply on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inquiries;