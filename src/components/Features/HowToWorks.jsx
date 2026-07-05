import React from 'react'
import "./HowToWorks.css"
import install from '../../assets/install-card.png'
import product from '../../assets/product-card.png'
import design from '../../assets/design-card.png'
import checkout from '../../assets/checkout-card.png'

function HowToWorks() {
  return (
    <>
      <section className='how-it-works'>
          <div className="how-heading">
            <h2>
              Start Customizing in
              <br />
              <span>Just Minutes</span>
            </h2>

            <p>Quick setup, no coding needed!</p>
          </div>

          <div className="steps-grid">

            <div className="step-card">
              <img src={install} alt="" />

              <div className="step-info">
                <span className="step-number">1</span>

                <div>
                  <h3>Install KR Customizer</h3>
                  <p>Add the customization tool to your
                    store in a few clicks.
                  </p>
                </div>
              </div>
            </div>

            <div className="step-card">
              <img src={product} alt="" />

              <div className="step-info">
                <span className="step-number">2</span>

                <div>
                  <h3>Pick Your Product</h3>
                  <p>Pick a POD item or make your own
                    mock-up to customize.
                  </p>
                </div>
              </div>
            </div>

            <div className="step-card">
              <img src={design} alt="" />

              <div className="step-info">
                <span className="step-number">3</span>

                <div>
                  <h3>Add Personalization</h3>
                  <p>Explore our design library or create
                    your own custom products.
                  </p>
                </div>
              </div>
            </div>

            <div className="step-card">
              <img src={checkout} alt="" />

              <div className="step-info">
                <span className="step-number">4</span>

                <div>
                  <h3>Launch and Sell</h3>
                  <p>Publish your customized product
                    and increase your sales.
                  </p>
                </div>
              </div>
            </div>

          </div>
      </section>
    </>
  )
}

export default HowToWorks;
