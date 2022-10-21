import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Image from '../Image/Image'

function LandingPageNavMenu({ className }) {
  const sideMenu = document.querySelector('.nav-side-menu')
  const toggleSideMenu = () => {
    sideMenu.classList.toggle('show-nav-menu')
  }

  return (
    <div className={className}>
      <button type="button" onClick={() => toggleSideMenu()}>
        Close
      </button>
      <Image imageUrl="" alt="Global Player logo" className="logo-mobile" />
      <NavLink to="/Plans" className="header-link">
        Login
      </NavLink>
      <NavLink to="/Login" className="header-link">
        Plans
      </NavLink>
    </div>
  )
}

export default LandingPageNavMenu

LandingPageNavMenu.defaultProps = {
  className: '',
}

LandingPageNavMenu.propTypes = {
  className: PropTypes.string,
}
