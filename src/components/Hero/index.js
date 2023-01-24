import React from "react";
import beeVideo from '../../assets/images/Bee.mp4'
import beeGif from '../../assets/images/BeeGif.gif'



function Hero() {
  return (
    <div class="heroContainer">
    <video className="onDesktop" autoPlay muted src={beeVideo} alt="blue smoke" loop="true"></video>
    <img className="onMobile" autoPlay muted src={beeGif} alt="blue smoke" loop="true"></img>
    <div class="text-box">
    <span class="dot"></span>
      <h1 className="heroBigText">GEHRKE</h1>
      <h1 className="heroBottom">APIARIES</h1>

    </div>
  </div>

   
  );
}

export default Hero;