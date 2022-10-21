import PropTypes from 'prop-types'

function Table({ children }) {
  return <table className="table">{children}</table>
}

export default Table

Table.propTypes = {
  children: PropTypes.element.isRequired,
}
