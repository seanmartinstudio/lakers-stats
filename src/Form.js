import React from 'react'

const Form = ( {handleSelectedPlayer} ) => {
  return (
    <form>
    <label for="player-select">Select a player:</label>
    <br></br>
    <select id="player-select" onChange={handleSelectedPlayer}>
        <option value="Shaquille Harrison" selected>Shaquille Harrison</option>
        <option value="D'Angelo Russell">D'Angelo Russell</option>
        <option value="Jarred Vanderbilt">Jarred Vanderbilt</option>
        <option value="Anthony Davis">Anthony Davis</option>
        <option value="Lonnie Walker IV">Lonnie Walker IV</option>
        <option value="Malik Beasley">Malik Beasley</option>
        <option value="LeBron James">LeBron James</option>
        <option value="Troy Brown Jr.">Troy Brown Jr.</option>
        <option value="Tristan Thompson">Tristan Thompson</option>
        <option value="Max Christie">Max Christie</option>
        <option value="Mo Bamba">Mo Bamba</option>
        <option value="Scotty Pippen Jr.">Scotty Pippen Jr.</option>
        <option value="Austin Reaves">Austin Reaves</option>
        <option value="Dennis Schroder">Dennis Schroder</option>
        <option value="Cole Swider">Cole Swider</option>
        <option value="Rui Hachimura">Rui Hachimura</option>
        <option value="Wenyen Gabriel">Wenyen Gabriel</option>
    </select>
    </form>
  )
}

export default Form