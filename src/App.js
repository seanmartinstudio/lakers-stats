import './App.css';
import React, { useState, useEffect } from 'react';
import Container from './Container';
import Form from './Form';
import axios from 'axios';

function App() {
  const [profile, setProfile] = useState([])
  const [stats, setStats] = useState([])
  const [team, setTeam] = useState([])
  const [noStatsAvail, setNoStatsAvail] = useState(false)
  const [selectedPlayer, setSelectedPlayer] = useState('Shaquille Harrison')

  const handleSelectedPlayer = ((event) => setSelectedPlayer(event.target.value))

  useEffect(() => {
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${selectedPlayer}`)
    .then(resProfile => {
      setProfile(resProfile.data.data[0])
      setTeam(resProfile.data.data[0].team)
      let playerId = resProfile.data.data[0].id
      return axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${playerId}`)
    })
    .then(resStats => {
      if(resStats.data.data[0] === undefined) {
        setStats([])
        setNoStatsAvail(true)
      } else {
        setStats(resStats.data.data[0])
        setNoStatsAvail(false)
      }
    })
    .catch(error => {
      console.error(error);
    })
  },[selectedPlayer])

  // console.log("Profile ->", profile)
  // console.log("Stats ->", stats)
  // console.log("Team ->", team)
  // console.log("Stats Not Avail", noStatsAvail)

  return (
  <div>
    <Container profile={profile} stats={stats} team={team} noStatsAvail={noStatsAvail}/>
    {noStatsAvail
        ? <p>No stats available for this player</p>
        : null
      }
    <Form handleSelectedPlayer={handleSelectedPlayer}/>
    <img src="/Magic.png" alt="Magic Johnson" />
  </div>
  )
}

//array of players as of 4/20/2023
// const lakersRoster = [
//   "Shaquille_Harrison", "D'Angelo_Russell", "Jarred_Vanderbilt", "Anthony_Davis", "Lonnie_Walker_IV",
//   "Malik_Beasley", "LeBron_James", "Troy_Brown_Jr.", "Tristan_Thompson", "Max_Christie", "Mo_Bamba",
//   "Scotty_Pippen_Jr.", "Austin_Reaves", "Dennis_Schroder", "Cole_Swider", "Rui_Hachimura", "Wenyen_Gabriel"
// ]


export default App;
