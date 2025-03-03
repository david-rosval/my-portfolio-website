import { motion } from "motion/react"
import { useState } from "react"
import LinkedIn from "../svg/LinkedIn"
import { Mail } from "lucide-react"

export default function ContactMeButton() {
  const [buttonHover, setButtonHover] = useState<boolean>(false)

  const buttonAnimations = {
    initial: { 
      borderColor: "#E1FFBB",
      backgroundColor: 'transparent',
      color: '#222',
    },
    hover: { 
      borderColor: "transparent",
      backgroundColor: '#E1FFBB',
      color: '#001A6E',
    }
  }

  return (
    <div className="relative">
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          transition: { 
            type: 'spring',
            bounce: 0.5,
            delay: 1.2 
          },
        }}
      >
        <motion.button 
          animate={buttonHover ? 'hover' : 'initial'}
          variants={buttonAnimations}
          transition={{ duration: 1.2, type: 'spring', bounce: 0.5 }}
          className="px-5 py-2 rounded-full text-gray-800 dark:text-white text-lg md:text-2xl font-semibold border border-palette-4 flex gap-3 items-center"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Contáctame
        </motion.button>
      </motion.div>

      <motion.div 
        animate={{
          scale: buttonHover ? 1 : 0,
        }}
        className="absolute -b-2 w-full flex"
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
      >
        <motion.div className="flex justify-around items-center gap-4 bg-palette-2 mx-auto mt-2 py-2 px-4 rounded-2xl">
          <motion.a 
            whileHover={{
              scale: 1.1
            }}
            whileTap={{
              scale: 0.9
            }}
            href="mailto:rosadovalerio.d@gmail.com"
            className="flex gap-2 items-center"
          >
            <Mail className="size-8 stroke-white" />
          </motion.a>
          <div className="border-l my-3 h-full border-white" />
          <motion.a 
            whileHover={{
              scale: 1.1
            }}
            whileTap={{
              scale: 0.9
            }}
            href="https://www.linkedin.com/in/david-rosado-valerio-20b414281"
            className="flex gap-2 items-center"
          >
            <LinkedIn className="size-6" />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  )
}
