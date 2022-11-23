import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Axios } from 'axios'
import Tag from '../components/Tag/Tag'
import Button from '../components/Button/Button'
import Header from '../components/Header/Header'
import RecruitersPagesNavMenu from '../components/Header/RecruitersPagesNavMenu'
import { PlayerContext } from '../context/PlayerContext'
import Footer from '../components/Footer/Footer'
import Headline from '../components/Headline/Headline'
import ProfilePopUp from '../components/ProfilePopUp/ProfilePopUp'
import Colors from '../sass/variables/_colors.scss'
import { LeftIcon } from '../components/Icon/icons'
import Image from '../components/Image/Image'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import RadarChart from '../components/RadarChart/RadarChart'
import withAuthentication from '../hoc/withAuthentication'
import BodyText from '../components/BodyText/BodyText'

function PlayerReviewOverview({ axiosClient }) {
  const { playerData, playerId } = React.useContext(PlayerContext)
  const navigate = useNavigate()
  const { data: playerOverview } = useQuery('playerOverview', () => axiosClient.get(`/api/v1/review/${playerId}`))

  return (
    <div className="player-review">
      <div className="nav">
        <RecruitersPagesNavMenu className="nav-side-menu" />
        <Header />
        <div className="nav-desktop">
          <LeftIcon onClick={() => navigate(-1)} className="leftIcon" fill={Colors.primaryColorBrightGreen} />
          <ProfilePopUp />
        </div>
      </div>
      <Headline textAlign="center" text="Recruiter Reviews" color={Colors.primaryColorBrightGreen} />

      <div className="player-info">
        <Image
          imageUrl={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${playerData.profileIconId}.png`}
          imageWidth="140px"
          imageHeight="140px"
          radius="50%"
          imageBorder={`2px solid ${Colors.primaryColorBrightGreen}`}
        />
        <Headline text={playerData.summonerName} color={Colors.primaryColorBrightGreen} />
      </div>

      <Headline textAlign="center" text="Soft Skills" color={Colors.primaryColorBrightGreen} fontSize="medium" />

      <div className="progress-wrapper">
        <div className="progressbar-label-container">
          <BodyText text="Team Player" />
          <ProgressBar
            heightSize="30.42px"
            progress={playerOverview?.data.teamPlayer}
            text={`${playerOverview?.data.teamPlayer?.toFixed(1)}%`}
          />
        </div>
        <div className="progressbar-label-container">
          <BodyText text="Leadership" />
          <ProgressBar
            heightSize="30.42px"
            progress={playerOverview?.data.leadership}
            text={`${playerOverview?.data.leadership?.toFixed(1)}%`}
          />
        </div>
        <div className="progressbar-label-container">
          <BodyText text="Critical Thinking" />
          <ProgressBar
            heightSize="30.42px"
            progress={playerOverview?.data.criticalThinking}
            text={`${playerOverview?.data.criticalThinking?.toFixed(1)}%`}
          />
        </div>
        <div className="progressbar-label-container">
          <BodyText text="Problem Solving" />
          <ProgressBar
            heightSize="30.42px"
            progress={playerOverview?.data.problemSolving}
            text={`${playerOverview?.data.problemSolving?.toFixed(1)}%`}
          />
        </div>
      </div>

      <div className="hr-divider" />

      <Headline textAlign="center" text="Techinical Skills" color={Colors.primaryColorBrightGreen} fontSize="medium" />

      <div className="techinical-skills">
        {/* 
    labels: [`Farming`, `Dueling`, `Timing`, `Picking`, `Deffensive`, `Roaming`],
        
        */}
        <RadarChart
          width="350px"
          height="auto"
          playerSkills={{
            data: [
              playerOverview?.data.farming,
              playerOverview?.data.dueling,
              playerOverview?.data.timing,
              playerOverview?.data.picking,
              playerOverview?.data.deffensive,
              playerOverview?.data.roaming,
            ],
          }}
        />

        <div className="review-buttons">
          {playerOverview?.data.coordination ? (
            <Tag text="Coordination" reviews={playerOverview?.data.coordination} />
          ) : (
            ''
          )}
          {playerOverview?.data.deffensive ? <Tag text="Deffensive" reviews={playerOverview?.data.deffensive} /> : ''}
          {playerOverview?.data.dueling ? <Tag text="Dueling" reviews={playerOverview?.data.dueling} /> : ''}
          {playerOverview?.data.farming ? <Tag text="Farming" reviews={playerOverview?.data.farming} /> : ''}
          {playerOverview?.data.offensive ? <Tag text="Steadiness" reviews={playerOverview?.data.offensive} /> : ''}
          {playerOverview?.data.picking ? <Tag text="Offensive" reviews={playerOverview?.data.picking} /> : ''}
          {playerOverview?.data.reactionTime ? <Tag text="Picking" reviews={playerOverview?.data.reactionTime} /> : ''}
          {playerOverview?.data.skirmishing ? (
            <Tag text="Reaction Time" reviews={playerOverview?.data.skirmishing} />
          ) : (
            ''
          )}
          {playerOverview?.data.steadiness ? <Tag text="Skirmishing" reviews={playerOverview?.data.steadiness} /> : ''}
          {playerOverview?.data.timing ? <Tag text="Timing" reviews={playerOverview?.data.timing} /> : ''}
          {playerOverview?.data.roaming ? <Tag text="Roaming" reviews={playerOverview?.data.roaming} /> : ''}
        </div>
      </div>

      <div className="submit-wrapper">
        <Button text="+ Add a new Review" onClick={() => navigate('/review-player')} />
      </div>
      <Footer />
    </div>
  )
}

PlayerReviewOverview.propTypes = {
  axiosClient: Axios,
}

PlayerReviewOverview.defaultProps = {
  axiosClient: Axios,
}

export default withAuthentication(PlayerReviewOverview)
