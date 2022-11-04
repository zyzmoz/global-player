import { NavLink } from 'react-router-dom'
import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Headline from '../components/Headline/Headline'
import BodyText from '../components/BodyText/BodyText'
import Input from '../components/Input/Input'

function CreateAccountRecruiter() {
  return (
    <div className="create-account-page-recruiter">
      <LandingPageNavMenu className="nav-side-menu" />
      <div className="create-account-page-recruiter-container">
        <Header />
        <main>
          <Headline text="Create an Account" color="#7dfaa4" textAlign="center" />
          <form action="">
            <Input placeholder="Enter your full name" label="Full Name*" type="text" />
            <Input placeholder="Enter your email" label="Email*" type="email" />
            <Input placeholder="Enter your company name" label="Comapany Name*" type="text" />
            <Input placeholder="Enter your job title" label="Job Title*" type="text" />
            <Input placeholder="Enter your password" label="Password*" type="password" />
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

export default CreateAccountRecruiter
