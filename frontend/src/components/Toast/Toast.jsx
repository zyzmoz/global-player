import PropTypes from 'prop-types'
import { CheckIcon, CrossIcon } from '../Icon/icons'
import BodyText from '../BodyText/BodyText'
import Headline from '../Headline/Headline'

function Toast({ className }) {
  const toggleCloseBtn = () => {
    const toastComponent = document.querySelector('.toast-wrapper')
    toastComponent.classList.toggle('hide-toast-wrapper')
  }

  return (
    <div
      className={className}
      style={{
        background: '#402CAC',
        maxWidth: '1212px',
        maxHeight: '545px',
        border: '3px solid #7DFAA4',
        borderRadius: '25px',
        boxShadow: '0px 26px 54px rgba(8,2,53,0.48',
      }}
    >
      <button
        onClick={() => toggleCloseBtn()}
        type="button"
        className="toast-x-btn"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <CrossIcon fill="#7DFAA4" stroke="#7DFAA4" />
      </button>
      <div className="toast-main-content" style={{ textAlign: 'center' }}>
        <CheckIcon fill="#7DFAA4" stroke="#7DFAA4" />
        <Headline fontSize="24px" color="white" textAlign="center" text="Welcome to Global player!" />
        <BodyText fontSize="16px" color="white" textAlign="center" text="Your account has been created" />
      </div>
    </div>
  )
}

export default Toast

Toast.defaultProps = {
  className: 'toast-wrapper',
}

Toast.propTypes = {
  className: PropTypes.string,
}
