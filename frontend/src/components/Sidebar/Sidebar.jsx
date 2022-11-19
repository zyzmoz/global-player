import { NavLink } from 'react-router-dom'
import Image from '../Image/Image'
import { DashboardIcon, HeartIcon, CompareIcon, HelpIcon } from '../Icon/icons'
import Colors from '../../sass/variables/_colors.scss'

function Sidebar() {
  const smallLogo = './logos/smallLogo.png'

  return (
    <div className="sidebar">
      <div className="logo">
        <NavLink to="/">
          <Image imageUrl={smallLogo} alt="Global Player logo" className="logo-sidebar" imageWidth="76px" />
        </NavLink>
      </div>
      <div className="sidebar-menu">
        <NavLink to="/TopPlayers" className="sidebar-link">
          <div className="icon-wrapper">
            <DashboardIcon stroke={Colors.primaryColorBrightGreen} />
          </div>
          <span className="visually-hidden">Dashboard</span>
        </NavLink>
        <NavLink to="/favorites" className="sidebar-link">
          <HeartIcon stroke={Colors.primaryColorBrightGreen} />
          <span className="visually-hidden">Favorites</span>
        </NavLink>
        <NavLink to="/comparison" className="sidebar-link">
          <CompareIcon fill={Colors.primaryColorBrightGreen} />
          <span className="visually-hidden">Compare</span>
        </NavLink>

        <NavLink to="/help" className="sidebar-link">
          <HelpIcon stroke={Colors.primaryColorBrightGreen} />
          <span className="visually-hidden">Help</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
