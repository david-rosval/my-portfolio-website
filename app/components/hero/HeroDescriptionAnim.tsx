import {motion} from "motion/react"
import MoonFace from "../svg/MoonFace"
import clsx from "clsx"

const description = ["Si tienes un proyecto en mente enfocado en la creatividad e interactividad, o quieres conversar sobre tecnología, ¡estaré encantado de conectar contigo!", "If you have a project in mind focused on creativity and interactivity, or want to chat about technology, I'd be happy to connect with you!"]

const MotionMoonFace = motion.create(MoonFace)

export default function HeroDescriptionAnim({ 
  languageIndex, 
  initAnim
}: {
  languageIndex: 0 | 1, 
  initAnim: boolean
}) {

  return (
    <motion.p className="text-center md:text-left text-[3.5vw] md:text-base lg:text-lg opacity-85 max-w-[77vw] md:max-w-[400px] lg:max-w-[500px]" layout>
      {description[languageIndex].split("").map((char, index) => (
        <motion.span 
          key={index}
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: initAnim ? 1 : 0, transition: { delay: (index+1)*0.02 } }}
        >
          {(index === description[languageIndex].split("").length-1) ? (
            <MotionMoonFace className={clsx("inline-block size-[5.5vw] md:size-[22px] lg:size-[28px] transition-all ease-in-out duration-300 ml-3" )} />
          ): char}
        </motion.span> 
      ))}
      {" "}
    </motion.p>
  )
}
