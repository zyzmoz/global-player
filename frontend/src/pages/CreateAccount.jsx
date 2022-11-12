import { NavLink } from 'react-router-dom'
import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'
import Header from '../components/Header/Header'
import Headline from '../components/Headline/Headline'
import BodyText from '../components/BodyText/BodyText'
import Footer from '../components/Footer/Footer'
import Image from '../components/Image/Image'

function CreateAccount() {
  const recruiterIcon = './images/RecruiterIcon.png'
  const playerIcon = './images/PlayerIcon.png'

  return (
    <div className="create-account-page-choice">
      <LandingPageNavMenu className="nav-side-menu" />
      <div className="create-account-page-container">
        <Header />
        <main>
          <Headline text="Choose your role" color="" fontSize="" textAlign="" />

          <div className="choices-container">
            <div className="choice-container">
              <NavLink to="/create-account-player">
                <Image imageUrl={playerIcon} imageWidth="67px" imageHeight="auto" alt="Player Icon" />
                <BodyText text="I'm a player" fontSize="16pt" color="#000000" textAlign="center" />
              </NavLink>
            </div>
            <div className="choice-container">
              <NavLink to="/create-account-recruiter">
                <Image imageUrl={recruiterIcon} imageWidth="105px" imageHeight="auto" alt="Recruiter Icon" />
                <BodyText text="I'm a recruiter" fontSize="16pt" color="#000000" textAlign="center" />
              </NavLink>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default CreateAccount
