import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="NavBar" style={{padding:"20px",display:"flex",gap:"10px"}}>
        <Link to="/">Home</Link>
        <Link to="/news">Noticias</Link>
        <Link to="/newnews">Crear articulo</Link>
    </nav>
  )
}

export default NavBar