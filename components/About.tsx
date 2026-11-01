'use client';

import React from 'react';
import { Compass, Shield, Flame, CheckCircle2, Mail, MessageCircle } from 'lucide-react';
import { agencyConfig } from '@/data/agency';
import Card3D from './3d/Card3D';

const ABOUT_PILLARS = [
  {
    icon: Compass,
    title: 'Our Mission',
    text: 'To empower ambitious D2C fashion and lifestyle brands with high-ROAS Meta Ads, high-converting creative engines, and conversion-optimized sales funnels.',
  },
  {
    icon: Flame,
    title: 'Our Philosophy',
    text: 'No bloated corporate retainers or junior account managers. We partner directly with founders through weekly creative testing, transparent data reporting, and relentless execution.',
  },
  {
    icon: Shield,
    title: 'Why Choose Vercity Growth',
    text: '100% direct account ownership, verified server-side CAPI telemetry, 2–3 weekly fresh creative iterations, and honest 10–15 min discovery calls.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Storytelling */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
              Agency DNA &bull; About Us
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 font-mono">
              WE THINK BEYOND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                MARKETING.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-6">
              VERCITY GROWTH is a digital growth agency focused on combining creativity, strategy and technology. We help businesses strengthen their online presence, connect with their audiences and build sustainable growth systems.
            </p>

            <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed mb-8">
              We specialize in scaling D2C fashion, lifestyle, and consumer brands. Instead of standard generic ad templates, we produce high-retention hooked video creatives and optimize your store funnel so every click has the highest probability of turning into a loyal customer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Meta Ads Management (ROAS Focused)',
                '2–3 High-CTR Creatives Weekly',
                'D2C Funnel & CRO Optimization',
                'Direct Weekly Strategy Reviews',
              ].map((bullet) => (
                <div key={bullet} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Values Pillars with 3D tilt */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {ABOUT_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card3D key={pillar.title} intensity={10}>
                  <div className="p-6 rounded-2xl bg-[#0a0d16]/80 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/30 transition-all shadow-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-cyan-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                </Card3D>
              );
            })}
          </div>
        </div>

        {/* Leadership & Founders Profile Cards */}
        <div className="pt-12 border-t border-white/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">
              Leadership &amp; Execution
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-mono">
              DIRECT ACCESS TO GROWTH STRATEGISTS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {agencyConfig.leadership.map((person) => (
              <Card3D key={person.name} intensity={12}>
                <div className="p-7 rounded-2xl bg-[#0a0d16]/85 backdrop-blur-xl border border-white/[0.09] hover:border-cyan-500/40 transition-all shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white font-mono">{person.name}</h4>
                      <p className="text-xs font-mono text-cyan-400">{person.role}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px]">
                      <div className="w-full h-full bg-[#0c101c] rounded-full flex items-center justify-center text-white font-mono text-sm font-black">
                        {person.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-6">
                    {person.bio}
                  </p>

                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                    <a
                      href={`mailto:${person.email}`}
                      className="inline-flex items-center gap-1.5 text-gray-400 hover:text-cyan-300 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{person.email}</span>
                    </a>

                    {person.phone && (
                      <a
                        href={person.whatsappUrl || `tel:${person.phone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{person.phoneDisplay}</span>
                      </a>
                    )}
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
