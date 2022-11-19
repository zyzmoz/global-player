import { getMatchesDetails, getMatchIds } from '../integrations/RiotAPI'
import { IReview } from '../models/Review'
import { findMany, insert, removeAll, update } from './dbFunctions'

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
    leaguePoints,
  } = player

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

  matches = await findMany('playerMatches', {
    playerId: _id,
    assists: { $gte: 0 },
  })

  // get the tier
  /*[{
  $group: {
    _id: null,
    totaLeaguePoints: {
    $sum: '$leaguePoints'
    },
    totalPlayers: {
    $sum: 1
    }
  }
}] */

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

  const skills = await getPlayerPersonalSkills(_id.toString())

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
    skills,
    leaguePoints,
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

export const getPlayerPersonalSkills = async (playerId: string) => {
  const reviews = await findMany<IReview>('reviews', { playerId })
  const pSkills: any = reviews.reduce(
    (acc: any, rec: any) => {
      acc = {
        teamPlayer: acc.teamPlayer + (rec.teamPlayer ?? 0),
        leadership: acc.leadership + (rec.leadership ?? 0),
        criticalThinking: acc.criticalThinking + (rec.criticalThinking ?? 0),
        problemSolving: acc.problemSolving + (rec.problemSolving ?? 0),
      }
      return acc
    },
    {
      teamPlayer: 0,
      leadership: 0,
      criticalThinking: 0,
      problemSolving: 0,
    }
  )

  const skills: any = reviews.reduce(
    (acc: any, rec: any) => {
      acc = {
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

  const skillMap = {
    teamPlayer: 'Team Player',
    leadership: 'Leadership',
    criticalThinking: 'Critical',
    problemSolving: 'Problem Solving',
  }

  const personalSkills = Object.keys(pSkills)
    .map((key) => {
      return { personalSkill: skillMap[key], value: pSkills[key] / reviews.length }
    })
    .sort((a, b) => (a.value > b.value ? -1 : 1))

  return { personalSkills, skills }
}
