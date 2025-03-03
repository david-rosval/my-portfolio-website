import {motion} from "motion/react"

export default function TextCircleAnim() {
  
  const fullStack = "Web Developer •••••••• Full Stack •••••••• " // 29 chars

  return (
    <div id="circle" className=" rounded-full size-[60vw] relative flex justify-center items-center">
      <motion.div 
        id="text" 
        className="size-full absolute"
        animate={{
          rotate: 360,
          transition: {
            duration: 15, ease: "linear", repeat: Infinity
          }
        }}
      >
        <p className="origin-center pointer-events-none select-none">
          {fullStack.split("").map((char, index) => (
            <span 
              className="absolute left-1/2 text-[5vw]" 
              style={{ 
                transform: `rotate(${index*8.3}deg)`, 
                transformOrigin: "0px 30vw" 
              }} 
              key={index}
            >
              {char}
            </span>
          ))}
        </p>
      </motion.div>
      <div className=" rounded-full flex justify-center items-center absolute inset-0 size-fit m-auto bg-blue-400 dark:bg-blue-400 overflow-hidden">
        <div className="bg-[url(/images/profile.webp)] bg-cover bg-origin-padding p-4 bg-[center] rounded-full size-[44vw] grayscale scale-110">
        </div>
      </div>
    </div>
  )
}
