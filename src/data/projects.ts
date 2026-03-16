export interface Project {
  id: number
  name: string
  description: string
  technologies: string[]
  github: string
  demo?: string
  image?: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Task Manager App',
    description: 'A productivity web application for managing tasks with real-time updates and team collaboration features.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/Alexandre-Ferrete',
    demo: 'https://demo-link.com'
  },
  {
    id: 2,
    name: 'E-Commerce Platform',
    description: 'Full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
    technologies: ['React', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com/Alexandre-Ferrete',
    demo: 'https://demo-link.com'
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    description: 'Real-time weather application with forecast, location-based data, and interactive maps.',
    technologies: ['JavaScript', 'OpenWeather API', 'CSS3'],
    github: 'https://github.com/Alexandre-Ferrete',
    demo: 'https://demo-link.com'
  },
  {
    id: 4,
    name: 'Chat Application',
    description: 'Real-time messaging app with rooms, direct messages, and file sharing capabilities.',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Alexandre-Ferrete',
    demo: 'https://demo-link.com'
  },
  {
    id: 5,
    name: 'Portfolio Website',
    description: 'Modern responsive portfolio showcasing projects, skills, and professional background.',
    technologies: ['Vue.js', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/Alexandre-Ferreite',
    demo: 'https://demo-link.com'
  },
  {
    id: 6,
    name: 'API RESTful Service',
    description: 'Scalable RESTful API with authentication, rate limiting, and comprehensive documentation.',
    technologies: ['Node.js', 'Express', 'TypeScript', 'Docker'],
    github: 'https://github.com/Alexandre-Ferrete'
  }
]
