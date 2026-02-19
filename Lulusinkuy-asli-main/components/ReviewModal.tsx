
import React, { useState } from 'react';
import { X, Star, Send, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [serviceId, setServiceId] = useState('');
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!serviceId) newErrors.serviceId = 'Silakan pilih layanan';
    if (!userName) newErrors.userName = 'Nama harus diisi';
    if (rating === 0) newErrors.rating = 'Silakan berikan rating';
    if (comment.length < 10) newErrors.comment = 'Ulasan minimal 10 karakter';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In a real app, send to API. For now, simulate success.
      setStep('success');
      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation
    setTimeout(() => {
      setStep('form');
      setRating(0);
      setServiceId('');
      setUserName('');
      setComment('');
      setErrors({});
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#050C1A]/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#12263F] w-full max-w-lg rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-10">
          {step === 'form' ? (
            <>
              <h2 className="text-2xl font-bold mb-2">Beri Ulasan Layanan</h2>
              <p className="text-white/60 mb-8">Pengalamanmu sangat berharga bagi kami dan mahasiswa lainnya.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/60">Pilih Layanan</label>
                  <select 
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    className="w-full bg-[#0A1931] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1E90FF] transition-all"
                  >
                    <option value="">-- Pilih Layanan --</option>
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                  {errors.serviceId && <p className="text-red-400 text-xs mt-1">{errors.serviceId}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/60">Nama Kamu</label>
                  <input 
                    type="text" 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full bg-[#0A1931] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1E90FF] transition-all"
                    placeholder="Masukkan nama lengkap"
                  />
                  {errors.userName && <p className="text-red-400 text-xs mt-1">{errors.userName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/60">Rating Bintang</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform active:scale-90"
                      >
                        <Star 
                          size={32} 
                          className={`${(hoverRating || rating) >= star ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'} transition-colors`} 
                        />
                      </button>
                    ))}
                  </div>
                  {errors.rating && <p className="text-red-400 text-xs mt-1">{errors.rating}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/60">Ulasan Singkat</label>
                  <textarea 
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full bg-[#0A1931] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1E90FF] transition-all resize-none"
                    placeholder="Tulis ulasanmu di sini (minimal 10 karakter)..."
                  />
                  {errors.comment && <p className="text-red-400 text-xs mt-1">{errors.comment}</p>}
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#1E90FF] hover:bg-[#1E90FF]/80 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#1E90FF]/20"
                >
                  <Send size={18} />
                  Kirim Ulasan
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-10 animate-bounce-in">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-2xl font-bold mb-3">Terima Kasih!</h2>
              <p className="text-white/60">Ulasanmu telah berhasil dikirim dan akan segera tampil setelah moderasi.</p>
              <button 
                onClick={handleClose}
                className="mt-8 text-[#1E90FF] font-semibold hover:underline"
              >
                Tutup Jendela
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
