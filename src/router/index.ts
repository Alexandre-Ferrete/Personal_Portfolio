import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Skills from '@/views/Skills.vue'
import Contact from '@/views/Contact.vue'
import Sports from '@/views/hobbies/Sports.vue'
import Gym from '@/views/hobbies/Gym.vue'
import Movies from '@/views/hobbies/Movies.vue'
import Gaming from '@/views/hobbies/Gaming.vue'
import Music from '@/views/hobbies/Music.vue'
import Programming from '@/views/hobbies/Programming.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/hobbies/sports',
      name: 'sports',
      component: Sports
    },
    {
      path: '/hobbies/gym',
      name: 'gym',
      component: Gym
    },
    {
      path: '/hobbies/movies',
      name: 'movies',
      component: Movies
    },
    {
      path: '/hobbies/gaming',
      name: 'gaming',
      component: Gaming
    },
    {
      path: '/hobbies/music',
      name: 'music',
      component: Music
    },
    {
      path: '/hobbies/programming',
      name: 'programming',
      component: Programming
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
