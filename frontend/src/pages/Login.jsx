import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import BodyText from '../components/BodyText/BodyText'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import Headline from '../components/Headline/Headline'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Colors from '../sass/variables/_colors.scss'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

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
      <Header />
      <div className="login-page-wrapper">
        <Headline text="Log In" color={Colors.primaryColorBrightGreen} />
        <Input id="email" label="Email" type="text" placeholder="Enter your email" value={email} onChange={setEmail} />
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
        <Button onClick={handleLogin} text="Login" />
        <BodyText text="New here?" />
        <Link to="/">
          <BodyText text="Create an account" color={Colors.primaryColorBrightGreen} />
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Login
