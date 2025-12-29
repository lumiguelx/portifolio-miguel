'use client'
import { motion } from 'motion/react'
import { Magnetic } from '@/components/ui/magnetic'
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiReact, 
  SiFlutter, 
  SiArduino, 
  SiFlask, 
  SiPostgresql 
} from 'react-icons/si'

type Technology = {
  name: string
  icon: string
}

type TechStackProps = {
  technologies: Technology[]
}

const TECH_ICONS: Record<string, React.ReactElement> = {
  javascript: <SiJavascript className="h-4 w-4" />,
  typescript: <SiTypescript className="h-4 w-4" />,
  python: <SiPython className="h-4 w-4" />,
  react: <SiReact className="h-4 w-4" />,
  flutter: <SiFlutter className="h-4 w-4" />,
  arduino: <SiArduino className="h-4 w-4" />,
  flask: <SiFlask className="h-4 w-4" />,
  postgresql: <SiPostgresql className="h-4 w-4" />,
}

export function TechStack({ technologies }: TechStackProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech, index) => (
        <Magnetic key={tech.name} springOptions={{ bounce: 0 }} intensity={0.2}>
          <div className="group relative inline-flex shrink-0 items-center gap-2 rounded-full bg-purple-100/50 px-3 py-2 text-sm text-purple-700 transition-all duration-300 hover:bg-purple-200/60 hover:scale-105 dark:bg-purple-900/20 dark:text-purple-300 dark:hover:bg-purple-800/30">
            <div className="transition-transform duration-300 group-hover:scale-110">
              {TECH_ICONS[tech.icon] || <div className="h-4 w-4 bg-gray-400 rounded" />}
            </div>
            <span className="font-medium">
              {tech.name}
            </span>
          </div>
        </Magnetic>
      ))}
    </div>
  )
}