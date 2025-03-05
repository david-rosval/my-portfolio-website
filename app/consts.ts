

export const heroText = [
  ["Hola", "soy", "Desarrollador Web"],
  ["Hi", "I'm", "Web Developer", "Contact me"],

]


export const navBarLinks = [
  { name: ["Portafolio", "Portfolio"], to: "/" },
  { name: ["Acerca de mí", "About me"], to: "/" },
  { name: ["Contáctame", "Get in touch"], to: "/" },
]

export type Project = {
  title: string[]
  description: string[]
  technologies: string[]
  image: string
  github: string
  site?: string
  status: "In Development" | "Live" | "Offline"
}


export const projects: Project[] = [
  {
    title: ["Landing Page de universidad", "University Landing Page"],
    description: ["Página web informativa para universidades, diseñada para destacar programas, admisiones y eventos con un diseño moderno y responsivo.", "Informational website for universities, designed to showcase programs, admissions, and events with a modern and responsive design."],
    technologies: ["React", "Remix", "Tailwind", "Motion"],
    image: "/university-landing-page.webp",
    github: "https://github.com/david-rosval/week-planner.git",
    site: "https://university-landing-page-flax.vercel.app/",
    status: "Live"
  },
  
  {
    title: ["Planificador Semanal", "Week Planner"],
    description: ["Aplicación web de creación de actividades y hábitos semanales. Cuenta con un sistema de autenticación y una base de datos para guardar los eventos.", "Web application for creating weekly activities and habits. It includes an authentication system and a database to store events."],
    technologies: ["React", "Remix", "Tailwind", "MongoDB", "Motion", "Prisma",   "Clerk"],
    image: "/weekplanner.webp",
    github: "https://github.com/david-rosval/week-planner.git",
    status: "In Development"
  },
  {
    title: ["Gestor de pedidos para restobar Villa 29", "Order management system for Restobar Villa 29"],
    description: ["Sitio web de comunicación en tiempo real entre el área de atención al cliente (mozos) y cocina. Cuenta con un dashboard para la administración de las ganancias.", "Real-time communication website between the customer service area (waiters) and the kitchen. It includes a dashboard for managing earnings"],
    technologies: ["React", "Nextjs", "Tailwind", "ShadcnUi", "Expressjs", "Socket.io", "MongoDB", "MySQL"],
    image: "/villa29.webp",
    github: "https://github.com/david-rosval/villa29-inventario-y-cocina-frontend-nextjs.git",
    status: "Offline"
  },
]