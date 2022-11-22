import { NavLink } from 'react-router-dom'
import Image from '../Image/Image'

function Footer() {
  const smallLogo = './logos/smallLogo.png'
  const logoType = './logos/logoType.png'

  return (
    <footer>
      <Image imageUrl={logoType} alt="Global Player logo" className="footer-mobile-logo" imageWidth="210px" />
      <Image imageUrl={smallLogo} alt="Global Player logo" className="footer-desktop-logo" imageWidth="73px" />

      <div className="nav-links-footer">
        <NavLink to="/contact-us" className="footer-link">
          Contact Us
        </NavLink>
        <NavLink to="/FAQ" className="footer-link">
          FAQ
        </NavLink>
        <NavLink to="/Terms" className="footer-link">
          Terms
        </NavLink>
      </div>
    </footer>
  )
}

export default Footer
