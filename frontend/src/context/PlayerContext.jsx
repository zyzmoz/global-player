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
})

function PlayerProvider({ children }) {
  const [playerId, setPlayerId] = useState(null)
  const [playersToCompare, setPlayersToCompare] = useState({
    player1: null,
    player2: null,
  })

  return (
    <PlayerContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        playerId,
        setPlayerId,
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
