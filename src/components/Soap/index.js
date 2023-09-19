import React, { useState } from "react";
import soapImage from "../../assets/images/SoapImages/Soap.png";
import Zoom from "react-reveal/Zoom";

function Chapstick() {
  const [selectedSize, setSelectedSize] = useState("1 Bar - $2.99");

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <>
      <section id="Honey">
        <div className="section">
          <div className="split sectionLeft">
            <div className="containerChapLeft">
              <Zoom>
                <h3 className="ourProductChap ourProductSoap"> Our Soap</h3>
              </Zoom>
              <div className="productLineChap"></div>
              <p className="productTextChap">
              Experience the beauty and benefits of our Beeswax Soap, crafted
                with care using only the finest natural ingredients.
              </p>
              <p className="productTextChap">
              Our soap is handcrafted with the goodness of beeswax, organic
                oils, and honey, making it perfect for gentle cleansing and
                nourishing your skin.
              </p>
              <p className="productTextChap">
              Feel the difference with every wash as you enjoy the soothing
                and moisturizing properties of beeswax soap, straight from our
                hive to your home.
              </p>
              <div className="productLineChap ver"></div>
              <div className="centered-elements">
                <div className="dropdown">
                <select value={selectedSize} onChange={handleSizeChange}>
                    <option value="1 Bar">1 Bar - $2.99</option>
                    <option value="3 Bars">3 Bars - $8.49</option>
                    <option value="5 Bars">5 Bars - $13.99</option>
                    <option value="10 Bars">10 Bars - $26.99</option>
                  </select>
                </div>
                <p
                  className="productButtonChap"
                  onClick={() => {
                    alert(
                      `You selected ${selectedSize}. We're currently out of soap. Please check back in October when we'll have more in stock.`
                    );
                  }}
                >
                  Add To Cart
                </p>
              </div>
            </div>
          </div>
          <div className="split sectionRight">
            <div>
              <div className="gallery">
                <ul className="circles">
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
                <img
                  className="SoapImage"
                  src={soapImage}
                  alt="chapstick container local chapstick"
                />
                <div className="shadowSoap"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Chapstick;
