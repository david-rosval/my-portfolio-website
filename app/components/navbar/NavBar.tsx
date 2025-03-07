import {motion} from "motion/react"
import { Link } from "@remix-run/react";

import { useState } from "react";
import { navBarLinks } from "~/consts";
import useLanguage from "~/hooks/useLanguage";
import LanguageSelection from "./LanguageSelection";
import ThemeSelection from "./ThemeSelection";
import NavSelection from "./NavSelection";


const MotionLink = motion.create(Link)

export default function NavBar() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { language }= useLanguage()
  const languageIndex = language === "en" ? 1 : 0



  return (
    <motion.div 
      className="w-full min-h-14 z-30 fixed top-0 flex justify-center gap-2 md:gap-0 items-center md:backdrop-blur-lg bg-gradient-to-b from-slate-600/20 to-transparent"
      initial={{ top: -30, opacity: 0 }}
      animate={{ top: 0, opacity: 1, transition: { delay: 0.8, duration: 0.3 } }}
    >
      {/* On Monitor */}
      <nav className="md:flex hidden">
        {navBarLinks.map((navBarLink, index) => (
          <MotionLink 
            key={navBarLink.name[1]} 
            to={navBarLink.to}
            className="p-3 uppercase"
            onMouseEnter={() => setSelectedIndex(index+1)}
            onMouseLeave={() => setSelectedIndex(0)}
            initial={{
              filter: "blur(0px)",
              scale: 1
            }}
            animate={{
              filter: (selectedIndex !== index+1 && selectedIndex > 0) ? "blur(4px)" : "blur(0px)",
              scale: selectedIndex === index+1 ? 1.03 : 1,
              transition: {
                duration: 0.25
              }
            }}
          >
            {navBarLink.name[languageIndex]}
          </MotionLink>
        ))}
      </nav>

      <LanguageSelection />
      
      <NavSelection /> {/* On mobiles */}

      <ThemeSelection />
      
    </motion.div>
  )
}


