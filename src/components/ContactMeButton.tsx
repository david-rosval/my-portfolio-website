import { motion } from "motion/react"
import { useState } from "react"
import LinkedIn from "./svg/LinkedIn"
import { Mail } from "lucide-react"

export default function ContactMeButton() {
  const [buttonHover, setButtonHover] = useState<boolean>(false)

  return (
    <div className="relative">
      <motion.a 
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1,
          transition: { 
            type: 'spring',
            bounce: 0.5,
            delay: 1.2 
          }
        }}
        href="mailto:rosadovalerio.d@gmail.com" 
        className="px-5 py-2 rounded-full text-white text-lg md:text-2xl font-semibold border border-palette-4 flex gap-3 items-center"
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
      >
        Contáctame
      </motion.a>
      <motion.div 
        animate={{
          scale: buttonHover ? 1 : 0,
          
        }}
        className="absolute -b-2 w-full flex"
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
      >
        <div className="flex justify-around items-center gap-4 bg-palette-2 mx-auto mt-2 py-2 px-4 rounded-2xl">
          <a href="mailto:rosadovalerio.d@gmail.com">
            <Mail className="size-10 stroke-white" />
          </a>
          <div className="border-l my-3 h-full border-white" />
          <a href="https://www.linkedin.com/in/david-rosado-valerio-20b414281">
            <LinkedIn className="size-8" />
          </a>
        </div>
      </motion.div>
    </div>
  )
}
