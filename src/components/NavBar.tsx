export default function NavBar() {
  return (
    <nav className="flex w-full fixed left-0 z-10 py-5">
      <ul className="flex mx-auto  gap-10 text-white text-lg font-semibold">
        <li className="">
          <a href="">Experiencia</a>
        </li>
        <li className="">
          <a href="">Proyectos</a>
        </li>
        <li className="">
          <a href="">Sobre mí</a>
        </li>
        <li className="">
          <a href="">Contacto</a>
        </li>
      </ul>
    </nav>
  )
}

