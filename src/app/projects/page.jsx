import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const products = [
  {
    name: 'DivorceGPT',
    description:
      'AI-powered uncontested divorce document preparation. Live in New York and New Jersey. No lawyer required. $29 per packet. Built from scratch — every line of code, every form, every qualification flow. This is the product that proved the model.',
    link: { href: 'https://divorcegpt.com', label: 'divorcegpt.com' },
    status: 'Live',
  },
  {
    name: 'AI Business Websites',
    description:
      'Full website with a bilingual AI chatbot (Korean/English) that handles customer intake, scheduling, and inquiries 24/7. Built for restaurants, academies, salons, medical offices, real estate, accounting firms, and law practices. Weekend turnaround. Flat fee.',
    link: { href: 'mailto:admin@juneguidedsolutions.com', label: 'Get in touch' },
    status: 'Available',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Products',
  description: 'What we\'ve built at June Guided Solutions.',
}

export default function Products() {
  return (
    <SimpleLayout
      title="What we've built."
      intro="DivorceGPT is our flagship — the product that started it all. Everything else we build carries the same standard: real AI solving real problems for real people. No fluff. No vaporware."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2"
      >
        {products.map((product) => (
          <Card as="li" key={product.name}>
            <div className="flex items-center gap-3">
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={product.link.href}>{product.name}</Card.Link>
              </h2>
              <span className="inline-flex items-center rounded-full bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20 dark:bg-teal-400/10 dark:text-teal-400 dark:ring-teal-400/20">
                {product.status}
              </span>
            </div>
            <Card.Description>{product.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{product.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
