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
      className="w-full px-8 lg:px-72 overflow-hidden min-h-dvh"
    >
      <motion.div 
        className="mt-[20vw] lg:mt-32 flex flex-col items-center lg:items-start gap-[8vw] lg:gap-[2rem] relative"
        initial={{ opacity: 0, bottom: -30 }}
        animate={{ opacity: 1, bottom: 0, transition: { duration: 0.8, delay: 0.3 } }}
        onAnimationComplete={() => setInitAnim(true)}
      >
        <h1 className="text-center flex flex-col items-center lg:items-start gap-2">
          <span className="text-[6vw] lg:text-5xl">{hiIm[languageIndex]}</span>
          <span className="text-[10vw] lg:text-7xl font-semibold leading-none "><span className="text-blue-500 dark:text-blue-400">David</span> Rosado Valerio</span>
        </h1>
        <div className="block lg:absolute right-0">
          <TextCircleAnim />
        </div>

        {initAnim && (
          <>
            <HeroDescriptionAnim languageIndex={languageIndex} descriptionAnim={descriptionAnim} setDescriptionAnim={setDescriptionAnim} />
            
            <ContactMeBtn languageIndex={languageIndex} />
          </>
        )}

      </motion.div>

    </main>
  )
}
