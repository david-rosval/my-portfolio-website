import { motion } from "motion/react"
import Github from '../svg/Github'
import { useState } from "react"

export default function GoToGithubButton({ url }: { url: string }) {
  const [buttonHover, setButtonHover] = useState(false)
  const githubButtonAnimations = {
    'hover': {
      borderColor: "transparent",
      backgroundColor: '#E1FFBB',
      color: '#001A6E',
    }
  }
  return (
    <a href={url} className=''>
      <motion.button 
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
        whileHover='hover'
        variants={githubButtonAnimations}
        className='flex gap-2 rounded-full px-4 py-2 border border-palette-4 items-center font-semibold'
      >
        Ir al Github
        <Github hoverState={buttonHover} />
      </motion.button>
    </a>
  )
}
