import { getMatchesDetails, getMatchIds } from '../integrations/RiotAPI'
import { IReview } from '../models/Review'
import { findMany, insert, removeAll, update, upsert } from './dbFunctions'

const DECIMAL_PLACES = Math.pow(10, 1)

export const getPlayerAnalysis = async (player) => {
  const {
    _id,
    puuid,
    summonerName,
    wins,
    losses,
    firstName,
    lastName,
    profileIconId,
    freshBlood,
    inactive,
    veteran,
    hotStreak,
  } = player

  let matches = await findMany('playerMatches', {
    playerId: _id,
  })

  // get data when no matches
  if (matches.length === 0) {
    const matchIds = (await getMatchIds(puuid)) || []
    const prMatches = matchIds.map(async (matchId) => {
      const matchDetails = await getMatchesDetails(matchId, puuid)
      await insert('playerMatches', { ...matchDetails, playerId: _id, matchId })
    })
    await Promise.all(prMatches)
  }

  // get data about empty matches
  const emptyMatchesWithoutIds = matches
    .filter((m: Object) => m.hasOwnProperty('assists') && m.hasOwnProperty('matchId'))
    .map((m: any) => m._id)
  await removeAll('playerMatches', { _id: { $in: emptyMatchesWithoutIds } })

  const emptyMatchesWithIds = matches
    .filter((m: Object) => m.hasOwnProperty('assists') && !m.hasOwnProperty('matchId'))
    .map((m: any) => ({ _id: m._id, matchId: m.matchId }))

  if (emptyMatchesWithIds.length > 0) {
    const prMatches = emptyMatchesWithIds.map(async (match) => {
      const matchDetails = await getMatchesDetails(match.matchId, puuid)
      await update('playerMatches', { ...matchDetails, playerId: _id, ...match })
    })
    await Promise.all(prMatches)
  }

  const matchIds = (await getMatchIds(puuid)) || []
  const prMatches = matchIds.map(async (matchId) => {
    const matchDetails = await getMatchesDetails(matchId, puuid)
    await insert('playerMatches', { ...matchDetails, playerId: _id, matchId })
  })
  await Promise.all(prMatches)

  matches = await findMany('playerMatches', {
    playerId: _id,
    assists: { $gte: 0 },
  })

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
    pkill: Math.round((100 / ((kdaData.kills + kdaData.assists) / kdaData.deaths)) * DECIMAL_PLACES) / DECIMAL_PLACES,
    wins,
    losses,
    freshBlood,
    inactive,
    veteran,
    hotStreak,
  }

  return data
}

export const getPlayerReviews = (reviews: IReview[]) => {
  const r: any = reviews.reduce(
    (acc: any, rec: any) => {
      acc = {
        teamPlayer: acc.teamPlayer + (rec.teamPlayer ?? 0),
        leadership: acc.leadership + (rec.leadership ?? 0),
        criticalThinking: acc.criticalThinking + (rec.criticalThinking ?? 0),
        problemSolving: acc.problemSolving + (rec.problemSolving ?? 0),
        coordination: rec.coordination ? acc.coordination + 1 : acc.coordination,
        deffensive: rec.deffensive ? acc.deffensive + 1 : acc.deffensive,
        dueling: rec.dueling ? acc.dueling + 1 : acc.dueling,
        farming: rec.farming ? acc.farming + 1 : acc.farming,
        offensive: rec.offensive ? acc.offensive + 1 : acc.offensive,
        picking: rec.picking ? acc.picking + 1 : acc.picking,
        reactionTime: rec.reactionTime ? acc.reactionTime + 1 : acc.reactionTime,
        roaming: rec.roaming ? acc.roaming + 1 : acc.roaming,
        skirmishing: rec.skirmishing ? acc.skirmishing + 1 : acc.skirmishing,
        steadiness: rec.steadiness ? acc.steadiness + 1 : acc.steadiness,
        timing: rec.timing ? acc.timing + 1 : acc.timing,
      }
      return acc
    },
    {
      teamPlayer: 0,
      leadership: 0,
      criticalThinking: 0,
      problemSolving: 0,
      coordination: 0,
      deffensive: 0,
      dueling: 0,
      farming: 0,
      offensive: 0,
      picking: 0,
      reactionTime: 0,
      roaming: 0,
      skirmishing: 0,
      steadiness: 0,
      timing: 0,
    }
  )

  const total = {
    ...r,
    teamPlayer: r.teamPlayer / reviews.length,
    leadership: r.leadership / reviews.length,
    criticalThinking: r.criticalThinking / reviews.length,
    problemSolving: r.problemSolving / reviews.length,
  }

  return total
}
