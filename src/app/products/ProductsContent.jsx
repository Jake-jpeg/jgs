'use client'

import { useState } from 'react'

const en = {
  tag: 'Products',
  title: 'What we\'ve built.',
  sub: 'Everything carries the same standard: real AI solving real problems for real people. No fluff. No vaporware.',
  products: [
    {
      name: 'DivorceGPT',
      status: 'Live',
      statusColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      description: 'AI-powered uncontested divorce document preparation for pro se applicants. Live in New York and New Jersey. $99 per packet. Guides users through qualification, collects information, and generates court-ready PDF documents.',
      link: 'https://divorcegpt.com',
      linkLabel: 'divorcegpt.com',
      features: ['AI-guided qualification', 'Court-ready PDF generation', 'SCRA compliance', 'Privacy-first architecture', 'Stripe payment processing'],
    },
    {
      name: 'AI Business Websites',
      status: 'Available',
      statusColor: 'bg-gold-500/10 text-gold-400 border-gold-500/20',
      description: 'Full website with a AI chatbot (multilingual) that handles customer intake, scheduling, and inquiries 24/7. Built for any small business that answers the same questions every day.',
      link: 'mailto:admin@juneguidedsolutions.com',
      linkLabel: 'Get in touch',
      features: ['Bilingual AI chatbot', 'Custom design', 'Mobile responsive', 'Google Search Console', 'Source code ownership'],
    },
  ],
  disclaimer: 'June Guided Solutions, LLC is not a law firm and does not provide legal advice.',
}


export default function ProductsContent() {
  const lang = 'en'
  const t = en

  return (
    <main className="pt-24">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-semibold tracking-widest uppercase">
              {t.tag}
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-bold text-white">{t.title}</h1>
            <p className="mt-4 text-white/40 text-lg max-w-2xl mx-auto">{t.sub}</p>
          </div>

          <div className="space-y-8">
            {t.products.map((product, i) => (
              <div key={i} className="bg-navy-800/40 border border-white/5 rounded-3xl p-8 sm:p-10 hover:border-gold-500/10 transition-all">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">{product.name}</h2>
                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold border ${product.statusColor}`}>
                      {product.status}
                    </span>
                  </div>
                  <a href={product.link} target={product.link.startsWith('http') ? '_blank' : undefined} className="text-gold-400 text-sm font-medium hover:text-gold-300 transition-colors flex items-center gap-1">
                    {product.linkLabel}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
                <p className="mt-6 text-white/50 text-base leading-relaxed">{product.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.features.map((f, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-navy-700/50 border border-white/5 text-white/40 text-xs">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/5">
            <p className="text-white/20 text-xs text-center">
              {t.disclaimer}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
