import PropTypes from 'prop-types'

function Headline({ fontSize, color, textAlign, text }) {
  return (
    <h1
      className={fontSize}
      style={{
        color,
        textAlign,
      }}
    >
      {text}
    </h1>
  )
}

export default Headline

Headline.defaultProps = {
  fontSize: 'large',
  color: 'white',
  textAlign: 'left',
  text: '',
}

Headline.propTypes = {
  fontSize: PropTypes.string,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  text: PropTypes.string,
}
