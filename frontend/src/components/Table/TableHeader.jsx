import PropTypes from 'prop-types'

function TableHeader({ headers }) {
  return (
    <tr>
      {headers.map((h) => (
        <th>{h.title}</th>
      ))}
    </tr>
  )
}

export default TableHeader

TableHeader.propTypes = {
  headers: PropTypes.arrayOf({}).isRequired,
}
