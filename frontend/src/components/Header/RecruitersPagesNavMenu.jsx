import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Image from '../Image/Image'
import { CrossIcon } from '../Icon/icons'
import Colors from '../../sass/variables/_colors.scss'

function RecruitersPagesNavMenu({ className }) {
  const toggleSideMenu = () => {
    const sideMenu = document.querySelector('.nav-side-menu')
    sideMenu.classList.toggle('show-nav-menu')
  }

  const smallLogo = './logos/smallLogo.png'

  return (
    <div className={className}>
      <div className="top-nav-side-menu">
        <button type="button" onClick={() => toggleSideMenu()}>
          <CrossIcon fill={Colors.primaryColorBrightGreen} stroke={Colors.primaryColorBrightGreen} />
        </button>
        <Image imageUrl={smallLogo} alt="Global Player logo" className="logo-mobile" imageWidth="42.14px" />
      </div>
      <NavLink to="/TopPlayers" className="sidebar-link">
        Dashboard
      </NavLink>
      <NavLink to="/favorites" className="sidebar-link">
        Favorites
      </NavLink>
      <NavLink to="/player-comparison-select-page" className="sidebar-link">
        Compare
      </NavLink>
      <NavLink to="/help" className="sidebar-link">
        Help
      </NavLink>
    </div>
  )
}

export default RecruitersPagesNavMenu

RecruitersPagesNavMenu.defaultProps = {
  className: '',
}

RecruitersPagesNavMenu.propTypes = {
  className: PropTypes.string,
}
