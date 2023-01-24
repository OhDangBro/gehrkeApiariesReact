import React from "react";
import chapstickImage from "../../assets/images/ChapstickImages/chapStick.png"
import Zoom from 'react-reveal/Zoom';






function Chapstick() {
    return (
        <>
        
            <section id="Honey">
                <div className="section">
                    <div class="split sectionLeft" >
                        <div className="containerChapLeft">
                        <Zoom>
                       <h3 className="ourProductChap"> Our Chapstick</h3>
                       </Zoom>
                       <div class="productLineChap"></div>
                       <p class="productTextChap">Three simple organic ingrediants. Beeswax, Coconut Oil & Vitamin E. Natural - No parabens, added chemicals, or alcohol. </p>
                       <p class="productTextChap">Beeswax contains anti-inflammatory, anti-bacterial and anti-viral properties.</p>
                       <p class="productTextChap">From our hive, to your home.</p>
                       <div class="productLineChap ver"></div>
                       <p class="productButtonChap" onClick={()=>{ alert("Our bee's are resting for the winter, we will have honey again starting May!"); }} >Shop Now</p>
                    </div>
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