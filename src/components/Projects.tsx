import { Code } from "lucide-react"
import Expressjs from "./svg/Express"
import Nextjs from "./svg/Nextjs"
import MongoDB from "./svg/MongoDB"
import Remix from "./svg/Remix"
import Prisma from "./svg/Prisma"
import SocketIo from "./svg/Socketio"
import Section from "./Section"
import MySQL from "./svg/MySQL"
import Clerk from "./svg/Clerk"
import Project from "./Project"
import IconTooltip from "./IconTooltip"

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
  github: "https://github.com/david-rosval/week-planner.git",
  site: "http://localhost:5173"
}

export default function Projects() {
  return (
    <Section icon={<Code className="stroke-palette-4 size-12" />} title="Proyectos">
      <div className="grid lg:grid-cols-2 gap-8">
        <Project project={project2}>
          <IconTooltip text="Remix">
            <Remix />
          </IconTooltip>
          •
          <IconTooltip text="Prisma">
            <Prisma className="h-5" />
          </IconTooltip>
          •
          <IconTooltip text="MongoDB">
            <MongoDB className="h-5" />
          </IconTooltip>
          •
          <IconTooltip text="Clerk">
            <Clerk className="w-12" />
          </IconTooltip>
        </Project>
        <Project project={project1}>
          <IconTooltip text="Nextjs">
            <Nextjs className="size-5" />
          </IconTooltip>
          •
          <IconTooltip text="Express">
            <Expressjs className="size-5" />
          </IconTooltip>
          •
          <IconTooltip text="Socket.io">
            <SocketIo className="size-5" />
          </IconTooltip>
          •
          <IconTooltip text="MongoDB">
            <MongoDB className="size-5" />
          </IconTooltip>
          •
          <IconTooltip text="MySQL">
            <MySQL className="size-5" />
          </IconTooltip>
        </Project>
      </div>
    </Section>
  )
}

