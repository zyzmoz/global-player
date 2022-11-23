import PropTypes from 'prop-types'

const id = Math.round(Math.random() * 1000)
function Slider({ type, minValue, maxValue, value, onChange, labelLeft, labelRight }) {
  const handleChange = (evt) => {
    onChange(Number(evt.target.value))
  }
  return (
    <div className="slider-container">
      <label htmlFor={id}>
        <div>{labelLeft}</div>
        <div>{labelRight}</div>
      </label>
      <input className="slider" type={type} min={minValue} max={maxValue} value={value} onChange={handleChange} />
    </div>
  )
}

export default Slider

Slider.defaultProps = {
  type: 'range',
  minValue: 0,
  maxValue: 100,
  value: 50,
  labelLeft: '',
  labelRight: '',
  onChange: () => {},
}

Slider.propTypes = {
  type: PropTypes.string,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  value: PropTypes.number,
  labelLeft: PropTypes.string,
  labelRight: PropTypes.string,
  onChange: PropTypes.func,
}
