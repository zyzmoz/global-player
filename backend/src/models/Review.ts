export interface IReview {
    _id: string
    playerId: string
    userId: number
    review: string
  }

  export const isReview = (review: any): review is IReview => {
    const schema: Record<keyof IReview, string> = {
        _id: "string",
        playerId: "string",
        userId: "number",
        review: "string"
    }

    const missingProperties = Object.keys(schema)
    .filter((key) => review(key) === undefined && key !== '_id')
    .map((key) => key as keyof IReview)
    .map((key) => new Error(`Document is missing ${key} ${schema[key]}`))

    return missingProperties.length === 0
  }