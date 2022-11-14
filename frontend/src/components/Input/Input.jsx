import PropTypes from 'prop-types'
import { useState } from 'react'

// Generates an unique id
const randomId = `input=${Math.floor(Math.random() * 9999)}`
function Input({ placeholder, onChange, label, type, text, id }) {
  const [inputValue, setInputValue] = useState(text)

  const handleChange = (evt) => {
    setInputValue(evt.target.value)
    onChange(evt.target.value)
  }

  return (
    <div className="input">
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id || randomId} type={type} placeholder={placeholder} onChange={handleChange} value={inputValue} />
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
}

Input.defaultProps = {
  id: PropTypes.string,
  placeholder: 'Placeholder',
  onChange: () => {},
  type: 'text',
  text: '',
  label: null,
}

export default Input
