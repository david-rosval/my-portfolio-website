import type { MetaFunction } from "@remix-run/node";
import HeroAlter from "~/components/hero/HeroAlter";
import Portfolio from "~/components/portfolio/Portfolio";
import InitialAnimationProvider from "~/components/providers/InitialAnimationProvider";
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
    <InitialAnimationProvider>
      <div className="w-full h-full px-8  max-w-[1200px] mx-auto">
        <HeroAlter />
        <Portfolio />
      </div>
    </InitialAnimationProvider>
  )
}

export default Index
