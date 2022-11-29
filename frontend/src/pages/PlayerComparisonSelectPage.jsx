import { useContext, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Axios } from 'axios'
import { DownIcon, UpIcon, LeftIcon } from '../components/Icon/icons'
import Headline from '../components/Headline/Headline'
import BodyText from '../components/BodyText/BodyText'
import Avatar from '../components/Avatar/Avatar'
import Footer from '../components/Footer/Footer'
import Colors from '../sass/variables/_colors.scss'
import { PlayerContext } from '../context/PlayerContext'
import withAuthentication from '../hoc/withAuthentication'
import SearchPlayerSelection from '../components/SearchPlayerSelection/SearchPlayerSelection'
import ProfilePopUp from '../components/ProfilePopUp/ProfilePopUp'
import Sidebar from '../components/Sidebar/Sidebar'

function PlayerComparisonSelectPage({ axiosClient }) {
  const { playersToCompare, setPlayersToCompare } = useContext(PlayerContext)
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const sidebar = searchParams.get('sidebar')

  const goBack = () => {
    if (sidebar) {
      navigate('/TopPlayers')
    } else {
      navigate(-1)
    }
  }

  const [showMore, setShowMore] = useState(false)
  const showMoreFunction = () => {
    setShowMore(!showMore)
  }

  const { data: allPlayers } = useQuery('allPlayersData', () => axiosClient.get('/api/v1/analytics/all-players'))

  const handlePlayerSelectionBtn = (player) => {
    if (!playersToCompare.player2) {
      setPlayersToCompare({ ...playersToCompare, player2: player })
    }
    if (playersToCompare.player2 === player) {
      setPlayersToCompare({ ...playersToCompare, player2: null })
    }
    if (!playersToCompare.player1) {
      setPlayersToCompare({ ...playersToCompare, player1: player })
    }
    if (playersToCompare.player1 === player) {
      setPlayersToCompare({ ...playersToCompare, player1: null })
    }
  }

  const navigateToComparisonResults = () => {
    navigate('/comparison-results')
  }

  return (
    <div className="player-comparison-select-page-wrapper">
      <Sidebar />
      <div className="player-comparison-select-page-container-1">
        <div className="player-comparison-select-page-container-2">
          <div className="nav">
            <LeftIcon onClick={goBack} className="userIcon" fill={Colors.primaryColorBrightGreen} />
            <ProfilePopUp className="userIcon" fill={Colors.primaryColorBrightGreen} />
          </div>

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
              {allPlayers?.data?.slice(0, 8).map((player, i) => (
                <div className="avatar-name-container-btn" id={`player-container-${i + 1}`}>
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
                    className={`add-vs-btn no-background-btn ${
                      player === playersToCompare.player1 || player === playersToCompare.player2 ? 'background-btn' : ''
                    }`}
                  >
                    + VS
                  </button>
                </div>
              ))}

              {showMore &&
                allPlayers?.data?.slice(9, 17).map((player, i) => (
                  <div className="avatar-name-container-btn" id={`player-container-${i + 9}`}>
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
                      className={`add-vs-btn no-background-btn ${
                        player === playersToCompare.player1 || player === playersToCompare.player2
                          ? 'background-btn'
                          : ''
                      }`}
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
              <button
                type="button"
                className="button"
                onClick={navigateToComparisonResults}
                disabled={!playersToCompare.player1 || !playersToCompare.player2}
              >
                Compare
              </button>
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
