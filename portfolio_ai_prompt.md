# PORTFOLIO_AI_PROMPT.md

## ROLE

You are an expert senior software engineer specialized in:

-   modern frontend development
-   Vue.js ecosystem
-   Vue 3 (Composition API)
-   TailwindCSS
-   developer portfolio websites

Your task is to generate a **complete professional portfolio website**
based on the specification below.

The result must be **production-ready code**.

------------------------------------------------------------------------

# PROJECT OBJECTIVE

Build a **modern personal portfolio website** for a Computer Engineering
student.

The website will be used to:

-   showcase programming projects
-   present technical skills
-   support internship applications
-   demonstrate web development ability

The website must look **clean, modern and professional**.

------------------------------------------------------------------------

# TECHNICAL STACK

Framework: Vue 3 (latest stable version)

Language: TypeScript

Styling: TailwindCSS

Icons: Lucide Vue Next

State Management: Pinia

Routing: Vue Router

Deployment target: Vercel

------------------------------------------------------------------------

# PROJECT STRUCTURE

    portfolio-site

    /public
    /images

    /src
    /components
    Navbar.vue
    Footer.vue
    Hero.vue
    ProjectCard.vue
    SkillBadge.vue
    ThemeToggle.vue

    /views
    Home.vue
    About.vue
    Projects.vue
    Skills.vue
    Contact.vue
    
    /views/hobbies
    Sports.vue
    Gym.vue
    Movies.vue
    Gaming.vue
    Music.vue
    Programming.vue

    /data
    projects.ts
    skills.ts
    hobbies.ts
    socials.ts
    index.ts

    /stores
    theme.ts

    /router
    index.ts

    /styles
    globals.css

    App.vue
    main.ts

------------------------------------------------------------------------

# WEBSITE STRUCTURE

The website should be a **multi-page portfolio** with Vue Router navigation.

Pages order:

1.  Home (contains Hero)
2.  About
3.  Projects
4.  Skills
5.  Contact
6.  Hobbies (dropdown in navbar with individual pages)
    -   Sports
    -   Gym
    -   Movies & TV Series
    -   Gaming
    -   Music
    -   Programming
7.  Footer (shared across all pages)

Navigation bar should link to each page using Vue Router. Hobbies section in About page should link to individual hobby pages.

------------------------------------------------------------------------

# DESIGN REQUIREMENTS

Design principles:

-   minimalist
-   modern developer aesthetic
-   clean typography
-   responsive layout
-   fast loading

Color palette suggestion:

Background: dark gray or white

Accent color: blue or purple

Typography:

-   System fonts
-   Sans-serif

------------------------------------------------------------------------

# HERO SECTION

Purpose: introduce the developer.

Fields:

Name: YOUR NAME

Title: Final Year Computer Engineering Student

Description:

"Passionate about software development, problem solving and building
useful digital products."

Buttons:

-   GitHub
-   LinkedIn
-   Download CV

------------------------------------------------------------------------

# ABOUT SECTION

Example content:

I am a final year Computer Engineering student at the University of
Minho.

I enjoy learning new technologies and building software that solves real
problems. My interests include software engineering, web development and
continuous technical improvement.

------------------------------------------------------------------------

# HOBBIES

Include a hobbies subsection with icons.

Hobbies:

-   sports
-   gym
-   movies and TV series
-   gaming
-   music
-   programming

------------------------------------------------------------------------

# PROJECTS SECTION

Display projects as **cards in a grid layout**.

Each project must include:

-   project name
-   description
-   technologies used
-   GitHub link
-   demo link (optional)

Example data format:

    {
    id: 1,
    name: "Task Manager App",
    description: "A productivity web application for managing tasks.",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    github: "https://github.com/username/project",
    demo: "https://demo-link.com"
    }

------------------------------------------------------------------------

# SKILLS SECTION

Group skills by category.

Programming Languages

-   Java
-   Python
-   JavaScript
-   C

Web Development

-   HTML
-   CSS
-   React
-   Node.js

Tools

-   Git
-   GitHub
-   VS Code
-   Linux

------------------------------------------------------------------------

# CONTACT SECTION

Display:

-   Email
-   GitHub
-   LinkedIn
-   Location
-   University/Education

------------------------------------------------------------------------

# RESPONSIVENESS

The layout must work on:

-   desktop
-   tablet
-   mobile

Use Tailwind responsive breakpoints.

------------------------------------------------------------------------

# PERFORMANCE

The website must:

-   load quickly
-   use optimized images
-   follow accessibility practices
-   use semantic HTML

------------------------------------------------------------------------

# SEO

Include:

-   title tag
-   meta description
-   favicon

------------------------------------------------------------------------

# FINAL REQUIREMENTS

The AI generating the code must:

1.  Generate all components
2.  Create reusable UI components
3.  Use clean TypeScript
4.  Write readable code
5.  Ensure responsive layout
6.  Provide instructions to run the project

------------------------------------------------------------------------

# EXPECTED OUTPUT

The generated output should include:

-   full project code
-   installation instructions
-   run instructions
-   deployment instructions

------------------------------------------------------------------------

# END OF PROMPT
