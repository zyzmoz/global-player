export interface IPlayerMatch {
  _id: string
  playerId: string
  role: string
  championName: string
  championId: string
  win: boolean
  kills: number
  deaths: number
  assists: number
}

export const isPlayerMatch = (match: any): match is IPlayerMatch => {
  const schema: Record<keyof IPlayerMatch, string> = {
    _id: 'string',
    playerId: 'string',
    role: 'string',
    championName: 'string',
    championId: 'string',
    win: 'boolean',
    kills: 'number',
    deaths: 'number',
    assists: 'number',
  }

  const missingProperties = Object.keys(schema)
    .filter((key) => match[key] === undefined && key !== '_id')
    .map((key) => key as keyof IPlayerMatch)
    .map((key) => new Error(`Document is missing ${key} ${schema[key]}`))

  return missingProperties.length === 0
}
