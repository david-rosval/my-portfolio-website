import { Link } from "@remix-run/react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import LinkedIn from "../svg/LinkedIn"
import Gmail from "../svg/Gmail"
import { SendHorizonal } from "lucide-react"

const contactMe = ["Contáctame", "Get in Touch"]

const MotionLink = motion.create(Link)
const MotionSendHorizonal = motion.create(SendHorizonal)

export default function ContactMeBtn({ languageIndex }: { languageIndex: 0 | 1 }) {
  const [clicked, setClicked] = useState(false)
  const contactBtnRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const closeSocials = (e: MouseEvent) => {
      if (clicked && contactBtnRef.current && !contactBtnRef.current.contains(e.target as Node)) { 
        // if the button has been clicked and openned, the button is rendered and the click was not made inside the button
        setClicked(false)
      }
    }

    document.addEventListener("mousedown", closeSocials)

    return () => {
      document.removeEventListener("mousedown", closeSocials)
    }
  }, [clicked, setClicked])
  

  return (
    <motion.div 
      ref={contactBtnRef}
      className="mb-10 relative flex items-center"
    >
      <motion.button 
        className="border dark:border-gray-600 py-[3vw] px-[6vw] rounded-lg shadow-lg text-[4vw] flex gap-[4vw] items-center"
        onClick={() => setClicked(!clicked)}
        layout
      >
        {contactMe[languageIndex]}
        <MotionSendHorizonal 
          className="inline-block size-[5vw]" 
          animate={{ rotate: clicked ? "-45deg" : 0, stroke: clicked ? "#60a5fa" : "#1f2937" }}
        />
      </motion.button>
      <AnimatePresence>
        {clicked && (
          <motion.div 
            className="flex justify-end items-center dark:border-gray-600  rounded-r-full" 
            initial={{ width: 0, height: 0, opacity: 0, scale: 0}}
            animate={{ width: "14vw", height: "11.5vw", opacity: 1, scale: 1}}
            exit={{ width: 0, height: 0, opacity: 0, scale: 0 }}
          >
            <MotionLink 
              to={"http://www.linkedin.com/in/david-rosado-valerio-20b414281"} 
              rel="noreferrer" 
              target="_blank"
              className="flex justify-center items-center size-[11.5vw] shadow-lg rounded-full dark:border-gray-600 border ml-[2.5vw]"
            >
              <LinkedIn className="size-[5.5vw]" />
            </MotionLink>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {clicked && (
          <motion.div 
            className="flex justify-end items-center dark:border-gray-600  rounded-r-full" 
            initial={{ width: 0, height: 0, opacity: 0, scale: 0}}
            animate={{ width: "14vw", height: "11.5vw", opacity: 1, scale: 1}}
            exit={{ width: 0, height: 0, opacity: 0, scale: 0 }}
          >
            <MotionLink 
              to={"http://www.linkedin.com/in/david-rosado-valerio-20b414281"} 
              rel="noreferrer" 
              target="_blank"
              className=" flex justify-center items-center size-[11.5vw] rounded-full border shadow-lg dark:border-gray-600 ml-[2.5vw]"
            >
              <Gmail className="size-[5.5vw] stroke-gray-600" />
            </MotionLink>
          </motion.div>
        )}
      </AnimatePresence>
        
    </motion.div>
  )
}
