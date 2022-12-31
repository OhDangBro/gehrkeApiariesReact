import React from "react";

import ChapstickThree from "../../assets/images/ChapstickImages/Chapstick3.jpg"

import ChapstickIcon from "../../assets/images/ChapstickImages/lip-balm.png"








function Chapstick() {
    return (
<section id="Chapstick">
<div className="honeySection">
   <img alt="chapstick" src={ChapstickThree} class="split chapstickleft" />
<div class="split chapstickright">
 <div class="centered">
 <img className="honeyIcon" alt="chapstick icon" src={ChapstickIcon}/>
   <h2 className="chapstickText">Chapstick</h2>
   <p className="chapstickP">When people find out that we are honey bee farming, they always ask about the honey. But bees also produce beeswax and something will need to be done with the beeswax when you harvest honey. We take this beeswax and filter out the impurities using a simple method of boiling in water and filtering. From there we just mix the beeswax with 1 parts beeswax and 2 parts coconut oil and a few drops of vitamin e. All the ingredients are organic.</p>
 </div>
</div>
</div>
       
</section>
    );
  }
  
  export default Chapstick;