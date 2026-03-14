'use client'

import { useState } from 'react'

const en = {
  tag: 'Background',
  title: 'The Builder',
  paragraphs: [
    'June Guided Solutions was founded by a practicing attorney licensed in New Jersey and New York. The founder had no background in technology — no computer science degree, no bootcamp, no engineering training. What existed was a law practice, a gap in access to justice, and the persistence to close it.',
    'The idea behind DivorceGPT was simple: thousands of people every year need uncontested divorce documents but cannot afford legal representation. The forms are publicly available. The process is straightforward. But navigating it alone is intimidating, error-prone, and often leads to rejected filings. DivorceGPT was built to guide pro se applicants through that process using AI — accurately, affordably, and without replacing the role of an attorney.',
    'Building the platform required learning full-stack web development from scratch — frontend frameworks, backend services, API integrations, payment processing, cloud infrastructure. Every pre-built solution fell short. The only path forward was to build it from the ground up.',
    'That process — solving a real problem by building real technology — is what created June Guided Solutions. The skills that emerged from building DivorceGPT became the foundation for a broader service: AI-powered websites for small businesses.',
    'Today, JGS builds websites with bilingual AI chatbots for small businesses in New Jersey and New York, with a focus on the Korean-American business community. Every site is custom-built, ships with AI that handles customer intake in Korean and English, and is delivered on a flat-fee basis.',
    'The founder\'s legal background informs the quality and diligence behind every project — but June Guided Solutions is a technology company, not a law firm. JGS does not provide legal advice or legal services.',
  ],
  quote: 'The skill set that emerged from building DivorceGPT turned out to be more valuable than any single product. It became a business.',
  stats: [
    { value: '2015', label: 'NJ Bar Admission' },
    { value: '2016', label: 'NY Bar Admission' },
    { value: '2025', label: 'DivorceGPT Launch' },
    { value: '2026', label: 'JGS Web Services' },
  ],
  cta: 'Work with The Builder',
  disclaimer: 'June Guided Solutions, LLC is not a law firm and does not provide legal advice.',
}

const ko = {
  tag: '배경',
  title: 'The Builder',
  paragraphs: [
    'June Guided Solutions는 뉴저지와 뉴욕에서 활동하는 변호사가 설립했습니다. 창업자는 기술 분야 경력이 없었습니다 — 컴퓨터 공학 학위도, 부트캠프 수료증도, 엔지니어링 배경도 없었습니다. 있었던 것은 법률 사무소, 법률 서비스 접근성의 격차, 그리고 그 격차를 해소하려는 끈기뿐이었습니다.',
    'DivorceGPT의 아이디어는 단순했습니다: 매년 수천 명의 사람들이 무분쟁 이혼 서류를 필요로 하지만 법률 대리를 감당할 수 없습니다. 양식은 공개되어 있고 절차도 간단하지만, 혼자 진행하면 실수가 잦고 서류가 반려되기 쉽습니다. DivorceGPT는 AI를 활용하여 자기대리(pro se) 신청자들이 정확하고 저렴하게 이 과정을 진행할 수 있도록 구축되었습니다.',
    '플랫폼 구축을 위해 프론트엔드 프레임워크, 백엔드 서비스, API 통합, 결제 처리, 클라우드 인프라를 처음부터 독학해야 했습니다. 기존 솔루션으로는 부족했기에, 직접 처음부터 구축하는 것이 유일한 방법이었습니다.',
    '실제 문제를 실제 기술로 해결하는 과정에서 June Guided Solutions가 탄생했습니다. DivorceGPT를 만들며 쌓은 기술은 더 넓은 서비스의 기반이 되었습니다: 소규모 사업체를 위한 AI 기반 웹사이트.',
    '현재 JGS는 뉴저지와 뉴욕의 소규모 사업체, 특히 한인 비즈니스 커뮤니티를 위해 이중 언어 AI 챗봇이 탑재된 웹사이트를 구축하고 있습니다. 모든 사이트는 맞춤 제작되며, 한국어와 영어로 고객 문의를 처리하는 AI가 포함되어 정찰제로 제공됩니다.',
    '창업자의 법률 배경은 모든 프로젝트의 품질과 신중함에 반영되지만, June Guided Solutions는 기술 회사이며 법률 사무소가 아닙니다. JGS는 법률 자문이나 법률 서비스를 제공하지 않습니다.',
  ],
  quote: 'DivorceGPT를 만들며 얻은 기술은 어떤 단일 제품보다 더 가치 있었습니다. 그것이 사업이 되었습니다.',
  stats: [
    { value: '2015', label: 'NJ 변호사 자격' },
    { value: '2016', label: 'NY 변호사 자격' },
    { value: '2025', label: 'DivorceGPT 런칭' },
    { value: '2026', label: 'JGS 웹 서비스' },
  ],
  cta: 'The Builder와 함께 일하기',
  disclaimer: 'June Guided Solutions, LLC는 법률 사무소가 아니며 법률 자문을 제공하지 않습니다.',
}

export default function About() {
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
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-semibold tracking-widest uppercase">
            {t.tag}
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight">
            {t.title}
          </h1>

          <div className="mt-12 space-y-8 text-white/50 text-base leading-relaxed">
            {t.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="border-l-2 border-gold-500/30 pl-6 py-2">
              <p className="text-white/70 font-display text-lg italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {t.stats.map((s, i) => (
              <div key={i} className="bg-navy-800/40 border border-white/5 rounded-2xl p-5 text-center">
                <div className="font-display text-2xl font-bold text-gold-400">{s.value}</div>
                <div className="text-white/30 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="mailto:admin@juneguidedsolutions.com" className="bg-gold-500 text-navy-950 px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-gold-400 transition-all hover:shadow-lg hover:shadow-gold-500/20">
              {t.cta}
            </a>
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
