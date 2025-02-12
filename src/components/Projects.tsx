import { Code, SquareArrowOutUpRight } from "lucide-react"
import Expressjs from "./svg/Express"
import Nextjs from "./svg/Nextjs"
import { motion } from "motion/react"
import GoToGithubButton from "./GoToGithubButton"
import MongoDB from "./svg/MongoDB"
import Remix from "./svg/Remix"
import Prisma from "./svg/Prisma"
import { useState } from "react"
import LinePatternProject from "./svg/LinePatternProject"
import SocketIo from "./svg/Socketio"
import Section from "./Section"
import MySQL from "./svg/MySQL"

const  project1 = {
  title: "Gestor de pedidos para restobar Villa 29",
  description: "Sitio web de comunicación en tiempo real entre el área de atención al cliente (mozos) y cocina. Cuenta con un dashboard para la administración de las ganancias.",
  technologies: ["Nextjs", "Expressjs", "Socket.io", "MongoDB"],
  image: "/villa29.webp",
  github: "https://github.com/david-rosval/villa29-inventario-y-cocina-frontend-nextjs.git",
  site: "http://localhost:5173"
}

const project2 = {
  title: "Week Planner",
  description: "Aplicación web de creación de actividades y hábitos semanales. Cuenta con un sistema de autenticación y una base de datos para guardar los eventos.",
  technologies: ["Remix", "MongoDB", "Prisma"],
  image: "/weekplanner.webp",
  github: "https://github.com/david-rosval/villa29-inventario-y-cocina-frontend-nextjs.git",
  site: "http://localhost:5173"
}

export default function Projects() {
  return (
    <Section icon={<Code className="stroke-palette-4 size-12" />} title="Proyectos">
      <div className="grid lg:grid-cols-2 gap-8">
        <Project project={project2}>
          <Remix />
          <Prisma />
          <MongoDB />
        </Project>
        <Project project={project1}>
          <Nextjs />
          <Expressjs />
          <SocketIo />
          <MongoDB />
          <MySQL />
        </Project>
      </div>
    </Section>
  )
}

type ProjectType = {
  title: string,
  description: string,
  technologies: string[],
  image: string,
  github: string,
  site: string
}

function Project({ project, children }: { project: ProjectType, children: React.ReactNode }) {
  const {
    title,
    description,
    image,
    github,
    site
  } = project

  const [titleHover, setTitleHover] = useState<boolean>(false)

  

  return (
    <div className="relative max-w-[500px] mx-auto">
      <LinePatternProject />
      <div className=" text-white p-5 flex flex-col  border-2 border-palette-3 bg-palette-1 relative z-10 mr-3">
        
        <div className="h-48 overflow-hidden z-10">
          <img src={image} alt={title} className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300" />
        </div>
        <div className="flex-1 pt-5 flex flex-col gap-4 z-10">

          <div className="flex">
            <a 
              href={site} 
              onMouseEnter={() => setTitleHover(true)}
              onMouseLeave={() => setTitleHover(false)}
              className=" flex gap-2 items-center relative"
            >
              <h3 className="text-2xl font-bold text-palette-4 flex items-center gap-2 hover:underline underline-offset-4 decoration-palette-4">
                <p className="max-w-72 truncate">
                  {title}
                </p>
                <SquareArrowOutUpRight className="size-5 stroke-palette-4" />
              </h3>
              <motion.div 
                animate={{
                  scale: titleHover ? 1 : 0,
                  transition: {
                    delay: 0.5,
                  }
                }}
                className="absolute right-0 bg-palette-2 text-center text-white px-2 py-1 rounded-2xl -top-10 inset-x-0 "
                
              >
                {title}
              </motion.div>
            </a>
          </div>

          <p>{description}</p>

          <div className="flex gap-3 items-center mt-3">
            {children}
          </div> 

          <div className="flex justify-end items-end mt-5 h-full">
            <GoToGithubButton url={github} />
          </div>
          
        </div>
      </div>
    </div>

  )
}