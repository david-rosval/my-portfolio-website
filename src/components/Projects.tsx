import { SquareArrowOutUpRight } from "lucide-react"
import { projects } from "../consts"
import Expressjs from "./svg/Express"
import Nextjs from "./svg/Nextjs"
import React from "./svg/React"
import Remix from "./svg/Remix"
import GoToGithubButton from "./GoToGithubButton"


export default function Projects() {
  return (
    <div className="flex gap-5 mx-auto  h-[500px] max-w-[1300px]">
      {/* Div con texto rotado */}
      <div className="flex items-center justify-center w-32">
        <h2 className="-rotate-90 whitespace-nowrap text-8xl uppercase font-bold text-palette-2 ">Projects</h2>
      </div>

      {/* Div que ocupa el espacio restante */}
      <div className="flex-1 p-4 flex items-center">
        <div className="h-full grid grid-cols-3 gap-4">
          {projects.map((project, i) =>(
            <Project key={i} project={project} />
          ))}
        </div>
      </div>
    </div>
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

function Project({ project }: { project: ProjectType }) {
  const {
    title,
    description,
    image,
    github,
    site
  } = project
  return (
    <div className="h-full bg-palette-3 rounded-xl  overflow-hidden text-white">
      <div className={`w-full h-40 bg-[url(${image})]`}>
      </div>
      <div className="h-full p-4 flex flex-col gap-3">

        <div className="flex">
          <a href={site} className="hover:underline underline-offset-4 decoration-palette-4 flex gap-2 items-center">
            <h3 className="text-xl font-bold text-palette-4">
              {title}
            </h3>
            <SquareArrowOutUpRight className="size-5 stroke-palette-4" />
          </a>
        </div>

        <p>{description}</p>

        <ul className="flex gap-3 items-center">
          <li>
            <Nextjs className="size-7" />
          </li>
          <li>
            <Remix className="size-5" />
          </li>
          <li>
            <React className="size-7" />
          </li>
          <li>
            <Expressjs className="size-7" />
          </li>
        </ul>

        <div className="flex justify-end items-end ">
          <GoToGithubButton url={github} />
        </div>
        
      </div>
    </div>
  )
}