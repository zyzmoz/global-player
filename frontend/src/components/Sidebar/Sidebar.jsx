import { NavLink } from 'react-router-dom'
import Image from '../Image/Image'
import { DashboardIcon, VectorIcon, CompareIcon, Group15Icon } from '../Icon/icons'

function Sidebar() {
  const smallLogo = './logos/smallLogo.png'

  return (
    <div className="sidebar">
      <div className="logo">
        <NavLink to="/">
          <Image imageUrl={smallLogo} alt="Global Player logo" className="logo-mobile" imageWidth="33px" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/Dashboard" className="sidebar-link">
          <DashboardIcon />
          <span className="visually-hidden">Dashboard</span>
        </NavLink>
        <NavLink to="/Favorites" className="sidebar-link">
          <VectorIcon />
          <span className="visually-hidden">Favorites</span>
        </NavLink>
        <NavLink to="/Compare" className="sidebar-link">
          <CompareIcon />
          <span className="visually-hidden">Compare</span>
        </NavLink>
        <NavLink to="/Help" className="sidebar-link">
          <Group15Icon />
          <span className="visually-hidden">Help</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
