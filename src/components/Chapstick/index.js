import React from "react";
import chapstickImage from "../../assets/images/ChapstickImages/chapStick.png"
import Zoom from 'react-reveal/Zoom';






function Chapstick() {
    return (
        <>
        
            <section id="Honey">
                <div className="section">
                    <div className="split sectionLeft" >
                        <div className="containerChapLeft">
                        <Zoom>
                       <h3 className="ourProductChap"> Our Chapstick</h3>
                       </Zoom>
                       <div className="productLineChap"></div>
                       <p className="productTextChap">Experience the power of nature with our all-natural, organic balm made with just three simple ingredients: beeswax from our own hives, coconut oil, and vitamin E.  </p>
                       <p className="productTextChap">Free from parabens, chemicals, and alcohol, our balm harnesses the anti-inflammatory, anti-bacterial, and anti-viral properties of beeswax to nourish and protect your skin.</p>
                       <p className="productTextChap">From our hive to your home, enjoy the purest, most effective skincare available."</p>
                       <div className="productLineChap ver"></div>
                       <p className="productButtonChap" onClick={()=>{ alert("We're currently out of chapstick. Please check back in September when we'll have more in stock."); }} >Shop Now</p>
                    </div>
                    </div>
                    <div className="split sectionRight">
                   
                   <div>
                       <div className="gallery">
                       <ul className='circles'>
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
<img className="chapstickImage" src={chapstickImage} alt="chapstick container local chapstick"/>
                           <div className="shadowChap"></div>
                       </div>
                       </div>
                   </div>
                </div>
            </section>
        </>
    );
}

export default Chapstick;