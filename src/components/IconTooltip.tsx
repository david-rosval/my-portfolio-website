import React, { useState } from 'react'
import { motion } from "motion/react"


export default function IconTooltip({children, text}: {children: React.ReactNode, text: string}) {
  const [iconHover, setIconHover] = useState(false)
  return (
    <div
      className='relative flex items-center justify-center'
      onMouseEnter={() => setIconHover(true)}
      onMouseLeave={() => setIconHover(false)}
    >
      <motion.div
        whileHover={{
          scale: 1.2
        }}
      >
        {children}
      </motion.div>
      <motion.div
        animate={{ 
          scale: iconHover ? 1 : 0,
          transition: {
            delay: 0.2,
          }
        }}
        className='absolute bg-black/20 text-white px-2 rounded-lg -top-7 text-center text-sm shadow-sm'
      >
        {text}
      </motion.div>
    </div>
  )
}
