import { useQuery } from 'react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'
import Header from '../components/Header/Header'
import Headline from '../components/Headline/Headline'
import BodyText from '../components/BodyText/BodyText'
import Image from '../components/Image/Image'
import Avatar from '../components/Avatar/Avatar'
import RoleIcons from '../components/RoleIcons/RoleIcons'
import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import Tag from '../components/Tag/Tag'
import DoughnutChart from '../components/DoughnutChart/DoughnutChart'
import { CheckIcon, LikeIcon, CrossIcon } from '../components/Icon/icons'
import Footer from '../components/Footer/Footer'
import Colors from '../sass/variables/_colors.scss'
import { PlayerContext } from '../context/PlayerContext'

function PlayerDetailsPage() {
  const context = React.useContext(PlayerContext)

  const { data: playerDetail } = useQuery('playerDetail', () =>
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/analytics/player/${context.playerId}`)
  )

  const [likeIt, setLikeIt] = useState(false)

  const navigate = useNavigate()
  const navigateToContactPlayer = () => {
    navigate(`/`)
  }
  const navigateToComparePlayer = () => {
    context.setPlayersToCompare({
      player1: playerDetail?.data.id,
      player2: null,
    })
    navigate(`/comparison`)
  }
  const navigateToPlayerSkills = () => {
    context.setPlayerData(playerDetail.data)
    navigate('/player-review-overview')
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
                    <Headline text={playerDetail?.data.summonerName} color={Colors.primaryColorBrightGreen} />
                    <Headline text={playerDetail?.data.rank} />
                  </div>
                  <Image
                    imageUrl="https://support-leagueoflegends.riotgames.com/hc/article_attachments/4415894930323/Challenger_Emblem_2022.png"
                    imageWidth="100px"
                    imageHeight="auto"
                  />
                </div>
                <div className="avatar-icons-container">
                  <Avatar
                    summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${playerDetail?.data.profileIconId}.png`}
                  />
                  <div className="role-like-container">
                    <div className="background-icon">
                      <div className="role">{RoleIcons(playerDetail?.data.role || '')}</div>
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
                    <BodyText text={playerDetail?.data.matches} textAlign="" />
                  </div>
                  <div className="ranked-info-box2">
                    <div className="rank-container">
                      <Headline text="RANK" textAlign="" color="" />
                      <BodyText text="I" textAlign="" />
                    </div>
                    <div className="vr-divider" />
                    <div className="losses-container">
                      <Headline text="LOSSES" textAlign="center" color="" />
                      <BodyText text={playerDetail?.data.losses} textAlign="center" />
                    </div>
                  </div>
                  <div className="ranked-info-box3">
                    <Headline text="LEAGUEPOINTS" textAlign="" color="" />
                    <BodyText text="100" textAlign="" />
                  </div>
                </div>
                <div className="doughnut-chart-container">
                  <DoughnutChart
                    title="WIN RATE"
                    width="230px"
                    height="230px"
                    winRate={playerDetail?.data.winRate}
                    playerData={{
                      data: [playerDetail?.data.wins, playerDetail?.data.losses],
                    }}
                  />
                  <div className="kda-container">
                    <div className="kda-content">
                      <Headline text="KDA" color="" textAlign="" />
                      <BodyText
                        text={`${playerDetail?.data.kills} / ${playerDetail?.data.deaths} / ${playerDetail?.data.assists}`}
                      />
                    </div>
                    <div className="vr-divider" />
                    <div className="kda-content">
                      <BodyText text={`${playerDetail?.data.kda}:1`} />
                      <BodyText text={`P/Kill ${playerDetail?.data.pkill}%`} />
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
                    {playerDetail?.data.freshBlood ? (
                      <CheckIcon height={45} width={45} style={{ fill: Colors.primaryColorBrightGreen }} />
                    ) : (
                      <CrossIcon height={45} width={45} style={{ fill: Colors.primaryColorBrightGreen }} />
                    )}
                  </div>
                  <div className="title-icon-container">
                    <Headline text="INACTIVE" color={Colors.primaryColorBrightGreen} />
                    {playerDetail?.data.inactive ? (
                      <CheckIcon height={45} width={45} style={{ fill: Colors.primaryColorBrightGreen }} />
                    ) : (
                      <CrossIcon height={45} width={45} style={{ fill: Colors.primaryColorBrightGreen }} />
                    )}
                  </div>
                  <div className="title-icon-container">
                    <Headline text="VETERAN" color={Colors.primaryColorBrightGreen} />
                    {playerDetail?.data.veteran ? (
                      <CheckIcon height={45} width={45} style={{ fill: Colors.primaryColorBrightGreen }} />
                    ) : (
                      <CrossIcon height={45} width={45} style={{ fill: Colors.primaryColorBrightGreen }} />
                    )}
                  </div>
                  <div className="title-icon-container">
                    <Headline text="HOTSTREAK" color={Colors.primaryColorBrightGreen} />
                    {playerDetail?.data.hotStreak ? (
                      <CheckIcon height={45} width={45} style={{ fill: Colors.primaryColorBrightGreen }} />
                    ) : (
                      <CrossIcon height={45} width={45} style={{ fill: Colors.primaryColorBrightGreen }} />
                    )}
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
