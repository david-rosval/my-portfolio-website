import {motion} from "motion/react"

export default function TextCircleAnimation() {
  return (
    <div className="">
      <div className="relative flex justify-center items-center">
        <motion.svg
          viewBox="0 0 300 300"
          className="size-[100vw]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60, 60 0 0, 1 120, 0 a 60, 60 0 0, 1 -120, 0 "
            /> 
          </defs>
          <text className="fill-gray-950 dark:fill-white">
            <textPath xlinkHref="#circlePath" className="text-[5vw]">
              Full Stack • Web Developer •{" "}
            </textPath>
          </text>
        </motion.svg>
        <div className=" rounded-full flex justify-center items-center absolute inset-0 size-fit m-auto bg-blue-400 dark:bg-blue-900 overflow-hidden">
          <div className="bg-[url(/images/profile.webp)] bg-cover bg-origin-padding p-4 bg-[center] rounded-full size-[35vw] grayscale scale-110">
          </div>
        </div>
      </div>
    </div>

  )
}
