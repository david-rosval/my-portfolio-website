import {motion} from "motion/react"

export default function TextCircleAnim() {
  const fullStack = "Web Developer •••••••• Full Stack •••••••• " // 29 chars

  return (
    // 
    <div id="circle" className=" rounded-full size-[60vw] lg:size-[16rem] relative flex justify-center items-center "> {/* parent div size-60% */}
      <motion.div 
        id="text" 
        className="size-full absolute "
        animate={{
          rotate: 360,
          transition: {
            duration: 15, ease: "linear", repeat: Infinity
          },
        }}
        whileHover={{
          transition: { duration: 30, ease: "linear", repeat: Infinity}
        }}
      >
        <p className="origin-center select-none">
          {fullStack.split("").map((char, index) => (
            <span 
              className="absolute left-1/2 text-[5vw] lg:text-[1.3rem] transformOrigin" /* span size-5% | transform-origin: 0px 30%px */
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
        className="rounded-full flex justify-center items-center absolute inset-0 size-fit m-auto bg-blue-400 dark:bg-blue-400 overflow-hidden"
      >
        <div className="bg-[url(/images/profile.webp)] bg-cover bg-[center] rounded-full size-[44vw] lg:lg:size-[11.73rem] grayscale scale-110"> {/* div size-44% */}
        </div>
      </div>
    </div>
  )
}
