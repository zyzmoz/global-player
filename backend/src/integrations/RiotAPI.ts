import axios from 'axios'
/*
20 requests every 1 second
100 requests every 2 minutes
*/

// LeagueV4: Players
// https://na1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5

// AccountV4: puuid

// MatchesV4: Matches

// MatchesV4: Match details

// Get Initial Data;
// fetches 100 times that wait 2 minutes
//  ^ based on players, then 20 players every 2 minutes
//  Until we Iterate into all users
// 1000 * 120
