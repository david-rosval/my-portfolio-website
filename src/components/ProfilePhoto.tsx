import LinePatternBackground from "./svg/LinePatternBackground";
import { motion } from "motion/react"

export default function ProfilePhoto() {
  return (
    <motion.div 
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut', delay: 0.8 }
      }}
      
      className="size-80  rounded-full overflow-hidden flex justify-center items-center relative"
    >
      <img className="w-56 h-80 object-cover object-[0%_-120%] z-10 grayscale" src="/profile.png" alt="profile" />
      <div className="absolute size-64 rounded-full p-3 flex justify-center items-center  overflow-hidden">
        <LinePatternBackground />
      </div>
    </motion.div>
  )
}
