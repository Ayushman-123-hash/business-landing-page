import React from 'react'
import './Features.css'
import feature1 from "../../assets/feature1.jpg"
import feature2 from "../../assets/feature2.jpg"
import feature3 from "../../assets/feature3.jpg"
import greenTag from "../../assets/green-tag.png"
import ecommerce from "../../assets/e-commerce.png"
import flipkart from "../../assets/flipkart.png"

function Features() {
  return (
    <>
      <section className='features'>
        <div className='features-heading'>

            <p>FEATURES</p>

            <h2>
                <span>Turn Every Click</span> Into a <br />
                Custom Purchase
            </h2>

        </div>

        {/* Feature1 */}
        <div className='feature-row'>
            <div className='feature-content'>
                <div className="feature-label">
                    <img src={greenTag} alt="" />
                    <span>TURN CREATIVITY INTO SALES</span>
                </div>

                <h3>
                    <span>Custom Products</span> that
                    <br />
                    Customers can't resist
                </h3>

                <p>
                    Create unique personalized gifts with our products customizer. Boost sales and delight customers with products they'll love.
                </p>

                <button className="feature-btn">
                    REQUEST A DEMO
                </button>
            </div>

            <div className="feature-image">
                <img src={feature1} alt="Feature" />
            </div>
        </div>

        {/* Feature2 */}
        <div className="feature-row">
            <div className="feature-image">
                <img src={feature2} alt="Feature" />
            </div>

            <div className="feature-content">
                <div className="feature-label">
                    <img src={greenTag} alt="" />
                    <span>MAKE EVERY PRODUCT ONE OF A KIND</span>
                </div>

                <h3>
                    <span>Transform Shopping</span> into an
                    <br/>
                    Experience with Real-Time
                    Personalization
                </h3>

                <p>
                    Delight shoppers with real-time previews and easy
                    customization tools. Build trust and excitement through
                    a seamless buying experience.
                </p>

                <button className="feature-btn">
                    REQUEST A DEMO
                </button>
            </div>
        </div>

        {/* Feature3 */}
        <div className="feature-row">
            <div className="feature-content">
                <div className="feature-label">
                    <img src={greenTag} alt="" />
                    <span>WORK SMARTER. GROW FASTER</span>
                </div>

                <h3>
                    <span>Smart Automation</span> for
                    <br />
                    Smarter Growth
                </h3>

                <p>
                    KR Customizer automates your workflow from print ready
                    files to seamless POD integration. Design once, sell
                    everywhere, and grow with ease.
                </p>

                <button className="feature-btn">
                    REQUEST A DEMO
                </button>
            </div>

            <div className="feature-image">
                <img src={feature3} alt="Feature" />
            </div>
        </div>

        <div className="brands">
            <div className="brands-container">
                <h2>
                    Empowering Top Brands with Customization
                </h2>

                <div className="brands-logos">
                    <img src={ecommerce} alt="BigCommerce" className='brand-logo ecommerce-logo' />
                    <img src={flipkart} alt="Flipkart" className='brand-logo flipkart-logo'/>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Features
