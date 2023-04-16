import React from 'react'

const Profile = ( {profile, team} ) => {
    const {first_name, last_name, position, height_feet, height_inces, weight_pounds} = profile
    const {full_name} = team
  return (
    <div>{full_name}</div>
  )
}

export default Profile