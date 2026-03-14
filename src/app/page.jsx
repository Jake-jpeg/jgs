'use client'

import { useState } from 'react'

const en = {
  hero: {
    tag: 'June Guided Solutions',
    title: 'Your business never sleeps.',
    titleAccent: 'Neither should your website.',
    hook: 'While your competitors are sleeping, your website is booking clients.',
    sub: 'We build websites with AI chatbots that handle customer intake, scheduling, and inquiries in Korean and English \u2014 24 hours a day.',
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
      { label: 'AI Chatbot Integration', desc: 'Bilingual AI (Korean + English) that handles customer intake, scheduling, and inquiries around the clock.' },
      { label: 'Google Indexing & Search Console', desc: 'Your site gets found. Proper indexing, sitemap submission, and search performance monitoring from day one.' },
    ],
  },
  flagship: {
    tag: 'Featured Product',
    title: 'DivorceGPT',
    p1: 'AI-powered uncontested divorce document preparation for pro se applicants. Guides users through qualification, collects information, and generates court-ready documents.',
    p2: 'Live in New York and New Jersey. Built from scratch \u2014 every line of code, every form, every qualification flow.',
    cta: 'Visit divorcegpt.com',
    stat1: '$29', stat1label: 'per packet',
    stat2: '2', stat2label: 'states live',
    stat3: '0', stat3label: 'lawyers required',
  },
  pricing: {
    tag: 'Pricing',
    title: 'Custom websites. AI built-in. Clear pricing.',
    sub: 'Every project is different. We start with a conversation to understand what you need, then quote a flat fee with no hidden costs.',
    cta: 'Request a Consultation',
    includes: ['Custom website design', 'AI chatbot (Korean + English)', 'Mobile responsive', 'Deployed & live', 'Source code ownership', 'Google Search Console setup'],
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

const ko = {
  hero: {
    tag: 'June Guided Solutions',
    title: '비즈니스는 쉬지 않습니다.',
    titleAccent: '웹사이트도 그래야 합니다.',
    hook: '\uACBD\uC7C1\uC0AC\uAC00 \uC790\uB294 \uB3D9\uC548, \uB2F9\uC2E0\uC758 \uC6F9\uC0AC\uC774\uD2B8\uB294 \uACE0\uAC1D\uC744 \uC608\uC57D\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.',
    sub: '\uD55C\uAD6D\uC5B4\uC640 \uC601\uC5B4\uB85C \uACE0\uAC1D \uBB38\uC758, \uC608\uC57D, \uC0C1\uB2F4\uC744 24\uC2DC\uAC04 \uCC98\uB9AC\uD558\uB294 AI \uCC57\uBD07\uC774 \uD0D1\uC7AC\uB41C \uC6F9\uC0AC\uC774\uD2B8\uB97C \uAD6C\uCD95\uD569\uB2C8\uB2E4.',
    cta: '\uC0C1\uB2F4 \uC2DC\uC791\uD558\uAE30',
    toggle: 'English',
  },
  services: {
    tag: '\uC11C\uBE44\uC2A4',
    title: '\uBAA8\uB4E0 \uBE44\uC988\uB2C8\uC2A4\uB97C \uC704\uD55C AI.',
    sub: '\uB9E4\uC8FC \uAC19\uC740 \uC9C8\uBB38\uC5D0 \uC218\uBC31 \uBC88 \uB2F5\uD558\uACE0 \uACC4\uC2E0\uAC00\uC694? \uADF8 \uC2DC\uAC04\uC744 \uB418\uCC3E\uC73C\uC138\uC694.',
    items: [
      { emoji: '\uD83C\uDF5C', title: '\uC2DD\uB2F9', desc: 'AI\uAC00 \uC608\uC57D, \uBA54\uB274 \uBB38\uC758, \uCF00\uC774\uD130\uB9C1\uC744 24\uC2DC\uAC04 \uCC98\uB9AC\uD569\uB2C8\uB2E4.' },
      { emoji: '\uD83D\uDCDA', title: '\uD559\uC6D0', desc: 'AI\uAC00 \uD504\uB85C\uADF8\uB7A8, \uAC00\uACA9, \uC77C\uC815\uC5D0 \uB300\uD55C \uD559\uBD80\uBAA8 \uBB38\uC758\uB97C \uCC98\uB9AC\uD558\uACE0 \uB4F1\uB85D \uC815\uBCF4\uB97C \uC218\uC9D1\uD569\uB2C8\uB2E4.' },
      { emoji: '\uD83D\uDC90', title: '\uAF43\uC9D1', desc: 'AI\uAC00 \uC8FC\uBB38\uC744 \uBC1B\uACE0, \uC0C1\uD669\uC5D0 \uB9DE\uB294 \uAF43\uC744 \uCD94\uCC9C\uD558\uBA70, \uBC30\uB2EC \uC77C\uC815\uC744 \uAD00\uB9AC\uD569\uB2C8\uB2E4.' },
      { emoji: '\uD83C\uDFE0', title: '\uBD80\uB3D9\uC0B0', desc: 'AI\uAC00 \uB9E4\uC218\uC790\uC640 \uC784\uCC28\uC778\uC744 \uC0AC\uC804 \uAC80\uC99D\uD558\uC5EC \uD6A8\uC728\uC801\uC778 \uC0C1\uB2F4\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.' },
      { emoji: '\uD83E\uDDB7', title: '\uCE58\uACFC/\uBCD1\uC6D0', desc: 'AI\uAC00 \uC608\uC57D, \uBCF4\uD5D8 \uBB38\uC758, \uC2E0\uD658 \uC811\uC218\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.' },
      { emoji: '\uD83D\uDC87', title: '\uBBF8\uC6A9\uC2E4', desc: 'AI\uAC00 \uC608\uC57D, \uCDE8\uC18C, \uBCC0\uACBD\uC744 \uAD00\uB9AC\uD569\uB2C8\uB2E4.' },
      { emoji: '\uD83D\uDCCA', title: '\uC138\uBB34\uC0AC', desc: 'AI\uAC00 \uC11C\uB958\uB97C \uC218\uC9D1\uD558\uACE0 \uC138\uAE08 \uC2DC\uC98C \uBB38\uC758\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.' },
      { emoji: '\u2696\uFE0F', title: '\uBCC0\uD638\uC0AC', desc: 'AI\uAC00 \uC0C1\uB2F4 \uC804 \uC0AC\uAC74 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uACE0 \uC758\uB8B0\uC778\uC744 \uC0AC\uC804 \uAC80\uC99D\uD569\uB2C8\uB2E4.' },
    ],
  },
  what: {
    tag: '\uC81C\uACF5 \uC11C\uBE44\uC2A4',
    title: '\uB9C8\uCF00\uD305 \uD68C\uC0AC\uAC00 \uC544\uB2D9\uB2C8\uB2E4. \uBE4C\uB354\uC785\uB2C8\uB2E4.',
    sub: '\uC801\uC808\uD55C \uAE30\uC220\uC744 \uC801\uC808\uD55C \uACF3\uC5D0 \uBC30\uCE58\uD558\uC5EC \uC6B4\uC601 \uBE44\uC6A9\uC744 \uC904\uC5EC\uB4DC\uB9BD\uB2C8\uB2E4.',
    items: [
      { label: '\uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C', desc: '\uBE44\uC988\uB2C8\uC2A4\uC5D0 \uB9DE\uCDA4 \uC81C\uC791\uB41C \uBC18\uC751\uD615 \uC6F9\uC0AC\uC774\uD2B8. \uD15C\uD50C\uB9BF \uC5C6\uC74C. \uB4DC\uB798\uADF8\uC575\uB4DC\uB4DC\uB86D \uC5C6\uC74C.' },
      { label: '\uBC31\uC5D4\uB4DC \uBC0F \uC778\uD504\uB77C', desc: '\uC548\uC815\uC801\uC778 \uD638\uC2A4\uD305, API \uD1B5\uD569, \uD544\uC694\uC5D0 \uB530\uB77C \uD655\uC7A5 \uAC00\uB2A5\uD55C \uC11C\uBC84 \uC544\uD0A4\uD14D\uCC98.' },
      { label: 'AI \uCC57\uBD07 \uD1B5\uD569', desc: '\uD55C\uAD6D\uC5B4 + \uC601\uC5B4 \uC774\uC911 \uC5B8\uC5B4 AI\uAC00 \uACE0\uAC1D \uBB38\uC758, \uC608\uC57D, \uC0C1\uB2F4\uC744 24\uC2DC\uAC04 \uCC98\uB9AC.' },
      { label: 'Google \uC778\uB371\uC2F1 \uBC0F Search Console', desc: '\uC0AC\uC774\uD2B8\uAC00 \uAC80\uC0C9\uB429\uB2C8\uB2E4. \uC801\uC808\uD55C \uC778\uB371\uC2F1, \uC0AC\uC774\uD2B8\uB9F5 \uC81C\uCD9C, \uAC80\uC0C9 \uC131\uB2A5 \uBAA8\uB2C8\uD130\uB9C1\uC744 \uCC98\uC74C\uBD80\uD130 \uC124\uC815.' },
    ],
  },
  flagship: {
    tag: '\uB300\uD45C \uC81C\uD488',
    title: 'DivorceGPT',
    p1: '\uC790\uAE30\uB300\uB9AC(pro se) \uC2E0\uCCAD\uC790\uB97C \uC704\uD55C AI \uAE30\uBC18 \uBB34\uBD84\uC7C1 \uC774\uD63C \uC11C\uB958 \uC791\uC131. \uC790\uACA9 \uD655\uC778, \uC815\uBCF4 \uC218\uC9D1, \uBC95\uC6D0 \uC81C\uCD9C\uC6A9 \uBB38\uC11C \uC0DD\uC131\uAE4C\uC9C0 \uC548\uB0B4\uD569\uB2C8\uB2E4.',
    p2: '\uB274\uC695\uACFC \uB274\uC800\uC9C0\uC5D0\uC11C \uC6B4\uC601 \uC911. \uCC98\uC74C\uBD80\uD130 \uC9C1\uC811 \uAD6C\uCD95 \u2014 \uBAA8\uB4E0 \uCF54\uB4DC, \uBAA8\uB4E0 \uC591\uC2DD, \uBAA8\uB4E0 \uC790\uACA9 \uD655\uC778 \uC808\uCC28.',
    cta: 'divorcegpt.com \uBC29\uBB38',
    stat1: '$29', stat1label: '\uD328\uD0B7\uB2F9',
    stat2: '2', stat2label: '\uAC1C \uC8FC \uC6B4\uC601 \uC911',
    stat3: '0', stat3label: '\uBCC0\uD638\uC0AC \uBD88\uD544\uC694',
  },
  pricing: {
    tag: '\uAC00\uACA9',
    title: '\uB9DE\uCDA4\uD615 \uC6F9\uC0AC\uC774\uD2B8. AI \uD0D1\uC7AC. \uBA85\uD655\uD55C \uAC00\uACA9.',
    sub: '\uBAA8\uB4E0 \uD504\uB85C\uC81D\uD2B8\uB294 \uB2E4\uB985\uB2C8\uB2E4. \uBA3C\uC800 \uC0C1\uB2F4\uC744 \uD1B5\uD574 \uD544\uC694\uD55C \uAC83\uC744 \uD30C\uC545\uD55C \uD6C4, \uCD94\uAC00 \uBE44\uC6A9 \uC5C6\uB294 \uC815\uCC30\uAC00\uB97C \uC548\uB0B4\uD574 \uB4DC\uB9BD\uB2C8\uB2E4.',
    cta: '\uC0C1\uB2F4 \uC694\uCCAD',
    includes: ['\uB9DE\uCDA4\uD615 \uC6F9\uC0AC\uC774\uD2B8 \uB514\uC790\uC778', 'AI \uCC57\uBD07 (\uD55C\uAD6D\uC5B4 + \uC601\uC5B4)', '\uBAA8\uBC14\uC77C \uBC18\uC751\uD615', '\uBC30\uD3EC \uBC0F \uB77C\uC774\uBE0C', '\uC18C\uC2A4 \uCF54\uB4DC \uC18C\uC720\uAD8C', 'Google Search Console \uC124\uC815'],
    note: '\uB9E4\uB2EC \uBE44\uC2FC \uAD6C\uB3C5\uB8CC\uC5D0 \uB3C8\uC744 \uC4F8 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC6B0\uB9AC\uAC00 \uB9CC\uB4E4\uACE0, \uB118\uACA8\uB4DC\uB9AC\uBA74, \uB2F9\uC2E0\uC774 \uC18C\uC720\uD569\uB2C8\uB2E4.',
  },
  contact: {
    tag: '\uBB38\uC758',
    title: '\uC2DC\uC791\uD560 \uC900\uBE44\uAC00 \uB418\uC168\uB098\uC694?',
    sub: '\uD544\uC694\uD55C \uAC83\uC744 \uB9D0\uC500\uD574 \uC8FC\uC138\uC694. \uBE44\uC6A9\uC744 \uC548\uB0B4\uD574 \uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4. \uBD80\uB2F4 \uC5C6\uC774, \uC900\uBE44\uB418\uC2E4 \uB54C\uAE4C\uC9C0 \uACC4\uC57D \uC5C6\uC2B5\uB2C8\uB2E4.',
    email: 'admin@juneguidedsolutions.com',
    closing: '\uC544\uBA54\uB9AC\uCE78 \uB4DC\uB9BC\uC740 \uC8FD\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uB354 \uB098\uC740 \uB3C4\uAD6C\uAC00 \uD544\uC694\uD588\uC744 \uBFD0\uC785\uB2C8\uB2E4.',
  },
}

export default function Home() {
  const [lang, setLang] = useState('en')
  const t = lang === 'en' ? en : ko

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
          <div className="mt-6">
            <button
              onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
              className="bg-navy-800/80 backdrop-blur-sm border border-white/10 text-sm px-4 py-2 rounded-full text-white/70 hover:text-gold-400 hover:border-gold-400/30 transition-all"
            >
              {t.hero.toggle}
            </button>
          </div>

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
