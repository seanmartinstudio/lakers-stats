import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import Stats from './Stats'

const Container = ( {profile, stats, team}) => {
  const[players, setPlayers] = useState([])

  return (
    <div>
      <Profile profile={profile} team={team}/>
      <Stats stats={stats}/>
    </div>
  )
}

export default Container