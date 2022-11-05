import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import Header from '../components/Header/Header'
import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'
import { CrossIcon, AddIcon, DownIcon } from '../components/Icon/icons'
import Headline from '../components/Headline/Headline'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import BodyText from '../components/BodyText/BodyText'
import Avatar from '../components/Avatar/Avatar'
import Footer from '../components/Footer/Footer'
import Colors from '../sass/variables/_colors.scss'

function PlayerComparisonSelectPage() {
  const navigate = useNavigate()

  const { data: allPlayers } = useQuery('allPlayersData', () =>
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/analytics/all-players`)
  )

  return (
    <div className="player-comparison-select-page-wrapper">
      <LandingPageNavMenu className="nav-side-menu" />
      <div className="player-comparison-select-page-container-1">
        <div className="player-comparison-select-page-container-2">
          <Header />

          <div className="title-cross-icon-container">
            <button type="button" className="close-btn no-background-btn">
              <CrossIcon fill={Colors.primaryColorBrightGreen} />
            </button>
            <Headline text="Compare" textAlign="center" color={Colors.primaryColorBrightGreen} fontSize="32px" />
          </div>

          <main>
            <section className="search-players-wrapper">
              <div className="versus-divider">
                <div className="vr-divider" />
                <Headline text="VS" color={Colors.primaryColorBrightGreen} fontSize="vs-size" />
                <div className="vr-divider" />
              </div>
              <div className="input-player-container-1">
                <Input
                  color={Colors.primaryColorBrightGreen}
                  placeholder="Type or select a player"
                  className="input-add-player"
                />
                <button type="button" className="add-input-btn no-background-btn">
                  <AddIcon fill={Colors.primaryColorBrightGreen} />
                </button>
              </div>

              <div className="input-player-container-2">
                <Input placeholder="Type or select a player" />
                <button type="button" className="add-input-btn no-background-btn">
                  <AddIcon fill={Colors.primaryColorBrightGreen} />
                </button>
              </div>
            </section>

            <section className="add-player-wrapper">
              <BodyText text="Often compared with..." color={Colors.secondaryColorSkyBlue} textAlign="left" />
              <div className="avatar-name-container-btn">
                <div className="avatar-name-container">
                  <Avatar
                    summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${allPlayers?.data[48].profileIconId}.png`}
                  />

                  <BodyText text={allPlayers?.data[48].summonerName} color={Colors.secondaryColorSkyBlue} />
                </div>
                <button
                  type="button"
                  className="add-vs-btn no-background-btn"
                  style={{ color: Colors.primaryColorBrightGreen }}
                >
                  + VS
                </button>
              </div>
              <div className="avatar-name-container-btn">
                <div className="avatar-name-container">
                  <Avatar
                    summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${allPlayers?.data[30].profileIconId}.png`}
                  />
                  <BodyText text={allPlayers?.data[30].summonerName} color={Colors.secondaryColorSkyBlue} />
                </div>
                <button
                  type="button"
                  className="add-vs-btn no-background-btn"
                  style={{ color: Colors.primaryColorBrightGreen }}
                >
                  + VS
                </button>
              </div>
              <div className="avatar-name-container-btn">
                <div className="avatar-name-container">
                  <Avatar
                    summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${allPlayers?.data[13].profileIconId}.png`}
                  />
                  <BodyText text={allPlayers?.data[13].summonerName} color={Colors.secondaryColorSkyBlue} />
                </div>
                <button
                  type="button"
                  className="add-vs-btn no-background-btn"
                  style={{ color: Colors.primaryColorBrightGreen }}
                >
                  + VS
                </button>
              </div>
              <div className="avatar-name-container-btn">
                <div className="avatar-name-container">
                  <Avatar
                    summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${allPlayers?.data[10].profileIconId}.png`}
                  />
                  <BodyText text={allPlayers?.data[10].summonerName} color={Colors.secondaryColorSkyBlue} />
                </div>
                <button
                  type="button"
                  className="add-vs-btn no-background-btn"
                  style={{ color: Colors.primaryColorBrightGreen }}
                >
                  + VS
                </button>
              </div>

              <div className="avatar-name-container-btn hide-til-activate">
                <div className="avatar-name-container">
                  <Avatar
                    summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${allPlayers?.data[45].profileIconId}.png`}
                  />
                  <BodyText text={allPlayers?.data[45].summonerName} color={Colors.secondaryColorSkyBlue} />
                </div>
                <button
                  type="button"
                  className="add-vs-btn no-background-btn"
                  style={{ color: Colors.primaryColorBrightGreen }}
                >
                  + VS
                </button>
              </div>
              <div className="avatar-name-container-btn hide-til-activate">
                <div className="avatar-name-container">
                  <Avatar
                    summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${allPlayers?.data[8].profileIconId}.png`}
                  />
                  <BodyText text={allPlayers?.data[8].summonerName} color={Colors.secondaryColorSkyBlue} />
                </div>
                <button
                  type="button"
                  className="add-vs-btn no-background-btn"
                  style={{ color: Colors.primaryColorBrightGreen }}
                >
                  + VS
                </button>
              </div>
              <div className="avatar-name-container-btn hide-til-activate">
                <div className="avatar-name-container">
                  <Avatar
                    summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${allPlayers?.data[56].profileIconId}.png`}
                  />
                  <BodyText text={allPlayers?.data[56].summonerName} color={Colors.secondaryColorSkyBlue} />
                </div>
                <button
                  type="button"
                  className="add-vs-btn no-background-btn"
                  style={{ color: Colors.primaryColorBrightGreen }}
                >
                  + VS
                </button>
              </div>
              <div className="avatar-name-container-btn hide-til-activate">
                <div className="avatar-name-container">
                  <Avatar
                    summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${allPlayers?.data[10].profileIconId}.png`}
                  />
                  <BodyText text={allPlayers?.data[10].summonerName} color={Colors.secondaryColorSkyBlue} />
                </div>
                <button
                  type="button"
                  className="add-vs-btn no-background-btn"
                  style={{ color: Colors.primaryColorBrightGreen }}
                >
                  + VS
                </button>
              </div>

              <button type="button" className="down-btn no-background-btn">
                <DownIcon fill={Colors.primaryColorBrightGreen} />
              </button>
              <Button onClick={() => navigate('/comparison-results')} text="Compare" />
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PlayerComparisonSelectPage
