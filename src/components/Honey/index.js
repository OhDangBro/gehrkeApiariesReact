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
                    <div className="split sectionLeft" >
                        <div className="leftContainer">
                        <Zoom>
                       <h3 className="ourProduct"> <span className="firstLetter">O</span>ur Honey</h3>
                       </Zoom>
                       <div className="productLine"></div>
                       <p className="productText">Indulge in the purest form of honey with our unheated, unpasteurized and pesticide-free honey.</p>
                       <p className="productText productTextSmall">Hand-harvested and hand-bottled, our honey maintains all of its essential vitamins, minerals, amino acids, and enzymes, just as nature intended. </p>
                       <p className="productText productTextSmall productTextSmaller">Enjoy the benefits of a truly natural and pure honey, straight from our hives to your home.</p>

                       <div className="productLine ver"></div>
                       <p className="productButton" onClick={()=>{ alert("We're all out of our spring honey. Check back in September for fall honey. Thank you! 🍯😊"); }} >Shop Now</p>
                    </div>
                    </div>
                    <div className="split sectionRight">
                   
                    <div className="containerGallery">
                        <div className="gallery">
                        <ul className='circlesHoney'>
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
                            <div className="clipped-border">
                                <img style={{background: "linear-gradient(#e66465, #9198e5)" }} src={fourOzHoney} alt="four oz honey" id="clipped" />
                            </div>
                            <div className="clipped-border">
                                <img src={HoneyFiltering} alt="Honey Filtering" id="clipped" />
                            </div>
                            <div className="clipped-border">
                                <img src={oneOzHoney} alt="One ounce honey" id="clipped" />
                            </div>
                            <div className="clipped-border">
                                <img src={TwoBigOneSmall} alt="Bottles of honey" id="clipped" />
                            </div>
                            <div className="clipped-border">
                                <img src={TwoSmallOneBig} alt="Bottles of honey on table" id="clipped" />
                            </div>
                            <div className="clipped-border">
                                <img src={TwoSmallOneBig} alt="Bottles of honey on table" id="clipped" />
                            </div>
                            <div className="shadow"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Honey;
