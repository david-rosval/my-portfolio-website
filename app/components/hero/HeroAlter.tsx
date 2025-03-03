import { useState } from "react"
import MoonFace from "../svg/MoonFace"
import TextCircleAnim from "./TextCircleAnim"
import {motion} from "motion/react"
import clsx from "clsx"
import useLanguage from "~/hooks/useLanguage"
import ContactMeBtn from "./ContactMeBtn"

const MotionMoonFace = motion.create(MoonFace)

export default function HeroAlter() {
  const { language } = useLanguage()
  const languageIndex = language === "en" ? 1 : 0
  const [descriptionAnim, setDescriptionAnim] = useState(false)

  const hiIm = ["¡Hola!, soy", "Hi!, I'm"]
  const description = ["Si tienes un proyecto en mente o quieres conversar sobre tecnología, ¡estaré encantado de conectar contigo!", "If you have a project in mind or want to chat about technology, I’d be delighted to connect with you!"]

  return (
    <main
      className="w-full px-8 overflow-hidden"
    >
      <div className="mt-[20vw] flex flex-col items-center gap-[8vw]">
        <h1 className="text-center flex flex-col items-center gap-2">
          <span className="text-[6vw]">{hiIm[languageIndex]}</span>
          <span className="text-[10vw] font-black leading-none ">David Rosado Valerio</span>
        </h1>

        <TextCircleAnim />

        <p className="text-center text-[3.5vw] opacity-85 max-w-[77vw]">
          <span>{description[languageIndex].split("").map((char, index) => (
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
          ))}</span>{" "}
          <MotionMoonFace className={clsx("inline-block size-[5.5vw] transition-all ease-in-out duration-300", descriptionAnim ? "opacity-100 scale-100" : "opacity-0 scale-0" )} />
        </p>
        
        <ContactMeBtn languageIndex={languageIndex} />

      </div>

    </main>
  )
}
