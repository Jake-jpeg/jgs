export default function Home() {
  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background architecture */}
        <div className="absolute inset-0 bg-base-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(26,42,69,0.5),transparent)]" />

        {/* Grid lines — structural, not decorative */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(163,179,198,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(163,179,198,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        </div>

        {/* Horizontal rule accent */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/10 to-transparent -translate-y-1/2" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Classification tag */}
          <div className="inline-block mb-10 px-3 py-1 border border-steel-500/15 text-steel-500/60 text-[10px] font-body tracking-[0.3em] uppercase">
            Legal Technology Engineering
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-steel-300">
            We build infrastructure
            <br />
            <span className="text-white">the courtroom can&apos;t reject.</span>
          </h1>

          <p className="mt-8 text-base sm:text-lg text-steel-500 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
            June Guided Solutions is an engineering lab for defensible legal technology.
            Software that survives contact with a courthouse.
          </p>

          <div className="mt-12">
            <a
              href="https://divorcegpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-signal-500 text-base-950 px-7 py-3.5 text-sm font-sans font-semibold tracking-wide hover:bg-signal-400 transition-all duration-200"
            >
              View Flagship Product
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />
      </section>

      {/* ═══ FLAGSHIP PRODUCT ═══ */}
      <section id="flagship" className="py-28 sm:py-36 relative">
        <div className="absolute inset-0 bg-base-900/40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.04]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Section label */}
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px w-8 bg-signal-500/50" />
            <span className="text-[10px] font-body tracking-[0.3em] uppercase text-signal-500/70">
              Flagship Product
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            DivorceGPT
          </h2>

          <div className="mt-10 max-w-3xl space-y-6">
            <p className="text-base text-steel-400 leading-relaxed font-sans">
              Automated, UPL-compliant uncontested divorce document preparation for New York State.
              The platform qualifies applicants through a structured intake, collects the precise
              data the court requires, and generates a complete filing packet&mdash;formatted to
              procedural specification. Edge cases are rejected by design. There is no gray area in
              the output. Every document is mechanically traceable to a rule.
            </p>
            <p className="text-base text-steel-400 leading-relaxed font-sans">
              No attorney review layer. No referral engine. No hand-holding.
              The system is the product.
            </p>
          </div>

          {/* Technical specs — compact grid */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.04]">
            {[
              { label: 'Stack', value: 'Next.js / Flask' },
              { label: 'AI Engine', value: 'Claude API' },
              { label: 'PDF Pipeline', value: 'ReportLab' },
              { label: 'Status', value: 'Live — NY' },
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

          <div className="mt-12">
            <a
              href="https://divorcegpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-steel-500/20 text-steel-300 px-6 py-3 text-sm font-sans font-medium tracking-wide hover:border-signal-500/40 hover:text-signal-400 transition-all duration-200"
            >
              Visit divorcegpt.com
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ THE BUILDER ═══ */}
      <section id="builder" className="py-28 sm:py-36 relative">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Section label */}
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px w-8 bg-steel-500/30" />
            <span className="text-[10px] font-body tracking-[0.3em] uppercase text-steel-500/50">
              The Builder
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-steel-300 tracking-tight">
            Jake S. Kim
          </h2>
          <p className="mt-2 text-sm font-sans text-steel-500">
            Trial Attorney. Full-Stack Developer.
          </p>

          <article className="mt-12 max-w-3xl space-y-7 text-base text-steel-500 leading-relaxed font-sans">
            <p>
              Before writing his first line of production code, Jake Kim evaluated the agencies
              that build for law firms. The conclusion was immediate: they do not understand the
              architecture of a legal practice. They don&apos;t understand data compliance at the
              jurisdictional level. They don&apos;t understand the formatting tolerances of a county
              clerk&apos;s office. They deliver websites. The legal industry needs infrastructure.
            </p>
            <p>
              Kim is a practicing trial attorney admitted in New York and New Jersey.
              He didn&apos;t study computer science in the abstract&mdash;he sat in the trenches
              of active litigation, identified the mechanical friction points that waste attorney
              time and create malpractice exposure, and taught himself full-stack development
              to eliminate them. The skill set is not theoretical. It was forged under the
              constraints of real caseloads, real filing deadlines, and real consequences.
            </p>
            <p>
              The result is infrastructure built from the courtroom out. Every system JGS ships
              is engineered by someone who has stood in front of a judge and understands what
              happens when software fails in a legal context. That is the difference between a
              tech company that serves lawyers and an engineering lab run by one.
            </p>
          </article>

          {/* Credentials — understated */}
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
