import {Link} from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className='NabBar__container'>
      <nav className="NavBar" >
          <Link to="/" className='NavBar__item'>Home</Link>
          <Link to="/news" className='NavBar__item'>News</Link>
          <Link to="/newnews" className='NavBar__item'>Write</Link>
      </nav>
    </div>
  )
}

export default NavBar