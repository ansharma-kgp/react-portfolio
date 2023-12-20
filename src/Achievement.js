import React from 'react';
import trophi from "./trophi.png"
import "./styles.css"
const Achievement = () => {
  return (
    <div id ="Achievement">
      <br />
      <div className="starta">
        <img src={trophi} alt="trophyimage" />
        <div className="ach">
          <h1><strong>MY ACHIEVEMENTS</strong></h1>
            <ul>
              <li>Secured AIR 577 in <em>JEE Advanced 2023</em></li>
              <li>Secured 99.82 percentile in <em>JEE Mains 2023</em></li>
              <li>Secured 99.43 percentile in <em>NEET 2023</em></li>
              <li><em>KVPY</em> Scholar</li>
              <li><em>JSTSE</em> Scholar</li>
              <li>Delhi top 1% in <em>NSEC</em></li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Achievement
