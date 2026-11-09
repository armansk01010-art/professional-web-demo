import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialProject?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialProject
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: initialService || 'Residential Interiors',
    projectLocation: '',
    approximateArea: '',
    timeline: 'Within 3 - 6 months',
    budgetRange: '₹75L - ₹1.5 Cr',
    projectBrief: initialProject ? `Inquiry regarding concept and spatial approach inspired by ${initialProject}.` : ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.projectLocation.trim()) {
      errs.projectLocation = 'Please state the city or region.';
    }
    if (!formData.projectBrief.trim()) {
      errs.projectBrief = 'Please provide a brief outline of your spatial aspirations.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setReferenceId(`FA-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceType: 'Residential Interiors',
      projectLocation: '',
      approximateArea: '',
      timeline: 'Within 3 - 6 months',
      budgetRange: '₹75L - ₹1.5 Cr',
      projectBrief: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A1A1A]/70 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#F8F7F4] border border-[#EAE7E0] p-6 sm:p-10 my-8 shadow-2xl transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#292929]/70 hover:text-[#292929] transition-colors p-1 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-5">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#EAE7E0] flex items-center justify-center text-[#292929]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 id="inquiry-modal-title" className="font-editorial-heading text-3xl text-[#292929]">
              Inquiry Received
            </h3>
            <p className="text-sm text-[#54524E] max-w-md mx-auto leading-relaxed">
              Thank you for considering FORME ATELIER. Our studio directors review each submission carefully. We will respond with preliminary thoughts and availability within two business days.
            </p>
            <div className="p-4 bg-[#EAE7E0]/60 max-w-sm mx-auto text-xs text-[#292929]">
              <span className="block text-[#7A7062] mb-1 uppercase tracking-wider text-[11px]">
                Inquiry Reference
              </span>
              <span className="font-mono text-sm tracking-widest font-semibold">
                {referenceId}
              </span>
            </div>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-[#292929] text-[#FFFFFF] text-xs uppercase tracking-widest font-medium hover:bg-[#1A1A1A] transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <span className="text-[11px] uppercase tracking-widest text-[#A69B8B] block mb-1">
                Studio Engagement
              </span>
              <h2 id="inquiry-modal-title" className="font-editorial-heading text-3xl sm:text-4xl text-[#292929]">
                Initiate a Project Discussion
              </h2>
              <p className="text-xs text-[#54524E] mt-2 leading-relaxed font-light">
                Please share preliminary details regarding your spatial ambitions. We review every brief to ensure ideological alignment and scheduling feasibility.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#292929] font-medium mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="E.g., Ananya Deshmukh"
                    className={`w-full px-3.5 py-2.5 text-xs bg-white border ${
                      errors.fullName ? 'border-red-500' : 'border-[#DDD8CE]'
                    } focus:border-[#292929] focus:outline-none transition-colors`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#292929] font-medium mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full px-3.5 py-2.5 text-xs bg-white border ${
                      errors.email ? 'border-red-500' : 'border-[#DDD8CE]'
                    } focus:border-[#292929] focus:outline-none transition-colors`}
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#292929] font-medium mb-1.5">
                    Phone / Mobile (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98200 00000"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#DDD8CE] focus:border-[#292929] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#292929] font-medium mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#DDD8CE] focus:border-[#292929] focus:outline-none transition-colors"
                  >
                    <option value="Residential Interiors">Residential Interiors</option>
                    <option value="Commercial Interiors">Commercial Interiors</option>
                    <option value="Architecture">Ground-Up Architecture</option>
                    <option value="Design Consultation">Strategic Design Consultation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#292929] font-medium mb-1.5">
                    Project Location *
                  </label>
                  <input
                    type="text"
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                    placeholder="E.g., Bandra, Mumbai or Alibaug"
                    className={`w-full px-3.5 py-2.5 text-xs bg-white border ${
                      errors.projectLocation ? 'border-red-500' : 'border-[#DDD8CE]'
                    } focus:border-[#292929] focus:outline-none transition-colors`}
                  />
                  {errors.projectLocation && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.projectLocation}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#292929] font-medium mb-1.5">
                    Approximate Built Area (sq. ft.)
                  </label>
                  <input
                    type="text"
                    value={formData.approximateArea}
                    onChange={(e) => setFormData({ ...formData, approximateArea: e.target.value })}
                    placeholder="E.g., 3,500 sq.ft."
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#DDD8CE] focus:border-[#292929] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#292929] font-medium mb-1.5">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#DDD8CE] focus:border-[#292929] focus:outline-none transition-colors"
                  >
                    <option value="Immediate (1 - 2 months)">Immediate (1 - 2 months)</option>
                    <option value="Within 3 - 6 months">Within 3 - 6 months</option>
                    <option value="6 - 12 months out">6 - 12 months out</option>
                    <option value="Exploratory / Land Acquisition">Exploratory / Early Planning</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#292929] font-medium mb-1.5">
                    Anticipated Investment
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#DDD8CE] focus:border-[#292929] focus:outline-none transition-colors"
                  >
                    <option value="₹40L - ₹75L">₹40 Lakhs – ₹75 Lakhs</option>
                    <option value="₹75L - ₹1.5 Cr">₹75 Lakhs – ₹1.5 Crore</option>
                    <option value="₹1.5 Cr - ₹3 Cr">₹1.5 Crore – ₹3 Crore</option>
                    <option value="₹3 Cr+">₹3 Crore and above</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#292929] font-medium mb-1.5">
                  Spatial Vision & Context *
                </label>
                <textarea
                  rows={3}
                  value={formData.projectBrief}
                  onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                  placeholder="Tell us about the property, lifestyle requirements, preferred materiality, and what drew you to FORME ATELIER..."
                  className={`w-full px-3.5 py-2.5 text-xs bg-white border ${
                    errors.projectBrief ? 'border-red-500' : 'border-[#DDD8CE]'
                  } focus:border-[#292929] focus:outline-none transition-colors resize-none`}
                />
                {errors.projectBrief && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.projectBrief}</p>
                )}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#7A7062]">
                  * Required fields
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#292929] text-[#FFFFFF] hover:bg-[#1A1A1A] transition-colors text-xs uppercase tracking-widest font-medium cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
