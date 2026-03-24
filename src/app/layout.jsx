import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.juneguidedsolutions.com'),
  title: {
    template: '%s | June Guided Solutions',
    default: 'June Guided Solutions — Legal Technology Engineering',
  },
  description: 'June Guided Solutions is a legal technology engineering lab. We build procedurally compliant, defensible software for the practice of law.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'June Guided Solutions',
    title: 'June Guided Solutions — Legal Technology Engineering',
    description: 'We build procedurally compliant, defensible software for the practice of law.',
    url: '/',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-base-950 text-steel-400 font-body antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-base-950/90 backdrop-blur-sm border-b border-white/[0.04]">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="font-sans font-semibold text-steel-300 text-sm tracking-wide">
          JGS
        </a>
        <div className="flex items-center gap-8">
          <a href="#flagship" className="text-xs text-steel-500 hover:text-steel-300 transition-colors font-body tracking-wide uppercase">
            Product
          </a>
          <a href="#builder" className="text-xs text-steel-500 hover:text-steel-300 transition-colors font-body tracking-wide uppercase">
            Builder
          </a>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-base-950">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="space-y-4 max-w-md">
            <p className="font-sans text-sm font-semibold text-steel-300 tracking-wide">
              June Guided Solutions, LLC
            </p>
            <p className="text-xs text-steel-500/60 leading-relaxed">
              June Guided Solutions, LLC is a technology and engineering holding company, not a law firm. It does not provide legal advice or representation.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <a
              href="https://jakekimlaw.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-steel-500 hover:text-signal-400 transition-colors"
            >
              Jake Kim Law Firm, LLC &rarr;
            </a>
            <a
              href="https://divorcegpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-steel-500 hover:text-signal-400 transition-colors"
            >
              divorcegpt.com &rarr;
            </a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/[0.03]">
          <p className="text-xs text-steel-500/30">
            &copy; {new Date().getFullYear()} June Guided Solutions, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
