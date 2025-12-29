type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  status: string
}

type SocialLink = {
  label: string
  link: string
}

type Technology = {
  name: string
  icon: string
}

export const TECHNOLOGIES: Technology[] = [
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Python', icon: 'python' },
  { name: 'React', icon: 'react' },
  { name: 'Flutter', icon: 'flutter' },
  { name: 'Arduino', icon: 'arduino' },
  { name: 'Flask', icon: 'flask' },
  { name: 'PostgreSQL', icon: 'postgresql' },
]

export const PROJECTS: Project[] = [
  {
    name: 'Landing Page Flutter',
    description: 'Uma landing page moderna construída com Flutter.',
    link: 'https://github.com/lumiguelx/Landing_page_flutter',
    video: '/videos/landing-flutter-demo.mp4',
    id: 'project1',
    status: 'Em Desenvolvimento',
  },
  {
    name: 'Gerenciador de Validade',
    description: 'Sistema para controle e gestão de prazos de validade.',
    link: 'https://github.com/lumiguelx/gerenciador_validade',
    video: '/videos/gerenciador-demo.mp4',
    id: 'project2',
    status: 'Concluído',
  },
  {
    name: 'Finance-AI-FMU',
    description: 'Projeto premiado que utiliza IA para gestão financeira pessoal.',
    link: 'https://github.com/AnaGabisz/Finance-ai-fmu',
    video: '/videos/finance-ai-demo.mp4',
    id: 'project3',
    status: 'Vencedor do Hackathon',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/lumiguelx',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/miguel-s-souza/',
  },
]

export const EMAIL = 'luismglx@gmail.com'
