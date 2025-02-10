import ContactMeButton from './ContactMeButton'
import ProfilePhoto from './ProfilePhoto'
import { motion } from "motion/react"

export default function Hero() {
  return (
    <div className='bg-gradient-to-b from-palette-3 to-palette-1 h-dvh flex justify-center lg:items-center lg:p-0 p-5 pt-16'>
      <div className='flex flex-col lg:flex-row gap-8 items-center'>
        <ProfilePhoto />
        <motion.div
          initial={{
            opacity: 0,
            x: 40
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              ease: 'easeInOut', 
              delay: 0.3
            }
          }}
          className='flex flex-col gap-8 justify-center'
        >
          <h1 className='text-center lg:text-left flex flex-col items-center lg:items-start'>
            <p className='text-white text-4xl'>Hola, <span className='text-palette-4'>soy</span></p>
            <p className='text-palette-4 lg:text-7xl text-5xl font-bold lg:mt-2 mt-3'>David Rosado Valerio</p>
            <p className='text-white text-3xl lg:pt-5 pt-14 lg:w-full w-48'>Desarrollador Web Full Stack</p>
          </h1>
          <div className='flex justify-center lg:justify-start'>
            <ContactMeButton />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
