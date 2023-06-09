import React from 'react'

const Stats = ( {stats, noStatsAvail} ) => {
    const {games_played, season, min, fgm, fga, fg3m, fg3a, ftm, fta, oreb, dreb, reb, ast, stl, blk, turnover, pf, pts, fg_pct, fg3_pct, ft_pct} = stats

    // Number of games played from API is off by +1, this fixes that without a NAN being rendered to UI
    let correctGP = []
    if(games_played !== undefined) {
      correctGP = games_played - 1
    }
    
  return (
    <div className='table-wrapper'>
      <table>
  <tr>
    <th>reg season</th>
    <th>gp</th>
    <th>min</th>
    <th>pts</th>
    <th>fgm</th>
    <th>fga</th>
    <th>fg%</th>
    <th>3pm</th>
    <th>3pa</th>
    <th>3p%</th>
    <th>ftm</th>
    <th>fta</th>
    <th>ft%</th>
    <th>oreb</th>
    <th>dreb</th>
    <th>reb</th>
    <th>ast</th>
    <th>tov</th>
    <th>stl</th>
    <th>blk</th>
    <th>pf</th>
  </tr>
  <tr>
    <td>{season}
    {noStatsAvail
        ? null
        : "-2023"
      }
   </td>
    <td>{correctGP}</td>
    <td>{min}</td>
    <td>{pts}</td>
    <td>{fgm}</td>
    <td>{fga}</td>
    <td>{fg3_pct}</td>
    <td>{fg3m}</td>
    <td>{fg3a}</td>
    <td>{fg_pct}</td>
    <td>{ftm}</td>
    <td>{fta}</td>
    <td>{ft_pct}</td>
    <td>{oreb}</td>
    <td>{dreb}</td>
    <td>{reb}</td>
    <td>{ast}</td>
    <td>{turnover}</td>
    <td>{stl}</td>
    <td>{blk}</td>
    <td>{pf}</td>
  </tr>
    </table>
    {noStatsAvail
        ? <p>No stats available for this player</p>
        : null
      }
    </div>
  )
}

export default Stats