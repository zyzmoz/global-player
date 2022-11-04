import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'
import Header from '../components/Header/Header'
import Headline from '../components/Headline/Headline'
import BodyText from '../components/BodyText/BodyText'
import Image from '../components/Image/Image'
import Avatar from '../components/Avatar/Avatar'
import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import Tag from '../components/Tag/Tag'
import DoughnutChart from '../components/DoughnutChart/DoughnutChart'
import { MidLaneIcon, CheckIcon, LikeIcon, CrossIcon } from '../components/Icon/icons'
import Footer from '../components/Footer/Footer'
import Colors from '../sass/variables/_colors.scss'

function PlayerDetailsPage() {
  const [likeIt, setLikeIt] = useState(false)

  const navigate = useNavigate()
  const navigateToContactPlayer = () => {
    navigate(`/`)
  }
  const navigateToComparePlayer = () => {
    navigate(`/`)
  }
  const navigateToPlayerSkills = () => {
    navigate(`/`)
  }

  return (
    <div className="player-details-wrapper-1">
      <LandingPageNavMenu className="nav-side-menu" />
      <div className="player-details-page-container-1">
        <div className="player-details-page-wrapper">
          <Header />

          <main>
            <section className="player-information-wrapper">
              <div className="player-information detail">
                <div className="summoner-division-embled-container">
                  <div className="name-division-container">
                    <Headline text="Faker" color={Colors.primaryColorBrightGreen} />
                    <Headline text="CHALLENGER" />
                  </div>
                  <Image
                    imageUrl="https://support-leagueoflegends.riotgames.com/hc/article_attachments/4415894930323/Challenger_Emblem_2022.png"
                    imageWidth="100px"
                    imageHeight="auto"
                  />
                </div>
                <div className="avatar-icons-container">
                  <Avatar />
                  <div className="role-like-container">
                    <div className="background-icon">
                      <MidLaneIcon
                        height={35}
                        width={35}
                        style={{
                          fill: 'white',
                        }}
                      />
                    </div>
                    {likeIt && (
                      <button type="button" className="btn-no-background" onClick={() => setLikeIt(false)}>
                        <LikeIcon
                          height={42}
                          width={42}
                          style={{ marginLeft: '.4rem', fill: Colors.primaryColorBrightGreen }}
                        />
                      </button>
                    )}
                    {!likeIt && (
                      <button type="button" className="btn-no-background" onClick={() => setLikeIt(true)}>
                        <LikeIcon height={42} width={42} style={{ marginLeft: '.4rem' }} />
                      </button>
                    )}
                  </div>
                </div>

                <button type="button" className="secondary" onClick={() => navigateToContactPlayer()}>
                  Contact player
                </button>
              </div>
            </section>
            <section className="player-skills detail">
              <Card width="">
                <Headline text="PERSONAL SKILLS" />
                <div className="progress-bar-container">
                  <BodyText text="Team Player" />
                  <div className="progress-bar">Progres bar here</div>
                  <BodyText text="Agressive" />
                  <div className="progress-bar">Progres bar here</div>
                  <BodyText text="Bold" />
                  <div className="progress-bar">Progres bar here</div>
                </div>
                <div className="hr-divider" />
                <div className="vr-divider" />
                <Headline text="TECH SKILLS" />
                <div className="radar-chart">Radar Chart Here!</div>
                <div className="tag-container">
                  <Tag text="Farming" />
                  <Tag text="Dueling" />
                  <Tag text="Coordination" />
                  <Tag text="Deffensive" />
                  <Tag text="Offensive" />
                </div>
                <Button text="Show more" className="button" onClick={() => navigateToPlayerSkills()} />
              </Card>
            </section>
            <section className="player-game-data detail">
              <Card width="">
                <div className="ranked-info-container">
                  <div className="ranked-info-box1">
                    <Headline text="MATCHES" textAlign="" color="" />
                    <BodyText text="38.137" textAlign="" />
                  </div>
                  <div className="ranked-info-box2">
                    <div className="rank-container">
                      <Headline text="RANK" textAlign="" color="" />
                      <BodyText text="I" textAlign="" />
                    </div>
                    <div className="vr-divider" />
                    <div className="losses-container">
                      <Headline text="LOSSES" textAlign="center" color="" />
                      <BodyText text="25" textAlign="center" />
                    </div>
                  </div>
                  <div className="ranked-info-box3">
                    <Headline text="LEAGUEPOINTS" textAlign="" color="" />
                    <BodyText text="100" textAlign="" />
                  </div>
                </div>
                <div className="doughnut-chart-container">
                  <DoughnutChart
                    width="230px"
                    height="230px"
                    winRate="60"
                    playerData={{
                      data: [5, 4],
                    }}
                  />
                  <div className="kda-container">
                    <div className="kda-content">
                      <Headline text="KDA" color="" textAlign="" />
                      <BodyText text="7.1 / 7.4 / 9.7" />
                    </div>
                    <div className="vr-divider" />
                    <div className="kda-content">
                      <BodyText text="2.27:1" />
                      <BodyText text="P/Kill 55%" />
                    </div>
                    <div className="kda-content losses-container-copy">
                      <Headline text="LOSSES" textAlign="center" color="" />
                      <BodyText text="25" textAlign="left" />
                    </div>
                  </div>
                </div>
                <div className="vr-divider" />
                <div className="league-data">
                  <div className="title-icon-container">
                    <Headline text="FRESHBLOOD" color={Colors.primaryColorBrightGreen} />
                    <CheckIcon height={45} width={45} style={{ fill: Colors.primaryColorBrightGreen }} />
                  </div>
                  <div className="title-icon-container">
                    <Headline text="INACTIVE" color={Colors.primaryColorBrightGreen} />
                    <CrossIcon height={45} width={45} style={{ fill: Colors.primaryColorBrightGreen }} />
                  </div>
                  <div className="title-icon-container">
                    <Headline text="VETERAN" color={Colors.primaryColorBrightGreen} />
                    <CheckIcon height={45} width={45} style={{ fill: Colors.primaryColorBrightGreen }} />
                  </div>
                  <div className="title-icon-container">
                    <Headline text="HOTSTREAK" color={Colors.primaryColorBrightGreen} />
                    <CheckIcon height={45} width={45} style={{ fill: Colors.primaryColorBrightGreen }} />
                  </div>
                </div>
              </Card>
            </section>
            <div className="compare-button">
              <Button text="Compare player" className="button" onClick={() => navigateToComparePlayer()} />
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PlayerDetailsPage
