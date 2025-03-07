
import { useFetcher } from "@remix-run/react";
// import { ThemeSwitch } from "../../routes/resources.theme-switch";
import { useRequestInfo } from "../../utils/request-info";
import { LaptopMinimal, Moon, Sun } from "lucide-react";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import useLanguage from "../../hooks/useLanguage";

const themes = [
  ["claro", "light"],
  ["oscuro", "dark"],
  ["sistema", "system"],
]

export default function ThemeSelection() {
  const { userPrefs } = useRequestInfo()
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { languageIndex } = useLanguage()
  const fetcher = useFetcher()

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
  
  const mode: "light" | "dark" | "system" = userPrefs.theme ?? "system"

  const modeLabel = {
    light: (
      <Sun className="m-2" />
    ),
    dark: (
      <Moon className="m-2" />
    ),
    system: (
      <LaptopMinimal className="m-2" />
    )
  }

  const openDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen)
  }
  
  return (
    <button 
      onClick={openDropdown} 
      className={clsx("md:absolute right-0 m-0 md:m-2 flex justify-center md:justify-end border dark:border-slate-600 rounded-lg shadow-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors duration-200 ease-in-out")}
    >
      {modeLabel[mode]}
      <AnimatePresence>
        {dropdownIsOpen && (
          <motion.div 
            ref={dropdownRef}
            className="absolute shadow-lg flex flex-col rounded-lg bg-slate-200 dark:bg-slate-700 dark:slate-700 w-28 overflow-hidden"
            initial={{ opacity: 0, top: "90%" }}
            animate={{ opacity: 1, top: "115%" }}
            exit={{ opacity: 0, top: "90%" }}
          >
            {themes.map((theme, index) => (
              <fetcher.Form key={index} method="post" action="/resources/theme-switch" className="py-3 transition-colors duration-300 ease-in-out hover:bg-slate-300/40 hover:dark:bg-slate-600/40">
                <input type="hidden" name="theme" value={theme[1]} />
                <button   
                  type="submit"
                  className={clsx(" capitalize", theme[1] === mode ? "text-blue-600 dark:text-blue-400" : "text-slate-800 dark:text-slate-100")} 
                >
                  {theme[languageIndex]}
                </button>
              </fetcher.Form>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

