import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const PlayerContext = React.createContext({
  playerId: null,
  setPlayerId: () => {},
  playersToCompare: {
    player1: null,
    player2: null,
  },
  setPlayersToCompare: () => {},
  playerData: {
    id: null,
    summonerName: null,
  },
  setPlayerData: () => {},
})

function PlayerProvider({ children }) {
  const [playerId, setPlayerId] = useState(null)
  const [playerData, setPlayerData] = useState({
    id: null,
    summonerName: null,
  })
  const [playersToCompare, setPlayersToCompare] = useState({
    player1: '6360a91735cadfcd8230dd7e',
    player2: '6360a91735cadfcd8230dd60',
  })

  return (
    <PlayerContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        playerId,
        setPlayerId,
        playerData,
        setPlayerData,
        playersToCompare,
        setPlayersToCompare,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export default PlayerProvider

PlayerProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
