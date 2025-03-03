import { useState } from "react"
import TextCircleAnim from "./TextCircleAnim"
import {motion} from "motion/react"
import useLanguage from "~/hooks/useLanguage"
import ContactMeBtn from "./ContactMeBtn"
import HeroDescriptionAnim from "./HeroDescriptionAnim"


export default function HeroAlter() {
  const { language } = useLanguage()
  const languageIndex = language === "en" ? 1 : 0
  const [descriptionAnim, setDescriptionAnim] = useState(false)
  const [initAnim, setInitAnim] = useState(false)

  const hiIm = ["¡Hola!, soy", "Hi!, I'm"]

  return (
    <main
      className="w-full px-8 2xl:px-72 overflow-hidden min-h-dvh"
    >
      <motion.div 
        className="mt-[18vw] md:mt-32  relative block md:flex md:justify-between max-w-[1200px] mx-auto"
        initial={{ opacity: 0, bottom: -30 }}
        animate={{ opacity: 1, bottom: 0, transition: { duration: 0.8, delay: 0.3 } }}
        onAnimationComplete={() => setInitAnim(true)}
      >
        <div className="flex flex-col items-center md:items-start gap-[6vw] md:gap-[2rem]">

          <h1 className="text-center md:text-left flex flex-col items-center md:items-start gap-2">
            <span className="text-[6vw] md:text-3xl lg:text-[3rem] md:leading-relaxed">{hiIm[languageIndex]}</span>
            <span className="text-[10vw] md:text-5xl lg:text-[5rem] font-semibold leading-none "><span className="text-blue-500 dark:text-blue-400">David</span> Rosado Valerio</span>
          </h1>
          <div className="block md:hidden">
            <TextCircleAnim />
          </div>

          {initAnim && (
            <>
              <HeroDescriptionAnim languageIndex={languageIndex} descriptionAnim={descriptionAnim} setDescriptionAnim={setDescriptionAnim} />
              
              <ContactMeBtn languageIndex={languageIndex} />
            </>
          )}

        </div>
        
        <div className="hidden md:block">
          <TextCircleAnim />
        </div>

      </motion.div>

    </main>
  )
}
