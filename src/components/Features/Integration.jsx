import React from 'react'
import './Integration.css'
import bigcommerce from "../../assets/bigcommerce.png";
import shopify from "../../assets/shopify.png";
import custom from "../../assets/custom.png";
import woocommerce from "../../assets/woocommerce.png";
import product from "../../assets/product-tour.png"

function Integration() {
  return (
    <>
      <section className="integration">
        
        <div className="integration-heading">

            <h2>Integration</h2>

            <p>
                Power your store with KR Customizer's smooth integrations.
            </p>
        </div>

        <div className="integration-container">

            <div className="integration-card">
                <img src={bigcommerce} alt="BigCommerce" />
            </div>

            <div className="integration-card">
                <img src={shopify} alt="Shopify" />
            </div>

            <div className="integration-card">
                <img src={custom} alt="Custom" />
            </div>

            <div className="integration-card">
                <img src={woocommerce} alt="WooCommerce" />
            </div>

        </div>
      </section>

      <section className="product-tour">

        <div className="product-heading">
            <h2>
                <span>Turning Product Tours</span> into 
                <br />
                Sales Tools
            </h2>
        </div>

        <div className="product-image">
            <img src={product} alt="" />
        </div>

      </section>
    </>
  )
}

export default Integration;
