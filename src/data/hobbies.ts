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
    description: 'Sports have always been an integral part of my life. Whether it\'s football, basketball, or athletics, I believe in staying active and enjoying the competitive spirit. [Add your sports experience here]' 
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
    description: 'I love watching movies and TV series, especially [add your favorite genres]. From action-packed blockbusters to thought-provoking dramas, cinema is a great way to unwind and explore different stories and perspectives. [Add your favorite movies/shows here]' 
  },
  { 
    name: 'Gaming', 
    icon: 'Gamepad2', 
    path: '/hobbies/gaming', 
    description: 'Gaming is my go-to hobby for relaxation and entertainment. Whether it\'s competitive multiplayer games or immersive single-player adventures, I enjoy the challenge and creativity that video games offer. [Add your favorite games here]' 
  },
  { 
    name: 'Music', 
    icon: 'Music', 
    path: '/hobbies/music', 
    description: 'Music plays a significant role in my life. I enjoy listening to various genres including [add your favorite genres]. Music helps me stay motivated during workouts, relaxes me after a long day, and sometimes I even create my own tunes. [Add your musical experiences here]' 
  },
  { 
    name: 'Programming', 
    icon: 'Code', 
    path: '/hobbies/programming', 
    description: 'Programming is both my profession and my passion. I love building software, solving complex problems, and continuously learning new technologies. The satisfaction of seeing code come to life and create something useful is unmatched. [Add your programming projects or interests here]' 
  }
]
