import LinePatternBackground from "../svg/LinePatternBackground";
import { motion } from "motion/react"

export default function ProfilePhoto() {
  return (
    <motion.div 
      initial={{
        opacity: 0,
        x: -50
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { 
          ease: 'easeInOut', 
          delay: 0.1
        }
      }}
      
      className="md:size-80 size-64 rounded-full overflow-hidden flex justify-center items-center relative"
    >
      <img className="md:w-56 md:h-80 w-48 h-64 object-cover md:object-[0%_-120%] object-[0%_-60%] z-10  grayscale" src="/profile.webp" alt="profile" />
      <div className="absolute md:size-64 size-52 rounded-full p-3 flex justify-center items-center  overflow-hidden">
        <LinePatternBackground />
      </div>
    </motion.div>
  )
}
