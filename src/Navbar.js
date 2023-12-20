import React, { useState } from 'react';
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className = "header">
      <div className = {click ? "linesmenu active": "linesmenu"} onClick = {handleClick}>
        {click ? (
        <FaTimes size={30} style={{color: "white"}}/>
        ) : (
        <FaBars size={30} style={{color: "white"}}/>
        )}

      </div>
      <ul className={click ? "navbar active" : "navbar"}>
        <li>
          <a href = "#">About Me</a>
        </li>
        <li>
          <a href = "#Achievement">My Achievements</a>
        </li>
        <li>
          <a href = "#Skills">Skills</a>
        </li>
        <li>
          <a href = "#Projects">Projects</a>
        </li>
        <li>
          <a href = "#Contact">Contact Me</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
