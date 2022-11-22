import { string } from 'prop-types'
import emailjs from '@emailjs/browser'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Headline from '../components/Headline/Headline'
import { CrossIcon, UserIcon } from '../components/Icon/icons'
import Colors from '../sass/variables/_colors.scss'
import Button from '../components/Button/Button'
import Toast from '../components/Toast/Toast'
import Footer from '../components/Footer/Footer'
import withAuthentication from '../hoc/withAuthentication'

function ContactUs({ userEmail }) {
  const navigate = useNavigate()

  const [showToast, setShowToast] = useState(false)

  const form = useRef()

  const clearInputs = () => {
    document.getElementById('subject').value = ''
    document.getElementById('subject').value = ''
    document.getElementById('message').value = ''
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_2pul6xy', 'template_aj6i8bk', form.current, process.env.REACT_APP_EMAILJS_API_KEY || '')
      .then(() => {
        setShowToast(true)
        clearInputs()
      })
  }

  return (
    <div className="contact-us-wrapper">
      <div className="nav">
        <CrossIcon onClick={() => navigate(-1)} className="userIcon" fill={Colors.primaryColorBrightGreen} />
        <UserIcon className="userIcon" fill={Colors.primaryColorBrightGreen} />
      </div>
      <main className="contact-us-content">
        <div className="contact-information">
          <Headline text="Contact Us" color={Colors.primaryColorBrightGreen} />
        </div>
        <form ref={form} className="contact-us-form" onSubmit={sendEmail}>
          <label htmlFor="email">
            <div className="label-text">Email *</div>
            <div className="input-wrapper">
              <input className="email" type="text" name="user_email" defaultValue={userEmail} />
            </div>
          </label>
          <label htmlFor="subject">
            <div className="label-text">Subject *</div>
            <div className="input-wrapper">
              <input type="text" className="subject" placeholder="Enter subject" id="subject" name="subject" required />
            </div>
          </label>
          <label htmlFor="message">
            {' '}
            <div className="label-text">Message *</div>
            <div className="textarea-wrapper">
              <textarea label="Message *" placeholder="Enter message" id="message" name="message" required />
            </div>
          </label>
          <Button className="send-btn" type="submit" text="Submit" />
        </form>
        {showToast && (
          <Toast
            pageRoute="TopPlayers"
            headlineToast="Message Successfully Sent!"
            bodyToast="We will reply you in 3-5 business days"
            buttonTextToast="Back to Home"
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

ContactUs.propTypes = {
  userEmail: string,
}

ContactUs.defaultProps = {
  userEmail: '',
}

export default withAuthentication(ContactUs)
