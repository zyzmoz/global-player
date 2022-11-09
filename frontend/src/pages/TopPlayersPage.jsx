import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import Headline from '../components/Headline/Headline'
import Table from '../components/Table/Table'
import TableHeader from '../components/Table/TableHeader'
import TableItem from '../components/Table/TableItem'
import Sidebar from '../components/Sidebar/Sidebar'
import RecruitersPagesNavMenu from '../components/Header/RecruitersPagesNavMenu'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import Card from '../components/Card/Card'
import Avatar from '../components/Avatar/Avatar'
import DoughnutChart from '../components/DoughnutChart/DoughnutChart'
import BodyText from '../components/BodyText/BodyText'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Button from '../components/Button/Button'
import Colors from '../sass/variables/_colors.scss'
import Footer from '../components/Footer/Footer'
import Image from '../components/Image/Image'
import RoleIcons from '../components/RoleIcons/RoleIcons'
import { DownIcon, SupportIcon, UserIcon } from '../components/Icon/icons'
import { PlayerContext } from '../context/PlayerContext'

function TopPlayersPage() {
  const navigate = useNavigate()
  const context = React.useContext(PlayerContext)

  const { data: topPlayers } = useQuery('topPlayersData', () =>
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/analytics/top-players`)
  )

  const { data: allPlayers } = useQuery('allPlayersData', () =>
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/analytics/all-players`)
  )

  const navigateToDetails = (id) => {
    context.setPlayerId(id)
    navigate('/player-details')
  }

  return (
    <div className="top-players-page">
      <RecruitersPagesNavMenu className="nav-side-menu" />
      <Header />
      <Sidebar />
      <div className="main-contents">
        <div className="search-userIcon-wrapper">
          <SearchBar />
          <UserIcon className="userIcon" fill={Colors.primaryColorBrightGreen} />
        </div>
        <Headline text="Top Players" color={Colors.primaryColorBrightGreen} textAlign="center" />
        <div className="card-container-wrapper">
          <div className="card-container">
            <SupportIcon className="Icon" fill={Colors.primaryColorBrightGreen} />
            <Card width="18.125rem">
              <Headline
                text={topPlayers?.data[0].summonerName}
                color={Colors.primaryColorBrightGreen}
                textAlign="center"
              />
              <Avatar
                role={topPlayers?.data[0].role}
                summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${topPlayers?.data[0].profileIconId}.png`}
              />
              <Headline text={topPlayers?.data[0].rank} textAlign="center" fontSize="small" />
              <div className="winrate-kda-wrapper">
                <DoughnutChart
                  title="WIN RATE"
                  width="7rem"
                  playerData={{
                    data: [topPlayers?.data[0].wins, topPlayers?.data[0].losses],
                  }}
                  winRate={topPlayers?.data[0].winRate}
                />
                <div className="kda-wrapper">
                  <BodyText text="KDA" color={Colors.primaryColorBrightGreen} />
                  <BodyText
                    text={`${topPlayers?.data[0].kills} / ${topPlayers?.data[0].deaths} / ${topPlayers?.data[0].assists}`}
                  />
                  <BodyText text={`${topPlayers?.data[0].kda}:1`} />
                  <BodyText text={`P/Kill ${topPlayers?.data[0].pkill}%`} />
                </div>
              </div>
              <BodyText
                text={`MATCHES: ${topPlayers?.data[0].matches}`}
                color={Colors.primaryColorBrightGreen}
                textAlign="center"
              />
              <div className="top-players-personal-skills">
                <BodyText text="PERSONAL SKILLS" color={Colors.primaryColorBrightGreen} />
                <div className="label-progressbar-wrapper">
                  <BodyText text="Team Player" />
                  <ProgressBar progress={100} heightSize="1.125rem" />
                </div>
                <div className="label-progressbar-wrapper">
                  <BodyText text="Agressive" />
                  <ProgressBar progress={60} heightSize="1.125rem" />
                </div>
                <div className="label-progressbar-wrapper">
                  <BodyText text="Bold" />
                  <ProgressBar progress={60} heightSize="1.125rem" />
                </div>
              </div>
              <Button onClick={() => navigateToDetails(topPlayers?.data[0].id)} text="See more" />
            </Card>
          </div>
          <div className="card-container">
            <SupportIcon className="Icon" fill={Colors.primaryColorBrightGreen} />
            <Card width="18.125rem">
              <Headline
                text={topPlayers?.data[1].summonerName}
                color={Colors.primaryColorBrightGreen}
                textAlign="center"
              />
              <Avatar
                role={topPlayers?.data[1].role}
                summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${topPlayers?.data[1].profileIconId}.png`}
              />
              <Headline text={topPlayers?.data[1].rank} textAlign="center" fontSize="small" />
              <div className="winrate-kda-wrapper">
                <DoughnutChart
                  title="WIN RATE"
                  width="7rem"
                  playerData={{
                    data: [topPlayers?.data[1].wins, topPlayers?.data[1].losses],
                  }}
                  winRate={topPlayers?.data[1].winRate}
                />
                <div className="kda-wrapper">
                  <BodyText text="KDA" color={Colors.primaryColorBrightGreen} />
                  <BodyText
                    text={`${topPlayers?.data[1].kills} / ${topPlayers?.data[1].deaths} / ${topPlayers?.data[1].assists}`}
                  />
                  <BodyText text={`${topPlayers?.data[1].kda}:1`} />
                  <BodyText text={`P/Kill ${topPlayers?.data[1].pkill}%`} />
                </div>
              </div>
              <BodyText
                text={`MATCHES: ${topPlayers?.data[1].matches}`}
                color={Colors.primaryColorBrightGreen}
                textAlign="center"
              />
              <div className="top-players-personal-skills">
                <BodyText text="PERSONAL SKILLS" color={Colors.primaryColorBrightGreen} />
                <div className="label-progressbar-wrapper">
                  <BodyText text="Team Player" />
                  <ProgressBar progress={100} heightSize="1.125rem" />
                </div>
                <div className="label-progressbar-wrapper">
                  <BodyText text="Agressive" />
                  <ProgressBar progress={60} heightSize="1.125rem" />
                </div>
                <div className="label-progressbar-wrapper">
                  <BodyText text="Bold" />
                  <ProgressBar progress={60} heightSize="1.125rem" />
                </div>
              </div>
              <Button onClick={() => navigateToDetails(topPlayers?.data[1].id)} text="See more" />
            </Card>
          </div>
          <div className="card-container">
            <SupportIcon className="Icon" fill={Colors.primaryColorBrightGreen} />
            <Card width="18.125rem">
              <Headline
                text={topPlayers?.data[2].summonerName}
                color={Colors.primaryColorBrightGreen}
                textAlign="center"
              />
              <Avatar
                role={topPlayers?.data[2].role}
                summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${topPlayers?.data[2].profileIconId}.png`}
              />
              <Headline text={topPlayers?.data[2].rank} textAlign="center" fontSize="small" />
              <div className="winrate-kda-wrapper">
                <DoughnutChart
                  title="WIN RATE"
                  width="7rem"
                  playerData={{
                    data: [topPlayers?.data[2].wins, topPlayers?.data[2].losses],
                  }}
                  winRate={topPlayers?.data[2].winRate}
                />
                <div className="kda-wrapper">
                  <BodyText text="KDA" color={Colors.primaryColorBrightGreen} />
                  <BodyText
                    text={`${topPlayers?.data[2].kills} / ${topPlayers?.data[2].deaths} / ${topPlayers?.data[2].assists}`}
                  />
                  <BodyText text={`${topPlayers?.data[2].kda}:1`} />
                  <BodyText text={`P/Kill ${topPlayers?.data[2].pkill}%`} />
                </div>
              </div>
              <BodyText
                text={`MATCHES: ${topPlayers?.data[2].matches}`}
                color={Colors.primaryColorBrightGreen}
                textAlign="center"
              />
              <div className="top-players-personal-skills">
                <BodyText text="PERSONAL SKILLS" color={Colors.primaryColorBrightGreen} />
                <div className="label-progressbar-wrapper">
                  <BodyText text="Team Player" />
                  <ProgressBar progress={100} heightSize="1.125rem" />
                </div>
                <div className="label-progressbar-wrapper">
                  <BodyText text="Agressive" />
                  <ProgressBar progress={60} heightSize="1.125rem" />
                </div>
                <div className="label-progressbar-wrapper">
                  <BodyText text="Bold" />
                  <ProgressBar progress={60} heightSize="1.125rem" />
                </div>
              </div>
              <Button onClick={() => navigateToDetails(topPlayers?.data[2].id)} text="See more" />
            </Card>
          </div>
        </div>

        <div className="down-icon-container">
          <DownIcon className="icon" fill="#53BCF9" />
        </div>
        <div className="table-headline-container">
          <Headline text="League of Legends" color={Colors.primaryColorBrightGreen} textAlign="center" />
          <Headline text="Best Player Ranking" color={Colors.primaryColorBrightGreen} textAlign="center" />
        </div>
        <Table className="table-player-ranking">
          <TableHeader
            headers={[
              { property: 'rank', title: 'Rank' },
              { property: 'summonerName', title: 'Name' },
              { property: 'role', title: 'Role' },
              { property: 'winRate', title: 'Win Rate' },
              { property: 'kda', title: 'KDA' },
              { property: 'matches', title: 'Matches' },
              { property: 'personality', title: 'Personality' },
            ]}
          />
          {allPlayers?.data?.map((player, i) => {
            const playerData = {
              rank: `#${i + 3}`,
              summonerName: (
                <div className="name">
                  <Image
                    imageUrl={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${player.profileIconId}.png`}
                    imageWidth="2.25rem"
                    imageHeight="2.25rem"
                  />
                  {player.summonerName}
                </div>
              ),
              role: RoleIcons(player.role, Colors.primaryColorBrightGreen),
              winRate: `${player.winRate}%`,
              kda: `${player.kills} / ${player.deaths} / ${player.assists}`,
              matches: `${player.matches}`,
              personality: (
                <div className="personality">
                  <ProgressBar progress={80} widthSize="140px" heightSize="16px" />
                  <BodyText text="Team Player" textAlign="center" fontSize="small" />
                </div>
              ),
            }
            return (
              <TableItem
                onClick={() => navigateToDetails(player.id)}
                item={playerData}
                headers={[
                  { property: 'rank', title: 'Rank' },
                  { property: 'summonerName', title: 'Name' },
                  { property: 'role', title: 'Role' },
                  { property: 'winRate', title: 'Win Rate' },
                  { property: 'kda', title: 'KDA' },
                  { property: 'matches', title: 'Matches' },
                  { property: 'personality', title: 'Personality' },
                ]}
              />
            )
          })}
        </Table>
        <Button text="Show more" />
        <Footer />
      </div>
    </div>
  )
}

export default TopPlayersPage
