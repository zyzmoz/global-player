import axios from 'axios'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Headline from '../components/Headline/Headline'
import BodyText from '../components/BodyText/BodyText'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import { recruiterSchema } from '../utils/userValidation'
import HeaderCreateAccount from '../components/Header/HeaderCreateAccount'

function CreateAccountRecruiter() {
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const { firstName, lastName, email, companyName, jobTitle, password } = evt.target
    const newUser = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      companyName: companyName.value,
      jobTitle: jobTitle.value,
      password: password.value,
      isPlayer: false,
    }

    try {
      recruiterSchema.validateSync(newUser)

      // create acc
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/create-account`, newUser)

      // navigate to login
      navigate('/login')
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div className="create-account-page-recruiter">
      <div className="create-account-page-recruiter-container">
        <HeaderCreateAccount linkToNav="/create-account" />
        <main>
          <Headline text="Create an Account" color="#7dfaa4" textAlign="center" />
          <form onSubmit={handleSubmit}>
            <Input id="firstName" placeholder="Enter your first name" label="First Name*" type="text" />
            <Input id="lastName" placeholder="Enter your last name" label="Full Name*" type="text" />
            <Input id="email" placeholder="Enter your email" label="Email*" type="email" />
            <Input id="companyName" placeholder="Enter your company name" label="Company Name*" type="text" />
            <Input id="jobTitle" placeholder="Enter your job title" label="Job Title*" type="text" />
            <Input id="password" placeholder="Enter your password" label="Password*" type="password" />
            {error && <BodyText text={error} color="red" />}
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
