import React from 'react'
import { useNavigate } from 'react-router-dom'
import Headline from '../components/Headline/Headline'
import Sidebar from '../components/Sidebar/Sidebar'
import RecruitersPagesNavMenu from '../components/Header/RecruitersPagesNavMenu'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card'
import Avatar from '../components/Avatar/Avatar'
import BodyText from '../components/BodyText/BodyText'
import Colors from '../sass/variables/_colors.scss'
import Footer from '../components/Footer/Footer'
import ProfilePopUp from '../components/ProfilePopUp/ProfilePopUp'
import { CrossIcon, CompareIcon, AddIcon, CompareFilledIcon, AddPlayerShapeIcon } from '../components/Icon/icons'
import { PlayerContext } from '../context/PlayerContext'

function ComparisonPage() {
  const { playersToCompare } = React.useContext(PlayerContext)

  const navigate = useNavigate()

  const navigateToComparisonSelect = () => {
    navigate('/player-comparison-select-page')
  }

  return (
    <div className="comparison-page">
      <RecruitersPagesNavMenu className="nav-side-menu" />
      <Header />
      <Sidebar />
      <div className="main-contents">
        <div className="userIcon-wrapper">
          <ProfilePopUp />
        </div>
        <Headline text="Player Comparison" color={Colors.primaryColorBrightGreen} textAlign="center" fontSize="2rem" />
        <div className="comparison-cards-container">
          <Card>
            <div className="cross-icon-container">
              <CrossIcon className="crossIcon" fill={Colors.primaryColorBrightGreen} />
            </div>
            <div className="card-content-container">
              <Headline text={playersToCompare.player1?.summonerName} color={Colors.primaryColorBrightGreen} />
              <Avatar
                summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${playersToCompare.player1?.profileIconId}.png`}
              />
              <Headline text="Challenger" />
              <div className="kda-wrapper">
                <BodyText text="KDA" color={Colors.primaryColorBrightGreen} />
                <BodyText
                  text={`${playersToCompare.player1?.kills} / ${playersToCompare.player1?.deaths} / ${playersToCompare.player1?.assists}`}
                />
              </div>
              <div className="pkill-wrapper">
                <BodyText text={`${playersToCompare.player1?.kda}:1`} />
                <BodyText text={`P/Kill ${playersToCompare.player1?.pkill}%`} />
              </div>
              <BodyText text={`Matches: ${playersToCompare.player1?.matches}`} color={Colors.primaryColorBrightGreen} />
            </div>
          </Card>

          <div className="comparisonIcon-wrapper">
            <span className="border1-around-compareIcon" />
            <CompareIcon className="compareIcon" fill={Colors.primaryColorBrightGreen} />
            <CompareFilledIcon className="compareFilledIcon" fill={Colors.primaryColorBrightGreen} />
            <span className="border2-around-compareIcon" />
          </div>
          <Card>
            <div className="add-card-container">
              <span className="span1" />
              <AddPlayerShapeIcon className="addPlayerShapeIcon" />
              <div className="addicon-container">
                <AddIcon onClick={navigateToComparisonSelect} className="addIcon" fill="white" />
              </div>
              <BodyText text="Add Player" textAlign="center" />
              <span className="span3" />
              <span className="span4" />
            </div>
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ComparisonPage
