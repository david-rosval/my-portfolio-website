import { createContext, SetStateAction, useState } from "react"

type InitialAnimationContextType = {
  animationIsCompleted: boolean
  setAnimationIsCompleted: React.Dispatch<SetStateAction<boolean>>
}

export const InitialAnimationContext = createContext<InitialAnimationContextType>({ 
  animationIsCompleted: false,
  setAnimationIsCompleted: () => {}
})

export default function InitialAnimationProvider({ children }: { children: React.ReactNode }) {
  const [animationIsCompleted, setAnimationIsCompleted] = useState(false)

  return (
    <InitialAnimationContext.Provider
      value={{ animationIsCompleted, setAnimationIsCompleted }}
    >
      {children}
    </InitialAnimationContext.Provider>
  )
}
