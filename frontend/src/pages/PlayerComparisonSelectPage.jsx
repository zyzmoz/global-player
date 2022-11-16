import { useContext } from 'react'
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
import { PlayerContext } from '../context/PlayerContext'

function PlayerComparisonSelectPage() {
  const { playersToCompare, setPlayersToCompare } = useContext(PlayerContext)
  const navigate = useNavigate()

  const { data: allPlayers } = useQuery('allPlayersData', () =>
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/analytics/all-players`)
  )

  const handlePlayerSelectionBtn = (playerId) => {
    if (!playersToCompare.player1) {
      setPlayersToCompare({ ...playersToCompare, player1: playerId })
    }

    if (!playersToCompare.player2) {
      setPlayersToCompare({ ...playersToCompare, player2: playerId })
    }
  }

  const navigateToComparisonResults = () => {
    if (playersToCompare.player1 && playersToCompare.player2) {
      navigate('/comparison-results')
    }
  }

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

          <main className="main-player-comparison-select-page">
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
              {allPlayers?.data?.map((player) => (
                <div className="avatar-name-container-btn">
                  <div className="avatar-name-container">
                    <Avatar
                      summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${player.profileIconId}.png`}
                    />

                    <BodyText text={player.summonerName} color={Colors.secondaryColorSkyBlue} />
                  </div>
                  <button
                    onClick={() => handlePlayerSelectionBtn(player.id)}
                    type="button"
                    className="add-vs-btn no-background-btn"
                    style={{ color: Colors.primaryColorBrightGreen }}
                  >
                    + VS
                  </button>
                </div>
              ))}
              <button type="button" className="down-btn no-background-btn">
                <DownIcon fill={Colors.primaryColorBrightGreen} />
              </button>
              <Button onClick={navigateToComparisonResults} text="Compare" />
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PlayerComparisonSelectPage
