import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Axios } from 'axios'
import Header from '../components/Header/Header'
import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'
import { DownIcon, UpIcon } from '../components/Icon/icons'
import Headline from '../components/Headline/Headline'
import Button from '../components/Button/Button'
import BodyText from '../components/BodyText/BodyText'
import Avatar from '../components/Avatar/Avatar'
import Footer from '../components/Footer/Footer'
import Colors from '../sass/variables/_colors.scss'
import { PlayerContext } from '../context/PlayerContext'
import withAuthentication from '../hoc/withAuthentication'
import SearchPlayerSelection from '../components/SearchPlayerSelection/SearchPlayerSelection'

function PlayerComparisonSelectPage({ axiosClient }) {
  const { playersToCompare, setPlayersToCompare } = useContext(PlayerContext)
  const navigate = useNavigate()

  const [showMore, setShowMore] = useState(false)
  const showMoreFunction = () => {
    setShowMore(!showMore)
  }

  const { data: allPlayers } = useQuery('allPlayersData', () => axiosClient.get('/api/v1/analytics/all-players'))

  const handlePlayerSelectionBtn = (player) => {
    if (!playersToCompare.player1) {
      setPlayersToCompare({ ...playersToCompare, player1: player })
    }
    if (!playersToCompare.player2) {
      setPlayersToCompare({ ...playersToCompare, player2: player })
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
                <SearchPlayerSelection
                  playerNumber={1}
                  className="input-100w"
                  color={Colors.primaryColorBrightGreen}
                  placeholder="Type or select a player"
                  selectedPlayer={playersToCompare.player1}
                />
              </div>

              <div className="input-player-container-2">
                <SearchPlayerSelection
                  playerNumber={2}
                  className="input-100w"
                  color={Colors.primaryColorBrightGreen}
                  placeholder="Type or select a player"
                  selectedPlayer={playersToCompare.player2}
                />
              </div>
            </section>

            <section className="add-player-wrapper">
              <BodyText text="Often compared with..." color={Colors.secondaryColorSkyBlue} textAlign="left" />
              {allPlayers?.data?.slice(0, 8).map((player) => (
                <div className="avatar-name-container-btn">
                  <div className="avatar-name-container">
                    <Avatar
                      summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${player.profileIconId}.png`}
                    />

                    <BodyText text={player.summonerName} color={Colors.secondaryColorSkyBlue} />
                  </div>
                  <button
                    onClick={(e) => {
                      handlePlayerSelectionBtn(player)
                      e.currentTarget.classList.toggle('hello-asd')
                    }}
                    type="button"
                    className="add-vs-btn no-background-btn"
                    style={{ color: Colors.primaryColorBrightGreen }}
                  >
                    + VS
                  </button>
                </div>
              ))}

              {showMore &&
                allPlayers?.data?.slice(9, 17).map((player) => (
                  <div className="avatar-name-container-btn">
                    <div className="avatar-name-container">
                      <Avatar
                        summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${player.profileIconId}.png`}
                      />

                      <BodyText text={player.summonerName} color={Colors.secondaryColorSkyBlue} />
                    </div>
                    <button
                      onClick={() => {
                        handlePlayerSelectionBtn(player)
                      }}
                      type="button"
                      className="add-vs-btn no-background-btn"
                      style={{ color: Colors.primaryColorBrightGreen }}
                    >
                      + VS
                    </button>
                  </div>
                ))}

              {!showMore ? (
                <button type="button" className="down-btn no-background-btn">
                  <DownIcon fill={Colors.primaryColorBrightGreen} onClick={showMoreFunction} />
                </button>
              ) : (
                <button type="button" className="down-btn no-background-btn">
                  <UpIcon fill={Colors.primaryColorBrightGreen} onClick={showMoreFunction} />
                </button>
              )}
              <Button onClick={navigateToComparisonResults} text="Compare" />
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  )
}

PlayerComparisonSelectPage.propTypes = {
  axiosClient: Axios,
}

PlayerComparisonSelectPage.defaultProps = {
  axiosClient: Axios,
}

export default withAuthentication(PlayerComparisonSelectPage)
