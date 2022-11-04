import { NavLink } from 'react-router-dom'
import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Headline from '../components/Headline/Headline'
import BodyText from '../components/BodyText/BodyText'
import Input from '../components/Input/Input'

function CreateAccountPlayer() {
  return (
    <div className="create-account-page-player">
      <LandingPageNavMenu className="nav-side-menu" />
      <div className="create-account-page-player-container">
        <Header />
        <main>
          <Headline text="Create an Account" color="#7dfaa4" textAlign="center" />
          <form action="">
            <Input placeholder="Enter your summoner name" label="Summoner Name*" type="text" />
            <Input placeholder="Enter your email" label="Email*" type="email" />
            <Input placeholder="Enter your Team" label="Team*" type="text" />
            <Input placeholder="Enter your password" label="Password*" type="password" />
            <Input label="Agree to receive a scouting email from a player" type="checkbox" />
            <NavLink to="/PlayerOverview" className="create-account-button">
              <BodyText text="Create an Account" color="#080235" textAlign="center" />
            </NavLink>
          </form>
          <div className="have-an-account">
            <BodyText text="Have an account? " />
            <NavLink to="/Login">
              <BodyText text="Log In" color="#7dfaa4" />
            </NavLink>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default CreateAccountPlayer
