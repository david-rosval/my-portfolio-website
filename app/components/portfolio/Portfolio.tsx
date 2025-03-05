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
    <motion.section className="grid gap-[4vw] md:gap-4 lg:gap-5 mb-[30rem]" 
      initial={{ opacity: 0 }}
      animate={{ opacity: animationIsCompleted ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      {/* <div className="grid place-items-center bg-profile-dots py-[8vw] md:py-[3rem] lg:py-[4rem]">
        <h2 className="inline-grid place-items-center text-center  uppercase bg-slate-100 dark:bg-slate-800 leading-none py-[3vw] md:py-[10px] lg:py-[0.8rem] text-[5vw] md:text-[1.5rem] tracking-widest text-blue-600 w-full">{projectsTitle[languageIndex]}</h2>
      </div> */}
      {/* tech filter */}
      {/* <div className=" flex h-[8vw] md:h-[2.5rem] gap-3 justify-around my-">
        <React className="size-full " />
        <Remix className="size-full" />
        <Nextjs className="size-full" />
        <Vite className="size-full" />
        <MongoDB className="size-full" />
        <MySQL className="size-full" />
        <Prisma className="size-full" />
        <Clerk className="size-full" />
        <Expressjs className="size-full" />
      </div> */}
      <motion.div 
        className="flex bg-profile-dots justify-center gap-3 "
      >
        <motion.h2 
          className="inline-flex bg-slate-100 dark:bg-slate-800 text-center  text-blue-500 dark:text-blue-400  uppercase tracking-wider leading-none font-semibold text-xl px-2 origin-center"
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

