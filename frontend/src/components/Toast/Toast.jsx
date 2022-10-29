import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { CheckIcon } from '../Icon/icons'
import BodyText from '../BodyText/BodyText'
import Headline from '../Headline/Headline'
import Button from '../Button/Button'

function Toast({ className, pageRoute, headlineToast, bodyToast, buttonTextToast }) {
  const navigate = useNavigate()

  const navigateToPage = () => {
    navigate(`/${pageRoute}`)
  }

  return (
    <div
      className={className}
      style={{
        background: '#402CAC',
        border: '3px solid #7DFAA4',
        borderRadius: '25px',
        boxShadow: '0px 26px 54px rgba(8,2,53,0.48',
      }}
    >
      <div className="toast-main-content" style={{ textAlign: 'center' }}>
        <CheckIcon fill="#7DFAA4" stroke="#7DFAA4" />
        <Headline fontSize="24px" color="white" textAlign="center" text={headlineToast} />
        <BodyText fontSize="16px" color="white" textAlign="center" text={bodyToast} />
        <Button
          text={buttonTextToast}
          onClick={() => navigateToPage()}
          className="toast-cta-btn"
          style={{ buttonWidth: '400px' }}
        />
      </div>
    </div>
  )
}

export default Toast

Toast.defaultProps = {
  className: '',
  pageRoute: '',
  headlineToast: '',
  bodyToast: '',
  buttonTextToast: '',
}

Toast.propTypes = {
  className: PropTypes.string,
  pageRoute: PropTypes.string,
  headlineToast: PropTypes.string,
  bodyToast: PropTypes.string,
  buttonTextToast: PropTypes.string,
}
