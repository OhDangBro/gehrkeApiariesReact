import React from "react";
import fourOzHoney from '../../assets/images/HoneyImages/4ozHoney.jpeg'
import HoneyFiltering from '../../assets/images/HoneyImages/HoneyFiltering.jpg'
import oneOzHoney from '../../assets/images/HoneyImages/oneOzHoney.jpg'
import TwoBigOneSmall from '../../assets/images/HoneyImages/TwoBigOneSmall.jpg'
import TwoSmallOneBig from '../../assets/images/HoneyImages/TwoSmallOneBig.jpg'
import Zoom from 'react-reveal/Zoom';






function Honey() {
    return (
        <>
        
            <section id="Honey">
                <div className="section">
                    <div class="split sectionLeft" >
                        <div className="leftContainer">
                        <Zoom>
                       <h3 className="ourProduct"> <span className="firstLetter">O</span>ur Honey</h3>
                       </Zoom>
                       <div class="productLine"></div>
                       <p class="productText">Indulge in the purest form of honey with our unheated, unpasteurized and pesticide-free honey.</p>
                       <p class="productText productTextSmall">Hand-harvested and hand-bottled, our honey maintains all of its essential vitamins, minerals, amino acids, and enzymes, just as nature intended. </p>
                       <p class="productText productTextSmall productTextSmaller">Enjoy the benefits of a truly natural and pure honey, straight from our hives to your home.</p>

                       <div class="productLine ver"></div>
                       <p class="productButton" onClick={()=>{ alert("Our bee's are resting for the winter, we will have honey again starting May!"); }} >Shop Now</p>
                    </div>
                    </div>
                    <div class="split sectionRight">
                   
                    <div className="containerGallery">
                        <div class="gallery">
                        <ul class='circlesHoney'>
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
                            <div class="clipped-border">
                                <img style={{background: "linear-gradient(#e66465, #9198e5);" }} src={fourOzHoney} alt="four oz honey" id="clipped" />
                            </div>
                            <div class="clipped-border">
                                <img src={HoneyFiltering} alt="Honey Filtering" id="clipped" />
                            </div>
                            <div class="clipped-border">
                                <img src={oneOzHoney} alt="One ounce honey" id="clipped" />
                            </div>
                            <div class="clipped-border">
                                <img src={TwoBigOneSmall} alt="Bottles of honey" id="clipped" />
                            </div>
                            <div class="clipped-border">
                                <img src={TwoSmallOneBig} alt="Bottles of honey on table" id="clipped" />
                            </div>
                            <div class="clipped-border">
                                <img src={TwoSmallOneBig} alt="Bottles of honey on table" id="clipped" />
                            </div>
                            <div class="shadow"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Honey;
