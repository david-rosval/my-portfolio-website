import {motion} from "motion/react"

export default function TextCircleAnim() {
  const fullStack = "Web Developer •••••••• Full Stack •••••••• " // 29 chars

  return (
    // 
    <div id="circle" className=" rounded-full size-[60vw] md:size-[18rem] lg:size-[24rem] relative flex justify-center items-center "> {/* parent div size-60% */}
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
        className="rounded-full flex justify-center items-center absolute inset-0 size-fit m-auto bg-blue-400 dark:bg-blue-400 overflow-hidden"
      >
        <div className="bg-[url(/images/profile.webp)] bg-cover bg-[center] rounded-full size-[44vw] md:size-[13.2rem] lg:size-[17.6rem]  grayscale scale-105"> {/* div size-44% */}
        </div>
      </div>
    </div>
  )
}
