import { useState, useContext, useEffect } from 'react'
import { useQuery } from 'react-query'
import PropTypes from 'prop-types'
import { Axios } from 'axios'
import { PlayerContext } from '../../context/PlayerContext'
import { DeleteIcon } from '../Icon/icons'
import Colors from '../../sass/variables/_colors.scss'

function SearchPlayer({ placeholder, className, axiosClient, playerNumber, selectedPlayer }) {
  const id = Math.floor(Math.random() * 9999)

  const { playersToCompare, setPlayersToCompare } = useContext(PlayerContext)
  const [player, setPlayer] = useState(selectedPlayer)

  useEffect(() => {
    setPlayer(selectedPlayer || null)
    document.getElementById(`input-${id}`).value = selectedPlayer?.summonerName || ''
  }, [selectedPlayer, id])

  const { data: allPlayers } = useQuery('allPlayersData', () =>
    axiosClient.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/analytics/all-players`)
  )

  const handlerFilter = (event) => {
    // Get the text from the input
    const searchSummoName = event.target.value

    // search for the player
    const filteredPlayers = allPlayers?.data?.filter((value) =>
      value.summonerName.toLowerCase().includes(searchSummoName.toLowerCase())
    )

    // if just one player set player
    if (filteredPlayers.length === 1) {
      if (playerNumber === 1) {
        setPlayersToCompare({ ...playersToCompare, player1: filteredPlayers[0] })
      } else {
        setPlayersToCompare({ ...playersToCompare, player2: filteredPlayers[0] })
      }
      setPlayer(filteredPlayers[0])
    }
  }

  const clearInput = () => {
    document.getElementById(`input-${id}`).value = ''
    if (playerNumber === 1) {
      setPlayersToCompare({ ...playersToCompare, player1: null })
    } else {
      setPlayersToCompare({ ...playersToCompare, player2: null })
    }
    setPlayer(null)
  }

  return (
    <div className={className}>
      <input
        id={`input-${id}`}
        type="text"
        list={`player-list-${id}`}
        placeholder={placeholder}
        onChange={handlerFilter}
        defaultValue={player?.summonerName}
      />
      {player && player?.summonerName && (
        <button type="button" className="add-input-btn no-background-btn">
          <DeleteIcon fill={Colors.primaryColorBrightGreen} onClick={clearInput} />
        </button>
      )}

      <datalist id={`player-list-${id}`} className="search-player-results">
        {allPlayers?.data?.map((p) => (
          <option value={p?.summonerName}>
            <span className="visually-hidden">{p?.summonerName}</span>
          </option>
        ))}
      </datalist>
    </div>
  )
}

export default SearchPlayer

SearchPlayer.defaultProps = {
  className: '',
  placeholder: '',
  axiosClient: Axios,
  selectedPlayer: {},
}

SearchPlayer.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  axiosClient: Axios,
  playerNumber: PropTypes.number.isRequired,
  selectedPlayer: PropTypes.instanceOf({}),
}
