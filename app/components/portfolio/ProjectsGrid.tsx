import { projects } from "~/consts"
import useLanguage from "~/hooks/useLanguage"
import ProjectCard from "./ProjectCard"


export default function ProjectsGrid() {
  const { language } = useLanguage()
  const languageIndex = language === "en" ? 1 : 0
  return (
    <div className="grid gap-3 lg:grid-cols-[repeat(auto-fit,minmax(30%,1fr))] md:grid-cols-[repeat(auto-fit,minmax(40%,1fr))]">
      {projects.map((project, index) => (
        <ProjectCard key={index} languageIndex={languageIndex} project={project} />
      ))}
    </div>
  )
}

