import { NavLink } from 'react-router-dom'
import Image from '../Image/Image'
import LandingPageNavMenu from './LandingPageNavMenu'
import { MenuIcon } from '../Icon/icons'

function Header() {
  const toggleSideMenu = () => {
    const sideMenu = document.querySelector('.nav-side-menu')
    sideMenu.classList.toggle('show-nav-menu')
  }

  const smallLogo = './logos/smallLogo.png'
  const logoType = './logos/logoType.png'

  return (
    <header className="main-header">
      <NavLink to="/">
        <Image imageUrl={logoType} alt="Global Player logo" className="logo-desktop" />
        <Image imageUrl={smallLogo} alt="Global Player logo" className="logo-mobile" imageWidth="33px" />
      </NavLink>
      <button type="button" className="side-button" onClick={() => toggleSideMenu()}>
        <MenuIcon fill="#7DFAA4" stroke="#7DFAA4" />
      </button>
      <LandingPageNavMenu className="nav-header-menu" />
    </header>
  )
}

export default Header
