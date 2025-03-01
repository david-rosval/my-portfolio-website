import AboutMe from "./components/aboutme/AboutMe"
import Hero from "./components/hero/Hero"
import Projects from "./components/projects/Projects"


function App() {

  return (
    <>
      <div className="bg-gradient-to-b from-palette-2 to-palette-1">
        <div className="max-w-[1300px] mx-auto">
          <Hero />
        </div>
      </div>
      <div className="bg-palette-1">
        <div className="max-w-[1200px] mx-auto">
          <Projects />
          <AboutMe />
        </div>
      </div>
    </>
  )
}

export default App
