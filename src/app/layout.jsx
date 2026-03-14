import './globals.css'

export const metadata = {
  title: {
    template: '%s | June Guided Solutions',
    default: 'June Guided Solutions — AI-Powered Websites for Small Businesses',
  },
  description: 'We build AI-powered websites with bilingual chatbots for small businesses. Korean & English. Weekend turnaround. Built by an attorney who codes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-navy-950 text-white font-body antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-gold-400 font-display font-bold text-xl tracking-tight">JGS</span>
          <span className="hidden sm:inline text-white/40 text-sm font-light">June Guided Solutions</span>
        </a>
        <div className="flex items-center gap-8">
          <a href="/" className="text-sm text-white/60 hover:text-gold-400 transition-colors">Home</a>
          <a href="/about" className="text-sm text-white/60 hover:text-gold-400 transition-colors">The Builder</a>
          <a href="/products" className="text-sm text-white/60 hover:text-gold-400 transition-colors">Products</a>
          <a href="mailto:admin@juneguidedsolutions.com" className="text-sm bg-gold-500 text-navy-950 px-4 py-2 rounded-lg font-semibold hover:bg-gold-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a href="/" className="text-sm text-white/40 hover:text-gold-400 transition-colors">Home</a>
          <a href="/about" className="text-sm text-white/40 hover:text-gold-400 transition-colors">The Builder</a>
          <a href="/products" className="text-sm text-white/40 hover:text-gold-400 transition-colors">Products</a>
          <a href="https://divorcegpt.com" target="_blank" className="text-sm text-white/40 hover:text-gold-400 transition-colors">DivorceGPT</a>
        </div>
        <p className="text-sm text-white/20">&copy; {new Date().getFullYear()} June Guided Solutions, LLC. All rights reserved.</p>
      </div>
    </footer>
  )
}
