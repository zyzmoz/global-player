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
import {
  DownIcon,
  SupportIcon,
  JungleIcon,
  TopLaneIcon,
  MidLaneIcon,
  BotLaneIcon,
  UserIcon,
} from '../components/Icon/icons'

const randomImage1 = 'https://picsum.photos/100/100?random=1'

function TopPlayersPage() {
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
              <Headline text="Draven" color={Colors.primaryColorBrightGreen} textAlign="center" />
              <Avatar />
              <Headline text="Grandmaster" textAlign="center" fontSize="small" />
              <div className="winrate-kda-wrapper">
                <DoughnutChart
                  title="WIN RATE"
                  width="7rem"
                  winRate={{
                    data: [6, 5],
                  }}
                />
                <div className="kda-wrapper">
                  <BodyText text="KDA" color={Colors.primaryColorBrightGreen} />
                  <BodyText text="7.1 / 7.4 / 9.7" />
                  <BodyText text="2.27:1" />
                  <BodyText text="P/Kill 55%" />
                </div>
              </div>
              <BodyText text="MATCHES: 38.137" color={Colors.primaryColorBrightGreen} textAlign="center" />
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
              <Button text="See more" />
            </Card>
          </div>
          <div className="card-container">
            <SupportIcon className="Icon" fill={Colors.primaryColorBrightGreen} />
            <Card width="18.125rem">
              <Headline text="Draven" color={Colors.primaryColorBrightGreen} textAlign="center" />
              <Avatar />
              <Headline text="Grandmaster" textAlign="center" fontSize="small" />
              <div className="winrate-kda-wrapper">
                <DoughnutChart
                  title="WIN RATE"
                  width="7rem"
                  winRate={{
                    data: [6, 5],
                  }}
                />
                <div className="kda-wrapper">
                  <BodyText text="KDA" color={Colors.primaryColorBrightGreen} />
                  <BodyText text="7.1 / 7.4 / 9.7" />
                  <BodyText text="2.27:1" />
                  <BodyText text="P/Kill 55%" />
                </div>
              </div>
              <BodyText text="MATCHES: 38.137" color={Colors.primaryColorBrightGreen} textAlign="center" />
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
              <Button text="See more" />
            </Card>
          </div>
          <div className="card-container">
            <SupportIcon className="Icon" fill={Colors.primaryColorBrightGreen} />
            <Card width="18.125rem">
              <Headline text="Draven" color={Colors.primaryColorBrightGreen} textAlign="center" />
              <Avatar />
              <Headline text="Grandmaster" textAlign="center" fontSize="small" />
              <div className="winrate-kda-wrapper">
                <DoughnutChart
                  title="WIN RATE"
                  width="7rem"
                  winRate={{
                    data: [6, 5],
                  }}
                />
                <div className="kda-wrapper">
                  <BodyText text="KDA" color={Colors.primaryColorBrightGreen} />
                  <BodyText text="7.1 / 7.4 / 9.7" />
                  <BodyText text="2.27:1" />
                  <BodyText text="P/Kill 55%" />
                </div>
              </div>
              <BodyText text="MATCHES: 38.137" color={Colors.primaryColorBrightGreen} textAlign="center" />
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
              <Button text="See more" />
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
              { property: 'name', title: 'Name' },
              { property: 'role', title: 'Role' },
              { property: 'winRate', title: 'Win Rate' },
              { property: 'kda', title: 'KDA' },
              { property: 'matches', title: 'Matches' },
              { property: 'personality', title: 'Personality' },
            ]}
          />
          {[
            {
              rank: '1',
              name: (
                <div className="name">
                  <Image imageUrl={randomImage1} imageWidth="2.25rem" imageHeight="2.25rem" />
                  Darius
                </div>
              ),
              role: <TopLaneIcon className="icon" fill={Colors.primaryColorBrightGreen} />,
              winRate: '63.2%',
              kda: '8.7 / 5.8 / 6.0',
              matches: '38,137',
              personality: (
                <div className="personality">
                  <ProgressBar progress={80} widthSize="140px" heightSize="16px" />
                  <BodyText text="Team Player" textAlign="center" fontSize="small" />
                </div>
              ),
            },
            {
              rank: '2',
              name: (
                <div className="name">
                  <Image imageUrl={randomImage1} imageWidth="2.25rem" imageHeight="2.25rem" />
                  Darius
                </div>
              ),
              role: <MidLaneIcon className="icon" fill={Colors.primaryColorBrightGreen} />,
              winRate: '63.2%',
              kda: '8.7 / 5.8 / 6.0',
              matches: '38,137',
              personality: (
                <div className="personality">
                  <ProgressBar progress={80} widthSize="140px" heightSize="16px" />
                  <BodyText text="Team Player" textAlign="center" fontSize="small" />
                </div>
              ),
            },
            {
              rank: '3',
              name: (
                <div className="name">
                  <Image imageUrl={randomImage1} imageWidth="2.25rem" imageHeight="2.25rem" />
                  Darius
                </div>
              ),
              role: <BotLaneIcon className="icon" fill={Colors.primaryColorBrightGreen} />,
              winRate: '63.2%',
              kda: '8.7 / 5.8 / 6.0',
              matches: '38,137',
              personality: (
                <div className="personality">
                  <ProgressBar progress={80} widthSize="140px" heightSize="16px" />
                  <BodyText text="Team Player" textAlign="center" fontSize="small" />
                </div>
              ),
            },
            {
              rank: '4',
              name: (
                <div className="name">
                  <Image imageUrl={randomImage1} imageWidth="2.25rem" imageHeight="2.25rem" />
                  Darius
                </div>
              ),
              role: <SupportIcon className="icon" fill={Colors.primaryColorBrightGreen} />,
              winRate: '63.2%',
              kda: '8.7 / 5.8 / 6.0',
              matches: '38,137',
              personality: (
                <div className="personality">
                  <ProgressBar progress={80} widthSize="140px" heightSize="16px" />
                  <BodyText text="Team Player" textAlign="center" fontSize="small" />
                </div>
              ),
            },
            {
              rank: '5',
              name: (
                <div className="name">
                  <Image imageUrl={randomImage1} imageWidth="2.25rem" imageHeight="2.25rem" />
                  Darius
                </div>
              ),
              role: <JungleIcon className="icon" fill={Colors.primaryColorBrightGreen} />,
              winRate: '63.2%',
              kda: '8.7 / 5.8 / 6.0',
              matches: '38,137',
              personality: (
                <div className="personality">
                  <ProgressBar progress={80} widthSize="140px" heightSize="16px" />
                  <BodyText text="Team Player" textAlign="center" fontSize="small" />
                </div>
              ),
            },
          ].map((item) => (
            <TableItem
              item={item}
              headers={[
                { property: 'rank', title: 'Rank' },
                { property: 'name', title: 'Name' },
                { property: 'role', title: 'Role' },
                { property: 'winRate', title: 'Win Rate' },
                { property: 'kda', title: 'KDA' },
                { property: 'matches', title: 'Matches' },
                { property: 'personality', title: 'Personality' },
              ]}
            />
          ))}
        </Table>
        <Button text="Show more" />
        <Footer />
      </div>
    </div>
  )
}

export default TopPlayersPage
