import React from "react";
import Fade from 'react-reveal/Fade';
import fourOzHoney from '../../assets/images/HoneyImages/4ozHoney.jpeg'
import HoneyFiltering from '../../assets/images/HoneyImages/HoneyFiltering.jpg'
import oneOzHoney from '../../assets/images/HoneyImages/oneOzHoney.jpg'
import TwoBigOneSmall from '../../assets/images/HoneyImages/TwoBigOneSmall.jpg'
import TwoSmallOneBig from '../../assets/images/HoneyImages/TwoSmallOneBig.jpg'
import HoneyIcon from '../../assets/images/HoneyImages/honey.png'
import NaturalIcon from '../../assets/images/growth.png'




function Honey() {
    return (
        <>
            <section id="Honey">
                <div className="honeySection">
                    <div class="split honeyLeft" >
                        <div className="containerTextTop">
                            <img className="naturalIcon" alt="chapstick icon" src={NaturalIcon} />
                            <Fade left>
                            <p className="detailsTop">100% Pure Organic, Raw & Unfiltered</p>
                            </Fade>
                            <Fade right>
                            <p className="detailsTop">From our hive, to your home.</p>
                            </Fade>
                        </div>
                        <div class="gallery">
                            <div class="clipped-border">
                                <img src={fourOzHoney} id="clipped" />
                            </div>
                            <div class="clipped-border">
                                <img src={HoneyFiltering} id="clipped" />
                            </div>
                            <div class="clipped-border">
                                <img src={oneOzHoney} id="clipped" />
                            </div>
                            <div class="clipped-border">
                                <img src={TwoBigOneSmall} id="clipped" />
                            </div>
                            <div class="clipped-border">
                                <img src={TwoSmallOneBig} id="clipped" />
                            </div>
                            <div class="shadow"></div>
                            {/* <button class="button-74" role="button"> 🍯 </button> */}
                        </div>
                    </div>
                    <div class="split honeyRight">
                        <div class="centered">
                            <img className="bigIcon" alt="chapstick icon" src={HoneyIcon} />
                            <Fade top big>
                                <h2 className="honeyText">Honey</h2>
                            </Fade>
                            <p className="detailsP">We go into each hive and take 20% of the honey, leaving the other 80% of the honey for the bees. Honey bees make the honey as a way of storing food to eat over the cooler winter periods, when they are unable to forage. Taking only 20% of the honey leaves the bees with more than enough to last till spring. When spring comes we will harvest most of the leftover honey. Our honey is 100% Pure Organic, Raw & Unfiltered, from our hive to your home.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Honey;
