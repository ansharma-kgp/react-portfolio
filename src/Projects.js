import React, {Component} from 'react';
import Slider from 'react-slick';
import josaa from "./josaa.jpg";
export default function Projects() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="Projects">
      <br /> <br />
      <h1>My Projects</h1>
      <br />
      <div className="proj">
        <Slider {...settings}>
          <div className="project">
            <img src={ josaa } />
            <div class="josaatext">
              <h4><a href="https://ansharma-kgp.github.io/josaawebpageabcd/">JOSAA sign up form</a></h4><br />
              <p>This webpage is based on josaa sign up form and also directs to a table consisting top 10 choices in josaa counselling</p>
            </div>  
          </div>
          <div className = "project">
            <h4>2</h4>
          </div>
        </Slider>
        <br />
      </div>
    </div>
  );
}