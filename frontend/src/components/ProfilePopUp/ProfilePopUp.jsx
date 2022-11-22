import { NavLink } from 'react-router-dom'
import { LogoutIcon, UserIcon, TermsConditionsIcon, ArrowIcon } from '../Icon/icons'
import Colors from '../../sass/variables/_colors.scss'
import BodyText from '../BodyText/BodyText'

function ProfilePopUp() {
  // watch the <body> click events
  document.querySelector('body').addEventListener('click', (event) => {
    const popUpElem = document.querySelector('.pop-up-wrapper')
    const userButton = document.querySelector('#user-button')

    if (!popUpElem || !userButton) {
      return
    }

    if (event.target !== popUpElem && event.target !== userButton) {
      popUpElem.classList.remove('pop-up-show')
    }
  })

  const toggleProfilePopup = () => {
    const profilePopup = document.querySelector('.pop-up-wrapper')
    profilePopup.classList.toggle('pop-up-show')
  }

  const logout = () => {
    sessionStorage.removeItem('token')
  }

  return (
    <div className="profile-pop-up">
      <UserIcon
        id="user-button"
        className="userIcon"
        fill={Colors.primaryColorBrightGreen}
        onClick={() => toggleProfilePopup()}
      />
      <div className="pop-up-wrapper">
        <NavLink to="/Terms" className="termsconditions-container">
          <div className="termsconditions-wrapper">
            <TermsConditionsIcon stroke={Colors.primaryColorBrightGreen} />
            <BodyText text="Terms and conditions" />
          </div>
          <div className="arrowicon-wrapper">
            <ArrowIcon stroke={Colors.primaryColorBrightGreen} />
          </div>
        </NavLink>
        <NavLink to="/" className="logout-button" onClick={() => logout()}>
          <LogoutIcon stroke={Colors.primaryColorBrightGreen} />
          <BodyText text="Log out" />
        </NavLink>
      </div>
    </div>
  )
}

export default ProfilePopUp
