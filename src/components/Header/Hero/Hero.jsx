import {Link} from 'react-router-dom'
import './Hero.scss'

const Hero = () => {
  return (
    <div className="Hero">
        <Link to='/'>
          <div>
            <p>{"{"}<span>s</span>{"}"}</p>
          </div>    
        </Link>
    </div>
  )
}

export default Hero