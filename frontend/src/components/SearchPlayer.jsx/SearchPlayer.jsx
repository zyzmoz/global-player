import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import PropTypes from 'prop-types'
import axios from 'axios'
import { PlayerContext } from '../../context/PlayerContext'

function SearchPlayer({ placeholder, className }) {
  const [filteredPlayer, setFilteredPlayer] = useState([])
  const { data: allPlayers } = useQuery('allPlayersData', () =>
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/analytics/all-players`)
  )

  const handlerFilter = (event) => {
    const searchSummoName = event.target.value
    const newFilter = allPlayers?.data?.filter((value) =>
      value.summonerName.toLowerCase().includes(searchSummoName.toLowerCase())
    )

    if (searchSummoName === '') {
      setFilteredPlayer([])
    } else {
      setFilteredPlayer(newFilter)
    }
  }

  const context = React.useContext(PlayerContext)
  const navigate = useNavigate()
  const navigateToDetails = (id) => {
    context.setPlayerId(id)
    navigate('/player-details')
  }

  return (
    <div className={className}>
      <div className="search-player-input">
        <input type="search" placeholder={placeholder} onChange={handlerFilter} style={{ color: 'white' }} />
      </div>
      {filteredPlayer.length !== 0 && (
        <div className="search-player-results">
          {filteredPlayer.slice(0, 10).map((player) => (
            <button type="button" className="results-as-buttons" onClick={() => navigateToDetails(player.id)}>
              <div> {player.summonerName} </div>
            </button>
          ))}{' '}
        </div>
      )}
    </div>
  )
}

export default SearchPlayer

SearchPlayer.defaultProps = {
  className: '',
  placeholder: '',
}

SearchPlayer.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
}
