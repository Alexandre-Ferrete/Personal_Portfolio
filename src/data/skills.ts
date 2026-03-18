export interface Skill {
  name: string
  icon?: string
}

export interface SkillCategory {
  name: string
  skills: Skill[]
}

export const skills: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Java' },
      { name: 'Python' },
      { name: 'Haskell' },
      { name: 'TypeScript' },
      { name: 'C' }
    ]
  },
  {
    name: 'Web Development',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Vue.js' },

    ]
  },
  {
    name: 'Tools & Technologies',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Linux' },
      { name: 'Docker' }
    ]
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' }
    ]
  }
]
