'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { Magnetic } from '@/components/ui/magnetic'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { SOCIAL_LINKS } from './data'

function SocialIcon({ link }: { link: { label: string; link: string } }) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.2}>
      <a
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex shrink-0 items-center justify-center rounded-full bg-purple-100/50 p-2 text-purple-700 transition-all duration-300 hover:bg-purple-200/60 hover:scale-110 dark:bg-purple-900/20 dark:text-purple-300 dark:hover:bg-purple-800/30"
      >
        {link.label === 'GitHub' && <Github className="h-5 w-5" />}
        {link.label === 'LinkedIn' && <Linkedin className="h-5 w-5" />}
      </a>
    </Magnetic>
  )
}

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Luis Miguel
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Antisocial Extrovert | CompSci • 5th Sem | Games & Code
          </TextEffect>
        </div>
        <div className="flex items-center gap-2 ml-4">
          {SOCIAL_LINKS.map((link) => (
            <SocialIcon key={link.label} link={link} />
          ))}
        </div>
      </div>
    </header>
  )
}
