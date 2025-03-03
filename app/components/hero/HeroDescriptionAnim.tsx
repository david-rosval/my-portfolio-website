import {motion} from "motion/react"
import React, { SetStateAction } from 'react'
import MoonFace from "../svg/MoonFace"
import clsx from "clsx"

const description = ["Si tienes un proyecto en mente o quieres conversar sobre tecnología, ¡estaré encantado de conectar contigo!", "If you have a project in mind or want to chat about technology, I’d be delighted to connect with you!"]

const MotionMoonFace = motion.create(MoonFace)

export default function HeroDescriptionAnim({ 
  languageIndex, 
  descriptionAnim, 
  setDescriptionAnim
}: {
  languageIndex: 0 | 1, 
  descriptionAnim: boolean, 
  setDescriptionAnim: React.Dispatch<SetStateAction<boolean>>
}) {
  return (
    <motion.p className="text-center md:text-left text-[3.5vw] md:text-lg opacity-85 max-w-[77vw] md:max-w-[500px]">
      {description[languageIndex].split("").map((char, index) => (
        <motion.span 
          key={index}
          className="relative"
          initial={{ opacity: !descriptionAnim ? 0 : 1}}
          animate={{ opacity: 1, transition: { delay: (index+1)*0.02 } }}
          onAnimationComplete={() => {
            if (index === description[languageIndex].split("").length-1) {
              setDescriptionAnim(true)
            } 
          }}
        >
          {char}
        </motion.span>
      ))}
      {" "}
      <MotionMoonFace className={clsx("inline-block size-[5.5vw] md:size-[28px] transition-all ease-in-out duration-300", descriptionAnim ? "opacity-100 scale-100" : "opacity-0 scale-0" )} />
    </motion.p>
  )
}
