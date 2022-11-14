import PropTypes from 'prop-types'

function Button({ buttonType, text, onClick, disabled, type }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={onClick} disabled={disabled} className={`button ${buttonType}`}>
      {text}
    </button>
  )
}

export default Button

Button.defaultProps = {
  buttonType: 'button',
  text: '',
  onClick: () => {},
  disabled: false,
  type: 'button',
}

Button.propTypes = {
  buttonType: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
}
