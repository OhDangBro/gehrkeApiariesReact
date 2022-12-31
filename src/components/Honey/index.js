import React from "react";
import fourOzHoney from '../../assets/images/HoneyImages/4ozHoney.jpeg'
import HoneyIcon from '../../assets/images/HoneyImages/apitherapy.png'








function Honey() {
  return (
<section id="Honey">
    <div  className="honeySection">
    <img src={fourOzHoney} alt="bottle of honey" class="split left"/>
<div class="split right">
  <div class="centered">
    <img src={HoneyIcon} alt="honey icon"/>
    <h2 className="honeyText">Honey</h2>
    <p className="honeyP">We go into each hive and take 20% of the honey, leaving the other 80% of the honey for the bees. Honey bees make the honey as a way of storing food to eat over the cooler winter periods, when they are unable to forage. Taking only 20% of the honey leaves the bees with more than enough to last till spring. When spring comes we will harvest most of the leftover honey. Our honey is 100% Pure Organic, Raw & Unfiltered, from our hive to your home.</p>
  </div>
</div>
</div>

</section>

  );
}

export default Honey;
