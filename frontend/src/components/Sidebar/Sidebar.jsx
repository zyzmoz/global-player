import { NavLink } from 'react-router-dom'
import Image from '../Image/Image'
import { DashboardIcon, VectorIcon, CompareIcon, Group15Icon } from '../Icon/icons'
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
        <NavLink to="/topplayers" className="sidebar-link">
          <DashboardIcon stroke={Colors.primaryColorBrightGreen} />
          <span className="visually-hidden">Dashboard</span>
        </NavLink>
        <NavLink to="/Favorites" className="sidebar-link">
          <VectorIcon stroke={Colors.primaryColorBrightGreen} />
          <span className="visually-hidden">Favorites</span>
        </NavLink>
        <NavLink to="/Compare" className="sidebar-link">
          <CompareIcon fill={Colors.primaryColorBrightGreen} />
          <span className="visually-hidden">Compare</span>
        </NavLink>

        <NavLink to="/Help" className="sidebar-link">
          <Group15Icon stroke={Colors.primaryColorBrightGreen} />
          <span className="visually-hidden">Help</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
