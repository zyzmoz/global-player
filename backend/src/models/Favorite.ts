import { ObjectId } from "mongodb"

export interface IFavorite {
  _id: string
  playerId: ObjectId
  userId: string
}

export const isFavorite = (plan: any): plan is IFavorite => {
  const schema: Record<keyof IFavorite, string> = {
    _id: 'string',
    playerId: 'string',
    userId: 'string',
  }

  const missingProperties = Object.keys(schema)
    .filter((key) => plan[key] === undefined && key !== '_id')
    .map((key) => key as keyof IFavorite)
    .map((key) => new Error(`Document is missing ${key} ${schema[key]}`))

  // throw the errors if you choose

  return missingProperties.length === 0
}
