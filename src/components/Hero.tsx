import ContactMeButton from './ContactMeButton'
import ProfilePhoto from './ProfilePhoto'
import { motion } from "motion/react"
import SlideAnimated from './SlideAnimated'

export default function Hero() {
  return (
    <div className='bg-gradient-to-b from-palette-2 to-palette-1 h-dvh flex justify-center md:items-center md:p-0 p-5 pt-10 relative'>
      <div className='flex flex-col lg:flex-row gap-8 items-center'>
        <ProfilePhoto />
        <div
          
          className='flex flex-col gap-8 justify-center'
        >
          <h1 className='text-center lg:text-left flex flex-col items-center lg:items-start'>
            <motion.p 
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4 }
              }}
              className='text-white text-4xl'>Hola, <span className='text-palette-4'
            >soy</span></motion.p>
            <motion.p 
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6 }
              }}
              className='text-palette-4 lg:text-7xl text-5xl font-bold lg:mt-2 mt-3'
            >David Rosado Valerio</motion.p>
            <motion.p 
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { 
                  delay: 0.8
                }
              }}
              className='text-white text-3xl lg:pt-5 pt-14 lg:w-full w-48'
            >Desarrollador Web Full Stack</motion.p>
          </h1>
          <div className='flex justify-center lg:justify-start'>
            <ContactMeButton />
          </div>
        </div>
      </div>
      <SlideAnimated />
    </div>
  )
}
