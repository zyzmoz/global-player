import { Link, useNavigate } from 'react-router-dom'
import BodyText from '../components/BodyText/BodyText'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import Headline from '../components/Headline/Headline'

function Login() {
  const navigate = useNavigate()
  return (
    <div>
      <Headline text="Log In" color="black" />
      <Input id="email" label="Email" type="text" placeholder="Enter your email" />
      <Input id="password" label="Password" type="text" placeholder="Enter your password" />
      <Link to="/">
        <BodyText text="Forgot my password" color="black" />
      </Link>
      <Button onClick={() => navigate('/topplayers')} text="Login" />
      <BodyText text="New here?" color="black" />
      <Link to="/">
        <BodyText text="Create an account" color="black" />
      </Link>
    </div>
  )
}

export default Login
