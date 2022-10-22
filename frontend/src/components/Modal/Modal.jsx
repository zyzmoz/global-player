import PropTypes from 'prop-types'

function Modal({ backgroundColor, children, isOpen }) {
  return (
    <div
      className={isOpen ? 'modal-show' : 'modal-hide'}
      style={{
        width: '100vh',
        height: '100vh',
        backgroundColor,
      }}
    >
      {children}
    </div>
  )
}

export default Modal

Modal.defaultProps = {
  backgroundColor: '#402CAC',
  children: '',
  isOpen: 'false',
}

Modal.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.element,
  isOpen: PropTypes.bool,
}
