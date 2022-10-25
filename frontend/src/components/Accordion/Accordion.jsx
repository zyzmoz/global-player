import PropTypes from 'prop-types'
import { useState } from 'react'
import { UpIcon, DownIcon } from '../Icon/icons'
import BodyText from '../BodyText/BodyText'
import Headline from '../Headline/Headline'

function Accordion({ className, headerText, fullText }) {
  const [showFAQ, setShowFAQ] = useState(false)

  return (
    <div className={className}>
      <div className="accordion-title-arrow">
        <Headline text={headerText} fontSize="24px" color="#7DFAA4" />
        <div className="up-down-icons">
          {showFAQ && (
            <button type="button" className="up-btn" onClick={() => setShowFAQ(false)}>
              {showFAQ && <UpIcon fill="#7DFAA4" stroke="#7DFAA4" />}
            </button>
          )}
          {!showFAQ && (
            <button type="button" className="down-btn" onClick={() => setShowFAQ(true)}>
              {!showFAQ && <DownIcon fill="#7DFAA4" stroke="#7DFAA4" />}
            </button>
          )}
        </div>
      </div>
      {showFAQ && <BodyText text={fullText} fontSize="16px" color="white" />}
    </div>
  )
}

export default Accordion

Accordion.defaultProps = {
  className: 'accordion-wrapper',
  headerText: '',
  fullText: '',
}

Accordion.propTypes = {
  className: PropTypes.string,
  headerText: PropTypes.string,
  fullText: PropTypes.string,
}
