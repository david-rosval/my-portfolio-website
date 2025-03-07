import { motion } from "motion/react"
import useLanguage from "~/hooks/useLanguage";
/* import Clerk from "../svg/Clerk";
import Expressjs from "../svg/Express";
import MongoDB from "../svg/MongoDB";
import MySQL from "../svg/MySQL";
import Nextjs from "../svg/Nextjs";
import Prisma from "../svg/Prisma";
import React from "../svg/React";
import Remix from "../svg/Remix";
import Vite from "../svg/Vite"; */
import ProjectsGrid from "./ProjectsGrid";
import useInitialAnimation from "~/hooks/useInitialAnimation";

const projectsTitle = ["Portafolio", "Portfolio"]

export default function Portfolio() {
  const { language } = useLanguage()
  const languageIndex = language === "en" ? 1 : 0
  const { animationIsCompleted } = useInitialAnimation()

  return (
    <motion.section className="grid gap-[4vw] md:gap-4 lg:gap-5 pb-[5rem]" 
      initial={{ opacity: 0 }}
      animate={{ opacity: animationIsCompleted ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="flex bg-profile-dots justify-center gap-3 "
      >
        <motion.h2 
          className="inline-flex bg-slate-100  items-center dark:bg-slate-800 text-center  text-blue-500 dark:text-blue-400  uppercase tracking-wider leading-none font-semibold origin-center h-[8.8vw] md:h-12 lg:h-[4rem] text-[6vw] md:text-[2.1rem] lg:text-[2.5rem] px-[2vw] md:px-[1.1rem]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1, transition: { duration: 0.3, delay: 1.3 } }}
          viewport={{ once: true }}
        >
          {projectsTitle[languageIndex]}
        </motion.h2>
      </motion.div>
      {/* Projects grid */}
      <ProjectsGrid />
    </motion.section>
  )
}

