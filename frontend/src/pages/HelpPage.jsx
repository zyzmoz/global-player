import { useNavigate, NavLink } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import { CrossIcon } from '../components/Icon/icons'
import Colors from '../sass/variables/_colors.scss'
import ProfilePopUp from '../components/ProfilePopUp/ProfilePopUp'
import Headline from '../components/Headline/Headline'
import BodyText from '../components/BodyText/BodyText'
import Image from '../components/Image/Image'

function HelpPage() {
  const navigate = useNavigate()

  const imageFAQ = './images/contact-faq-icon.png'
  const imageContactUs = './images/contact-support-icon.png'

  return (
    <div className="help-page">
      <div className="help-page-container">
        <Sidebar />
        <div className="help-page-content">
          <div className="nav">
            <CrossIcon onClick={() => navigate(-1)} className="userIcon" fill={Colors.primaryColorBrightGreen} />
            <ProfilePopUp />
          </div>
          <Headline text="How Can We Help You?" color="#7DFAA4" textAlign="center" fontSize="48px" />
          <main className="container-help">
            <div className="border">
              <div className="check-faq">
                <NavLink to="/FAQ">
                  <Image imageUrl={imageFAQ} imageWidth="100px" imageHeight="auto" />
                  <BodyText text="Check FAQ" color="#7DFAA4" />
                </NavLink>
              </div>
            </div>
            <div className="border">
              <div className="contact-support">
                <NavLink to="/contact-us">
                  <Image imageUrl={imageContactUs} imageWidth="100px" imageHeight="auto" />
                  <BodyText text="Contact Support" color="#7DFAA4" />
                </NavLink>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HelpPage
