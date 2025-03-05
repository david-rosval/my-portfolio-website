import Clerk from "../svg/Clerk";
import Expressjs from "../svg/Express";
import MongoDB from "../svg/MongoDB";
import Motion from "../svg/Motion";
import MySQL from "../svg/MySQL";
import Nextjs from "../svg/Nextjs";
import Prisma from "../svg/Prisma";
import React from "../svg/React";
import Remix from "../svg/Remix";
import Shadcnui from "../svg/Shadcnui";
import SocketIo from "../svg/Socketio";
import TailwindCSS from "../svg/Tailwind";

export default function TechIcon ({tech}: {tech:string})  {
  switch(tech) {
    case "React":
      return <React className="size-5" />
    case "Nextjs":
      return <Nextjs className="size-5" />
    case "Remix":
      return <Remix className="size-5" />
    case "Tailwind":
      return <TailwindCSS className="size-5" />
    case "ShadcnUi":
      return <Shadcnui className="size-5" />
    case "Expressjs":
      return <Expressjs className="size-5" />
    case "Socket.io":
      return <SocketIo className="size-5" />
    case "MongoDB":
      return <MongoDB className="size-5" />
    case "Motion":
      return <Motion className="size-5" />
    case "MySQL":
      return <MySQL className="size-5" />
    case "Prisma":
      return <Prisma className="size-5" />
    case "Clerk":
      return <Clerk className="size-5" />
    default:
      return null
  }
}