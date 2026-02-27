import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

const Dashboard = () => {
  const [imageCount, setImageCount] = useState(0);
  const [inquiryCount, setInquiryCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCounts = async () => {
      const { count: imgCount } = await supabase
        .from('images')
        .select('*', { count: 'exact', head: true });

      const { count: inqCount } = await supabase
        .from('inquiries')
        .select('*', { count: 'exact', head: true });

      setImageCount(imgCount || 0);
      setInquiryCount(inqCount || 0);
    };
    fetchCounts();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-bold text-gray-900"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Admin Panel
        </h1>
        <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-black transition">
          Logout
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-12">
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <p className="text-5xl font-bold text-gray-900 mb-2">{imageCount}</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">Portfolio Images</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <p className="text-5xl font-bold text-gray-900 mb-2">{inquiryCount}</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">Inquiries</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <button
            onClick={() => navigate('/admin/albums')}
            className="bg-black text-white rounded-2xl p-8 text-left hover:bg-gray-800 transition-all duration-300"
          >
            <p className="text-2xl mb-2">📸</p>
            <p className="text-lg font-semibold mb-1">Manage Portfolio</p>
            <p className="text-sm text-white/60">Upload & delete images</p>
          </button>

          <button
            onClick={() => navigate('/admin/inquiries')}
            className="bg-white border border-gray-100 rounded-2xl p-8 text-left hover:shadow-md transition-all duration-300"
          >
            <p className="text-2xl mb-2">📬</p>
            <p className="text-lg font-semibold text-gray-900 mb-1">View Inquiries</p>
            <p className="text-sm text-gray-400">See all contact form submissions</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;