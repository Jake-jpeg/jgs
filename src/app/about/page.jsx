export const metadata = {
  title: 'About the Founder — Jake S. Kim | June Guided Solutions',
  description: 'Custom web applications, document pipelines, and AI-driven intake systems for law firms. Built by Jake S. Kim — Founder & Lead Developer at June Guided Solutions.',
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
            Jake S. Kim
          </h1>
          <p className="mt-4 text-gold-400/80 text-lg font-medium">
            Founder &amp; Lead Developer. Building High-Stakes Tech for Law Firms.
          </p>

          <article className="mt-12 space-y-8 text-white/50 text-base leading-relaxed">
            <p>
              I looked at standard development agencies before I wrote my first line of code. The problem was immediately obvious: standard tech agencies do not understand the architecture of a legal practice.
            </p>
            <p>
              They don&apos;t understand the technical requirements for data compliance, the nuances of secure document pipelines, or the precise formatting required for court-ready output. If you hire them, you end up spending half your project budget explaining your daily operations to a project manager who has never seen a docket.
            </p>
            <p>
              As a developer with a background as a practicing attorney in New York and New Jersey, I saw a gap that only a builder who speaks the language of the law could fill. I didn&apos;t just study computer science; I sat in the trenches of a law practice, identified the friction points, and learned full-stack development to automate them.
            </p>
            <p>
              The result was <a href="https://divorcegpt.com" className="text-gold-400 hover:text-gold-300 transition">DivorceGPT</a>&mdash;a complex, secure legal SaaS platform featuring custom frontend frameworks, Stripe integration, and highly accurate PDF generation pipelines. I wrote every line. From zero to production.
            </p>
            <p>
              June Guided Solutions (JGS) was born from that process: solving complex logic with heavy engineering. Today, JGS builds custom web applications, automated document pipelines, and AI-driven intake systems engineered exclusively for the legal industry.
            </p>
            <p>
              When your developer understands the stakes of the industry, you skip the &ldquo;onboarding&rdquo; phase. Security is locked down by default. Scope doesn&apos;t creep. I bring a level of rigor to my code that is only found in high-stakes professional environments.
            </p>
            <p>
              Your firm&apos;s technology isn&apos;t a side project&mdash;it&apos;s a secure, scalable engine for your growth. Let&apos;s build it.
            </p>
            <p className="text-white/30 text-sm">
              Disclaimer: June Guided Solutions is a technology firm, not a law firm. Jake Kim provides technical and engineering services and does not provide legal advice or representation through JGS.
            </p>
</article>

          <div className="mt-12 border-l-2 border-gold-500/30 pl-6 py-2">
            <blockquote className="text-white/70 font-display text-lg italic">
              &ldquo;Standard dev agencies don&apos;t understand the architecture of a legal practice. I do. I learned to code because the tech market for law firms is broken. Now, I build high-stakes tech that actually works.&rdquo;
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
