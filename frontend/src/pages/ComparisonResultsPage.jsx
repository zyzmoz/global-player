import RecruitersPagesNavMenu from '../components/Header/RecruitersPagesNavMenu'
import Header from '../components/Header/Header'
import Headline from '../components/Headline/Headline'
import BodyText from '../components/BodyText/BodyText'
import Avatar from '../components/Avatar/Avatar'
import Card from '../components/Card/Card'
import DoughnutChart from '../components/DoughnutChart/DoughnutChart'
import { CrossIcon, CompareIcon, TrophyIcon, StarIcon } from '../components/Icon/icons'
import Footer from '../components/Footer/Footer'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import RadarChart from '../components/RadarChart/RadarChart'
import LineChart from '../components/LineChart/LineChart'
// import Table from '../components/Table/Table'
// import TableHeader from '../components/Table/TableHeader'
// import TableItem from '../components/Table/TableItem'
import Colors from '../sass/variables/_colors.scss'

function ComparisonResultsPage() {
  return (
    <div className="comparison-results-page">
      <RecruitersPagesNavMenu className="nav-side-menu" />
      <Header />
      <div className="comparison-results-page-wrapper">
        <Headline text="Player Comparison" color={Colors.primaryColorBrightGreen} textAlign="center" fontSize="2rem" />

        <div className="comparison-cards-container">
          <Card width="14rem" height="26rem">
            <div className="cross-icon-container">
              <CrossIcon className="crossIcon" fill={Colors.primaryColorBrightGreen} />
            </div>
            <div className="card-content-container">
              <Headline text="Draven" color={Colors.primaryColorBrightGreen} />
              <Avatar />
              <Headline text="Grandmaster" />
              <div className="kda-wrapper">
                <BodyText text="KDA" color={Colors.primaryColorBrightGreen} />
                <BodyText text="7.1 / 7.4 / 9/7" />
              </div>
              <div className="pkill-wrapper">
                <BodyText text="2.27:1" />
                <BodyText text="P/Kill 55%" />
              </div>
              <BodyText text="Matches: 20" color={Colors.primaryColorBrightGreen} />
            </div>
          </Card>
          <CompareIcon className="compareIcon" fill={Colors.primaryColorBrightGreen} />
          <Card width="14rem" height="26rem">
            <div className="cross-icon-container">
              <CrossIcon className="crossIcon" fill={Colors.primaryColorBrightGreen} />
            </div>
            <div className="card-content-container">
              <Headline text="Draven" color={Colors.primaryColorBrightGreen} />
              <Avatar />
              <Headline text="Grandmaster" />
              <div className="kda-wrapper">
                <BodyText text="KDA" color={Colors.primaryColorBrightGreen} />
                <BodyText text="7.1 / 7.4 / 9/7" />
              </div>
              <div className="pkill-wrapper">
                <BodyText text="2.27:1" />
                <BodyText text="P/Kill 55%" />
              </div>
              <BodyText text="Matches: 20" color={Colors.primaryColorBrightGreen} />
            </div>
          </Card>
        </div>

        <div className="winrate-cards-container">
          <div className="winrate-headline-wrapper">
            <Headline text="Win Rate" color={Colors.primaryColorBrightGreen} />
          </div>
          <div className="winrate-cards-wrapper">
            <Card width="18rem">
              <DoughnutChart
                playerData={{
                  data: [3, 5],
                }}
                winRate={70}
              />
              <BodyText text="Draven" color={Colors.primaryColorBrightGreen} />
            </Card>
            <CompareIcon className="compareIcon" fill={Colors.primaryColorBrightGreen} />
            <Card width="18rem">
              <DoughnutChart
                playerData={{
                  data: [3, 5],
                }}
                winRate={70}
              />
              <BodyText text="Draven" color={Colors.primaryColorBrightGreen} />
            </Card>
          </div>
        </div>

        <div className="overall-rating-cards-container">
          <div className="overall-rating-headline-wrapper">
            <Headline text="Overall Rating" color={Colors.primaryColorBrightGreen} />
          </div>
          <div className="overall-rating-cards-wrapper">
            <Card width="18rem" height="18rem">
              <div className="badge-score-wrapper">
                <BodyText text="GP Badge" color={Colors.secondaryColorSkyBlue} />
                <BodyText text="Score: 85" color={Colors.primaryColorBrightGreen} />
              </div>
              <div className="icon-text-wrapper">
                <TrophyIcon className="icon" fill={Colors.secondaryColorSkyBlue} />
                <BodyText text="Pro Player" color={Colors.primaryColorBrightGreen} />
              </div>
              <div className="name-tier-wrapper">
                <BodyText text="Draven" color={Colors.primaryColorBrightGreen} />
                <BodyText text="Tier 4" color={Colors.secondaryColorSkyBlue} />
              </div>
            </Card>
            <CompareIcon className="compareIcon" fill={Colors.primaryColorBrightGreen} />
            <Card width="18rem" height="18rem">
              <div className="badge-score-wrapper">
                <BodyText text="GP Badge" color={Colors.secondaryColorSkyBlue} />
                <BodyText text="Score: 85" color={Colors.primaryColorBrightGreen} />
              </div>
              <div className="icon-text-wrapper">
                <StarIcon className="icon" fill={Colors.secondaryColorSkyBlue} />
                <BodyText text="Pro Player" color={Colors.primaryColorBrightGreen} />
              </div>
              <div className="name-tier-wrapper">
                <BodyText text="Draven" color={Colors.primaryColorBrightGreen} />
                <BodyText text="Tier 4" color={Colors.secondaryColorSkyBlue} />
              </div>
            </Card>
          </div>
        </div>

        <div className="skills-cards-container">
          <div className="skills-headline-wrapper">
            <Headline text="Skills" color={Colors.primaryColorBrightGreen} />
          </div>
          <div className="skills-cards-wrapper">
            <Card width="18rem">
              <div className="name-avatar-wrapper">
                <BodyText text="Draven" color={Colors.primaryColorBrightGreen} />
                <Avatar />
              </div>
              <div className="personal-skills-wrapper">
                <BodyText text="Personal Skills" color={Colors.secondaryColorSkyBlue} />
                <div className="progressbar-wrapper">
                  <ProgressBar text="Team Player" progress={80} />
                  <ProgressBar text="Agressive" progress={60} />
                  <ProgressBar text="Bold" progress={60} />
                </div>
              </div>
              <div className="tech-skills-wrapper">
                <BodyText text="Tech Skills" color={Colors.secondaryColorSkyBlue} />
                <RadarChart playerSkills={{ data: [8, 6, 7, 6, 6, 8] }} />
              </div>
            </Card>
            <CompareIcon className="compareIcon" fill={Colors.primaryColorBrightGreen} />
            <Card width="18rem">
              <div className="name-avatar-wrapper">
                <BodyText text="Draven" color={Colors.primaryColorBrightGreen} />
                <Avatar />
              </div>
              <div className="personal-skills-wrapper">
                <BodyText text="Personal Skills" color={Colors.secondaryColorSkyBlue} />
                <div className="progressbar-wrapper">
                  <ProgressBar text="Team Player" progress={80} />
                  <ProgressBar text="Agressive" progress={60} />
                  <ProgressBar text="Bold" progress={60} />
                </div>
              </div>
              <div className="tech-skills-wrapper">
                <BodyText text="Tech Skills" color={Colors.secondaryColorSkyBlue} />
                <RadarChart playerSkills={{ data: [8, 6, 7, 6, 6, 8] }} />
              </div>
            </Card>
          </div>
        </div>

        <div className="statistics-cards-container">
          <div className="statistics-headline-wrapper">
            <Headline text="Statistics" textAlign="center" color={Colors.primaryColorBrightGreen} />
          </div>
          <Card width="36rem" height="auto">
            <LineChart
              playerA={{
                label: 'Player A',
                data: [8, 3, 2, 2.17, 1, 0.5, 4.75],
              }}
              playerB={{
                label: 'Player B',
                data: [1.9, 4.57, 1.46, 4, 3, 1, 1.57],
              }}
            />
          </Card>
        </div>

        {/* <div className="extra-data-cards-container">
          <Table className="table-player-ranking">
            <TableHeader
              headers={[
                { property: 'summonerName', title: 'Player' },
                { property: 'role', title: 'Role' },
                { property: 'champion', title: 'Champion' },
                { property: 'winRate', title: 'Win/Lost' },
                { property: 'kda', title: 'KDA' },
              ]}
            />
            {allPlayers?.data?.map((player) => {
              const playerData = {
                rank: '1',
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
        </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default ComparisonResultsPage
