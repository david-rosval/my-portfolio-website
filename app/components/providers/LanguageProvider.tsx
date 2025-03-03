import { createContext, Dispatch, SetStateAction, useState } from "react"

type LanguageContextType = {
  language: "en" | "es"
  setLanguage: Dispatch<SetStateAction<"en" | "es">>
}

export const LanguageContext = createContext<LanguageContextType>({ language: "es", setLanguage: () => {} })


export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<"en" | "es">("es")
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
