import { string } from 'prop-types'
import emailjs from '@emailjs/browser'
import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Axios } from 'axios'
import Avatar from '../components/Avatar/Avatar'
import Headline from '../components/Headline/Headline'
import { LeftIcon } from '../components/Icon/icons'
import Colors from '../sass/variables/_colors.scss'
import Button from '../components/Button/Button'
import Toast from '../components/Toast/Toast'
import Footer from '../components/Footer/Footer'
import { PlayerContext } from '../context/PlayerContext'
import withAuthentication from '../hoc/withAuthentication'
import ProfilePopUp from '../components/ProfilePopUp/ProfilePopUp'
import Sidebar from '../components/Sidebar/Sidebar'

function ContactPlayer({ axiosClient, userEmail }) {
  const navigate = useNavigate()
  const context = React.useContext(PlayerContext)

  const { data: playerDetail } = useQuery('playerDetail', () =>
    axiosClient.get(`/api/v1/analytics/player/${context.playerId}`)
  )

  const [showToast, setShowToast] = useState(false)

  const form = useRef()

  const clearInputs = () => {
    document.getElementById('subject').value = ''
    document.getElementById('message').value = ''
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_2pul6xy', 'template_htxkunj', form.current, process.env.REACT_APP_EMAILJS_API_KEY || '')
      .then(() => {
        setShowToast(true)
        clearInputs()
      })
  }

  return (
    <div className="contact-player-wrapper">
      <div className="nav">
        <LeftIcon onClick={() => navigate(-1)} className="userIcon" fill={Colors.primaryColorBrightGreen} />
        <ProfilePopUp className="userIcon" fill={Colors.primaryColorBrightGreen} />
      </div>
      <Sidebar />
      <main className="contact-player-content">
        <div className="contact-information">
          <Headline text="Contact a Player" color={Colors.primaryColorBrightGreen} />
          <div className="icon-summoname">
            <Avatar
              summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${playerDetail?.data.profileIconId}.png`}
            />
            <Headline text={playerDetail?.data.summonerName} color={Colors.primaryColorBrightGreen} />
          </div>
        </div>
        <div className="hr-divider" />
        <form ref={form} className="contact-player-form" onSubmit={sendEmail}>
          <label htmlFor="subject">
            <div className="label-text">Subject *</div>
            <input className="visually-hidden" type="text" name="player_name" value={playerDetail?.data.summonerName} />
            <input className="visually-hidden" type="text" name="user_email" defaultValue={userEmail} />

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
          <Button className="send-btn" type="submit" text="Send Message" />
        </form>
        {showToast && (
          <Toast
            pageRoute="TopPlayers"
            headlineToast="Succeeded!"
            bodyToast={`Your message has been sent to ${playerDetail?.data.summonerName}`}
            buttonTextToast="Back to Dashboard"
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

ContactPlayer.propTypes = {
  axiosClient: Axios,
  userEmail: string,
}

ContactPlayer.defaultProps = {
  axiosClient: Axios,
  userEmail: '',
}

export default withAuthentication(ContactPlayer)
