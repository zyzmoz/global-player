export interface IReview {
  _id: string
  playerId: string
  userId: number
  teamPlayer: number
  leadership: number
  criticalThinking: number
  problemSolving: number
  coordination: boolean
  deffensive: boolean
  dueling: boolean
  farming: boolean
  offensive: boolean
  picking: boolean
  reactionTime: boolean
  roaming: boolean
  skirmishing: boolean
  steadiness: boolean
  timing: boolean
}

export const isReview = (review: any): review is IReview => {
  const schema: Record<keyof IReview, string> = {
    _id: 'string',
    playerId: 'string',
    userId: 'number',
    teamPlayer: 'number',
    leadership: 'number',
    criticalThinking: 'number',
    problemSolving: 'number',
    coordination: 'boolean',
    deffensive: 'boolean',
    dueling: 'boolean',
    farming: 'boolean',
    offensive: 'boolean',
    picking: 'boolean',
    reactionTime: 'boolean',
    roaming: 'boolean',
    skirmishing: 'boolean',
    steadiness: 'boolean',
    timing: 'boolean',
  }

  const missingProperties = Object.keys(schema)
    .filter((key) => review[key] === undefined && key !== '_id')
    .map((key) => key as keyof IReview)
    .map((key) => new Error(`Document is missing ${key} ${schema[key]}`))

  return missingProperties.length === 0
}
