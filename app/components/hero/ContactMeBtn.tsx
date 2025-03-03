import { Link } from "@remix-run/react"
import { AnimatePresence, motion } from "motion/react"
import { SetStateAction, useEffect, useRef, useState } from "react"
import LinkedIn from "../svg/LinkedIn"
import Gmail from "../svg/Gmail"
import { SendHorizonal } from "lucide-react"
import clsx from "clsx"

const contactMe = ["Escríbeme", "Get in Touch"]

const contactMeLinks = [
  { platform: "linkedin", to: "http://www.linkedin.com/in/david-rosado-valerio-20b414281" },
  { platform: "gmail", to: "mailto:rosadovalerio.d@gmail.com" },
]

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
      className="mb-10 relative flex items-center "
      initial={{ opacity: 0, scale: 0}}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.3}}}
    >
      <motion.button 
        className={clsx("border dark:border-gray-600 py-[3vw] lg:py-[16px] px-[6vw] lg:px-[32px] rounded-lg shadow-lg text-[4vw] lg:text-[21.3px] flex gap-[4vw] lg:gap-[21.3px]  items-center transition-colors duration-300 ease-in-out")}
        onClick={() => setClicked(!clicked)}
        whileTap={{ scale: 0.98 }}
        layout
      >
        {contactMe[languageIndex]}
        <MotionSendHorizonal 
          className="inline-block size-[5vw] lg:size-[26.6px] stroke-gray-800 dark:stroke-white" 
          animate={{ rotate: clicked ? "-45deg" : 0, stroke: clicked ? "#60a5fa" : "" }}
        />
      </motion.button>
      {contactMeLinks.map((contactMeLink, index) => (
        <ContactMeLink key={index} contactMeLink={contactMeLink} clicked={clicked} setClicked={setClicked} />
      ))}
    </motion.div>
  )
}


const ContactMeLink = ({ 
  contactMeLink, 
  clicked,
  setClicked
} : { 
  contactMeLink: { platform: string, to: string }, 
  clicked: boolean,
  setClicked: React.Dispatch<SetStateAction<boolean>>

}) => {
  return (
    <AnimatePresence>
      {clicked && (
        <motion.div 
          className="flex justify-end items-center dark:border-gray-600  rounded-r-full" 
          initial={{ width: 0, height: 0, opacity: 0, scale: 0}}
          animate={{ width: "auto", height: "auto", opacity: 1, scale: 1}}
          exit={{ width: 0, height: 0, opacity: 0, scale: 0 }}
        >
          <MotionLink 
            to={contactMeLink.to} 
            rel="noreferrer" 
            target="_blank"
            className=" flex justify-center items-center size-[11.5vw] lg:size-[61.3px] rounded-full border shadow-lg dark:border-gray-600 ml-[2.5vw] lg:ml-[13.3px] relative"
            whileHover={{ top: -5 }}
            whileTap={{ top: -1 }}
            onClick={() => setClicked(false)}
          >
            {contactMeLink.platform === "linkedin" && <LinkedIn className="size-[5.5vw] lg:size-[29.3px]" />}
            {contactMeLink.platform === "gmail" && <Gmail className="size-[5.5vw] lg:size-[29.3px]" />}
          </MotionLink>
        </motion.div>
      )}
    </AnimatePresence>
  )
}