export default function Projects() {
  return (
    <main className="pt-24">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">What we have built.</h1>
          <p className="mt-4 text-white/40 text-lg">DivorceGPT is our flagship. Everything else carries the same standard.</p>
          <div className="mt-12 space-y-6">
            <a href="https://divorcegpt.com" rel="dofollow" className="block bg-navy-800/40 border border-white/5 rounded-2xl p-8 hover:border-gold-500/20 transition">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-white">DivorceGPT</h2>
                <span className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-400 ring-1 ring-teal-400/20">Live</span>
              </div>
              <p className="text-gold-400/60 text-sm font-medium mb-3">AI-Powered Legal Document Generation</p>
              <p className="text-white/40 text-sm leading-relaxed">Full-stack legal SaaS — AI-driven intake via Claude API, real-time form field extraction, multi-phase document generation, Stripe payment integration, zero server-side data retention. Live in New York and New Jersey. $99 per packet.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Next.js', 'Claude API', 'ReportLab', 'Stripe', 'DigitalOcean', 'Python/Flask'].map((tag) => (
                  <span key={tag} className="text-xs text-white/30 bg-white/5 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </a>
            <a href="https://jakekimlawfirm.com" rel="dofollow" className="block bg-navy-800/40 border border-white/5 rounded-2xl p-8 hover:border-gold-500/20 transition">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-white">Jake Kim Law Firm, LLC</h2>
                <span className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-400 ring-1 ring-teal-400/20">Live</span>
              </div>
              <p className="text-gold-400/60 text-sm font-medium mb-3">High-Converting Professional Services Site</p>
              <p className="text-white/40 text-sm leading-relaxed">Attorney website designed for trust and conversion. Mobile-first responsive design, structured data markup for local SEO, fast load times, and clear calls to action. Built to establish E-E-A-T signals for a practicing litigation attorney in Fort Lee, NJ.</p>
              <div className="mt-4 flex flex-wrap gap-2">
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
