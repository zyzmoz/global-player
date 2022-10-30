import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { CheckIcon } from '../Icon/icons'
import BodyText from '../BodyText/BodyText'
import Headline from '../Headline/Headline'
import Button from '../Button/Button'

function Toast({ pageRoute, headlineToast, bodyToast, buttonTextToast }) {
  const navigate = useNavigate()

  const navigateToPage = () => {
    navigate(`/${pageRoute}`)
  }

  return (
    <div className="toast">
      <div className="toast-wrapper" style={{ textAlign: 'center' }}>
        <CheckIcon fill="#7DFAA4" stroke="#7DFAA4" />
        <Headline fontSize="24px" color="white" textAlign="center" text={headlineToast} />
        <BodyText fontSize="16px" color="white" textAlign="center" text={bodyToast} />
        <Button text={buttonTextToast} onClick={() => navigateToPage()} className="toast-cta-btn" />
      </div>
    </div>
  )
}

export default Toast

Toast.defaultProps = {
  pageRoute: '',
  headlineToast: '',
  bodyToast: '',
  buttonTextToast: '',
}

Toast.propTypes = {
  pageRoute: PropTypes.string,
  headlineToast: PropTypes.string,
  bodyToast: PropTypes.string,
  buttonTextToast: PropTypes.string,
}
