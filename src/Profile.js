import React from 'react'
import 'animate.css';

const Profile = ( {profile, team} ) => {
    const {first_name, last_name, position, height_feet, height_inches, weight_pounds} = profile
    const {full_name} = team

  return (
    <div className='profile'>
        <h1 key={first_name} class="animate__animated animate__bounce">{first_name} {last_name}</h1>
        <ul>
        <li>{full_name}</li>
        <li>Height: {height_feet}' {height_inches}"</li>
        <li>Weight: {weight_pounds}lb.</li>
        <li>Position: {position}</li>
        </ul>
    </div>
  )
}

export default Profile