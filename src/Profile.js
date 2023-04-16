import React from 'react'

const Profile = ( {profile} ) => {
    const {first_name, last_name, position, height_feet, height_inces, weight_pounds, team} = profile
  return (
    <div>{first_name}</div>
  )
}

export default Profile