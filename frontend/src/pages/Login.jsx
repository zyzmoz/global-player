import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import BodyText from '../components/BodyText/BodyText'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import Headline from '../components/Headline/Headline'
import HeaderCreateAccount from '../components/Header/HeaderCreateAccount'
import Footer from '../components/Footer/Footer'
import Colors from '../sass/variables/_colors.scss'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      navigate('/topplayers')
    }
  }, [navigate])

  const handleLogin = async () => {
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/login`, {
      email,
      password,
    })

    if (res.status === 200) {
      sessionStorage.setItem('token', res.data.token)
      navigate('/topplayers')
    }
  }

  return (
    <div className="login-page">
      <HeaderCreateAccount />
      <div className="login-page-wrapper">
        <Headline text="Log In" color={Colors.primaryColorBrightGreen} />
        <Input id="email" label="Email" type="text" placeholder="Enter your email" value={email} onChange={setEmail} />
        <div className="password-wrapper">
          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={setPassword}
          />
          <Link to="/">
            <BodyText text="Forgot my password" color={Colors.primaryColorBrightGreen} />
          </Link>
        </div>
        <Button onClick={handleLogin} text="Login" />
        <div className="new-here-wrapper">
          <BodyText text="New here?" />
          <Link to="/plans">
            <BodyText text="Create an account" color={Colors.primaryColorBrightGreen} />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
