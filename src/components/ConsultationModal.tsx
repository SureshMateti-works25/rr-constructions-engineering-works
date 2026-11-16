import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/builderData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillNote?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefillNote = '',
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('Krishna / Gudur');
  const [consultationType, setConsultationType] = useState('site-visit');
  const [timeSlot, setTimeSlot] = useState('11:00 AM');
  const [date, setDate] = useState('2026-11-20');
  const [notes, setNotes] = useState(prefillNote);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setNotes(prefillNote);
  }, [prefillNote]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (e.target !== dialog) return;

    const rect = dialog.getBoundingClientRect();
    const isInside =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;

    if (!isInside) {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#00A3FF', '#0066CC', '#10B981', '#0B2545'],
    });

    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      {...({ closedby: 'any' } as any)}
      aria-labelledby="consultation-modal-title"
      onClick={handleDialogClick}
      onClose={onClose}
      className="m-auto backdrop:bg-black/80 backdrop:backdrop-blur-sm rounded-2xl p-0 border border-[#1E3A5F] shadow-2xl overflow-hidden text-white max-w-xl w-full bg-[#071527]"
    >
      <div className="bg-[#0F1E36] p-6 sm:p-8 max-h-[90dvh] overflow-y-auto space-y-5">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#1E3A5F] pb-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 bg-blue-900/40 px-2.5 py-0.5 rounded border border-blue-500/30">
              {COMPANY_INFO.name}
            </span>
            <h3 id="consultation-modal-title" className="font-sans font-black text-2xl text-white mt-1">
              Schedule Free Site Survey &amp; 3D Plan
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Varma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg text-xs bg-[#071527] border border-[#1E3A5F] text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 79957 XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg text-xs bg-[#071527] border border-[#1E3A5F] text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="anand@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg text-xs bg-[#071527] border border-[#1E3A5F] text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                  Project Region / Location *
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg text-xs bg-[#071527] border border-[#1E3A5F] text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="Krishna / Gudur / Maddipatla">Krishna District (Gudur / Maddipatla / Machilipatnam)</option>
                  <option value="Vijayawada / Guntur">Vijayawada &amp; Guntur Capital Region</option>
                  <option value="Medchal / Shamirpeta / Aliabad">Medchal / Shamirpeta / Aliabad (Telangana Hub)</option>
                  <option value="Hyderabad - West Zone">Hyderabad (Tellapur, Kokapet, Gachibowli, Financial Dist)</option>
                  <option value="Hyderabad - Central">Hyderabad (Jubilee Hills, Banjara Hills)</option>
                  <option value="Hyderabad - North">Hyderabad (Kompally, Bachupally, Miyapur)</option>
                  <option value="Other AP / Telangana">Other AP / Telangana Location</option>
                </select>
              </div>
            </div>

            {/* Consultation Format */}
            <div>
              <label className="text-[11px] font-bold text-slate-300 block mb-1.5">
                Preferred Consultation Format
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'site-visit', label: 'On-Site Plot Survey' },
                  { id: 'office-vr', label: 'In Regional Office' },
                  { id: 'video-call', label: 'Online Video Call' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setConsultationType(type.id)}
                    className={`py-2 px-2 rounded-lg text-[11px] font-bold text-center border transition-all cursor-pointer ${
                      consultationType === type.id
                        ? 'bg-[#0066CC] text-white border-[#00A3FF]'
                        : 'bg-[#071527] text-slate-300 border-[#1E3A5F] hover:bg-[#0B2545]'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg text-xs bg-[#071527] border border-[#1E3A5F] text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                  Preferred Time
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg text-xs bg-[#071527] border border-[#1E3A5F] text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="10:00 AM">Morning: 10:00 AM - 12:00 PM</option>
                  <option value="02:00 PM">Afternoon: 02:00 PM - 04:00 PM</option>
                  <option value="05:00 PM">Evening: 05:00 PM - 07:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-300 block mb-1">
                Project Specifics / Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Plot size in Sq.Yards, residential turnkey, structural steel shed, flooring type, Vastu facing..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full py-2 px-3 rounded-lg text-xs bg-[#071527] border border-[#1E3A5F] text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl font-black text-sm text-white bg-gradient-to-r from-[#00A3FF] via-[#0066CC] to-[#004099] hover:brightness-110 shadow-lg shadow-blue-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Confirm Free Consultation with Engineering Team</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct review by Proprietor {COMPANY_INFO.proprietor} • Zero spam guarantee</span>
            </div>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h4 className="font-sans font-black text-2xl text-white">
                Consultation Request Confirmed!
              </h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you <strong className="text-white">{name}</strong>. Our senior structural engineer and Proprietor {COMPANY_INFO.proprietor} will connect with you at <strong className="text-cyan-400">{phone}</strong> for your {location} project.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#071527] border border-[#1E3A5F] text-left text-xs space-y-1.5 max-w-sm mx-auto text-slate-300">
              <div className="flex justify-between">
                <span>Date &amp; Time:</span>
                <strong className="text-white">{date} at {timeSlot}</strong>
              </div>
              <div className="flex justify-between">
                <span>Format:</span>
                <strong className="text-white capitalize">{consultationType.replace('-', ' ')}</strong>
              </div>
              <div className="flex justify-between">
                <span>Location:</span>
                <strong className="text-white">{location}</strong>
              </div>
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </dialog>
  );
};
