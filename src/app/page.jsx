import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { LinkedInIcon } from '@/components/SocialIcons'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function ServiceCard({ title, description, emoji }) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  )
}

const services = [
  { emoji: '🍜', title: '식당 · Restaurants', description: 'AI takes reservations, answers menu questions, handles catering inquiries — in Korean and English, 24/7.' },
  { emoji: '📚', title: '학원 · Academies', description: 'AI answers parent questions about programs, pricing, and schedules. Collects enrollment info while you teach.' },
  { emoji: '💐', title: '꽃집 · Flower Shops', description: 'AI takes orders, suggests arrangements by occasion, and handles delivery scheduling.' },
  { emoji: '🏠', title: '부동산 · Real Estate', description: 'AI qualifies buyer and renter leads before the agent even picks up the phone.' },
  { emoji: '🦷', title: '치과/병원 · Medical', description: 'AI schedules appointments, handles insurance questions, and collects new patient forms.' },
  { emoji: '💇', title: '미용실 · Salons', description: 'AI books appointments, manages cancellations and rescheduling. No more phone tag.' },
  { emoji: '📊', title: '세무사 · Accounting', description: 'AI collects client documents and answers seasonal intake questions during tax crunch.' },
  { emoji: '⚖️', title: '변호사 · Law Firms', description: 'AI qualifies leads and collects case details before the consultation.' },
]

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            We build AI-powered websites for small businesses.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            June Guided Solutions brings artificial intelligence to the businesses that need it most. A bilingual AI chatbot on your website that handles customer intake, scheduling, and inquiries — in Korean and English, 24 hours a day. Built by an attorney who taught himself to code. Delivered in a weekend.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.linkedin.com/company/june-guided-solutions"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          What we build
        </h2>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          Every business answers the same questions a hundred times a week. What if that went to zero? We build websites with AI chatbots that handle it — so the owner can focus on running the business, not answering the phone.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="rounded-2xl border border-zinc-100 p-8 dark:border-zinc-700/40">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Our flagship product
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            DivorceGPT is not a side project. It is the product that June Guided Solutions was built around — an AI-powered platform that prepares uncontested divorce documents for people who cannot afford a lawyer and should not have to. Live in New York and New Jersey. Built from scratch. Every line of code, every form, every qualification flow.
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Our closest competitor started with $12 million in funding. We started with a domain name and the refusal to quit. We built a better product.
          </p>
          <div className="mt-6">
            <Button href="https://divorcegpt.com" target="_blank">
              Visit divorcegpt.com
            </Button>
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28 pb-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Get in touch
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Whether you need a website, an AI chatbot, or both — we can have you live in a weekend. Flat fee. No surprises. No ongoing contracts unless you want maintenance.
          </p>
          <p className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-100">
            admin@juneguidedsolutions.com
          </p>
        </div>
      </Container>
    </>
  )
}
