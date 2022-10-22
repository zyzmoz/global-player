import PropTypes from 'prop-types'

function Video({ titleVideo, videoUrl, videoWidth, videoHeight, videoBorder, videoAlt, videoAutoPlay }) {
  return (
    <iframe
      title={titleVideo}
      src={videoUrl}
      width={videoWidth}
      height={videoHeight}
      alt={videoAlt}
      autoPlay={videoAutoPlay}
      style={{ border: videoBorder }}
    />
  )
}

export default Video

Video.defaultProps = {
  titleVideo: '',
  videoUrl: '',
  videoWidth: '',
  videoHeight: '',
  videoBorder: '',
  videoAlt: '',
  videoAutoPlay: true,
}

Video.propTypes = {
  titleVideo: PropTypes.string,
  videoUrl: PropTypes.string,
  videoWidth: PropTypes.string,
  videoHeight: PropTypes.string,
  videoBorder: PropTypes.string,
  videoAlt: PropTypes.string,
  videoAutoPlay: PropTypes.bool,
}
