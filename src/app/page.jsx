export default function Home() {
  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-base-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(26,42,69,0.5),transparent)]" />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(163,179,198,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(163,179,198,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        </div>

        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/10 to-transparent -translate-y-1/2" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-10 px-3 py-1 border border-steel-500/15 text-steel-500/60 text-[10px] font-body tracking-[0.3em] uppercase">
            Legal Technology
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-steel-300">
            Built by a litigator.
            <br />
            <span className="text-white">Not an agency.</span>
          </h1>

          <p className="mt-8 text-base sm:text-lg text-steel-500 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
            June Guided Solutions builds practical software for the practice of law &mdash;
            designed by a practicing New York and New Jersey attorney who has to use it.
          </p>

          <div className="mt-12">
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-signal-500 text-base-950 px-7 py-3.5 text-sm font-sans font-semibold tracking-wide hover:bg-signal-400 transition-all duration-200"
            >
              See the work
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />
      </section>

      {/* ═══ WORK ═══ */}
      <section id="work" className="py-28 sm:py-36 relative">
        <div className="absolute inset-0 bg-base-900/40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.04]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px w-8 bg-signal-500/50" />
            <span className="text-[10px] font-body tracking-[0.3em] uppercase text-signal-500/70">
              Work
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            DivorceGPT
          </h2>

          <div className="mt-10 max-w-3xl space-y-6">
            <p className="text-base text-steel-400 leading-relaxed font-sans">
              An AI-assisted tool that prepares uncontested divorce documents for New York
              and New Jersey. A structured intake collects exactly what the court needs and
              generates a complete, properly formatted filing packet. It&apos;s built to be
              careful about jurisdiction and procedure &mdash; the parts that get filings sent back.
            </p>
            <p className="text-base text-steel-400 leading-relaxed font-sans">
              It&apos;s an example of what JGS does: take a slow, error-prone piece of legal
              work and build software that handles the mechanical parts cleanly, so the
              lawyer can focus on judgment.
            </p>
          </div>

          {/* Technical specs */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.04]">
            {[
              { label: 'Stack', value: 'Next.js / Flask' },
              { label: 'AI', value: 'Claude API' },
              { label: 'PDF', value: 'ReportLab' },
              { label: 'Coverage', value: 'NY / NJ' },
            ].map((spec, i) => (
              <div key={i} className="bg-base-900/60 px-5 py-5">
                <div className="text-[10px] font-body tracking-[0.2em] uppercase text-steel-500/50 mb-2">
                  {spec.label}
                </div>
                <div className="text-sm font-sans font-medium text-steel-300">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BUILDER ═══ */}
      <section id="builder" className="py-28 sm:py-36 relative">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px w-8 bg-steel-500/30" />
            <span className="text-[10px] font-body tracking-[0.3em] uppercase text-steel-500/50">
              Builder
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-steel-300 tracking-tight">
            Jake S. Kim
          </h2>
          <p className="mt-2 text-sm font-sans text-steel-500">
            Attorney &amp; Developer
          </p>

          <article className="mt-12 max-w-3xl space-y-7 text-base text-steel-500 leading-relaxed font-sans">
            <p>
              Jake Kim is a practicing attorney admitted in New York and New Jersey. He
              taught himself to build software because the tools his practice needed either
              didn&apos;t exist or were built by people who didn&apos;t understand how legal
              work actually happens.
            </p>
            <p>
              Everything JGS builds comes from that perspective: someone who knows the
              practice from the inside and has to use what he ships. The goal isn&apos;t
              flashy &mdash; it&apos;s practical, careful about procedure, and grounded in
              real work.
            </p>
          </article>

          {/* Credentials */}
          <div className="mt-16 pt-8 border-t border-white/[0.04]">
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {[
                'NJ Bar — 2015',
                'NY Bar — 2016',
                'Rutgers Law — J.D.',
                'Bentley University — B.S. Finance',
              ].map((cred, i) => (
                <span key={i} className="text-xs font-body text-steel-500/40 tracking-wide">
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
