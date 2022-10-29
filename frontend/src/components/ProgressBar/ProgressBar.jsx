import PropTypes from 'prop-types'

function ProgressBar({ progress, color, border, text }) {
  return (
    <div
      className="progress-bar"
      style={{ backgroundColor: '$primary-color-deep-purple', width: '100%', borderRadius: border }}
    >
      <div
        className="progress"
        style={{
          width: `${progress}%`,
          backgroundColor: color,
          borderRadius: border,
        }}
      >
        {text}
      </div>
    </div>
  )
}

export default ProgressBar

ProgressBar.defaultProps = {
  progress: '',
  color: '$primary-color-bright-green',
  text: '',
  border: '49px',
}

ProgressBar.propTypes = {
  progress: PropTypes.number,
  color: PropTypes.string,
  text: PropTypes.string,
  border: PropTypes.string,
}
