import React from 'react'
import Profile from './Profile'
import Stats from './Stats'

const Container = ( {profile, stats, team}) => {
  return (
    <div>
      <Profile profile={profile} team={team}/>
      <Stats stats={stats}/>
    </div>
  )
}

export default Container