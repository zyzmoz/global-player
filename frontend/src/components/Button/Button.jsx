import PropTypes from 'prop-types'

function Button({ buttonType, text, onClick, disabled }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled} className={buttonType}>
      {text}
    </button>
  )
}

export default Button

Button.defaultProps = {
  buttonType: 'button',
  text: '',
  onClick: () => {},
  disabled: true,
}

Button.propTypes = {
  buttonType: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}
