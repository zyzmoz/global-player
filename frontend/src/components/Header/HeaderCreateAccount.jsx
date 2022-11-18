import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { LeftIcon } from '../Icon/icons'

function HeaderCreateAccount({ linkToNav }) {
  return (
    <header className="main-header">
      <NavLink to={linkToNav}>
        <LeftIcon fill="#7DFAA4" stroke="#7DFAA4" />
      </NavLink>
      <NavLink to="/Login" className="header-link">
        Login
      </NavLink>
    </header>
  )
}

export default HeaderCreateAccount

HeaderCreateAccount.defaultProps = {
  linkToNav: '/',
}

HeaderCreateAccount.propTypes = {
  linkToNav: PropTypes.string,
}
