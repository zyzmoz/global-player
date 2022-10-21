import { NavLink } from 'react-router-dom'
import Image from '../Image/Image'
import LandingPageNavMenu from './LandingPageNavMenu'

function Header() {
  const toggleSideMenu = () => {
    const sideMenu = document.querySelector('.nav-side-menu')
    sideMenu.classList.toggle('show-nav-menu')
  }

  return (
    <header>
      <div className="main-footer">
        <NavLink to="/">
          <Image imageUrl="" alt="Global Player logo" className="logo-desktop" />
          <Image imageUrl="" alt="Global Player logo" className="logo-mobile" />
        </NavLink>
        <button type="button" className="side-button" onClick={() => toggleSideMenu()}>
          Add the side button
        </button>
        <LandingPageNavMenu className="nav-header-menu" />
      </div>
    </header>
  )
}

export default Header
