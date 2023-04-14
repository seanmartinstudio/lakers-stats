import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const[players, setPlayers] = useState(null)
 
  useEffect(() => {
    axios.get('https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237&postseason=true', {
      // params: {
      //   ID: 12345
      // }
    })
    .then(function (response) {
      console.log(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  },[])

  return (
<h1>Hello World!</h1>
  );
}

export default App;
