export interface IPlayer {
    _id: string
    playerId: string
    freshBlood: boolean
    wins: number
    summonerName: string
    inactive: boolean
    veteran: boolean
    hotStreak: boolean
    rank: string
    leaguePoints: number
    losses: number
    lastUpdated: Date
  }

  export const isPlayer = (player: any): player is IPlayer => {
    const schema: Record<keyof IPlayer, string> = {
      _id: 'string',
      playerId: 'string',
      freshBlood: 'boolean',
      wins: 'number',
      summonerName: 'string',
      inactive: 'boolean',
      veteran: 'boolean',
      hotStreak: 'boolean',
      rank: 'string',
      leaguePoints: 'number',
      losses: 'number',
      lastUpdated: 'Date',
    }

    const missingProperties = Object.keys(schema)
    .filter((key) => player[key] === undefined && key !== '_id')
    .map((key) => key as keyof IPlayer)
    .map((key) => new Error(`Document is missing ${key} ${schema[key]}`))

    return missingProperties.length === 0
  }
