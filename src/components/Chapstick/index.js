import React from "react";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import ChapstickOne from "../../assets/images/ChapstickImages/Chapstick1.jpg"
import ChapstickTwo from "../../assets/images/ChapstickImages/Chapstick2.jpg"
import ChapstickThree from "../../assets/images/ChapstickImages/Chapstick3.jpg"
import ChapstickFour from "../../assets/images/ChapstickImages/Chapstick4.jpg"
import ChapstickFive from "../../assets/images/ChapstickImages/Chapstick5.jpg"
import ChapstickIcon from "../../assets/images/ChapstickImages/lip-balm.png"
import Box from '@mui/material/Box';







function Chapstick() {
    return (
<>

<section id="Chapstick">
<div className="honeySection">
   <div class="split chapstickleft" >
  
   <div class = "chapstickgallery">
  <div class="clipped-border">
    <img src={ChapstickOne} id="clipped"/>
  </div>
  <div class="clipped-border">
    <img src={ChapstickTwo} id="clipped"/>
  </div>
  <div class="clipped-border">
    <img src={ChapstickThree} id="clipped"/>
  </div>
    <div class="clipped-border">
    <img src={ChapstickFour} id="clipped"/>
  </div>
    <div class="clipped-border">
    <img src={ChapstickFive} id="clipped"/>
  </div>
  <div class = "shadow"></div>
</div>
   </div>
<div class="split chapstickright">
 <div class="centered">
 <img className="chapstickIcon" alt="chapstick icon" src={ChapstickIcon}/>
   <h2 className="chapstickText">Chapstick</h2>
   <p className="chapstickP">When people find out that we are honey bee farming, they always ask about the honey. But bees also produce beeswax and something will need to be done with the beeswax when you harvest honey. We take this beeswax and filter out the impurities using a simple method of boiling in water and filtering. From there we just mix the beeswax with 1 parts beeswax and 2 parts coconut oil and a few drops of vitamin e. All the ingredients are organic.</p>
 </div>
</div>
</div>
       
</section>
      



       </>
    );
  }
  
  export default Chapstick;



 