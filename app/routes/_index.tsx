import type { MetaFunction } from "@remix-run/node";
import HeroAlter from "~/components/hero/HeroAlter";
/* import AboutMe from "~/components/aboutme/AboutMe";
import Hero from "~/components/hero/Hero";
import Projects from "~/components/projects/Projects"; */

export const meta: MetaFunction = () => {
  return [
    { title: "David Rosado Valerio" },
    { name: "description", content: "Welcome to my Portfolio!" },
  ];
};

function Index() {
  return (
    <div className="w-full h-full">
      <HeroAlter />
    </div>
    /* <div className="bg-gradient-to-b from-palette-2 to-palette-1">
      <div className="max-w-[1300px] mx-auto">
        <Hero />
        <p className="text-red-700 dark:text-yellow-300">probando</p>
      </div>
    </div>
    <div className="bg-palette-1">
      <div className="max-w-[1200px] mx-auto">
        <Projects />
        <AboutMe />
      </div>
    </div> */
  )
}

export default Index
