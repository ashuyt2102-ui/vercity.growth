'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Bot, LoaderCircle, MessageCircle, Send, X } from 'lucide-react';
import { pricingConfig } from '@/data/pricing';
import { agencyConfig } from '@/data/agency';

type ChatMessage = {
  role: 'assistant' | 'user';
  content: string;
};

type LeadFields = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  packagePlan: string;
  budget: string;
  projectDetails: string;
};

const services = [
  'All Services / Complete Growth Package',
  'Performance Marketing (Meta Ads)',
  'Social Media Management',
  'Weekly Creative Production',
  'Website Development (Shopify / Next.js)',
  'Studio Product Photo Shoot (From ₹10,000)',
];

const budgets = [
  '₹10,000 – ₹20,000 (Photo Shoot / Starter)',
  '₹20,000 – ₹25,000 / month',
  '₹25,000 – ₹35,000 / month',
  '₹35,000 / month (Complete Package)',
  '₹35,000 – ₹1,50,000 / month',
  '₹1,50,000+ / month (Enterprise Scale)',
];

const initialLead: LeadFields = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  service: services[0],
  packagePlan: 'COMPLETE GROWTH PACKAGE',
  budget: budgets[3],
  projectDetails: '',
};

export default function AgentChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'chat' | 'lead' | 'success'>('chat');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Hi! I’m the Vercity Growth AI assistant. Ask me about our services or plans, or request a consultation.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [lead, setLead] = useState(initialLead);
  const [leadError, setLeadError] = useState('');
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, mode, isSending]);

  const sendMessage = async (event?: FormEvent<HTMLFormElement>, suggestedMessage?: string) => {
    event?.preventDefault();
    const content = (suggestedMessage ?? input).trim();
    if (!content || isSending || content.length > 1200) return;

    const nextMessages = [...messages, { role: 'user' as const, content }];
    setMessages(nextMessages);
    setInput('');
    setIsSending(true);

    try {
      const response = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.slice(1).slice(-10).map((message) => ({
            role: message.role === 'assistant' ? 'model' : 'user',
            content: message.content,
          })),
        }),
      });
      const result: { answer?: string; error?: string } = await response.json();

      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: response.ok && result.answer
            ? result.answer
            : result.error || 'The assistant is temporarily unavailable. Please contact us directly.',
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: 'I couldn’t connect just now. Please try again, or contact our team directly.',
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const submitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmittingLead(true);
    setLeadError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...lead, websiteHp: '' }),
      });
      const result: { success?: boolean; error?: string } = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'We could not submit your request. Please try again.');
      }

      setMode('success');
    } catch (error) {
      setLeadError(error instanceof Error ? error.message : 'We could not submit your request. Please try again.');
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const updateLead = (field: keyof LeadFields, value: string) => {
    setLead((current) => ({ ...current, [field]: value }));
  };

  return (
    <div className="fixed bottom-4 right-4 z-[70] sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          aria-labelledby="agent-chat-title"
          aria-modal="false"
          className="mb-3 flex h-[min(38rem,calc(100dvh-7rem))] w-[calc(100vw-2rem)] max-w-[25rem] flex-col overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#090d16]/95 shadow-[0_24px_80px_rgba(0,0,0,0.65)] backdrop-blur-2xl"
          role="dialog"
        >
          <header className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.03] px-4 py-3.5">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <Bot aria-hidden="true" className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h2 id="agent-chat-title" className="truncate text-sm font-bold text-white">
                  Vercity AI Assistant
                </h2>
                <p className="text-[11px] text-gray-400">Services, plans &amp; consultation</p>
              </div>
            </div>
            <button
              aria-label="Close AI assistant"
              className="rounded-lg p-2 text-gray-400 transition hover:bg-white/[0.08] hover:text-white"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <X aria-hidden="true" className="h-4 w-4" />
            </button>
          </header>

          {mode === 'chat' && (
            <>
              <div aria-live="polite" className="flex-1 space-y-3 overflow-y-auto p-4">
                {messages.map((message, index) => (
                  <div
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    key={`${index}-${message.role}`}
                  >
                    <p
                      className={`max-w-[88%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        message.role === 'user'
                          ? 'rounded-br-md bg-cyan-400 text-slate-950'
                          : 'rounded-bl-md border border-white/[0.08] bg-white/[0.05] text-gray-200'
                      }`}
                    >
                      {message.content}
                    </p>
                  </div>
                ))}
                {isSending && (
                  <div className="flex items-center gap-2 text-xs text-gray-400" role="status">
                    <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin text-cyan-300" />
                    Thinking…
                  </div>
                )}
                {messages.length === 1 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['What services do you offer?', 'Show me your plans'].map((suggestion) => (
                      <button
                        className="rounded-full border border-cyan-400/20 px-3 py-1.5 text-xs text-cyan-200 transition hover:bg-cyan-400/10 disabled:opacity-50"
                        disabled={isSending}
                        key={suggestion}
                        onClick={() => void sendMessage(undefined, suggestion)}
                        type="button"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="border-t border-white/[0.08] p-3">
                <button
                  className="mb-2 inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 transition hover:text-white"
                  onClick={() => setMode('lead')}
                  type="button"
                >
                  Request a consultation <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                </button>
                <form className="flex items-center gap-2" onSubmit={(event) => void sendMessage(event)}>
                  <label className="sr-only" htmlFor="agent-message">Your message</label>
                  <input
                    autoComplete="off"
                    className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/30 px-3.5 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-cyan-400/60"
                    id="agent-message"
                    maxLength={1200}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Ask us anything…"
                    value={input}
                  />
                  <button
                    aria-label="Send message"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={isSending || !input.trim()}
                    type="submit"
                  >
                    <Send aria-hidden="true" className="h-4 w-4" />
                  </button>
                </form>
                <p className="mt-2 text-[10px] leading-relaxed text-gray-500">
                  AI replies use Google Gemini. Please don&apos;t share sensitive information.
                </p>
              </div>
            </>
          )}

          {mode === 'lead' && (
            <form className="flex-1 space-y-3 overflow-y-auto p-4" onSubmit={(event) => void submitLead(event)}>
              <div className="mb-1">
                <h3 className="text-base font-semibold text-white">Request a consultation</h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-400">
                  Share your details and the team will get back to you. Your information is used to respond to this enquiry.
                </p>
              </div>
              <label className="block text-xs text-gray-300">
                Name
                <input
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400/60"
                  maxLength={100}
                  minLength={2}
                  onChange={(event) => updateLead('fullName', event.target.value)}
                  required
                  value={lead.fullName}
                />
              </label>
              <label className="block text-xs text-gray-300">
                Email
                <input
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400/60"
                  onChange={(event) => updateLead('email', event.target.value)}
                  required
                  type="email"
                  value={lead.email}
                />
              </label>
              <label className="block text-xs text-gray-300">
                Phone
                <input
                  autoComplete="tel"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400/60"
                  maxLength={20}
                  minLength={7}
                  onChange={(event) => updateLead('phone', event.target.value)}
                  pattern="[+0-9 ()-]+"
                  required
                  type="tel"
                  value={lead.phone}
                />
              </label>
              <label className="block text-xs text-gray-300">
                Brand or company
                <input
                  autoComplete="organization"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400/60"
                  maxLength={100}
                  onChange={(event) => updateLead('company', event.target.value)}
                  required
                  value={lead.company}
                />
              </label>
              <label className="block text-xs text-gray-300">
                Interested in
                <select
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#111622] px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400/60"
                  onChange={(event) => updateLead('service', event.target.value)}
                  value={lead.service}
                >
                  {services.map((service) => <option key={service} value={service}>{service}</option>)}
                </select>
              </label>
              <label className="block text-xs text-gray-300">
                Plan
                <select
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#111622] px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400/60"
                  onChange={(event) => updateLead('packagePlan', event.target.value)}
                  value={lead.packagePlan}
                >
                  {pricingConfig.plans.map((plan) => (
                    <option key={plan.id} value={plan.name}>{plan.name} — {plan.price}</option>
                  ))}
                </select>
              </label>
              <label className="block text-xs text-gray-300">
                Estimated monthly budget
                <select
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#111622] px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400/60"
                  onChange={(event) => updateLead('budget', event.target.value)}
                  value={lead.budget}
                >
                  {budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
                </select>
              </label>
              <label className="block text-xs text-gray-300">
                What would you like help with?
                <textarea
                  className="mt-1.5 w-full resize-y rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400/60"
                  maxLength={2000}
                  minLength={10}
                  onChange={(event) => updateLead('projectDetails', event.target.value)}
                  required
                  rows={3}
                  value={lead.projectDetails}
                />
              </label>
              {leadError && <p className="text-xs text-red-300" role="alert">{leadError}</p>}
              <div className="flex gap-2 pt-1">
                <button
                  className="flex-1 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-gray-300 transition hover:bg-white/[0.06]"
                  onClick={() => setMode('chat')}
                  type="button"
                >
                  Back to chat
                </button>
                <button
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"
                  disabled={isSubmittingLead}
                  type="submit"
                >
                  {isSubmittingLead && <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" />}
                  Send request
                </button>
              </div>
            </form>
          )}

          {mode === 'success' && (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                <MessageCircle aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-white">Request received</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-400">
                Thanks for reaching out. Our team will follow up about your growth enquiry.
              </p>
              <button
                className="mt-5 rounded-xl border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/[0.06]"
                onClick={() => setMode('chat')}
                type="button"
              >
                Back to chat
              </button>
            </div>
          )}
        </section>
      )}

      <a
        className="mb-2 hidden items-center justify-center gap-2 rounded-full border border-white/10 bg-[#090d16]/90 px-3 py-2 text-xs text-gray-300 shadow-lg backdrop-blur-xl transition hover:border-cyan-400/40 hover:text-white sm:inline-flex"
        href={agencyConfig.contact.whatsappUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <MessageCircle aria-hidden="true" className="h-3.5 w-3.5 text-emerald-300" />
        WhatsApp
      </a>
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close Vercity AI assistant' : 'Open Vercity AI assistant'}
        className="ml-auto flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-cyan-300 to-blue-400 text-slate-950 shadow-[0_8px_32px_rgba(34,211,238,0.28)] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:h-auto sm:w-auto sm:px-5 sm:py-3.5"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Bot aria-hidden="true" className="h-5 w-5" />}
        <span className="hidden text-sm font-bold sm:inline">{isOpen ? 'Close chat' : 'Ask AI'}</span>
      </button>
    </div>
  );
}
