import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

const CLOUD_NAME = 'dhlxpfvdh';
const UPLOAD_PRESET = 'first_preset';

const Albums = () => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchImages = async () => {
    const { data } = await supabase
      .from('images')
      .select('*')
      .order('created_at', { ascending: false });
    setImages(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    setUploading(true);

    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', UPLOAD_PRESET);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        { method: 'POST', body: formData }
      );
      const data = await res.json();

      await supabase.from('images').insert({
        image_url: data.secure_url,
        public_id: data.public_id,
      });
    }

    setUploading(false);
    fetchImages();
  };

  const handleDelete = async (id) => {
    await supabase.from('images').delete().eq('id', id);
    fetchImages();
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <button onClick={() => navigate('/admin/dashboard')} className="text-sm text-gray-500 hover:text-black transition">
          ← Back
        </button>
        <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
          Portfolio Images
        </h1>
        <div />
      </div>

      <div className="max-w-5xl mx-auto px-8 py-12">
        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-black transition-colors duration-200 bg-white mb-10">
          <p className="text-2xl mb-2">📤</p>
          <p className="text-sm font-medium text-gray-700">
            {uploading ? 'Uploading...' : 'Click to upload images'}
          </p>
          <p className="text-xs text-gray-400 mt-1">Supports JPG, PNG, WEBP — multiple files</p>
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
            disabled={uploading}
          />
        </label>

        {loading ? (
          <p className="text-center text-gray-400 text-sm">Loading...</p>
        ) : images.length === 0 ? (
          <p className="text-center text-gray-400 text-sm">No images yet. Upload some!</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img) => (
              <div key={img.id} className="group relative rounded-xl overflow-hidden bg-gray-100">
                <img src={img.image_url} alt="" className="w-full h-40 object-cover" />
                <button
                  onClick={() => handleDelete(img.id)}
                  className="absolute top-2 right-2 bg-black/70 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Albums;