import { Container } from '@/components/Container'
import { LinkedInIcon } from '@/components/SocialIcons'
import Link from 'next/link'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={className}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'The Builder',
  description:
    'The story behind June Guided Solutions.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <div className="aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
              <span className="text-6xl">⚖️</span>
            </div>
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            The Builder
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Licensed to practice law in New Jersey since 2015 and New York since 2016. The founder of June Guided Solutions didn't come from tech. There was no computer science degree, no bootcamp certificate, no engineering background. Just a law practice, a problem that needed solving, and the stubbornness to figure it out.
            </p>
            <p>
              The journey started with DivorceGPT — an AI-powered platform that prepares uncontested divorce documents for people who can't afford a lawyer. Building it meant learning full-stack development from scratch: Next.js, Python, API integrations, payment processing, DNS configuration, cloud deployment. Every third-party app failed. Every shortcut broke. So the only option left was to build it from the ground up, alone.
            </p>
            <p>
              That process — failing at every pre-built tool until the only path forward was to build the tool yourself — is what created June Guided Solutions. The skill set that emerged from building DivorceGPT turned out to be more valuable than any single product. It became a business.
            </p>
            <p>
              Today, JGS builds AI-powered websites for small businesses — with a focus on the Korean-American business community in New Jersey and New York. Every site comes with a bilingual AI chatbot that handles customer intake in Korean and English, 24 hours a day. Weekend turnaround. Flat fee. No corporate overhead. Just a builder who learned the hard way and now builds for others.
            </p>
            <p>
              The American Dream didn't die. It just needed better tools.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.linkedin.com/company/june-guided-solutions"
              icon={LinkedInIcon}
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:admin@juneguidedsolutions.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              admin@juneguidedsolutions.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
