import axios from 'axios'
import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react/function-component-definition
const withAuthentication = (Component) => (props) => {
  const token = sessionStorage.getItem('token')
  const axiosClient = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (token) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component axiosClient={axiosClient} {...props} />
  }

  return <Navigate to="/login" />
}

export default withAuthentication
