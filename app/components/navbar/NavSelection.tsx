import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import useLanguage from "../../hooks/useLanguage";

const navBarLinks = [
  ["Portafolio", "Portfolio"],
  ["Sobre mí", "About me"],
  ["Contacto", "Contact"]
]

export default function NavSelection() {
  const { languageIndex } = useLanguage()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [navDropdownIsOpen, setNavDropdownIsOpen] = useState(false)

  useEffect(() => {
    function closeDropdown(e: MouseEvent) {
      if (navDropdownIsOpen && dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setNavDropdownIsOpen(false)
      }
    }
    document.addEventListener("mousedown", closeDropdown)
    return () => {
      document.removeEventListener("mousedown", closeDropdown)
    }
  }, [navDropdownIsOpen])
  

  const toggleDropdown = () => {
    setNavDropdownIsOpen(!navDropdownIsOpen)
  }

  return (
    <button
      className="border rounded-lg bg-slate-100 dark:bg-slate-700 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600 flex justify-center md:hidden"
      onClick={toggleDropdown}
    >
      <Menu className="m-2" />
      <AnimatePresence>
        {navDropdownIsOpen && (
          <motion.div 
            ref={dropdownRef}
            className="absolute rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700 w-36 flex flex-col"
            initial={{ opacity: 0, top: "90%" }}
            animate={{ opacity: 1, top: "115%" }}
            exit={{ opacity: 0, top: "90%" }}
          >
            {navBarLinks.map((navBarLink, index) => (
              <button key={index} className="py-3 transition-colors duration-300 ease-in-out hover:bg-slate-300/40 hover:dark:bg-slate-600/40">{navBarLink[languageIndex]}</button>
            ))}
            
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}
