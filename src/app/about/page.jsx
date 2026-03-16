export const metadata = {
  title: 'About the Founder — Jake S. Kim, Esq. | June Guided Solutions',
  description: 'Custom web applications, document pipelines, and AI-driven client intake systems for law firms. Built by Jake S. Kim, Esq. — a practicing attorney who learned full-stack development from scratch.',
}

export default function About() {
  return (
    <main className="pt-24">
      {/* About the Founder */}
      <section className="py-20 relative" aria-labelledby="founder-heading">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-semibold tracking-widest uppercase">
            About the Founder
          </div>
          <h1 id="founder-heading" className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight">
            Jake S. Kim, Esq.
          </h1>
          <p className="mt-4 text-gold-400/80 text-lg font-medium">
            Practicing Attorney. Full-Stack Developer. Building Custom Tech for Law Firms.
          </p>

          <article className="mt-12 space-y-8 text-white/50 text-base leading-relaxed">
            <p>
              I looked at the standard development agencies before I wrote my first line of code. The problem was immediately obvious: standard tech agencies do not understand the practice of law.
            </p>
            <p>
              They don&apos;t understand attorney-client privilege, strict data compliance, trust accounting, or the exact formatting required for court-ready documents. If you hire them, you end up spending half your project budget just trying to explain your daily operations to a 22-year-old project manager.
            </p>
            <p>
              I refused to accept that. I&apos;m a practicing attorney licensed in New York and New Jersey. I had no computer science degree, but I had a law practice that needed serious automation. So, I learned full-stack development and built it myself.
            </p>
            <p>
              The result was <a href="https://divorcegpt.com" className="text-gold-400 hover:text-gold-300 transition">DivorceGPT</a>&mdash;a complex, secure legal SaaS platform with custom frontend frameworks, Stripe payment processing, cloud infrastructure, and highly accurate PDF generation pipelines. I wrote every line. From zero to production.
            </p>
            <p>
              I didn&apos;t just build an internal tool for my own firm. I engineered a compliant, multi-jurisdictional platform built to scale across the country. That process&mdash;solving complex legal logic with heavy engineering&mdash;is what created June Guided Solutions.
            </p>
            <p>
              Today, JGS builds custom web applications, automated document pipelines, and AI-driven client intake systems exclusively for law firms.
            </p>
            <p>
              Here&apos;s what you get when your developer is also a fellow attorney: We don&apos;t need to have a meeting about what a retainer agreement is. Data handling is locked down by default. Scope doesn&apos;t creep. I bring lawyer-level diligence to writing code because cutting corners isn&apos;t in my training.
            </p>
            <p>
              Your firm&apos;s technology isn&apos;t a side project to me&mdash;it&apos;s a secure deliverable built to scale your practice.
            </p>
            <p className="text-white/30 text-sm">
              Disclaimer: June Guided Solutions, LLC is a technology and development agency, not a law firm. JGS provides software, website development, and AI engineering services. JGS does not provide legal advice, legal representation, or legal services. Any legal services require a separate, signed engagement agreement directly with Jake Kim Law Firm, LLC.
            </p>
</article>

          <div className="mt-12 border-l-2 border-gold-500/30 pl-6 py-2">
            <blockquote className="text-white/70 font-display text-lg italic">
              &ldquo;Standard dev agencies don&apos;t understand the business of law. I do. I didn&apos;t learn to code just to be a developer; I learned because the standard tech market for law firms is broken. Now, I build custom tech for law firms that actually works.&rdquo;
            </blockquote>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '2015', label: 'NJ Bar Admission' },
              { value: '2016', label: 'NY Bar Admission' },
              { value: '2025', label: 'JGS Established' },
              { value: '2026', label: 'DivorceGPT Launch' },
            ].map((s, i) => (
              <div key={i} className="bg-navy-800/40 border border-white/5 rounded-2xl p-5 text-center">
                <div className="font-display text-2xl font-bold text-gold-400">{s.value}</div>
                <div className="text-white/30 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="mailto:admin@juneguidedsolutions.com" className="bg-gold-500 text-navy-950 px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-gold-400 transition-all hover:shadow-lg hover:shadow-gold-500/20">
              Work with Jake
            </a>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 relative" aria-labelledby="cases-heading">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-semibold tracking-widest uppercase">
              Portfolio
            </div>
            <h2 id="cases-heading" className="font-display text-4xl sm:text-5xl font-bold text-white">Case Studies</h2>
            <p className="mt-4 text-white/40 text-lg max-w-xl mx-auto">Two live products. Same standard: solve a real problem, ship production-grade code, and don&apos;t cut corners.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1: DivorceGPT */}
            <a href="https://divorcegpt.com" rel="dofollow" className="group block bg-navy-800/40 border border-white/5 rounded-2xl p-8 hover:border-gold-500/20 hover:bg-navy-800/60 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-400 ring-1 ring-teal-400/20">Live</span>
                <span className="text-white/20 text-xs group-hover:text-gold-400/60 transition">divorcegpt.com →</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white group-hover:text-gold-400 transition">DivorceGPT</h3>
              <p className="mt-1 text-gold-400/60 text-sm font-medium">AI-Powered Legal Document Generation</p>
              <p className="mt-4 text-white/40 text-sm leading-relaxed">
                Full-stack legal SaaS — AI-driven intake interviews via Claude API, real-time form field extraction with server-side validation, multi-phase document generation (ReportLab + python-docx + LibreOffice headless), Stripe payment integration, localStorage-based session management with zero server-side user data retention. Deployed on DigitalOcean. Live in New York and New Jersey.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Next.js', 'Claude API', 'ReportLab', 'Stripe', 'DigitalOcean', 'Python/Flask'].map((tag) => (
                  <span key={tag} className="text-xs text-white/30 bg-white/5 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </a>

            {/* Case Study 2: Jake Kim Law Firm */}
            <a href="https://jakekimlawfirm.com" rel="dofollow" className="group block bg-navy-800/40 border border-white/5 rounded-2xl p-8 hover:border-gold-500/20 hover:bg-navy-800/60 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-400 ring-1 ring-teal-400/20">Live</span>
                <span className="text-white/20 text-xs group-hover:text-gold-400/60 transition">jakekimlawfirm.com →</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white group-hover:text-gold-400 transition">Jake Kim Law Firm</h3>
              <p className="mt-1 text-gold-400/60 text-sm font-medium">High-Converting Professional Services Site</p>
              <p className="mt-4 text-white/40 text-sm leading-relaxed">
                Attorney website designed for trust and conversion. Clean, authoritative layout optimized for client intake. Mobile-first responsive design, structured data markup for local SEO, fast load times, and clear calls to action that convert visitors into consultations. Built to establish E-E-A-T signals for a practicing litigation attorney in Fort Lee, NJ.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Responsive Design', 'Local SEO', 'Schema Markup', 'Mobile-First', 'Conversion Optimized'].map((tag) => (
                  <span key={tag} className="text-xs text-white/30 bg-white/5 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
