import { Link } from 'react-router-dom'
import HeaderCreateAccount from '../components/Header/HeaderCreateAccount'
import Headline from '../components/Headline/Headline'
import BodyText from '../components/BodyText/BodyText'
import Footer from '../components/Footer/Footer'
import Image from '../components/Image/Image'

function CreateAccount() {
  const recruiterIcon = './images/RecruiterIcon.png'
  const playerIcon = './images/PlayerIcon.png'

  return (
    <div className="create-account-page-choice">
      <div className="create-account-page-container">
        <HeaderCreateAccount linkToNav="/Login" />
        <main>
          <Headline text="Choose your role" color="" fontSize="" textAlign="" />

          <div className="choices-container">
            <div className="choice-container">
              <Link to="/create-account-player">
                <Image imageUrl={playerIcon} imageWidth="67px" imageHeight="auto" alt="Player Icon" />
                <BodyText text="I'm a player" fontSize="16pt" color="#000000" textAlign="center" />
              </Link>
            </div>
            <div className="vr-divider-create" />

            <div className="choice-container">
              <Link to="/create-account-recruiter">
                <Image imageUrl={recruiterIcon} imageWidth="105px" imageHeight="auto" alt="Recruiter Icon" />
                <BodyText text="I'm a recruiter" fontSize="16pt" color="#000000" textAlign="center" />
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default CreateAccount
