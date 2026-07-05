import React from 'react'
import "./Hero.css"
import heroImage from "../../assets/hero-image.png"
import tick from "../../assets/tick.png"

function Hero() {
    return (
        <>
            <section className='hero'>
                <div className="hero-container">
                    <div className="hero-left">
                        <p className="hero-tag">BRING PRODUCTS TO LIFE WITH KR CUSTOMIZER</p>

                        <h1 className='hero-heading'>
                            Transform <span className="yellow">Personalization</span> Experience with Next-Level Product <span className="yellow">Customization</span>
                        </h1>

                        <div className='hero-points'>
                            <span><img src={tick} alt="Tick" />Offer unique</span>
                            <span><img src={tick} alt="Tick" />Customized products with ease</span>
                            <span><img src={tick} alt="Tick" />Streamline custom orders</span>
                        </div>

                        <div className='hero-buttons'>
                            <button className='btn-primary'>REQUEST A DEMO</button>
                            <button className='btn-outline'>TRY FOR FREE</button>
                        </div>
                    </div>

                    <div className='hero-right'>
                        <img src={heroImage} alt="Hero Image" className='hero-img'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
