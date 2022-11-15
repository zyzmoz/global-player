import { boolean, object, string } from 'yup'

const recruiterSchema = object({
  firstName: string().min(3).max(30).required(),

  lastName: string().min(3).max(30).required(),

  jobTitle: string().min(3).max(30),

  email: string().email({ minDomainSegments: 2 }),

  password: string(),

  companyName: string().min(3).max(30).required(),

  isPlayer: boolean().defined(false),
})

const playerSchema = object().shape({
  summonerName: string().min(3).max(30).required(),

  firstName: string().min(3).max(30),

  lastName: string().min(3).max(30),

  jobTitle: string().min(3).max(30),

  email: string().email({ minDomainSegments: 2 }),

  password: string(),

  companyName: string().min(3).max(30),

  isPlayer: boolean().defined(true),

  playerId: string().required(),
})

export { recruiterSchema, playerSchema }
