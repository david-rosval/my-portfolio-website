import { ChevronDown } from "lucide-react"
import { motion } from "motion/react"

export default function SlideAnimated() {
  return (
    <motion.div 
        initial={{
          opacity: 0,
          y: -10
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { 
            duration: 0.5,
            delay: 1.8
          }
        }}
        className='absolute bottom-0 mx-auto flex flex-col items-center justify-center  gap-1 pb-3 mb-2'
      >
        <motion.div
            animate={{
            y: [0, -10, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              repeatType: "loop"
            }
            }}
        >
          <ChevronDown className='size-10 stroke-white' />
        </motion.div>
      </motion.div>
  )
}
