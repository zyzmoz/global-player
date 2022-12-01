import { useContext, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Axios } from 'axios'
import BodyText from '../components/BodyText/BodyText'
import Button from '../components/Button/Button'
import Footer from '../components/Footer/Footer'
import Headline from '../components/Headline/Headline'
import Header from '../components/Header/Header'
import RecruitersPagesNavMenu from '../components/Header/RecruitersPagesNavMenu'
import ProfilePopUp from '../components/ProfilePopUp/ProfilePopUp'
import { LeftIcon } from '../components/Icon/icons'
import Image from '../components/Image/Image'
import Slider from '../components/Slider/Slider'
import Sidebar from '../components/Sidebar/Sidebar'
import Toast from '../components/Toast/Toast'
import { PlayerContext } from '../context/PlayerContext'
import Colors from '../sass/variables/_colors.scss'
import withAuthentication from '../hoc/withAuthentication'

function ReviewPlayer({ axiosClient }) {
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

  const [showToast, setShowToast] = useState(false)

  const form = useRef()

  const changeBackground = () => {
    document.getElementById('toastBackground').classList.add('toast-background')
  }

  const handleSubmitReview = async (e) => {
    e.preventDefault()
    await axiosClient.post('/api/v1/review/', {
      ...playerReview,
    })

    setShowToast(true)
    changeBackground()
  }

  return (
    <div className="wrapper-for-toast">
      <div className="player-review" id="toastBackground">
        <Sidebar />
        <div className="player-review-wrapper">
          <div className="nav">
            <RecruitersPagesNavMenu className="nav-side-menu" />
            <Header />
            <div className="nav-desktop">
              <LeftIcon onClick={() => navigate(-1)} className="leftIcon" fill={Colors.primaryColorBrightGreen} />
              <ProfilePopUp />
            </div>
          </div>
          <Headline textAlign="center" text="Add Reviews" color={Colors.primaryColorBrightGreen} />
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
          <div className="skills-headline-wrapper">
            <Headline textAlign="center" text="Soft Skills" color={Colors.primaryColorBrightGreen} fontSize="medium" />
            <BodyText textAlign="center" text="Please move sliders how the player behaved on your team.  " />
          </div>
          <form onSubmit={handleSubmitReview} ref={form}>
            <div className="all-sliders-container">
              <Slider
                labelLeft="Team Player"
                labelRight="Self Promotion"
                type="range"
                minValue={0}
                maxValue={100}
                value={playerReview.teamPlayer}
                onChange={(v) => handleReviewChanges({ teamPlayer: v })}
              />
              <Slider
                labelLeft="Leadership"
                labelRight="Backseat Player"
                type="range"
                minValue={0}
                maxValue={100}
                value={playerReview.leadership}
                onChange={(v) => handleReviewChanges({ leadership: v })}
              />
              <Slider
                labelLeft="Critical Thinking"
                labelRight="Creative Thinking"
                type="range"
                minValue={0}
                maxValue={100}
                value={playerReview.criticalThinking}
                onChange={(v) => handleReviewChanges({ criticalThinking: v })}
              />
              <Slider
                labelLeft="Problem Solving"
                labelRight="Future Oriented"
                type="range"
                minValue={0}
                maxValue={100}
                value={playerReview.problemSolving}
                onChange={(v) => handleReviewChanges({ problemSolving: v })}
              />
            </div>
            <div className="hr-divider" />
            <div className="skills-headline-wrapper">
              <Headline
                textAlign="center"
                text="Techinical Skills"
                color={Colors.primaryColorBrightGreen}
                fontSize="medium"
              />
              <BodyText textAlign="center" text="Please select which technical skills you think the player has." />
            </div>
            <div className="review-buttons add-reviews">
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
              {/* <Button onClick={handleSubmitReview} text="Submit" /> */}
              <Button text="Submit" type="submit" />
            </div>
          </form>
          <Footer />
        </div>
      </div>
      {showToast && (
        <Toast
          pageRoute="TopPlayers"
          headlineToast="Thank you for your valuable review!"
          bodyToast="We are so happy to hear from you!"
          buttonTextToast="Back to Dashboard"
        />
      )}
    </div>
  )
}

ReviewPlayer.propTypes = {
  axiosClient: Axios,
}

ReviewPlayer.defaultProps = {
  axiosClient: Axios,
}

export default withAuthentication(ReviewPlayer)
