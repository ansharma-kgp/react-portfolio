import React from "react" ;
import Navbar from "./Navbar";
import Home from "./Home"
import Achievement from "./Achievement";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./profilepic.jpeg";
import "./styles.css";
const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Achievement />
    <Skills />
    <Projects />
    <Contact />
    </>
  )
}
export default App