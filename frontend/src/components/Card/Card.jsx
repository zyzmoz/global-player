import PropTypes from 'prop-types'

function Card({ width, height, backgroundColor, children }) {
  return (
    <div
      className="card"
      style={{
        width,
        height,
        backgroundColor,
      }}
    >
      <div className="card-content">{children}</div>
    </div>
  )
}

export default Card

Card.defaultProps = {
  width: '400px',
  height: '',
  backgroundColor: '#402CAC',
  children: '',
}

Card.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.element,
}
