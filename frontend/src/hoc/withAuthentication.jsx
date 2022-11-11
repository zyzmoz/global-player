import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react/function-component-definition
const withAuthentication = (Component) => (props) => {
  const isAuthenticated = sessionStorage.getItem('token')
  if (isAuthenticated) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />
  }

  return <Navigate to="/login" />
}

export default withAuthentication
