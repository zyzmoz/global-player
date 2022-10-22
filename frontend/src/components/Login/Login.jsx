import { Link } from 'react-router-dom'
import BodyText from '../BodyText/BodyText'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Headline from '../Headline/Headline'

function Login() {
  return (
    <div>
      <Headline text="Log In" color="black" />
      <Input id="email" label="Email" type="text" placeholder="Enter your email" />
      <Input id="password" label="Password" type="text" placeholder="Enter your password" />
      <Link to="/">
        <BodyText text="Forgot my password" color="black" />
      </Link>
      <Button text="Login" />
      <BodyText text="New here?" color="black" />
      <Link to="/">
        <BodyText text="Create an account" color="black" />
      </Link>
    </div>
  )
}

export default Login
