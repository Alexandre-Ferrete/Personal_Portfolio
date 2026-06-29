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
    name: 'Simple Distributed System',
    description: 'A simple distributed system that registers products bought from stores which can be queried about.',
    technologies: ['Java', 'TCP Sockets', 'Multithreading', 'JUnit'],
    github: 'https://github.com/Alexandre-Ferrete/SDProject',
  },
  {
    id: 2,
    name: 'A Software System for a restaurant chain',
    description: 'A software system developped to sustain a restaurant chain, conforming with prerequisits from all the staff.',
    technologies: ['Java', 'PlantUML', 'VisualParadigm', 'MariaDB'],
    github: 'https://github.com/Alexandre-Ferrete/ProjetoDSS',
  },
  {
    id: 3,
    name: 'Comunication Between Rovers and a Spacial Base',
    description: 'Real-time application that sends monitorize spacial rovers, sending missions and receiving reports.',
    technologies: ['Java', 'TCP Sockets', 'UDP Sockets', 'HTML', 'JavaScript', 'Wireshark', 'VirtualBox', 'Core'],
    github: 'https://github.com/Alexandre-Ferrete/ProjetoCC',
  },
  {
    id: 4,
    name: 'Website about AirBnB impacts',
    description: 'Website designed to filter and extract data from long and detailed CSV, to graphs and flashcards, that can be exported.',
    technologies: ['HTML', 'Vue.js', 'TypeScript', 'CSS'],
    github: 'https://github.com/Alexandre-Ferrete/ProjetoIPM',
  },
  {
    id: 5,
    name: 'Portfolio Website',
    description: 'Modern responsive portfolio showcasing projects, skills, and professional background.',
    technologies: [ 'HTML','Vue.js', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/Alexandre-Ferrete/Personal_Portfolio',
  },
  {
    id: 6,
    name: 'Streaming Platform',
    description: 'Aplication like Spotify.',
    technologies: ['Java', 'PlantUML', 'Drawio', 'Docker'],
    github: 'https://github.com/Alexandre-Ferrete/Streaming-platform'
  }
]
