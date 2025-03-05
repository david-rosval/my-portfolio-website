import { AnimatePresence, motion } from "motion/react"
import { Link } from "@remix-run/react"
import { BookOpenText, Laugh, Menu, MessageSquareText, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { navBarLinks } from "../../consts"

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
        className="border rounded-lg dark:border-slate-600 hover:bg-slate-500/5 transition-colors duration-200 ease-in-out p-2 flex md:hidden justify-center shadow-md"
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
        className="absolute md:hidden top-0 w-full rounded-xl p-4 grid grid-cols-3 gap-2 z-30" 
        ref={dialogRef}
        initial={{ opacity: 0, top: "60%" }}
        animate={{ opacity: 1, top: "80%" }}
        exit={{ opacity: 0, top: "60%" }}
        transition={{
          duration: 0.3
        }}
      >
        {navBarLinks.map((navBarLink) => (
          <motion.button
            key={navBarLink.name[1]}
            whileTap={{
              scale: 0.9
            }}
            onAnimationComplete={() => setModal(false)}
          >
            <Link 
              to={navBarLink.to}
              className="text-xs flex flex-col gap-1 items-center border dark:border-slate-500 rounded-xl p-2 shadow-md bg-white dark:bg-slate-800"
            >
              <NavLinkIcon navBarLink={navBarLink.name[1]} />
              <span className="text-wrap">
                {navBarLink.name[0]}
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