'use client'

import { useState } from 'react'

const en = {
  hero: {
    tag: 'June Guided Solutions',
    title: 'Your business never sleeps.',
    titleAccent: 'Neither should your website.',
    hook: 'While your competitors are sleeping, your website is booking clients.',
    sub: 'We build websites with AI chatbots that handle customer intake, scheduling, and inquiries in multiple languages \u2014 24 hours a day.',
    cta: 'Start a Conversation',
    toggle: '\uD55C\uAD6D\uC5B4',
  },
  services: {
    tag: 'What We Build',
    title: 'AI for every storefront.',
    sub: 'Every business answers the same questions a hundred times a week. What if that went to zero?',
    items: [
      { emoji: '\uD83C\uDF5C', title: 'Restaurants', desc: 'AI takes reservations, answers menu questions, handles catering \u2014 24/7.' },
      { emoji: '\uD83D\uDCDA', title: 'Academies', desc: 'AI fields parent questions on programs, pricing, schedules. Collects enrollment info while you teach.' },
      { emoji: '\uD83D\uDC90', title: 'Flower Shops', desc: 'AI takes orders, suggests arrangements by occasion, handles delivery scheduling.' },
      { emoji: '\uD83C\uDFE0', title: 'Real Estate', desc: 'AI qualifies buyer and renter leads before the agent picks up the phone.' },
      { emoji: '\uD83E\uDDB7', title: 'Medical', desc: 'AI schedules appointments, handles insurance questions, collects new patient forms.' },
      { emoji: '\uD83D\uDC87', title: 'Salons', desc: 'AI books appointments, manages cancellations and rescheduling. No more phone tag.' },
      { emoji: '\uD83D\uDCCA', title: 'Accounting', desc: 'AI collects documents and answers seasonal intake questions during tax crunch.' },
      { emoji: '\u2696\uFE0F', title: 'Law Firms', desc: 'AI qualifies leads and collects case details before the consultation.' },
    ],
  },
  what: {
    tag: 'What You Get',
    title: 'Not a marketing firm. A builder.',
    sub: 'We reduce your overhead by putting the right technology in the right places.',
    items: [
      { label: 'Frontend Development', desc: 'Custom-built, responsive websites designed for your business. No templates. No drag-and-drop.' },
      { label: 'Backend & Infrastructure', desc: 'Reliable hosting, API integrations, and server architecture that scales with your needs.' },
      { label: 'AI Chatbot Integration', desc: 'Bilingual AI (multilingual) that handles customer intake, scheduling, and inquiries around the clock.' },
      { label: 'Google Indexing & Search Console', desc: 'Your site gets found. Proper indexing, sitemap submission, and search performance monitoring from day one.' },
    ],
  },
  flagship: {
    tag: 'Featured Product',
    title: 'DivorceGPT',
    p1: 'AI-powered uncontested divorce document preparation for pro se applicants. Guides users through qualification, collects information, and generates court-ready documents.',
    p2: 'Live in New York and New Jersey. Built from scratch \u2014 every line of code, every form, every qualification flow.',
    cta: 'Visit divorcegpt.com',
    stat1: '$99', stat1label: 'per packet',
    stat2: '2', stat2label: 'states live',
    stat3: '0', stat3label: 'lawyers required',
  },
  pricing: {
    tag: 'Pricing',
    title: 'Custom websites. AI built-in. Clear pricing.',
    sub: 'Every project is different. We start with a conversation to understand what you need, then quote a flat fee with no hidden costs.',
    cta: 'Request a Consultation',
    includes: ['Custom website design', 'AI chatbot (multilingual)', 'Mobile responsive', 'Deployed & live', 'Source code ownership', 'Google Search Console setup'],
    note: 'You don\u2019t need to spend a fortune on monthly subscriptions. We build it, hand it over, and you own it.',
  },
  contact: {
    tag: 'Get in Touch',
    title: 'Ready to build?',
    sub: 'Tell us what you need. We\u2019ll tell you what it costs. No pressure. No contracts until you\u2019re ready.',
    email: 'admin@juneguidedsolutions.com',
    closing: 'The American Dream didn\u2019t die. It just needed better tools.',
  },
}


