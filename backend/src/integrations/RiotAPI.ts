import axios from 'axios'
import { update } from '../shared/dbFunctions'
/*
  20 requests every 1 second
  100 requests every 2 minutes
*/

// https://na1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5

// LeagueV4: Players
const getPlayers = async () => {
  // Fetch Data from Riot API
  const res = await axios
    .get('https://na1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5', {
      headers: {
        'X-Riot-Token': process.env.RIOT_API_KEY || '',
      },
    })
    .catch((error) => ({ error }))
  const { error, data } = res as any

  if (error) return

  return data?.entries
}

// AccountV4: puuid
const getPuuidAndProfileIcon = async (summonerData) => {
  const { summonerId } = summonerData
  const res = await axios
    .get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/${summonerId}`, {
      headers: {
        'X-Riot-Token': process.env.RIOT_API_KEY || '',
      },
    })
    .catch((error) => ({ error }))
  const { error, data } = res as any

  if (error) return

  const { puuid, profileIconId } = data

  const player = await update('players', { ...summonerData, puuid, profileIconId }, { summonerId })

  return player

  // https://na1.api.riotgames.com/lol/summoner/v4/summoners/${summonerId}
  // use summonerId
  // get puuid
  // get profile icon

  // Update player
}

// MatchesV4: Matches
const getMatchIds = async (puuid: string) => {
  const res = await axios
    .get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids`, {
      headers: {
        'X-Riot-Token': process.env.RIOT_API_KEY || '',
      },
    })
    .catch((error) => ({ error }))
  const { error, data } = res as any

  if (error) return
  return data as string[]
}

// MatchesV4: Match details

const getMatchesDetails = async (matchId: string, puuid: string) => {
  const res = await axios
    .get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}`, {
      headers: {
        'X-Riot-Token': process.env.RIOT_API_KEY || '',
      },
    })
    .catch((error) => ({ error }))
  const { error, data } = res as any

  if (error) return
  const { info } = data
  const matchDetails = info.participants.find((player) => player.puuid === puuid)

  return matchDetails
}

// Get Initial Data;
// fetches 100 times that wait 2 minutes
//  ^ based on players, then 20 players every 2 minutes
//  Until we Iterate into all users
// 1000 * 120

export { getPlayers, getPuuidAndProfileIcon, getMatchIds, getMatchesDetails }
