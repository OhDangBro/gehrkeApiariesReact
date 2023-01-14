import React from "react";
import chapstickImage from "../../assets/images/ChapstickImages/chapStick.png"
import Zoom from 'react-reveal/Zoom';






function Chapstick() {
    return (
        <>
        
            <section id="Honey">
                <div className="section">
                    <div class="split sectionLeft" >
                        <Zoom>
                       <h3 className="ourProduct"> Our Chapstick</h3>
                       </Zoom>
                       <div class="productLine"></div>
                       <p class="productText">Three simple organic ingrediants. Beeswax, Coconut Oil & Vitamin E. Natural - No parabens, added chemicals, or alcohol. </p>
                       <p class="productText">Beeswax contains anti-inflammatory, anti-bacterial and anti-viral properties.</p>
                       <p class="productText">From our hive, to your home.</p>
                       <div class="productLine ver"></div>
                       <p class="productButton" onClick={()=>{ alert("Our bee's are resting for the winter, we will have honey again starting May!"); }} >Shop Now</p>
                    </div>
                    
                    <div class="split sectionRight">
                   
                   <div>
                       <div class="gallery">
                       <ul class='circles'>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
<img className="chapstickImage" src={chapstickImage}/>
                           <div class="shadowChap"></div>
                       </div>
                       </div>
                   </div>
                </div>
            </section>
        </>
    );
}

export default Chapstick;