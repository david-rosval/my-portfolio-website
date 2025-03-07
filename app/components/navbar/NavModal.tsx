import { AnimatePresence, motion } from "motion/react"
import { Link } from "@remix-run/react"
import { BookOpenText, Laugh, Menu, MessageSquareText, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { navBarLinks } from "../../consts"
import useLanguage from "~/hooks/useLanguage"

const MotionMenu = motion.create(Menu)
const MotionX = motion.create(X)

const iconsAnims = {
  initial: {
    opacity: 0,
    scale: 0.7
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  exit: {
    opacity: 0,
    scale: 0.7
  },
}

export default function NavModal() {
  const [modal, setModal] = useState(false)

  return (
    <>
      <button 
        className="border rounded-lg bg-slate-100 dark:border-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors duration-200 ease-in-out p-2 flex md:hidden justify-center shadow-md"
        onMouseDown={() => setModal(!modal)}
      >
        <AnimatePresence mode="wait">
          {!modal ? (
            <MotionMenu variants={iconsAnims} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} />
          ) : (
            <MotionX variants={iconsAnims} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} />
          )}
        </AnimatePresence>
      </button>
      <AnimatePresence>
        {modal && (
          <MenuDialog modal={modal} setModal={setModal} />
        )}
      </AnimatePresence>
    </>
  )
}

const MenuDialog = ({ modal, setModal }: { modal: boolean, setModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { languageIndex } = useLanguage()
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function closeWhenClickOutside(e: MouseEvent) {
      if (modal && dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        setModal(false)
      }
    }
    document.addEventListener("mousedown", closeWhenClickOutside)
    return () => {
      document.removeEventListener("mousedown", closeWhenClickOutside)
    }
  }, [modal, setModal])
  
  return (
      <motion.nav 
        className="absolute md:hidden top-0 rounded-lg mt-4 flex flex-col z-30 bg-red-500  overflow-hidden" 
        ref={dialogRef}
        initial={{ opacity: 0, top: "60%" }}
        animate={{ opacity: 1, top: "80%" }}
        exit={{ opacity: 0, top: "60%" }}
        transition={{ duration: 0.3 }}
      >
        {navBarLinks.map((navBarLink) => (
          <motion.button
            key={navBarLink.name[1]}
            whileTap={{ scale: 0.9 }}
            onAnimationComplete={() => setModal(false)}
          >
            <Link 
              to={navBarLink.to}
              className="flex flex-col gap-2 items-center p-2 bg-slate-200 dark:bg-slate-700"
            >
              <NavLinkIcon navBarLink={navBarLink.name[1]} />
              <span className="text-wrap leading-none">
                {navBarLink.name[languageIndex]}
              </span>
            </Link>
          </motion.button>
        ))}
      </motion.nav>
  )
}

const NavLinkIcon = ({ navBarLink }: { navBarLink: string }) => {
  switch (navBarLink) {
    case "About me":
      return <Laugh className="size-8 stroke-slate-700 dark:stroke-slate-300" />
    case "Portfolio": 
      return <BookOpenText className="size-8 stroke-slate-700 dark:stroke-slate-300" />
    case "Get in touch":
      return <MessageSquareText className="size-8 stroke-slate-700 dark:stroke-slate-300" />
    default:
      return null
  }
}