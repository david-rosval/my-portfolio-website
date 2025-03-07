import { Languages } from "lucide-react";
import useLanguage from "../../hooks/useLanguage";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";

const spanish = ["Español", "Spanish"]
const english = ["Inglés", "English"]

export default function LanguageSelection() {
  const { setLanguage, languageIndex }= useLanguage()
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function closeDropdown(e: MouseEvent) {
      if (dropdownIsOpen && dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownIsOpen(false)
      }
    }
    document.addEventListener("mousedown", closeDropdown)
    return () => {
      document.removeEventListener("mousedown", closeDropdown)
    }
  }, [dropdownIsOpen])
  
  const openDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen)
  }

  return (
    <button 
      onClick={openDropdown} 
      className={clsx("md:absolute left-0 m-0 md:m-2 flex justify-center md:justify-start border dark:border-slate-600 rounded-lg shadow-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors duration-200 ease-in-out")}
    >
      <Languages className="m-2" />
      <AnimatePresence>
        {dropdownIsOpen && (
          <motion.div 
            ref={dropdownRef}
            className="absolute shadow-lg flex flex-col rounded-lg bg-slate-200 dark:bg-slate-700 dark:slate-700 w-28 overflow-hidden"
            initial={{ opacity: 0, top: "90%" }}
            animate={{ opacity: 1, top: "115%" }}
            exit={{ opacity: 0, top: "90%" }}
          >
            <button 
              className={clsx("py-3 transition-colors duration-300 ease-in-out hover:bg-slate-300/40 hover:dark:bg-slate-600/40", languageIndex === 0 ? "text-blue-600 dark:text-blue-400" : "text-slate-800 dark:text-slate-100")} 
              onClick={() => setLanguage("es")} 
            >
              {spanish[languageIndex]}
            </button>

            <button 
              className={clsx("py-3 transition-colors duration-300 ease-in-out hover:bg-slate-300/40 hover:dark:bg-slate-600/40", languageIndex === 1 ? "text-blue-600 dark:text-blue-400" : "text-slate-800 dark:text-slate-100")} 
              onClick={() => setLanguage("en")} 
            >
              {english[languageIndex]}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}
