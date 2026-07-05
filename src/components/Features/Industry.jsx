import React from 'react'
import "./Industry.css";
import industry from "../../assets/industry.png";
import line from "../../assets/line.png"

function Industry() {
  return (
    <>
      <section className="industry">
        <div className="industry-container">

            <div className="content">

                <h2>
                    KR Customizer Help Every
                    <br />
                    Industry Sell Smarter
                </h2>

                <div className="items active">
                        <img src={line} alt="" className="line"/>
                    
                    <div>
                        <h3>Fashion & Apparel</h3>

                        <span>STYLE MADE PERSONAL</span>

                        <p>
                            Let customers design outfits their way with instant
                            customization, colors, patterns and text that update
                            live.
                        </p>

                    </div>
                </div>

                <div className="item color">

                    <div>
                        <h3>Jewelry & Accessories</h3>

                        <span>EVERY PIECE TELLS A STORY</span>

                        <p>
                            Provide bespoke jewelry designs and personalized
                            engraving to create heartfelt gifts for every
                            occasions.
                        </p>

                    </div>
                </div>

                <div className="item color">

                    <div>
                        <h3>E-Commerce & Retail</h3>

                        <span>FROM ORDINARY TO EXTRAORDINARY</span>

                        <p>
                            Boost sales by letting shoppers personalize gifts
                            and products instantly before they buy.
                        </p>

                    </div>
                </div>

                <div className="item color">

                    <div>
                        <h3>Automotive</h3>

                        <span>DRIVE IT YOUR WAY</span>

                        <p>
                            Encourage customers to customize interiors,
                            finishes and parts with a live preview experience.
                        </p>

                    </div>
                </div>
            </div>

            <div className="image">
                <img src={industry} alt="Industry" />
            </div>

        </div>
      </section>
    </>
  )
}

export default Industry;
