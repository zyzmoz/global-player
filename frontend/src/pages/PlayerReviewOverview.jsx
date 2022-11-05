import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import Button from '../components/Button/Button'
import { PlayerContext } from '../context/PlayerContext'
import Footer from '../components/Footer/Footer'
import Headline from '../components/Headline/Headline'
import Colors from '../sass/variables/_colors.scss'
import { CrossIcon, UserIcon } from '../components/Icon/icons'
import Sidebar from '../components/Sidebar/Sidebar'
import Image from '../components/Image/Image'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import RadarChart from '../components/RadarChart/RadarChart'

function PlayerReviewOverview() {
  const { playerData, playerId } = React.useContext(PlayerContext)
  const navigate = useNavigate()
  const { data: playerOverview } = useQuery('playerOverview', () =>
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/review/${playerId}`)
  )

  return (
    <div className="player-review">
      <div className="nav">
        <CrossIcon onClick={() => navigate(-1)} className="userIcon" fill={Colors.primaryColorBrightGreen} />
        <UserIcon className="userIcon" fill={Colors.primaryColorBrightGreen} />
      </div>
      <Sidebar />
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
        <ProgressBar heightSize="30.42px" progress={playerOverview?.data.teamPlayer} text="Team Player" />
        <ProgressBar heightSize="30.42px" progress={playerOverview?.data.leadership} text="Leadership" />
        <ProgressBar heightSize="30.42px" progress={playerOverview?.data.criticalThinking} text="Critical Thinking" />
        <ProgressBar heightSize="30.42px" progress={playerOverview?.data.problemSolving} text="Problem Solving" />
      </div>

      <div className="hr-divider" style={{ margin: '8rem' }} />

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
          {playerOverview?.data.coordination ? <Button buttonType="button-outline" text="Coordination" /> : ''}
          {playerOverview?.data.deffensive ? <Button buttonType="button-outline" text="Deffensive" /> : ''}
          {playerOverview?.data.dueling ? <Button buttonType="button-outline" text="Dueling" /> : ''}
          {playerOverview?.data.farming ? <Button buttonType="button-outline" text="Farming" /> : ''}
          {playerOverview?.data.offensive ? <Button buttonType="button-outline" text="Steadiness" /> : ''}
          {playerOverview?.data.picking ? <Button buttonType="button-outline" text="Offensive" /> : ''}
          {playerOverview?.data.reactionTime ? <Button buttonType="button-outline" text="Picking" /> : ''}
          {playerOverview?.data.skirmishing ? <Button buttonType="button-outline" text="Reaction Time" /> : ''}
          {playerOverview?.data.steadiness ? <Button buttonType="button-outline" text="Skirmishing" /> : ''}
          {playerOverview?.data.timing ? <Button buttonType="button-outline" text="Timing" /> : ''}
          {playerOverview?.data.roaming ? <Button buttonType="button-outline" text="Roaming" /> : ''}
        </div>
      </div>

      <div className="submit-wrapper">
        <Button text="+ Add a new Review" onClick={() => navigate('/review-player')} />
      </div>
      <Footer />
    </div>
  )
}

export default PlayerReviewOverview
