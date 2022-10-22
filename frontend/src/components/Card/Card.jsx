import PropTypes from 'prop-types'

function Card({ width, height, backgroundColor, children }) {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor,
      }}
    >
      {children}
    </div>
  )
}

export default Card

Card.defaultProps = {
  width: '400px',
  height: '720px',
  backgroundColor: '#402CAC',
  children: '',
}

Card.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.element,
}
