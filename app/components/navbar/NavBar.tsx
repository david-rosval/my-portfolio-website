import {motion} from "motion/react"
import { Link } from "@remix-run/react";
import { useRequestInfo } from "~/utils/request-info";
import { ThemeSwitch } from "~/routes/resources.theme-switch";

import NavModal from "./NavModal";
import { useState } from "react";
import { navBarLinks } from "~/consts";
import { Languages } from "lucide-react";
import useLanguage from "~/hooks/useLanguage";


const MotionLink = motion.create(Link)

export default function NavBar() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { userPrefs } = useRequestInfo()
  const { language, setLanguage }= useLanguage()

  const toggleLanguage = () => {
    if (language === "es") setLanguage("en")
    if (language === "en") setLanguage("es")
  }

  return (
    <motion.div 
      className="w-full min-h-14 z-30 fixed top-0 flex justify-center gap-2 md:gap-0 items-center backdrop-blur-lg"
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
            {navBarLink.name[0]}
          </MotionLink>
        ))}
      </nav>

      <button onClick={toggleLanguage} className="md:absolute left-0 m-0 md:m-2 flex p-2 border dark:border-slate-600 rounded-lg shadow-md hover:bg-slate-500/5 transition-colors duration-200 ease-in-out">
        <Languages />
      </button>

      {/* On mobiles */}
      <NavModal />

      <div className="md:absolute right-0 m-0 md:m-2">
        <ThemeSwitch userPreference={userPrefs.theme} className="border rounded-lg dark:border-slate-600 hover:bg-slate-500/5 transition-colors duration-200 ease-in-out shadow-md" />
      </div>
    </motion.div>
  )
}


