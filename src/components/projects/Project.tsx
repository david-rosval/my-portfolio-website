import { useState } from "react"
import LinePatternProject from "../svg/LinePatternProject"
import { SquareArrowOutUpRight } from "lucide-react"
import { motion } from "motion/react"
import GoToGithubButton from "./GoToGithubButton"

type ProjectType = {
  title: string,
  description: string,
  technologies: string[],
  image: string,
  github: string,
  site: string
}

export default function Project({ project, children }: { project: ProjectType, children: React.ReactNode }) {
  const {
    title,
    description,
    image,
    github,
    site
  } = project

  const [titleHover, setTitleHover] = useState<boolean>(false)

  return (
    <div className="relative max-w-[488px] mx-auto">
      <LinePatternProject />
      <div className=" text-white p-5 flex flex-col  border-2 border-palette-3 bg-palette-1 relative z-10 ">
        
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

          <div className="flex  mt-3 ">
            <div className="flex gap-3 items-center bg-palette-2 py-2 px-4 rounded-2xl">
              {children}
            </div>
          </div> 

          <div className="flex justify-end items-end mt-5 h-full">
            <GoToGithubButton url={github} />
          </div>
          
        </div>
      </div>
    </div>

  )
}