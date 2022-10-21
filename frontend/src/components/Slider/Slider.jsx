import PropTypes from 'prop-types'

function Slider({ type, minValue, maxValue, value, onChange }) {
  return (
    <div className="slider">
      <input type={type} min={minValue} max={maxValue} value={value} onChange={onChange} />
    </div>
  )
}

export default Slider

Slider.defaultProps = {
  type: 'range',
  minValue: 0,
  maxValue: 100,
  value: 50,
  onChange: () => {},
}

Slider.propTypes = {
  type: PropTypes.string,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
}