export default function Home() {
  const lang = 'en'
  const t = en

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-semibold tracking-widest uppercase">
            {t.hero.tag}
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-bold leading-tight tracking-tight">
            <span className="text-white">{t.hero.title}</span>
            <br />
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">{t.hero.titleAccent}</span>
          </h1>

          {/* Language Toggle - right under headline */}

          <p className="mt-8 text-xl text-white/70 font-medium max-w-2xl mx-auto">
            {t.hero.hook}
          </p>
          <p className="mt-4 text-base text-white/40 max-w-2xl mx-auto leading-relaxed">
            {t.hero.sub}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:admin@juneguidedsolutions.com" className="bg-gold-500 text-navy-950 px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-gold-400 transition-all hover:shadow-lg hover:shadow-gold-500/20">
              {t.hero.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Services - Business Types */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-semibold tracking-widest uppercase">
              {t.services.tag}
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">{t.services.title}</h2>
            <p className="mt-4 text-white/40 text-lg max-w-xl mx-auto">{t.services.sub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.services.items.map((s, i) => (
              <div key={i} className="group bg-navy-800/40 border border-white/5 rounded-2xl p-6 hover:border-gold-500/20 hover:bg-navy-800/60 transition-all duration-300">
                <div className="text-3xl mb-4">{s.emoji}</div>
                <h3 className="text-white font-semibold text-sm">{s.title}</h3>
                <p className="mt-3 text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get - Technical Services */}
      <section className="py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-semibold tracking-widest uppercase">
              {t.what.tag}
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">{t.what.title}</h2>
            <p className="mt-4 text-white/40 text-lg max-w-xl mx-auto">{t.what.sub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.what.items.map((item, i) => (
              <div key={i} className="bg-navy-800/40 border border-white/5 rounded-2xl p-8 hover:border-gold-500/20 transition-all">
                <h3 className="text-gold-400 font-semibold text-base">{item.label}</h3>
                <p className="mt-3 text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship - DivorceGPT */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-navy-900/30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-semibold tracking-widest uppercase">
              {t.flagship.tag}
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">{t.flagship.title}</h2>
          </div>
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="text-center bg-navy-800/40 border border-white/5 rounded-2xl p-6">
              <div className="font-display text-3xl font-bold text-gold-400">{t.flagship.stat1}</div>
              <div className="text-white/30 text-sm mt-1">{t.flagship.stat1label}</div>
            </div>
            <div className="text-center bg-navy-800/40 border border-white/5 rounded-2xl p-6">
              <div className="font-display text-3xl font-bold text-gold-400">{t.flagship.stat2}</div>
              <div className="text-white/30 text-sm mt-1">{t.flagship.stat2label}</div>
            </div>
            <div className="text-center bg-navy-800/40 border border-white/5 rounded-2xl p-6">
              <div className="font-display text-3xl font-bold text-gold-400">{t.flagship.stat3}</div>
              <div className="text-white/30 text-sm mt-1">{t.flagship.stat3label}</div>
            </div>
          </div>
          <div className="space-y-6 text-white/50 text-base leading-relaxed max-w-3xl mx-auto">
            <p>{t.flagship.p1}</p>
            <p>{t.flagship.p2}</p>
          </div>
          <div className="mt-10 text-center">
            <a href="https://divorcegpt.com" target="_blank" className="inline-flex items-center gap-2 bg-transparent border border-gold-500/30 text-gold-400 px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-gold-500/10 transition-all">
              {t.flagship.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 relative">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-semibold tracking-widest uppercase">
            {t.pricing.tag}
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">{t.pricing.title}</h2>
          <p className="mt-4 text-white/40 text-lg">{t.pricing.sub}</p>
          <div className="mt-12 bg-navy-800/40 border border-white/5 rounded-3xl p-10">
            <div className="space-y-3">
              {t.pricing.includes.map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-3 text-white/50 text-sm">
                  <svg className="w-4 h-4 text-gold-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-white/30 text-sm italic">{t.pricing.note}</p>
            <div className="mt-8">
              <a href="mailto:admin@juneguidedsolutions.com" className="bg-gold-500 text-navy-950 px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-gold-400 transition-all hover:shadow-lg hover:shadow-gold-500/20 inline-block">
                {t.pricing.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Closing */}
      <section className="py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-semibold tracking-widest uppercase">
            {t.contact.tag}
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">{t.contact.title}</h2>
          <p className="mt-4 text-white/40 text-lg">{t.contact.sub}</p>
          <div className="mt-10">
            <a href="mailto:admin@juneguidedsolutions.com" className="bg-gold-500 text-navy-950 px-10 py-4 rounded-xl font-semibold text-base hover:bg-gold-400 transition-all hover:shadow-lg hover:shadow-gold-500/20 inline-block">
              {t.contact.email}
            </a>
          </div>
          <p className="mt-16 font-display text-xl sm:text-2xl text-white italic">
            {t.contact.closing}
          </p>
          <p className="mt-12 text-white/20 text-xs">
            June Guided Solutions, LLC is not a law firm and does not provide legal advice.
          </p>
        </div>
      </section>
    </main>
  )
}
