/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
import { useQuery } from 'react-query'
import { Axios } from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import RecruitersPagesNavMenu from '../components/Header/RecruitersPagesNavMenu'
import Headline from '../components/Headline/Headline'
import BodyText from '../components/BodyText/BodyText'
import Avatar from '../components/Avatar/Avatar'
import Card from '../components/Card/Card'
import DoughnutChart from '../components/DoughnutChart/DoughnutChart'
import { CrossIcon, CompareIcon, TrophyIcon, UpIcon, LeftIcon, CompareFilledIcon } from '../components/Icon/icons'
import Footer from '../components/Footer/Footer'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import RadarChart from '../components/RadarChart/RadarChart'
import LineChart from '../components/LineChart/LineChart'
import Table from '../components/Table/Table'
import TableHeader from '../components/Table/TableHeader'
import TableItem from '../components/Table/TableItem'
import Image from '../components/Image/Image'
import ProfilePopUp from '../components/ProfilePopUp/ProfilePopUp'
import Header from '../components/Header/Header'
import RoleIcons from '../components/RoleIcons/RoleIcons'
import Colors from '../sass/variables/_colors.scss'
import { PlayerContext } from '../context/PlayerContext'
import withAuthentication from '../hoc/withAuthentication'

function ComparisonResultsPage({ axiosClient }) {
  const context = React.useContext(PlayerContext)
  const navigate = useNavigate()

  const { data: player1 } = useQuery('player1', () =>
    axiosClient.get(`/api/v1/analytics/player/${context.playersToCompare.player1.id}`)
  )

  const { data: player2 } = useQuery('player2', () =>
    axiosClient.get(`/api/v1/analytics/player/${context.playersToCompare.player2.id}`)
  )

  const { data: player1Matches } = useQuery('player1Matches', () =>
    axiosClient.get(`/api/v1/playerMatch/${context.playersToCompare.player1.id}`)
  )

  const { data: player2Matches } = useQuery('player2Matches', () =>
    axiosClient.get(`/api/v1/playerMatch/${context.playersToCompare.player2.id}`)
  )

  const createKdaArray = (matches) =>
    matches
      ?.filter((match) => !!match.assists)
      ?.slice(0, 10)
      ?.map((match) => (match.kills + match.assists) / (match.deaths || 1))

  // const player1KdaArray = player1Matches?.data
  // eslint-disable-next-line array-callback-return
  const player1KdaArray = createKdaArray(player1Matches?.data)
  const player2KdaArray = createKdaArray(player2Matches?.data)

  return (
    <div className="comparison-results-page">
      <div className="comparison-results-page-whole-wrapper">
        <RecruitersPagesNavMenu className="nav-side-menu" />
        <Header />
        <div className="desktop-header">
          <LeftIcon
            className="leftIcon"
            fill={Colors.primaryColorBrightGreen}
            onClick={() => navigate(`/player-comparison-select-page`)}
          />
          <ProfilePopUp />
        </div>
        <div className="comparison-results-page-wrapper">
          <Headline text="Player Comparison" color={Colors.primaryColorBrightGreen} textAlign="center" />
          <div className="comparison-cards-container-desktop">
            <Card>
              <div className="cross-icon-container">
                <CrossIcon className="crossIcon" fill={Colors.primaryColorBrightGreen} />
              </div>
              <div className="card-content-container">
                <div className="name-avatar-rank-wrapper">
                  <BodyText text={player1?.data.summonerName} color={Colors.primaryColorBrightGreen} />
                  <Avatar
                    role={player1?.data.role}
                    summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${player1?.data.profileIconId}.png`}
                    imageWidth="1200px"
                    imageHeight="120px"
                  />
                  <Headline text={player1?.data.rank} color={Colors.secondaryColorSkyBlue} />
                </div>
                <div className="kda-pkill-matches-wrapper">
                  <div className="kda-wrapper">
                    <BodyText text="KDA" color={Colors.primaryColorBrightGreen} />
                    <BodyText text={`${player1?.data.kills} / ${player1?.data.deaths} / ${player1?.data.assists}`} />
                  </div>
                  <div className="pkill-wrapper">
                    <BodyText text={`${player1?.data.kda}:1`} color={Colors.primaryColorBrightGreen} />
                    <BodyText text={`P/Kill ${player1?.data.pkill}%`} />
                  </div>
                  <div className="matches-wrapper">
                    <div>Matches: </div>
                    <BodyText text={player1?.data.matches} />
                  </div>
                </div>
                <div className="winrate-wrapper">
                  <Headline text="Win Rate" color={Colors.primaryColorBrightGreen} />
                  <DoughnutChart
                    playerData={{
                      data: [player1?.data.wins, player1?.data.losses],
                    }}
                    winRate={player1?.data.winRate}
                  />
                </div>
                <div className="overall-rating-wrapper">
                  <div className="badge-score-wrapper">
                    <Headline text="GP Badge" color={Colors.primaryColorBrightGreen} />
                    <BodyText text={`Score: ${player1?.data.leaguePoints}`} color={Colors.primaryColorBrightGreen} />
                  </div>
                  <div className="icon-wrapper">
                    <TrophyIcon className="icon" fill={Colors.secondaryColorSkyBlue} />
                  </div>
                  <div className="icon-bottom-wrapper">
                    <div>
                      <BodyText text="Pro Player" color={Colors.primaryColorBrightGreen} />
                    </div>
                    <div>
                      <BodyText text="Tier 4" color={Colors.secondaryColorSkyBlue} />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <div className="comparisonIcon-wrapper">
              <span className="border1-around-compareIcon" />
              <CompareIcon className="compareIcon" fill={Colors.primaryColorBrightGreen} />
              <CompareFilledIcon className="compareFilledIcon" fill={Colors.primaryColorBrightGreen} />
              <span className="border2-around-compareIcon" />
            </div>
            <Card>
              <div className="cross-icon-container">
                <CrossIcon className="crossIcon" fill={Colors.primaryColorBrightGreen} />
              </div>
              <div className="card-content-container">
                <div className="name-avatar-rank-wrapper">
                  <BodyText text={player2?.data.summonerName} color={Colors.primaryColorBrightGreen} />
                  <Avatar
                    role={player2?.data.role}
                    summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${player2?.data.profileIconId}.png`}
                  />
                  <Headline text={player2?.data.rank} color={Colors.secondaryColorSkyBlue} />
                </div>
                <div className="kda-pkill-matches-wrapper">
                  <div className="kda-wrapper">
                    <BodyText text="KDA" color={Colors.primaryColorBrightGreen} />
                    <BodyText text={`${player2?.data.kills} / ${player2?.data.deaths} / ${player2?.data.assists}`} />
                  </div>
                  <div className="pkill-wrapper">
                    <BodyText text={`${player2?.data.kda}:1`} color={Colors.primaryColorBrightGreen} />
                    <BodyText text={`P/Kill ${player2?.data.pkill}%`} />
                  </div>
                  <div className="matches-wrapper">
                    <div>Matches: </div>
                    <BodyText text={player2?.data.matches} />
                  </div>
                </div>
                <div className="winrate-wrapper">
                  <Headline text="Win Rate" color={Colors.primaryColorBrightGreen} />
                  <DoughnutChart
                    playerData={{
                      data: [player2?.data.wins, player2?.data.losses],
                    }}
                    winRate={player2?.data.winRate}
                  />
                </div>
                <div className="overall-rating-wrapper">
                  <div className="badge-score-wrapper">
                    <Headline text="GP Badge" color={Colors.primaryColorBrightGreen} />
                    <BodyText text={`Score: ${player2?.data.leaguePoints}`} color={Colors.primaryColorBrightGreen} />
                  </div>
                  <div className="icon-wrapper">
                    <TrophyIcon className="icon" fill={Colors.secondaryColorSkyBlue} />
                  </div>
                  <div className="icon-bottom-wrapper">
                    <div>
                      <BodyText text="Pro Player" color={Colors.primaryColorBrightGreen} />
                    </div>
                    <div>
                      <BodyText text="Tier 4" color={Colors.secondaryColorSkyBlue} />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="skills-cards-container">
            <div className="skills-headline-wrapper">
              <Headline text="Skills" color={Colors.primaryColorBrightGreen} />
            </div>
            <div className="skills-cards-wrapper">
              <Card>
                <div className="name-avatar-wrapper">
                  <BodyText text={player1?.data.summonerName} color={Colors.primaryColorBrightGreen} />
                  <Avatar
                    summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${player1?.data.profileIconId}.png`}
                    avatarWidth="5rem"
                    avatarHeight="5rem"
                  />
                </div>
                <div className="personal-skills-wrapper">
                  <BodyText text="Personal Skills" color={Colors.secondaryColorSkyBlue} />
                  <div className="progressbar-wrapper">
                    {player1?.data.skills.personalSkills.map((skill) => (
                      <ProgressBar
                        progress={skill.value}
                        text={skill.personalSkill}
                        heightSize="1.6rem"
                        textColor={Colors.neutralColorDarkBlue}
                        fixedText
                      />
                    ))}
                  </div>
                </div>
                <div className="tech-skills-wrapper" style={{ paddingBottom: '1rem' }}>
                  <BodyText text="Tech Skills" color={Colors.secondaryColorSkyBlue} />
                  <RadarChart
                    playerSkills={{
                      data: [
                        player1?.data.skills.skills.farming,
                        player1?.data.skills.skills.dueling,
                        player1?.data.skills.skills.timing,
                        player1?.data.skills.skills.picking,
                        player1?.data.skills.skills.deffensive,
                        player1?.data.skills.skills.roaming,
                      ],
                    }}
                  />
                </div>
              </Card>
              <div className="comparisonIcon-wrapper">
                <CompareIcon className="compareIcon" fill={Colors.primaryColorBrightGreen} />
                <CompareFilledIcon className="compareFilledIcon" fill={Colors.primaryColorBrightGreen} />
              </div>
              <Card>
                <div className="name-avatar-wrapper">
                  <BodyText text={player2?.data.summonerName} color={Colors.primaryColorBrightGreen} />
                  <Avatar
                    summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${player2?.data.profileIconId}.png`}
                    avatarWidth="5rem"
                    avatarHeight="5rem"
                  />
                </div>
                <div className="personal-skills-wrapper">
                  <BodyText text="Personal Skills" color={Colors.secondaryColorSkyBlue} />
                  <div className="progressbar-wrapper">
                    {player2?.data.skills.personalSkills.map((skill) => (
                      <ProgressBar
                        progress={skill.value}
                        text={skill.personalSkill}
                        heightSize="1.6rem"
                        textColor={Colors.neutralColorDarkBlue}
                        fixedText
                      />
                    ))}
                  </div>
                </div>
                <div className="tech-skills-wrapper">
                  <BodyText text="Tech Skills" color={Colors.secondaryColorSkyBlue} />
                  <RadarChart
                    playerSkills={{
                      data: [
                        player2?.data.skills.skills.farming,
                        player2?.data.skills.skills.dueling,
                        player2?.data.skills.skills.timing,
                        player2?.data.skills.skills.picking,
                        player2?.data.skills.skills.deffensive,
                        player2?.data.skills.skills.roaming,
                      ],
                    }}
                  />
                </div>
              </Card>
            </div>
          </div>
          <div className="statistics-cards-container">
            <div className="statistics-headline-wrapper">
              <Headline text="Statistics" textAlign="center" color={Colors.primaryColorBrightGreen} />
            </div>
            <Card>
              <LineChart
                playerA={{
                  label: `${player1?.data.summonerName}`,
                  data: player1KdaArray || [],
                }}
                playerB={{
                  label: `${player2?.data.summonerName}`,
                  data: player2KdaArray || [],
                }}
                player1SummonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${player1?.data.profileIconId}.png`}
                player2SummonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${player2?.data.profileIconId}.png`}
              />
            </Card>
          </div>
          <div className="extra-data-cards-container">
            <div className="extra-data-headline-wrapper">
              <Headline text="Extra Data" textAlign="center" color={Colors.primaryColorBrightGreen} />
            </div>
            <div className="tables-wrapper">
              <div className="extra-data-table-wrapper">
                <div className="extra-data-table">
                  <Table>
                    <TableHeader
                      headers={[
                        { property: 'summonerName', title: 'Player' },
                        { property: 'role', title: 'Role' },
                        { property: 'champion', title: 'Champion' },
                        { property: 'winlost', title: 'Win/Lost' },
                        { property: 'kda', title: 'KDA' },
                      ]}
                    />
                    {player1Matches?.data?.map((match) => {
                      const matchData = {
                        summonerName: `${match.summonerName}`,
                        role: RoleIcons(
                          // eslint-disable-next-line no-nested-ternary
                          match.teamPosition === ''
                            ? match.lane
                            : match.teamPosition === ''
                            ? match.role
                            : match.teamPosition,
                          Colors.primaryColorBrightGreen
                        ),
                        champion: (
                          <Image
                            imageUrl={`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/${match.championName}.png`}
                            imageWidth="2.5rem"
                            imageHeight="2.5rem"
                          />
                        ),
                        winlost: `${match.win ? 'Win' : 'Lost'}`,
                        kda: `${match.kills} / ${match.deaths} / ${match.assists}`,
                      }
                      return (
                        <TableItem
                          item={matchData}
                          headers={[
                            { property: 'summonerName', title: 'Player' },
                            { property: 'role', title: 'Role' },
                            { property: 'champion', title: 'Champion' },
                            { property: 'winlost', title: 'Win/Lost' },
                            { property: 'kda', title: 'KDA' },
                          ]}
                        />
                      )
                    })}
                  </Table>
                </div>
              </div>
              <div className="comparisonIcon-wrapper">
                <CompareIcon className="compareIcon" fill={Colors.primaryColorBrightGreen} />
                <CompareFilledIcon className="compareFilledIcon" fill={Colors.primaryColorBrightGreen} />
              </div>
              <div className="extra-data-table-wrapper">
                <div className="extra-data-table">
                  <Table>
                    <TableHeader
                      headers={[
                        { property: 'summonerName', title: 'Player' },
                        { property: 'role', title: 'Role' },
                        { property: 'champion', title: 'Champion' },
                        { property: 'winlost', title: 'Win/Lost' },
                        { property: 'kda', title: 'KDA' },
                      ]}
                    />
                    {player2Matches?.data?.map((match) => {
                      const matchData = {
                        summonerName: `${match.summonerName}`,
                        role: RoleIcons(
                          // eslint-disable-next-line no-nested-ternary
                          match.teamPosition === ''
                            ? match.lane
                            : match.teamPosition === ''
                            ? match.role
                            : match.teamPosition,
                          Colors.primaryColorBrightGreen
                        ),
                        champion: (
                          <Image
                            imageUrl={`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/${match.championName}.png`}
                            imageWidth="2.5rem"
                            imageHeight="2.5rem"
                          />
                        ),
                        winlost: `${match.win ? 'Win' : 'Lost'}`,
                        kda: `${match.kills} / ${match.deaths} / ${match.assists}`,
                      }
                      return (
                        <TableItem
                          item={matchData}
                          headers={[
                            { property: 'summonerName', title: 'Player' },
                            { property: 'role', title: 'Role' },
                            { property: 'champion', title: 'Champion' },
                            { property: 'winlost', title: 'Win/Lost' },
                            { property: 'kda', title: 'KDA' },
                          ]}
                        />
                      )
                    })}
                  </Table>
                </div>
              </div>
            </div>
          </div>
          <div className="up-icon-container">
            <a href="#">
              <UpIcon className="upIcon" fill={Colors.secondaryColorSkyBlue} />
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

ComparisonResultsPage.propTypes = {
  axiosClient: Axios,
}

ComparisonResultsPage.defaultProps = {
  axiosClient: Axios,
}

export default withAuthentication(ComparisonResultsPage)
