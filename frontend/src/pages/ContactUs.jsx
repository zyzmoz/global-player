import emailjs from '@emailjs/browser'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Headline from '../components/Headline/Headline'
import { CrossIcon } from '../components/Icon/icons'
import Colors from '../sass/variables/_colors.scss'
import Button from '../components/Button/Button'
import Toast from '../components/Toast/Toast'
import Footer from '../components/Footer/Footer'
import ProfilePopUp from '../components/ProfilePopUp/ProfilePopUp'

function ContactUs() {
  const navigate = useNavigate()

  const [showToast, setShowToast] = useState(false)

  const form = useRef()

  const changeBackground = () => {
    document.getElementById('toastBackground').classList.add('toast-background')
  }

  const clearInputs = () => {
    document.getElementById('email').value = ''
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
        changeBackground()
      })
  }

  return (
    <div className="wrapper-for-toast">
      <div className="contact-us-wrapper" id="toastBackground">
        <div className="nav">
          <CrossIcon onClick={() => navigate(-1)} className="userIcon" fill={Colors.primaryColorBrightGreen} />
          <ProfilePopUp className="userIcon" fill={Colors.primaryColorBrightGreen} />
        </div>
        <main className="contact-us-content">
          <div className="contact-information">
            <Headline text="Contact Us" color={Colors.primaryColorBrightGreen} />
          </div>
          <form ref={form} className="contact-us-form" onSubmit={sendEmail}>
            <label htmlFor="email">
              <div className="label-text">Email *</div>
              <div className="input-wrapper">
                <input
                  type="email"
                  className="email"
                  placeholder="Enter your email address"
                  id="email"
                  name="user_email"
                  required
                />
              </div>
            </label>
            <label htmlFor="subject">
              <div className="label-text">Subject *</div>
              <div className="input-wrapper">
                <input
                  type="text"
                  className="subject"
                  placeholder="Enter subject"
                  id="subject"
                  name="subject"
                  required
                />
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
        </main>
        <Footer />
      </div>
      {showToast && (
        <Toast
          headlineToast="Message Successfully Sent!"
          bodyToast="We will reply you in 3-5 business days"
          buttonTextToast="Back to Home"
        />
      )}
    </div>
  )
}

export default ContactUs
