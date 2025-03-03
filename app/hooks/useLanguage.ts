import { useContext } from "react"
import { LanguageContext } from "../components/providers/LanguageProvider"

export default function useLanguage() {
  const languageContext = useContext(LanguageContext)
  if (!languageContext) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return languageContext
}
