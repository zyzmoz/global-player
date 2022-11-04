import { Router } from 'express'
import { findMany, findOne } from '../shared/dbFunctions'
import { getPlayerAnalysis } from '../shared/utils'

const router = Router()

router.get('/top-players', async (req, res) => {
  const topPlayers = await findMany('players', null, { leaguePoints: -1 }, 3)
  const pr = topPlayers.map(async p => await getPlayerAnalysis(p))
  const data = await Promise.all(pr) 
  res.status(200).json(data)
})

router.get('/all-players', async (req, res) => {
  const topPlayers = await findMany('players', null, { leaguePoints: -1 }, 63)
  const pr = topPlayers.slice(2, topPlayers.length).map(async p => await getPlayerAnalysis(p))
  const data = await Promise.all(pr) 
  res.status(200).json(data)
})

router.get('/player/:id', async (req, res) => {
  const {id} = req.params
  const player = await findOne('players', id)
  const playerData = await getPlayerAnalysis(player)

  res.status(200).json(playerData)
})

export default router
