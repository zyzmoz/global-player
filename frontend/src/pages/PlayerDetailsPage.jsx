import { string } from 'prop-types'
import { useQuery } from 'react-query'
import { Axios } from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'
import Headline from '../components/Headline/Headline'
import BodyText from '../components/BodyText/BodyText'
import Image from '../components/Image/Image'
import Avatar from '../components/Avatar/Avatar'
import RoleIcons from '../components/RoleIcons/RoleIcons'
import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import Tag from '../components/Tag/Tag'
import DoughnutChart from '../components/DoughnutChart/DoughnutChart'
import { CheckIcon, LikeIcon, CrossIcon, UserIcon } from '../components/Icon/icons'
import Footer from '../components/Footer/Footer'
import Colors from '../sass/variables/_colors.scss'
import { PlayerContext } from '../context/PlayerContext'
import withAuthentication from '../hoc/withAuthentication'
import Sidebar from '../components/Sidebar/Sidebar'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import RadarChart from '../components/RadarChart/RadarChart'

function PlayerDetailsPage({ axiosClient, userId }) {
  const context = React.useContext(PlayerContext)

  const { data: favoritePlayers } = useQuery('favoritePlayersData', () => axiosClient.get(`/api/v1/favorite/${userId}`))

  const { data: playerDetail } = useQuery('playerDetail', () =>
    axiosClient.get(`/api/v1/analytics/player/${context.playerId}`)
  )

  const [likeIt, setLikeIt] = useState(favoritePlayers?.data.filter((f) => f.id !== playerDetail?.data.id).length > 0)

  const navigate = useNavigate()
  const navigateToContactPlayer = () => {
    navigate(`/contact-player`)
  }
  const navigateToComparePlayer = () => {
    context.setPlayersToCompare({
      player1: playerDetail?.data,
      player2: null,
    })
    navigate(`/comparison`)
  }
  const navigateToPlayerSkills = () => {
    context.setPlayerData(playerDetail.data)
    navigate('/player-review-overview')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleFavorite = async () => {
    if (likeIt) {
      const player = favoritePlayers?.data?.find((fav) => fav.id === playerDetail?.data?.id)
      await axiosClient.delete(`/api/v1/favorite/${player.favoriteId}`)
      setLikeIt(false)
    } else {
      await axiosClient.post('/api/v1/favorite', {
        userId,
        playerId: playerDetail?.data.id,
      })
      setLikeIt(true)
    }
  }

  return (
    <div className="player-details-wrapper-1">
      {/* <LandingPageNavMenu className="nav-side-menu" /> */}
      <div className="player-details-page-container-1">
        <div className="nav">
          <CrossIcon onClick={() => navigate(-1)} className="userIcon" fill={Colors.primaryColorBrightGreen} />
          <UserIcon className="userIcon" fill={Colors.primaryColorBrightGreen} />
        </div>
        <Sidebar />
        <div className="player-details-page-wrapper">
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
                      <button type="button" className="btn-no-background" onClick={handleFavorite}>
                        <LikeIcon
                          height={42}
                          width={42}
                          style={{ marginLeft: '.4rem', fill: Colors.primaryColorBrightGreen }}
                        />
                      </button>
                    )}
                    {!likeIt && (
                      <button type="button" className="btn-no-background" onClick={handleFavorite}>
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
                  {playerDetail?.data.skills.personalSkills.map((skill) => (
                    <>
                      <BodyText text={skill.personalSkill} />
                      <ProgressBar progress={skill.value} text={`${skill.value?.toFixed(1)}%`} heightSize="1.125rem" />
                    </>
                  ))}
                </div>
                <div className="hr-divider" />
                <div className="vr-divider" />
                <Headline text="TECH SKILLS" />
                <RadarChart
                  width="250px"
                  height="auto"
                  playerSkills={{
                    data: [
                      playerDetail?.data.skills.skills.farming,
                      playerDetail?.data.skills.skills.dueling,
                      playerDetail?.data.skills.skills.timing,
                      playerDetail?.data.skills.skills.picking,
                      playerDetail?.data.skills.skills.deffensive,
                      playerDetail?.data.skills.skills.roaming,
                    ],
                  }}
                />
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

PlayerDetailsPage.propTypes = {
  axiosClient: Axios,
  userId: string,
}

PlayerDetailsPage.defaultProps = {
  axiosClient: Axios,
  userId: '',
}

export default withAuthentication(PlayerDetailsPage)
