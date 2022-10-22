import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Image from '../Image/Image'
import { CrossIcon } from '../Icon/icons'

function LandingPageNavMenu({ className }) {
  const toggleSideMenu = () => {
    const sideMenu = document.querySelector('.nav-side-menu')
    sideMenu.classList.toggle('show-nav-menu')
  }

  const smallLogo = './logos/smallLogo.png'

  return (
    <div className={className}>
      <div className="top-nav-side-menu">
        <button type="button" onClick={() => toggleSideMenu()}>
          <CrossIcon fill="#7DFAA4" stroke="#7DFAA4" />
        </button>
        <Image imageUrl={smallLogo} alt="Global Player logo" className="logo-mobile" imageWidth="42.14px" />
      </div>
      <NavLink to="/Plans" className="header-link">
        Plans
      </NavLink>
      <NavLink to="/Login" className="header-link">
        Login
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
