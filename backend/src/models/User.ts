export interface IUser {
  licenseId: string
  _id: string
  firstName: string
  lastName: string
  jobTitle: string
  email: string
  password: string
  companyName: string
  isPlayer: boolean
  playerId: string
}

export const isUser = (user: any): user is IUser => {
  const schema: Record<keyof IUser, string> = {
    licenseId: 'string',
    _id: 'string',
    firstName: 'string',
    lastName: 'string',
    jobTitle: 'string',
    email: 'string',
    password: 'string',
    companyName: 'string',
    isPlayer: 'boolean',
    playerId: 'string',
  }

  const missingProperties = Object.keys(schema)
    .filter((key) => user[key] === undefined && key !== '_id')
    .map((key) => key as keyof IUser)
    .map((key) => new Error(`Document is missing ${key} ${schema[key]}`))

  return missingProperties.length === 0
}
