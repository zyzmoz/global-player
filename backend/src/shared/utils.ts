import { getMatchesDetails, getMatchIds } from '../integrations/RiotAPI'
import { findMany, insert, removeAll } from './dbFunctions'

const DECIMAL_PLACES = Math.pow(10, 1)

export const getPlayerAnalysis = async (player) => {
  const { summonerName, wins, losses, _id, puuid, firstName, lastName, profileIconId } = player

  let matches = await findMany('playerMatches', {
    playerId: _id,
    assists: { $gte: 0 },
  })

  if (matches.length < 2) {
    await removeAll('playerMatches', { playerId: _id })
    const matchIds = (await getMatchIds(puuid)) || []
    const prMatches = matchIds.map(async (m) => {
      const matchDetails = await getMatchesDetails(m, puuid)
      await insert('playerMatches', { ...matchDetails, playerId: _id })
    })

    await Promise.all(prMatches)

    matches = await findMany('playerMatches', {
      playerId: _id,
      assists: { $gte: 0 },
    })
  }

  const roles: any = matches.reduce(
    (acc: any, rec: any) => {
      if (rec.role === 'JUNGLE' || rec.teamPosition === 'JUNGLE') {
        acc.jungle++
      }
      if (rec.role === 'MIDDLE' || rec.teamPosition === 'MIDDLE') {
        acc.middle++
      }
      if (rec.role === 'SUPPORT' || rec.teamPosition === 'SUPPORT') {
        acc.support++
      }
      if (rec.role === 'BOT' || rec.teamPosition === 'BOT') {
        acc.carry++
      }
      if (rec.role === 'TOP' || rec.teamPosition === 'TOP') {
        acc.top++
      }

      return acc
    },
    { support: 0, jungle: 0, middle: 0, carry: 0, top: 0, kda: 0 }
  )

  const kdaData: any = matches.reduce(
    (acc: any, rec: any, i) => {
      const { kills, deaths, assists } = rec
      if (kills || deaths || assists) {
        acc.kills += kills
        acc.deaths += deaths
        acc.assists += assists
      }
      return acc
    },
    { kills: 0, deaths: 0, assists: 0 }
  )

  let role

  Object.keys(roles).map((key) => {
    if (!role) {
      role = key
    } else {
      if (roles[key] > roles[role]) {
        role = key
      }
    }
  })

  const data = {
    id: _id,
    profileIconId,
    summonerName,
    firstName,
    lastName,
    matches: wins + losses,
    winRate: Math.round(((wins * 100) / (wins + losses)) * DECIMAL_PLACES) / DECIMAL_PLACES,
    rank: 'Challenger',
    role,
    kda: Math.round(((kdaData.kills + kdaData.assists) / kdaData.deaths) * DECIMAL_PLACES) / DECIMAL_PLACES,
    kills: Math.round((kdaData.kills / matches.length) * DECIMAL_PLACES) / DECIMAL_PLACES,
    deaths: Math.round((kdaData.deaths / matches.length) * DECIMAL_PLACES) / DECIMAL_PLACES,
    assists: Math.round((kdaData.assists / matches.length) * DECIMAL_PLACES) / DECIMAL_PLACES,
    pkill: Math.round((100/((kdaData.kills + kdaData.assists) / kdaData.deaths)) * DECIMAL_PLACES) / DECIMAL_PLACES,
    wins,
    losses,
  }

  return data
}
