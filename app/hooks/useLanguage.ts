import { useContext } from "react"
import { LanguageContext } from "../components/providers/LanguageProvider"

export default function useLanguage() {
  const languageContext = useContext(LanguageContext)
  if (!languageContext) {
    throw new Error("useLanguage must be used inside a LanguageProvider");
  }
  const languageIndex = languageContext.language === "en" ? 1 : 0
  return { ...languageContext, languageIndex }
}
