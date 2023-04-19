import './App.css';
import React, { useState, useEffect } from 'react';
import Container from './Container';

function App() {
  const[profile, setProfile] = useState([])
  const[stats, setStats] = useState([])
  const[team, setTeam] = useState([])
  let playerForEndPoint = "LeBron_James"


  const lakersRoster = [
    "Shaquille_Harrison", "D'Angelo_Russell", "Jarred_Vanderbilt", "Anthony_Davis", "Lonnie_Walker_IV",
    "Malik_Beasley", "LeBron_James", "Troy_Brown_Jr.", "Tristan_Thompson", "Max_Christie", "Mo_Bamba",
    "Scotty_Pippen_Jr.", "Austin_Reaves", "Dennis_Schroder", "Cole_Swider", "Rui_Hachimura", "Wenyen_Gabriel"
  ]

  const handleRandomPlayer = (() => {
    const randomIndex = Math.floor(Math.random() * lakersRoster.length)
    playerForEndPoint = lakersRoster[randomIndex]
  })

  useEffect(() => {
    Promise.all([
      fetch(`https://www.balldontlie.io/api/v1/players?search=${playerForEndPoint}`),
      fetch('https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237'),
    ])
    .then(([resProfile, resStats]) => 
        Promise.all([resProfile.json(), resStats.json()])
      )
    .then(([dataProfile, dataStats]) => {
      setProfile(dataProfile.data[0])
      setStats(dataStats.data[0])
      setTeam(dataProfile.data[0].team)
    })
  },[])

  console.log("Profile ->", profile)
  console.log("Stats ->", stats)
  console.log("Team ->", team)

  return (
  <div>
    <Container profile={profile} stats={stats} team={team} />
    <button onClick={handleRandomPlayer}>Click Me!</button>
  </div>
  )
}


export default App;
