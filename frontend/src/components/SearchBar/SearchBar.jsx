import PropTypes from 'prop-types'

function SearchBar({ type, placeholder, onChange, text }) {
  return <input type={type} placeholder={placeholder} onChange={onChange} value={text} />
}

export default SearchBar

SearchBar.defaultProps = {
  type: 'search',
  placeholder: 'Search',
  onChange: (e) => e.target.value,
  text: '',
}

SearchBar.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  text: PropTypes.string,
}
