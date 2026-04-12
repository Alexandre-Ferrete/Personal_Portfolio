export interface Hobby {
  name: string
  icon: string
  path: string
  description: string
}

export const hobbies: Hobby[] = [
  { 
    name: 'Sports', 
    icon: 'PersonStanding', 
    path: '/hobbies/sports', 
    description: 'Sports have always been an integral part of my life. I practice a variety of sports including football, tennis, ping-pong, and orienteering. Each sport offers unique challenges and rewards — football builds teamwork and endurance, tennis sharpens reflexes and strategy, ping-pong provides fast-paced fun, and orienteering combines navigation skills with physical fitness. I believe in staying active and enjoying the competitive spirit that sports bring.' 
  },
  { 
    name: 'Gym', 
    icon: 'Dumbbell', 
    path: '/hobbies/gym', 
    description: 'The gym is one of my main hobbies and a fundamental part of my routine. I train regularly five times a week, which reflects my commitment to discipline, consistency, and well-being. Beyond the physical benefits, I value the positive impact training has on my mental health and my ability to maintain focus and productivity throughout the day.' 
  },
  { 
    name: 'Movies & TV Series', 
    icon: 'Clapperboard', 
    path: '/hobbies/movies', 
    description: 'I love watching movies and TV series. From action-packed blockbusters to thought-provoking dramas, cinema is a great way to unwind and explore different stories and perspectives. My favorite TV Series are: Better Call Saul, Breaking Bad, The Boys and Arcane' 
  },
  { 
    name: 'Gaming', 
    icon: 'Gamepad2', 
    path: '/hobbies/gaming', 
    description: 'Gaming is my go-to hobby for relaxation and entertainment. Whether it\'s competitive multiplayer games or immersive single-player adventures, I enjoy the challenge and creativity that video games offer. My favorite games include Resident Evil, Counter-Strike, League of Legends, Civilization, Rainbow Six Siege, and TeamFight Tactics.' 
  },
  { 
    name: 'Music', 
    icon: 'Music', 
    path: '/hobbies/music', 
    description: 'Music plays a significant role in my life. It helps me stay motivated during workouts, relaxes me after a long day, and sometimes I even create my own tunes.' 
  },
  { 
    name: 'Programming', 
    icon: 'Code', 
    path: '/hobbies/programming', 
    description: 'Programming is both my future profession and my passion. I love building software, solving complex problems, and continuously learning new technologies. The satisfaction of seeing code come to life and create something useful is unmatched.'
  }
]
