import PropTypes from 'prop-types'
import { useState } from 'react'

function Input({ placeholder, defaultValue, onChange, label, type, text }) {
  // Generates an unique id
  const id = `input=${Math.floor(Math.random() * 9999)}`

  const [inputValue, setInputValue] = useState(text)

  const handleChange = (evt) => {
    setInputValue(evt.target.text)
    onChange(evt.target.text)
  }

  return (
    <div className="input">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={handleChange}
        value={inputValue}
      />
    </div>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
}

Input.defaultProps = {
  placeholder: 'Placeholder',
  defaultValue: '',
  onChange: (e) => e.target.value,
  type: 'text',
  text: '',
  label: null,
}

export default Input
