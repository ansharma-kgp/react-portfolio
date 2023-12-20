import React from 'react'
import linkedin from "./linkedin.png"
import insta from "./insta.png"
import fb from "./fb.png"
import gh from "./gh.png"
import gmail from "./gmail.png"
const Contact = () => {
  return (
    <div id="Contact">
      <br /> <br />
      <div className="footer">
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/ansh-sharma-04a981280/"><img src={linkedin} alt="linkedin profile" /></a>
        </div>
        <div className="gmail">
          <a href="aanshmudgal@gmail.com" onClick={alert("Email id: aanshmudgal@gmail.com")}><img src={gmail} /></a>
        </div>
        <div className="fb">
          <a href="https://www.facebook.com/profile.php?id=100095749111358"><img src={fb} /></a>
        </div>
        <div className="git">
          <a href="https://github.com/ansharma-kgp"><img src={gh} /></a>
        </div>

      </div>
    </div>
  )
}

export default Contact
