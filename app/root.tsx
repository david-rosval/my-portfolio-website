import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";

import "./tailwind.css";
import { ClienHintCheck, getHints } from "./utils/client-hints";
import { getTheme, Theme } from "./utils/theme.server";
import { useTheme } from "./routes/resources.theme-switch";
import NavBar from "./components/navbar/NavBar";
import LanguageProvider from "./components/providers/LanguageProvider";

export const links: LinksFunction = () => [
  {
    rel: "icon",
    href: "/moon-face.svg",
    type: "image/svg",
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap",
  },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return {
    requestInfo: {
      hints: getHints(request),
      userPrefs: {
        theme: await getTheme(request)
      }
    }
  }
}

function Document({ children, theme = "light"  } : { children: React.ReactNode, theme?: Theme }) {
  return (
    <html lang="en" className={theme}>
      <head>
        <ClienHintCheck />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  const theme = useTheme()

  return (
    <Document theme={theme}>
      <LanguageProvider>
        <NavBar />
        <Outlet />
      </LanguageProvider>
    </Document>

  )
}