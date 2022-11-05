import PropTypes from 'prop-types'

function TableItem({ item, headers, onClick }) {
  const columns = headers.map((h) => h.property)
  return (
    <tr onClick={onClick}>
      {columns.map((col) => (
        <td>{item[col]}</td>
      ))}
    </tr>
  )
}

export default TableItem

TableItem.defaultProps = {
  onClick: () => {},
}

TableItem.propTypes = {
  item: PropTypes.objectOf().isRequired,
  headers: PropTypes.arrayOf({}).isRequired,
  onClick: PropTypes.func,
}
