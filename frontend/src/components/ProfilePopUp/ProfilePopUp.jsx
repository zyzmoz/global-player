import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import { SettingsIcon, LogoutIcon } from '../Icon/icons'

function ProfilePopUp({ userId }) {
  const accountUrl = `/AccountSettings/${userId}`
  const logoutText = `${(<LogoutIcon fill="#7DFAA4" stroke="#7DFAA4" />)} Log out`

  return (
    <div className="profile-pop-up">
      <NavLink to={accountUrl}>
        <SettingsIcon fill="#7DFAA4" stroke="#7DFAA4" />
        Account Settings
      </NavLink>
      <NavLink to="/Terms">Terms</NavLink>
      <Button className="logout-button" text={logoutText} />
    </div>
  )
}

export default ProfilePopUp

ProfilePopUp.defaultProps = {
  userId: '',
}

ProfilePopUp.propTypes = {
  userId: PropTypes.string,
}
