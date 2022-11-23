import PropTypes from 'prop-types'
import BodyText from '../BodyText/BodyText'

function Tag({ reviews, text }) {
  const tagText = `${reviews} ${text}`

  return (
    <div
      className="tag"
      style={{
        border: '2px #7DFAA4 solid',
        borderRadius: '49px',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        padding: '.8rem 1.3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'fit-content',
      }}
    >
      <BodyText fontSize="20pt" color="#7DFAA4" textAlign="center" text={tagText} />
    </div>
  )
}

export default Tag

Tag.defaultProps = {
  reviews: '',
  text: '',
}

Tag.propTypes = {
  reviews: PropTypes.number,
  text: PropTypes.string,
}
