import PropTypes from 'prop-types'

function TableItem({ item, headers }) {
  const columns = headers.map((h) => h.property)
  return (
    <tr>
      {columns.map((col) => (
        <td>{item[col]}</td>
      ))}
    </tr>
  )
}

export default TableItem

TableItem.propTypes = {
  item: PropTypes.objectOf().isRequired,
  headers: PropTypes.arrayOf({}).isRequired,
}
