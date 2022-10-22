import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

function ProfilePopUp({ userId }) {
    return (
        <div className="profile-pop-up">
            <NavLink to="/AccountSettings">
                Account Settings
            </NavLink>
            <NavLink to="/Terms">
                Terms
            </NavLink>
            <Button onClick={} className="logout-button" text="Log out" />
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
