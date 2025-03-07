import { data, useFetcher } from "@remix-run/react";
import { useHints } from "../utils/client-hints"
import { ActionFunctionArgs } from "@remix-run/node";
import { useRequestInfo } from "../utils/request-info";
import { setTheme } from "../utils/theme.server";
import { LaptopMinimal, Moon, Sun } from "lucide-react";
import clsx from "clsx";


export function useTheme() {
  const hints = useHints();
  const requestInfo = useRequestInfo()
  return requestInfo.userPrefs.theme as "light" | "dark" ?? hints.theme
}

// ACTION
export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const theme = formData.get("theme") as "light" | "dark" | "system"
  console.log("formData:",theme)

  const cookie = await setTheme(theme)
  console.log(cookie)

  return data(
    { result: theme },
    { headers: { "Set-Cookie": cookie }}
  )

}

export function ThemeSwitch({ 
  userPreference,
  className
}: { 
  userPreference?: "light" | "dark" | null 
  className?: string
}) {
  const fetcher = useFetcher()
  const mode = userPreference ?? "system"

  const nextMode = 
  mode === "system" 
    ? "light" 
    : mode === "light" 
      ? "dark" 
      : "system"

  const modeLabel = {
    light: (
      <Sun />
    ),
    dark: (
      <Moon />
    ),
    system: (
      <LaptopMinimal />
    )
  }

  return (
    <fetcher.Form method="post" action="/resources/theme-switch">
      <input type="hidden" name="theme" value={nextMode} />
      <button type="submit" className={clsx("p-2", className)}>
        {modeLabel[mode]}
      </button>
    </fetcher.Form>
  )
}