import PropTypes from 'prop-types'

function Headline({ fontSize, color, textAlign, text }) {
  return (
    <h1
      style={{
        fontSize,
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
  fontSize: '20pt',
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
