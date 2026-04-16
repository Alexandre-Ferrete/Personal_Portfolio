// CV - Alexandre Ferrete
// Compile with: typst compile cv.typ

#set document(author: "Alexandre Ferrete", title: "CV - Alexandre Ferrete")
#set text(size: 9pt)
#set page(paper: "a4", margin: (top: 1.2cm, bottom: 1.2cm, left: 1.5cm, right: 1.5cm))

#let primary-color = rgb("#2563EB")

#let section(title) = {
  v(0.2cm)
  text(size: 11pt, weight: "bold", fill: primary-color)[#title]
  line(length: 100%, stroke: (thickness: 0.5pt, paint: primary-color))
  v(0.1cm)
}

// Header with photo
#grid(
  columns: (auto, 1fr),
  column-gutter: 0.4cm,
  align: (left, top),
  image("public/fotoPerfil.jpg", width: 2cm, height: 2cm, fit: "cover"),
  [
    #text(size: 18pt, weight: "bold", fill: primary-color)[Alexandre Ferrete]
    #linebreak()
    #text(size: 10pt, style: "italic")[Informatics Engineering Student]
    #linebreak()
    #text(size: 8pt)[alexferrete05\@gmail.com  •  github.com/Alexandre-Ferrete  •  linkedin.com/in/alexandre-ferrete  •  alexandre-ferretes-projects.vercel.app]
  ]
)

#line(length: 100%, stroke: (thickness: 1pt, paint: primary-color))

// ==================== PROFILE ====================
#section("Profile")
I am a final year Informatics Engineering student at the University of Minho. I enjoy learning new technologies and building software that solves real problems. My interests include software engineering, cybersecurity, network engineering and continuous technical improvement. Throughout my academic journey, I've worked on various projects that have helped me develop strong problem-solving skills and a deep understanding of modern software development practices. I believe in continuous learning and always strive to improve my technical abilities.

// ==================== EDUCATION ====================
#section("Education")
*University of Minho* — Informatics Engineering #h(1fr) 2026 — Present
#text(size: 8pt)[Average: 14/20]

// ==================== SKILLS ====================
#section("Skills")
#grid(
  columns: (4.5cm, 4.5cm),
  column-gutter: 0.5cm,
  [
    *Programming Languages:* Java, Python, Haskell, C
  ],
  [
    *Web Development:* HTML, CSS, Vue.js, JavaScript, TypeScript
  ]
)

#v(0.05cm)

#grid(
  columns: (4.5cm, 4.5cm),
  column-gutter: 0.5cm,
  [
    *Tools & Technologies:* Git, GitHub, VSCode, Linux
  ],
  [
    *Databases:* PostgreSQL, MySQL, MariaDB
  ]
)

// ==================== PROJECTS ====================
#section("Projects")
*Simple Distributed System* — Java, TCP Sockets, Multithreading #text(size: 8pt)[ • Distributed system registering products from stores with query capabilities]

*Restaurant Chain Software System* — Java, PlantUML, MariaDB #text(size: 8pt)[ • Software system for restaurant chain management]

*Rover-Space Base Communication* — Java, TCP/UDP Sockets, JavaScript #text(size: 8pt)[ • Real-time monitoring of space rovers with mission sending and reporting]

*AirBnB Impact Website* — Vue.js, TypeScript, CSS #text(size: 8pt)[ • Website filtering CSV data to graphs and flashcards with export]

*Portfolio Website* — Vue.js, TypeScript, TailwindCSS #text(size: 8pt)[ • Modern responsive personal portfolio website]

*Streaming Platform* — Java, PlantUML, Docker #text(size: 8pt)[ • Spotify-like streaming platform application]

// ==================== HOBBIES & INTERESTS ====================
#section("Hobbies & Interests")
Sports (football, tennis, ping-pong, orienteering), gym (regular training, discipline), gaming (Resident Evil, CS2, LoL, Civilization, R6, TFT), and movies/TV (Better Call Saul, Breaking Bad, The Boys, Arcane).

// ==================== EXTRACURRICULAR EXPERIENCE ====================
#section("Extracurricular Experience")
Collaborator at CESIUM – Marketing and Communication Department \
Contributed to the development of communication strategies, content creation, and promotion of student initiatives, strengthening teamwork, creativity, and organizational skills.

// ==================== WHY ACCENTURE? ====================
#section("Why Accenture?")
As a final-year student at the University of Minho, I have developed a robust technical foundation in Java, Web Technologies, and Distributed Systems. My experience as a collaborator at CESIUM has honed my ability to communicate effectively and work within multidisciplinary teams. I am eager to apply my problem-solving skills and passion for continuous improvement  to Accenture’s innovative projects in Braga, contributing to the delivery of high-impact technology solutions.
