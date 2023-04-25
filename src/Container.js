import React from 'react'
import Profile from './Profile'
import Stats from './Stats'

const Container = ( {profile, stats, team, noStatsAvail}) => {

  return (
    <div>
      <Profile profile={profile} team={team}/>
      <Stats stats={stats} noStatsAvail={noStatsAvail}/>
    </div>
  )
}

export default Container