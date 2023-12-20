import React from 'react'
import profilepic from "./profilepic.jpeg"
import "./styles.css"
const Home = () => {
  return (
    <>
    <div id ="#">
      <div className="start">
        <div className = "picture">
          <img src={profilepic} alt = "home.js"/>
        </div>
        <div className = "desc">
          <h3>Hello,</h3>
          <br />
          <h1>I am Ansh Sharma</h1>
          <br /><br />
          <h3>I am a CSE undergrad at I.I.T. Kharagpur <br /><br />I am from Delhi</h3>
        </div>
      </div>
{/*       <div className="aboutpage" id="aboutpage">
                <p>I am Ansh Sharma, a first year undergraduate student of the Department of Computer Science and Engineering, enrolled in its dual degree course at I.I.T Kharagpur. I hail from Delhi and did my schooling from St.Angel's School, Rohini, Delhi.<br />I am passionate about programming and am enthusiastic to learn more about fields like Machine Learning, cybersecurity, etc.<br /> I like playing Lawn Tennis and other than that, I have also played some video games like Minecraft. I like reading novels, watching films and listening to music.</p>
      </div> */}
    </div>
    </>
  )
}

export default Home