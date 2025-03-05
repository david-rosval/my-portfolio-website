import { Link } from "@remix-run/react"
import { motion } from "motion/react"
import { type Project } from "../../consts"
import clsx from "clsx"
import { SquareArrowOutUpRight } from "lucide-react"

const MotionLink = motion.create(Link)

export default function ProjectStatusBadge({ project }: { project: Project }) {
  const badgeColor = project.status === "Live"
    ? "#6ace83"
    : project.status === "Offline"
      ? "#cc7422"
      : "#6889f5"

  return (
    <MotionLink
      to={project.site ?? "#"} 
      rel="noreferrer" 
      target="_blank"
      className={clsx(
        "inline-flex w-fit border-2 rounded-full px-2 text-sm items-center", 
        project.site 
          ? "pointer-events-auto" 
          : "pointer-events-none"
      )} 
      style={{
        color: badgeColor,
        borderColor: badgeColor
      }}
    >
      {project.status} 
      {project.site && (
        <SquareArrowOutUpRight className="size-4 ml-2" />
      )}
    </MotionLink>
  )
}
