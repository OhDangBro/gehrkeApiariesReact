import React from "react";
import Fade from 'react-reveal/Fade';
import beeVideo from '../../assets/images/Bee.mp4'



function Hero() {
  return (
   
      <div class="heroContainer">
        <video autoPlay muted src={beeVideo} loop="true"></video>
        <div class="text-box">
          <h1>GEHRKE</h1>
          <h1 className="heroBottom">APIARIES</h1>
        </div>
      </div>
   
  );
}

export default Hero;