declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'react-icons/fa6' {
  import { IconType } from 'react-icons'
  
  export const FaGithub: IconType
  export const FaLinkedin: IconType
  export const FaEnvelope: IconType
  export const FaFileArrowDown: IconType
  export const FaSun: IconType
  export const FaMoon: IconType
  export const FaRunning: IconType
  export const FaDumbbell: IconType
  export const FaFilm: IconType
  export const FaGamepad: IconType
  export const FaMusic: IconType
  export const FaCode: IconType
  export const FaExternalLinkAlt: IconType
  export const FaMapMarkerAlt: IconType
  export const FaUniversity: IconType
}
