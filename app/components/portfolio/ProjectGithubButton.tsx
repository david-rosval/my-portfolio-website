import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import Github from '../svg/Github'
import { Link } from '@remix-run/react'
import clsx from 'clsx'

const MotionGithub = motion.create(Github)
const MotionLink = motion.create(Link)

const githubButton = ["Ir al Repositorio", "Go to Repository"]

export default function ProjectGithubButton({ languageIndex, to }: {languageIndex: number, to: string }) {
  const [githubBtnIsHovered, setGithubBtnIsHovered] = useState(false)
  
  return (
    <MotionLink
      to={to}
      className="inline-flex ml-auto w-fit p-3 rounded-full items-center gap-2 transition-all ease-linear duration-300 bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600"
      onMouseEnter={() => setGithubBtnIsHovered(true)}
      onMouseLeave={() => setGithubBtnIsHovered(false)}
    >
      <AnimatePresence>
        {githubBtnIsHovered && (
          <motion.span 
            className=" overflow-hidden text-white"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            exit={{ width: 0 }}
            layout
          >
            <span className="whitespace-nowrap">
              {githubButton[languageIndex]}
            </span>
          </motion.span>
        )}
      </AnimatePresence>
      <MotionGithub
        className={clsx(
          "size-6 transition-colors duration-200 ease-linear",
          githubBtnIsHovered ? "fill-slate-100" : "fill-slate-800 dark:fill-slate-100"
        )}
      />
    </MotionLink>
  )
}
