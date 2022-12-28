import React from "react";
import Fade from 'react-reveal/Fade';




function Hero() {
    return (
   <> 
      <div class="hero-image">
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
        <Fade top>
      <h1 className="heroHoneyChapstick" >Honey & Chapstick</h1>
      </Fade>
        </div> 
      </div>
      </>  
    );
  }
  
  export default Hero;