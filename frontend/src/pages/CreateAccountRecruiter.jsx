import { NavLink } from 'react-router-dom'
import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Headline from '../components/Headline/Headline'
import BodyText from '../components/BodyText/BodyText'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'

function CreateAccountRecruiter() {
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const { firstName, lastName, email, companyName, jobTitle, password } = evt.target
    const newUser = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      companyName: companyName.value,
      jobTitle: jobTitle.value,
      password: password.value,
    }

    console.log({ newUser })
  }

  return (
    <div className="create-account-page-recruiter">
      <LandingPageNavMenu className="nav-side-menu" />
      <div className="create-account-page-recruiter-container">
        <Header />
        <main>
          <Headline text="Create an Account" color="#7dfaa4" textAlign="center" />
          <form onSubmit={handleSubmit}>
            <Input id="firstName" placeholder="Enter your first name" label="First Name*" type="text" />
            <Input id="lastName" placeholder="Enter your last name" label="Full Name*" type="text" />
            <Input id="email" placeholder="Enter your email" label="Email*" type="email" />
            <Input id="companyName" placeholder="Enter your company name" label="Comapany Name*" type="text" />
            <Input id="jobTitle" placeholder="Enter your job title" label="Job Title*" type="text" />
            <Input id="password" placeholder="Enter your password" label="Password*" type="password" />
            <Button type="submit" text="Create an Account" />
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
