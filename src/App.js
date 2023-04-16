import './App.css';
import React, { useState, useEffect } from 'react';
import Container from './Container';

function App() {
  const[profile, setProfile] = useState([])
  const[stats, setStats] = useState([])
 
  useEffect(() => {
    Promise.all([
      fetch('https://www.balldontlie.io/api/v1/players/237'),
      fetch('https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237&postseason=true'),
    ])
    .then(([resProfile, resStats]) => 
        Promise.all([resProfile.json(), resStats.json()])
      )
    .then(([dataProfile, dataStats]) => {
      setProfile(dataProfile)
      setStats(dataStats.data[0])
    })
  },[])

  console.log("Profile", profile)
  console.log("Stats", stats)



  return (
  <div>
    <Container profile={profile} stats={stats} />
  </div>
  )
}


export default App;
