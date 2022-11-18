import PropTypes from 'prop-types'

function BodyText({ fontSize, color, textAlign, text }) {
  return (
    <p
      style={{
        color,
        textAlign,
      }}
      className={fontSize}
    >
      {text}
    </p>
  )
}

export default BodyText

BodyText.defaultProps = {
  fontSize: '20pt',
  color: 'white',
  textAlign: '',
  text: '',
}

BodyText.propTypes = {
  fontSize: PropTypes.string,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  text: PropTypes.string,
}
