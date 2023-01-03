import React from "react";
import Fade from 'react-reveal/Fade';




function Hero() {
  return (
    <section id="Home">
      <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }} class="hero-image">
        <div style={{ width: '600px' }} className="hero-container">
          <Fade bottom>
            <h1 className="heroGerkeApiaries" >Gehrke Apiaries</h1>
          </Fade>
          <div className="heroSmallText">
            <Fade left>
              <p>Raw, organic, unfiltered & ethical.</p>
            </Fade>
            <Fade right>
              <p>From our hive, to your home.</p>
            </Fade>
          </div>
          <Fade top>
            <h1 className="heroHoneyChapstick" >Honey & Chapstick</h1>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Hero;