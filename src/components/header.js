import React, {useState} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/logo.svg"
import iconMenu from "../images/iconMenu.svg"
import iconClose from "../images/iconClose.svg"

const Header = () =>{ 
  const [MenuChanged, setMenuChanged] = useState(false)
return(
  <>
  <header>
    <div>
    <img 
    src={logo} alt='Logo'/>
    <img 
    className='MenuIcon'
    onClick={()=> setMenuChanged(!MenuChanged)}
    src={MenuChanged? iconClose :iconMenu} 
    alt='Menu'/>
    <nav className='HeaderNav'>
      <Link>Home</Link>
      <Link>About</Link>
      <Link>Contact</Link>
      <Link>Blog</Link>
      <Link>Carrers</Link>
    </nav>
    <button className='ButtonStyle'>Request Invite</button>
    </div>
  </header>
  <div className={MenuChanged ?'MenuMovil Open' :'MenuMovil'}> 
  <div>
    <Link>Home</Link>
    <Link>About</Link>
    <Link>Contact</Link>
    <Link>Blog</Link>
    <Link>Carrers</Link>
    </div>
  </div>
  </>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
