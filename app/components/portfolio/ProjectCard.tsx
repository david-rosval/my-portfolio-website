import { Project } from "../../consts"
import ProjectGithubButton from "./ProjectGithubButton"
import ProjectStatusBadge from "./ProjectStatusBadge"
import ProjectTitle from "./ProjectTitle"

import { motion } from "motion/react"
import TechStack from "./TechStack"

const ProjectCard = ({ 
  project, 
  languageIndex 
}: { 
  project: Project, 
  languageIndex: number 
}) => {


  return (
    <motion.div 
      className="w-full  rounded-lg border dark:border-slate-600 relative flex flex-col shadow-lg"
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1, transition: { duration: 1 }}}
      viewport={{ once: true }}
    >
      <div className="image-t-transparent-gradient w-full h-[20%] opacity-25 absolute bottom-0 bg-profile-dots" />
      <div className="w-full h-[7rem] bg-cover bg-left-top image-b-transparent-gradient rounded-t-lg" style={{
        backgroundImage: `url(${project.image})`,
      }} />
      <div className="p-4 flex flex-col gap-5 h-full z-10">
        <ProjectStatusBadge project={project} />
        <div className="flex gap-5 h-full">
          <div className="h-full">
            <TechStack techStack={project.technologies} />
          </div>
          <div className=" w-full flex flex-col justify-between ">
            <div className="flex flex-col gap-3">
              <ProjectTitle title={project.title[languageIndex]} />
              <p className="opacity-85 text-sm">{project.description[languageIndex]}</p>
            </div>
            <ProjectGithubButton languageIndex={languageIndex} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard