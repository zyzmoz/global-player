import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Axios } from 'axios'
import Avatar from '../components/Avatar/Avatar'
import BodyText from '../components/BodyText/BodyText'
import Headline from '../components/Headline/Headline'
import Input from '../components/Input/Input'
import { CrossIcon, UserIcon } from '../components/Icon/icons'
import Colors from '../sass/variables/_colors.scss'
import Footer from '../components/Footer/Footer'
import { PlayerContext } from '../context/PlayerContext'
import withAuthentication from '../hoc/withAuthentication'

function ContactPlayer({ axiosClient }) {
  const navigate = useNavigate()
  const context = React.useContext(PlayerContext)

  const { data: playerDetail } = useQuery('playerDetail', () =>
    axiosClient.get(`/api/v1/analytics/player/${context.playerId}`)
  )

  return (
    <div className="contact-player-wrapper">
      <div className="nav">
        <CrossIcon onClick={() => navigate(-1)} className="userIcon" fill={Colors.primaryColorBrightGreen} />
        <UserIcon className="userIcon" fill={Colors.primaryColorBrightGreen} />
      </div>
      <main className="contact-player-content">
        <div className="contact-information">
          <Headline text="Contact a Player" />
          <div className="icon-summoname">
            <Avatar
              summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${playerDetail?.data.profileIconId}.png`}
            />
            <BodyText text={playerDetail?.data.summonerName} />
          </div>
        </div>
        <div className="hr-divider" />
        <form
          onSubmit={() => {
            navigate('/player-details')
          }}
        >
          <Input className="subject" label="Subject *" placeholder="Enter subject" id="subject" />
          <label htmlFor="message">
            {' '}
            Message *
            <textarea label="Message *" placeholder="Enter message" id="message" />
          </label>
          <input className="send-btn" type="submit" value="Send Message" />
        </form>
      </main>
      <Footer />
    </div>
  )
}

ContactPlayer.propTypes = {
  axiosClient: Axios,
}

ContactPlayer.defaultProps = {
  axiosClient: Axios,
}

export default withAuthentication(ContactPlayer)
