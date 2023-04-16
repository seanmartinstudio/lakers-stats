import React from 'react'
import Profile from './Profile'
import Stats from './Stats'

const Container = ( {profile, stats}) => {
  return (
    <div>
      <Profile profile={profile}/>
      <Stats stats={stats}/>
    </div>
  )
}

export default Container