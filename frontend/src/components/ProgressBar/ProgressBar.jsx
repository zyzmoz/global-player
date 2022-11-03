import PropTypes from 'prop-types'
import Colors from '../../sass/variables/_colors.scss'

function ProgressBar({ progress, color, border, borderline, text, widthSize, heightSize }) {
  return (
    <div className="progressbar-wrapper" style={{ width: widthSize }}>
      <div
        className="progressbar"
        style={{
          backgroundColor: `${Colors.primaryColorDeepPurple}`,
          border: borderline,
          width: '100%',
          borderRadius: border,
        }}
      >
        <div
          className="progress"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
            borderRadius: border,
            height: heightSize,
          }}
        >
          {text}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar

ProgressBar.defaultProps = {
  progress: '',
  color: `${Colors.secondaryColorSkyBlue}`,
  text: '',
  border: '49px',
  borderline: `${Colors.secondaryColorSkyBlue} 1px solid`,
  widthSize: '',
  heightSize: '20px',
}

ProgressBar.propTypes = {
  progress: PropTypes.number,
  color: PropTypes.string,
  text: PropTypes.string,
  border: PropTypes.string,
  borderline: PropTypes.string,
  widthSize: PropTypes.string,
  heightSize: PropTypes.string,
}
