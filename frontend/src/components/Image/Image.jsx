import PropTypes from 'prop-types'

function Image({ imageUrl, radius, imageWidth, imageHeight, imageBorder, alt, className }) {
  return (
    <img
      src={imageUrl}
      alt={alt}
      style={{ borderRadius: radius, width: imageWidth, height: imageHeight, border: imageBorder }}
      className={className}
    />
  )
}

export default Image

Image.defaultProps = {
  imageUrl: '',
  radius: '',
  imageWidth: '100%',
  imageHeight: 'auto',
  imageBorder: 'none',
  alt: '',
  className: '',
}

Image.propTypes = {
  imageUrl: PropTypes.string,
  radius: PropTypes.string,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  imageBorder: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
}
