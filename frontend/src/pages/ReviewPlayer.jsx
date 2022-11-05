import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import BodyText from '../components/BodyText/BodyText'
import Button from '../components/Button/Button'
import Footer from '../components/Footer/Footer'
import Headline from '../components/Headline/Headline'
import { CrossIcon, UserIcon } from '../components/Icon/icons'
import Image from '../components/Image/Image'
import Sidebar from '../components/Sidebar/Sidebar'
import Slider from '../components/Slider/Slider'
import { PlayerContext } from '../context/PlayerContext'
import Colors from '../sass/variables/_colors.scss'

function ReviewPlayer() {
  const { playerData } = useContext(PlayerContext)
  const navigate = useNavigate()
  const [playerReview, setPlayerReview] = useState({
    playerId: playerData.id,
    userId: 'test',
    teamPlayer: 50,
    leadership: 50,
    criticalThinking: 50,
    problemSolving: 50,
    coordination: false,
    deffensive: false,
    dueling: false,
    farming: false,
    offensive: false,
    picking: false,
    reactionTime: false,
    roaming: false,
    skirmishing: false,
    steadiness: false,
    timing: false,
  })

  const handleReviewChanges = (change = {}) => {
    setPlayerReview({ ...playerReview, ...change })
  }

  const handleSubmitReview = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/review/`, {
      ...playerReview,
    })

    navigate(-1)
  }

  return (
    <div className="player-review">
      <div className="nav">
        <CrossIcon onClick={() => navigate(-1)} className="userIcon" fill={Colors.primaryColorBrightGreen} />
        <UserIcon className="userIcon" fill={Colors.primaryColorBrightGreen} />
      </div>
      <Sidebar />
      <Headline textAlign="center" text="Add Reviews" color={Colors.primaryColorBrightGreen} />

      <BodyText textAlign="center" text="Please move sliders how the player behaved on your team.  " />

      <div className="player-info">
        <Image
          imageUrl="https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/4379.png"
          imageWidth="140px"
          imageHeight="140px"
          radius="50%"
          imageBorder={`2px solid ${Colors.primaryColorBrightGreen}`}
        />
        <Headline text={playerData.summonerName} color={Colors.primaryColorBrightGreen} />
      </div>

      <Headline textAlign="center" text="Soft Skills" color={Colors.primaryColorBrightGreen} fontSize="medium" />
      <Slider
        label="Team Player"
        type="range"
        minValue={0}
        maxValue={100}
        value={playerReview.teamPlayer}
        onChange={(v) => handleReviewChanges({ teamPlayer: v })}
      />
      <Slider
        label="Leadership"
        type="range"
        minValue={0}
        maxValue={100}
        value={playerReview.leadership}
        onChange={(v) => handleReviewChanges({ leadership: v })}
      />
      <Slider
        label="Critical Thinking"
        type="range"
        minValue={0}
        maxValue={100}
        value={playerReview.criticalThinking}
        onChange={(v) => handleReviewChanges({ criticalThinking: v })}
      />
      <Slider
        label="Problem-Solving"
        type="range"
        minValue={0}
        maxValue={100}
        value={playerReview.problemSolving}
        onChange={(v) => handleReviewChanges({ problemSolving: v })}
      />
      <div className="hr-divider" style={{ margin: '8rem' }} />

      <Headline textAlign="center" text="Techinical Skills" color={Colors.primaryColorBrightGreen} fontSize="medium" />
      <BodyText textAlign="center" text="Please select which technical skills you think the player has." />
      <div className="review-buttons">
        <Button
          onClick={() => handleReviewChanges({ coordination: !playerReview.coordination })}
          buttonType={!playerReview.coordination ? 'button-outline' : ''}
          text="Coordination"
        />
        <Button
          onClick={() => handleReviewChanges({ deffensive: !playerReview.deffensive })}
          buttonType={!playerReview.deffensive ? 'button-outline' : ''}
          text="Deffensive"
        />
        <Button
          onClick={() => handleReviewChanges({ dueling: !playerReview.dueling })}
          buttonType={!playerReview.dueling ? 'button-outline' : ''}
          text="Dueling"
        />
        <Button
          onClick={() => handleReviewChanges({ farming: !playerReview.farming })}
          buttonType={!playerReview.farming ? 'button-outline' : ''}
          text="Farming"
        />
        <Button
          onClick={() => handleReviewChanges({ offensive: !playerReview.offensive })}
          buttonType={!playerReview.offensive ? 'button-outline' : ''}
          text="Offensive"
        />
        <Button
          onClick={() => handleReviewChanges({ picking: !playerReview.picking })}
          buttonType={!playerReview.picking ? 'button-outline' : ''}
          text="Picking"
        />
        <Button
          onClick={() => handleReviewChanges({ reactionTime: !playerReview.reactionTime })}
          buttonType={!playerReview.reactionTime ? 'button-outline' : ''}
          text="Reaction Time"
        />
        <Button
          onClick={() => handleReviewChanges({ skirmishing: !playerReview.skirmishing })}
          buttonType={!playerReview.skirmishing ? 'button-outline' : ''}
          text="Skirmishing"
        />
        <Button
          onClick={() => handleReviewChanges({ steadiness: !playerReview.steadiness })}
          buttonType={!playerReview.steadiness ? 'button-outline' : ''}
          text="Steadiness"
        />
        <Button
          onClick={() => handleReviewChanges({ timing: !playerReview.timing })}
          buttonType={!playerReview.timing ? 'button-outline' : ''}
          text="Timing"
        />
        <Button
          onClick={() => handleReviewChanges({ roaming: !playerReview.roaming })}
          buttonType={!playerReview.roaming ? 'button-outline' : ''}
          text="Roaming"
        />
      </div>

      <div className="submit-wrapper">
        <Button onClick={handleSubmitReview} text="Submit" />
      </div>
      <Footer />
    </div>
  )
}

export default ReviewPlayer
