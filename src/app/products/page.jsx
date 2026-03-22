import ProductsContent from './ProductsContent'

export const metadata = {
  title: 'Products — AI Websites & DivorceGPT',
  description: 'Explore products built by June Guided Solutions: DivorceGPT for AI-powered divorce document preparation and custom AI business websites with multilingual chatbots.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Products — AI Websites & DivorceGPT | June Guided Solutions',
    description: 'Explore products built by June Guided Solutions: DivorceGPT and custom AI business websites.',
    url: '/products',
  },
}

export default function Products() {
  return <ProductsContent />
}
