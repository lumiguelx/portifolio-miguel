'use client'
import { motion } from 'motion/react'
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
  javascript: <SiJavascript className="h-8 w-8 text-yellow-500" />,
  typescript: <SiTypescript className="h-8 w-8 text-blue-500" />,
  python: <SiPython className="h-8 w-8 text-green-500" />,
  react: <SiReact className="h-8 w-8 text-cyan-500" />,
  flutter: <SiFlutter className="h-8 w-8 text-blue-400" />,
  arduino: <SiArduino className="h-8 w-8 text-teal-500" />,
  flask: <SiFlask className="h-8 w-8 text-gray-700 dark:text-gray-300" />,
  postgresql: <SiPostgresql className="h-8 w-8 text-blue-600" />,
}

export function TechStack({ technologies }: TechStackProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group flex flex-col items-center justify-center rounded-xl bg-zinc-50/80 p-6 text-center transition-all duration-300 hover:bg-zinc-100/80 hover:scale-105 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/60"
        >
          <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
            {TECH_ICONS[tech.icon] || <div className="h-8 w-8 bg-gray-400 rounded" />}
          </div>
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  )
}