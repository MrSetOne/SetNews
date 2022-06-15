import Hero from "./Hero/Hero"
import NavBar from "./NavBar/NavBar"

const Header = () => {
  return (
    <header className="Header">
        <Hero/>
        <NavBar/>
    </header>
  )
}

export default Header