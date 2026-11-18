import React, { useState } from 'react';
import { Phone, Mail, MapPin, Shield, Award, ArrowRight, FileText, Check, UserCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/builderData';
import { RRLogo } from './RRLogo';
import type { PageId } from './PageHeader';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onOpenFlyer: () => void;
  onScrollToEstimator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenFlyer,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#071527] border-t border-[#1E3A5F] text-slate-400 text-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="text-left cursor-pointer focus:outline-none"
              title="Return to Home"
            >
              <RRLogo size="md" showTagline={true} />
            </button>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm mt-3">
              Full-service civil, structural steel, and architectural engineering across Andhra Pradesh &amp; Telangana. 
              Specializing in Turnkey Residential Buildings, Industrial Metal Sheds, 2D/3D Designing, and Performance Flooring.
            </p>

            <div className="space-y-2 pt-2 text-[11px] text-slate-300">
              <p className="flex items-center gap-2">
                <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>{COMPANY_INFO.proprietorTitle}: <strong className="text-white font-bold">{COMPANY_INFO.proprietor}</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>GSTIN: <strong className="text-white font-mono">{COMPANY_INFO.gstin}</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>ISO 9001:2015 &amp; Structural Engineering Standards</span>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Services &amp; Divisions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('packages')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Packages &amp; Cost Estimator
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Projects &amp; House Typologies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('process')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Execution Process &amp; Tech
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  FAQs &amp; Contact Desk
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="hover:text-orange-300 transition-colors cursor-pointer text-left font-bold text-orange-400"
                >
                  Book Free Site Survey
                </button>
              </li>
            </ul>
          </div>

          {/* Head & Regional Offices */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Official Contact
            </h4>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span><strong>Head Office:</strong> {COMPANY_INFO.headOffice}</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span><strong>Telangana Hub:</strong> {COMPANY_INFO.hyderabadHub}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white font-mono font-bold">
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenFlyer}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-amber-300 bg-white/10 hover:bg-white/15 border border-white/20 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Official Flyer</span>
              </button>
            </div>
          </div>

          {/* Newsletter / Project Quote */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Project Consultation
            </h4>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Connect directly with Proprietor {COMPANY_INFO.proprietor} for civil, structural steel PEB, or flooring proposals.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter email for BOQ spec"
                  className="w-full px-3 py-2 bg-[#0F223D] border border-slate-700 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:brightness-110 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <span>Request Engineering Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! We will reach out within 2 business hours.</span>
              </div>
            )}
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-[#1E3A5F] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300 text-[11px]">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>GSTIN: <strong className="text-white font-mono">{COMPANY_INFO.gstin}</strong></span>
            <span>Krishna District, AP • Hyderabad, TS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
