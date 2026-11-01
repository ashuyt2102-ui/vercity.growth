'use client';

import React, { useState, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import {
  Send,
  CheckCircle2,
  AlertTriangle,
  Mail,
  Phone,
  MessageSquare,
  Loader2,
  Camera,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { contactFormSchema, ContactFormData } from '@/lib/validations';
import { agencyConfig } from '@/data/agency';
import { pricingConfig } from '@/data/pricing';
import Card3D from './3d/Card3D';

interface ContactProps {
  initialSelectedPackage?: string;
}

export default function Contact({ initialSelectedPackage }: ContactProps) {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      service: 'Performance Marketing (Meta Ads)',
      packagePlan: initialSelectedPackage || 'COMPLETE GROWTH PACKAGE',
      budget: '₹35,000 / month (Complete Package)',
      projectDetails: '',
      websiteHp: '',
    },
  });
  const selectedPackage = useWatch({ control, name: 'packagePlan' });

  useEffect(() => {
    const requestedPlan = new URLSearchParams(window.location.search).get('plan');
    const plan = initialSelectedPackage || requestedPlan;
    if (plan && pricingConfig.plans.some((pricingPlan) => pricingPlan.name === plan)) {
      setValue('packagePlan', plan);
    }
  }, [initialSelectedPackage, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionStatus('loading');
    setResponseMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit enquiry.');
      }

      setSubmissionStatus('success');
      setResponseMessage(result.message || 'Enquiry submitted successfully! Our team will contact you within 24 hours.');

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
        });
      } catch {
        // Safe fallback
      }

      reset();
    } catch (err: unknown) {
      setSubmissionStatus('error');
      const msg = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
      setResponseMessage(msg);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16 relative overflow-hidden border-t border-white/[0.06] sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
            Direct Line &bull; 10–15 Min Discovery Call
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-mono">
            LET&apos;S BUILD SOMETHING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              THAT GROWS.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            Have a project in mind? Tell us what you&apos;re building and let&apos;s discuss how we can scale your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Agency Channels & Photo Shoot Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Photo Shoot Feature Card */}
            <Card3D intensity={12} glowColor="rgba(6, 182, 212, 0.25)">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0c1426]/90 via-[#0a0d16]/90 to-[#060810]/95 border border-cyan-500/40 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold">
                    Starting from ₹10,000
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    &bull; 3–5 Day Fast Delivery
                  </span>
                </div>
                <div className="flex items-center gap-2.5 mb-2">
                  <Camera className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white font-mono">
                    Commercial Product Photo Shoot
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-4">
                  High-end studio &amp; on-model lifestyle product photography engineered specifically for D2C fashion, cosmetics, and e-commerce brands.
                </p>
                <div className="pt-3 border-t border-cyan-500/20 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400">
                    White &amp; lifestyle backdrops
                  </span>
                  <a
                    href={agencyConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-white transition-colors"
                  >
                    Book on WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </Card3D>

            {/* Direct Contact Channels */}
            <Card3D intensity={10}>
              <div className="p-6 rounded-2xl bg-[#0a0d16]/85 border border-white/[0.08] backdrop-blur-xl shadow-2xl space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                  Direct Agency Contacts
                </h4>

                <a
                  href={`tel:${agencyConfig.contact.phoneRaw}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">
                      Phone &bull; Akash Kaushal
                    </span>
                    <span className="text-sm font-semibold text-white font-mono">
                      {agencyConfig.contact.phoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${agencyConfig.contact.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">
                      Official Email
                    </span>
                    <span className="text-sm font-semibold text-white font-mono">
                      {agencyConfig.contact.email}
                    </span>
                  </div>
                </a>

                <a
                  href={agencyConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-500/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-300 block">
                      Instant WhatsApp Chat
                    </span>
                    <span className="text-sm font-semibold text-white font-mono">
                      +91 88513 84747 (Online)
                    </span>
                  </div>
                </a>
              </div>
            </Card3D>
          </div>

          {/* Right Column: Complete Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <Card3D intensity={8} glowColor="rgba(6, 182, 212, 0.2)">
              <div className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-[#0a0d16]/90 border border-white/[0.09] backdrop-blur-2xl shadow-2xl">
                {/* Status Messages */}
                {submissionStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 mb-8 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-200 text-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold font-mono text-white mb-1">Enquiry Dispatched!</h4>
                      <p className="font-light leading-relaxed">{responseMessage}</p>
                    </div>
                  </motion.div>
                )}

                {submissionStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 mb-8 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-sm flex items-start gap-3"
                  >
                    <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold font-mono text-white mb-1">Submission Failed</h4>
                      <p className="font-light leading-relaxed">{responseMessage}</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Honeypot field for anti-spam */}
                  <input
                    type="text"
                    {...register('websiteHp')}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Morgan"
                        {...register('fullName')}
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                          errors.fullName ? 'border-red-500' : 'border-white/10 hover:border-white/20'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-400 mt-1 font-mono">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="alex@brand.com"
                        {...register('email')}
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                          errors.email ? 'border-red-500' : 'border-white/10 hover:border-white/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 font-mono">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                        Phone / WhatsApp <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        {...register('phone')}
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                          errors.phone ? 'border-red-500' : 'border-white/10 hover:border-white/20'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1 font-mono">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                        Company / Brand Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Lumina Apparel"
                        {...register('company')}
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                          errors.company ? 'border-red-500' : 'border-white/10 hover:border-white/20'
                        }`}
                      />
                      {errors.company && (
                        <p className="text-xs text-red-400 mt-1 font-mono">{errors.company.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Service & Package Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                        Primary Service Interested In
                      </label>
                      <select
                        {...register('service')}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0c101c] border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                      >
                        <option value="Studio Product Photo Shoot (From ₹10,000)">Studio Product Photo Shoot (From ₹10,000)</option>
                        <option value="Performance Marketing (Meta Ads)">Performance Marketing (Meta Ads)</option>
                        <option value="Social Media Management">Social Media Management</option>
                        <option value="Weekly Creative Production">2–3 Creatives (Weekly)</option>
                        <option value="Website Development (Shopify / Next.js)">Website Development (Shopify / Next.js)</option>
                        <option value="All Services / Complete Growth Package">All Services / Complete Package</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                        Selected Package / Plan
                      </label>
                      <select
                        {...register('packagePlan')}
                        value={selectedPackage}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0c101c] border border-cyan-500/30 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                      >
                        {pricingConfig.plans.map((plan) => (
                          <option key={plan.id} value={plan.name}>
                            {plan.name} · {plan.price} {plan.period}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Budget */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Estimated Monthly Budget
                    </label>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0c101c] border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    >
                      <option value="₹10,000 – ₹20,000 (Photo Shoot / Starter)">₹10,000 – ₹20,000 (Photo Shoot / Starter)</option>
                      <option value="₹20,000 – ₹25,000 / month">₹20,000 – ₹25,000 / month</option>
                      <option value="₹25,000 – ₹35,000 / month">₹25,000 – ₹35,000 / month</option>
                      <option value="₹35,000 / month (Complete Package)">₹35,000 / month (Complete Package)</option>
                      <option value="₹35,000 – ₹1,50,000 / month">₹35,000 – ₹1,50,000 / month</option>
                      <option value="₹1,50,000+ / month (Enterprise Scale)">₹1,50,000+ / month (Enterprise Scale)</option>
                    </select>
                  </div>

                  {/* Row 5: Project Details */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Project Details &bull; Products &bull; Shoot Requirements <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share details about your brand, products, photo shoot requirements, store URL, or what you'd like to discuss during the 10–15 min call..."
                      {...register('projectDetails')}
                      className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                        errors.projectDetails ? 'border-red-500' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.projectDetails && (
                      <p className="text-xs text-red-400 mt-1 font-mono">{errors.projectDetails.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submissionStatus === 'loading'}
                    className="w-full py-4 px-6 rounded-xl text-sm font-black uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 hover:opacity-95 shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {submissionStatus === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-black" />
                        <span>Transmitting Growth Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry &bull; Book 10–15 Min Call</span>
                        <Send className="w-4 h-4 text-black" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-center text-gray-500">
                    Akash Kaushal &bull; +91 88513 84747 &bull; vercitygrowth@gmail.com &bull; 24h Response SLA
                  </p>
                </form>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
}
