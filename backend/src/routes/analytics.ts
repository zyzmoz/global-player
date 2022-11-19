import { Router } from 'express'
import { findMany, findOne } from '../shared/dbFunctions'
import { getPlayerAnalysis } from '../shared/utils'

import RedisClient from '../shared/redis'

const router = Router()

router.get('/top-players', async (req, res) => {
  const redisClient = RedisClient.getInstance()

  const cachedData = await redisClient.get('topplayers')
  if (cachedData) {
    res.status(200).json(JSON.parse(cachedData))
  } else {
    const topPlayers = await findMany('players', null, { leaguePoints: -1 }, 3)
    const pr = topPlayers.map(async (p) => await getPlayerAnalysis(p))
    const data = await Promise.all(pr)

    await redisClient.set('topplayers', JSON.stringify(data))

    res.status(200).json(data)
  }
})

router.get('/all-players', async (req, res) => {
  const redisClient = RedisClient.getInstance()

  const cachedData = await redisClient.get('allplayers')
  if (cachedData) {
    res.status(200).json(JSON.parse(cachedData))
  } else {
    const topPlayers = await findMany('players', null, { leaguePoints: -1 }, 63)
    const pr = topPlayers.slice(3, topPlayers.length).map(async (p) => await getPlayerAnalysis(p))
    const data = await Promise.all(pr)
    await redisClient.set('allplayers', JSON.stringify(data))

    res.status(200).json(data)
  }
})

router.get('/player/:id', async (req, res) => {
  const { id } = req.params
  const redisClient = RedisClient.getInstance()

  const cachedData = await redisClient.get(`player:${id}`)
  if (cachedData) {
    res.status(200).json(JSON.parse(cachedData))
  } else {
    try {
      const player = await findOne('players', id)
      const playerData = await getPlayerAnalysis(player)
      await redisClient.set(`player:${id}`, JSON.stringify(playerData))

      res.status(200).json(playerData)
    } catch (err) {
      console.log(err)
      res.status(500).end()
    }
  }
})

router.get('/players/:summonerName', async (req, res) => {
  const { summonerName } = req.params
  try {
    const player = await findMany('players', { summonerName: { $regex: summonerName } })
    const pr = player.map(async (p) => await getPlayerAnalysis(p))
    const data = await Promise.all(pr)

    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.status(500).end()
  }
})

export default router
