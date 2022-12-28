import React from "react";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import fourOzHoney from '../../assets/images/HoneyImages/4ozHoney.jpeg'
import HoneyFiltering from '../../assets/images/HoneyImages/HoneyFiltering.jpg'
import oneOzHoney from '../../assets/images/HoneyImages/oneOzHoney.jpg'
import TwoBigOneSmall from '../../assets/images/HoneyImages/TwoBigOneSmall.jpg'
import TwoSmallOneBig from '../../assets/images/HoneyImages/TwoSmallOneBig.jpg'
import honeyIcon from '../../assets/images/HoneyImages/apitherapy.png'








function Honey() {
    return (

      <div className="honeySection">
        <div>
        <Fade top>
      <h2 className="honeyIntro honeyFont" align="center">H</h2>
      </Fade>
      <Fade right>
      <h2 className="honeyIntro honeyFont" align="center">o</h2>
      </Fade>
      <Fade>
      <h2 className="honeyIntro honeyFont" align="center">n</h2>
      </Fade>
      <Fade left>
      <h2 className="honeyIntro honeyFont" align="center">e</h2>
      </Fade>
      <Fade bottom>
      <h2 className="honeyIntro honeyFont" align="center">y</h2>
      </Fade>
        </div>
        <div class = "gallery">
  <div class="clipped-border">
    <img src={TwoBigOneSmall} id="clipped"/>
  </div>
  <div class="clipped-border">
    <img src={oneOzHoney} id="clipped"/>
  </div>
  <div class="clipped-border">
    <img src={HoneyFiltering} id="clipped"/>
  </div>
    <div class="clipped-border">
    <img src={fourOzHoney} id="clipped"/>
  </div>
    <div class="clipped-border">
    <img src={TwoSmallOneBig} id="clipped"/>
  </div>
  <div class = "shadow"></div>
</div>
<img className="honeyIcon" src={honeyIcon}/>
<div className="honeySide">
  
  <Zoom>
  <h1 className="honeyH1">How we do it?</h1>
  </Zoom>
  <Bounce right>
  <p className="honeyP">We go into each hive and take 20% of the honey, leaving the other 80% of the honey for the bees. Honey bees make the honey as a way of storing food to eat over the cooler winter periods, when they are unable to forage. Taking only 20% of the honey leaves the bees with more than enough to last till spring. When spring comes we will harvest most of the leftover honey. Our honey is 100% Pure Organic, Raw & Unfiltered, from our hive to your home.</p>
  </Bounce>
</div>
       </div>
       
       
    );
  }
  
  export default Honey;

  