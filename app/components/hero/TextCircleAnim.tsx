import {motion} from "motion/react"
import { useState } from "react"

export default function TextCircleAnim({ initAnim }: { initAnim: boolean }) {
  const fullStack = "Web Developer •••••••• Full Stack •••••••• " // 29 chars
  const [duration, setDuration] = useState<15 | 30>(30)
  return (
    // 
    <div id="circle" className=" rounded-full size-[60vw] md:size-[18rem] lg:size-[24rem] relative flex justify-center items-center " onMouseEnter={() => setDuration(30)} onMouseLeave={() => setDuration(15)}> {/* parent div size-60% */}
      <motion.div 
        id="text" 
        className="size-full absolute"
        animate={{
          rotate: 360,
          transition: {
            duration: duration, ease: "linear", repeat: Infinity
          },
        }}
      >
        <p className="origin-center select-none">
          {fullStack.split("").map((char, index) => (
            <span 
              className="absolute left-1/2 text-[5vw] md:text-[1.5rem] lg:text-[2rem] transformOrigin" /* span size-5% | transform-origin: 0px 30%px */
              style={{ 
                transform: `rotate(${index*8.3}deg)`, 
              }} 
              key={index}
              
            >
              {char}
            </span>
          ))}
        </p>
      </motion.div>
      <div 
        className="rounded-full flex justify-center items-center absolute inset-0 size-[44vw] md:size-[13.2rem] lg:size-[17.6rem] m-auto bg-profile-dots overflow-hidden"
      >
        {initAnim && (
          <motion.div 
            className="bg-[url(/images/profile.webp)] bg-cover bg-[center] rounded-full size-[44vw] md:size-[13.2rem] lg:size-[17.6rem]  grayscale relative" /* div size-44% */
            initial={{ opacity: 0, bottom: -30 }}
            animate={{ opacity: 1, bottom: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.5 }}}
          >
          </motion.div>
        )}
      </div>
    </div>
  )
}
