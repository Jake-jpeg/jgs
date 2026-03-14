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
      description: 'AI-powered uncontested divorce document preparation for pro se applicants. Live in New York and New Jersey. $29 per packet. Guides users through qualification, collects information, and generates court-ready PDF documents.',
      link: 'https://divorcegpt.com',
      linkLabel: 'divorcegpt.com',
      features: ['AI-guided qualification', 'Court-ready PDF generation', 'SCRA compliance', 'Privacy-first architecture', 'Stripe payment processing'],
    },
    {
      name: 'AI Business Websites',
      status: 'Available',
      statusColor: 'bg-gold-500/10 text-gold-400 border-gold-500/20',
      description: 'Full website with a bilingual AI chatbot (Korean/English) that handles customer intake, scheduling, and inquiries 24/7. Built for any small business that answers the same questions every day.',
      link: 'mailto:admin@juneguidedsolutions.com',
      linkLabel: 'Get in touch',
      features: ['Bilingual AI chatbot', 'Custom design', 'Mobile responsive', 'Google Search Console', 'Source code ownership'],
    },
  ],
  disclaimer: 'June Guided Solutions, LLC is not a law firm and does not provide legal advice.',
}

const ko = {
  tag: '제품',
  title: '우리가 만든 것.',
  sub: '모든 제품은 동일한 기준을 따릅니다: 실제 사람들을 위한 실제 AI 솔루션. 허풍 없음. 기획만 있는 제품 없음.',
  products: [
    {
      name: 'DivorceGPT',
      status: '운영 중',
      statusColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      description: '자기대리(pro se) 신청자를 위한 AI 기반 무분쟁 이혼 서류 작성. 뉴욕과 뉴저지에서 운영 중. 패킷당 $29. 자격 확인, 정보 수집, 법원 제출용 PDF 문서 생성까지 안내합니다.',
      link: 'https://divorcegpt.com',
      linkLabel: 'divorcegpt.com',
      features: ['AI 자격 확인', '법원 제출용 PDF 생성', 'SCRA 준수', '개인정보 보호 우선 설계', 'Stripe 결제 처리'],
    },
    {
      name: 'AI 비즈니스 웹사이트',
      status: '이용 가능',
      statusColor: 'bg-gold-500/10 text-gold-400 border-gold-500/20',
      description: '한국어와 영어로 고객 문의, 예약, 상담을 24시간 처리하는 이중 언어 AI 챗봇이 포함된 웹사이트. 매일 같은 질문에 답하는 모든 소규모 사업체를 위해 제작.',
      link: 'mailto:admin@juneguidedsolutions.com',
      linkLabel: '문의하기',
      features: ['이중 언어 AI 챗봇', '맞춤형 디자인', '모바일 반응형', 'Google Search Console', '소스 코드 소유권'],
    },
  ],
  disclaimer: 'June Guided Solutions, LLC는 법률 사무소가 아니며 법률 자문을 제공하지 않습니다.',
}

export default function Products() {
  const [lang, setLang] = useState('en')
  const t = lang === 'en' ? en : ko

  return (
    <main className="pt-24">
      {/* Language Toggle */}
      <div className="fixed top-20 right-6 z-50">
        <button
          onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
          className="bg-navy-800/80 backdrop-blur-sm border border-white/10 text-sm px-3 py-1.5 rounded-full text-white/70 hover:text-gold-400 hover:border-gold-400/30 transition-all"
        >
          {lang === 'en' ? '한국어' : 'English'}
        </button>
      </div>

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
