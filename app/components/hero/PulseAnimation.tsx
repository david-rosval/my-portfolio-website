import clsx from "clsx"
//import {motion} from "motion/react"
import { useEffect, useState } from "react"

const bg = [
  "bg-transparent",
  "bg-blue-50",
  "bg-blue-100",
  "bg-blue-200",
  "bg-blue-300",
  "bg-blue-400",
  "bg-blue-500",
  "bg-blue-600",
  "bg-blue-700",
]


export default function PulseAnimation() {

  const [backGrounds, setBackGrounds] = useState(bg)

  useEffect(() => {
    const changeBg = () => {
      const lastBg = backGrounds[backGrounds.length - 1]
      const lastBgDeleted = backGrounds.filter((_bg, index) => index !== backGrounds.length-1)
      const newBgs = [lastBg, ...lastBgDeleted]
      setBackGrounds(newBgs)
    }

    const timeout = setTimeout(() => {
      changeBg()
    }, 100)
    
    
    return () => clearTimeout(timeout)
  }, [backGrounds])
  

  return (
    <div className="flex justify-center items-center absolute opacity-30">
      <div className={clsx("rounded-full size-[50vw] absolute", backGrounds[8])} />
      <div className={clsx("rounded-full size-[45vw] absolute", backGrounds[7])} />
      <div className={clsx("rounded-full size-[40vw] absolute", backGrounds[6])} />
      <div className={clsx("rounded-full size-[35vw] absolute", backGrounds[5])} />
      <div className={clsx("rounded-full size-[30vw] absolute", backGrounds[4])} />
      <div className={clsx("rounded-full size-[25vw] absolute", backGrounds[3])} />
      <div className={clsx("rounded-full size-[20vw] absolute", backGrounds[2])} />
      <div className={clsx("rounded-full size-[15vw] absolute", backGrounds[1])} />
      <div className={clsx("rounded-full size-[10vw] absolute", backGrounds[0])} />      
    </div>
  )
}
