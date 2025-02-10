import { motion } from "motion/react"

export default function ContactMeButton() {
  return (
    <motion.a 
      initial={{
        scale: 0
      }}
      animate={{
        scale: 1,
        transition: { delay: 1 }
      }}
      href="mailto:rosadovalerio.d@gmail.com" 
      className="bg-palette-1 px-5 py-2 rounded-full text-white text-2xl font-semibold border border-palette-4 flex gap-3 items-center"
    >
      Contáctame
    </motion.a>
  )
}
