import React from 'react'

const Profile = ( {profile, team} ) => {
    const {first_name, last_name, position, height_feet, height_inches, weight_pounds} = profile
    const {full_name} = team

  return (
    <div className='profile'>
        <p>{first_name} {last_name}</p>
        <p>{full_name}</p>
        <p>Height: {height_feet}' {height_inches}"</p>
        <p>Weight: {weight_pounds}lb.</p>
        <p>Position: {position}</p>
    </div>
  )
}

export default Profile