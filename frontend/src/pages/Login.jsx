import { Link, useNavigate } from 'react-router-dom'
import BodyText from '../components/BodyText/BodyText'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import Headline from '../components/Headline/Headline'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Colors from '../sass/variables/_colors.scss'

function Login() {
  const navigate = useNavigate()
  return (
    <div className="login-page">
      <Header />
      <div className="login-page-wrapper">
        <Headline text="Log In" color={Colors.primaryColorBrightGreen} />
        <Input id="email" label="Email" type="text" placeholder="Enter your email" />
        <Input id="password" label="Password" type="text" placeholder="Enter your password" />
        <Link to="/">
          <BodyText text="Forgot my password" color={Colors.primaryColorBrightGreen} />
        </Link>
        <Button onClick={() => navigate('/topplayers')} text="Login" />
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
