import React from 'react'
import './CTA.css'
import cta from "../../assets/cta.png"

function CTA() {
  return (
    <>
    <section className="cta">
        <div className="cta-container">
            <div className="cta-content">
                <h2>
                    See What's New
                    <br />
                    with KR Customizer
                    <br />
                    Every Time
                </h2>

                <p>
                    Track your product journey with KR Customizer and get clear
                    updates. Whether it's a shiny new tool or a small improvement,
                    nothing slips by unnoticed.
                </p>

                <button>TRY FOR FREE</button>
            </div>

            <div className="cta-image">
                <img src={cta} alt="" />
            </div>
            
        </div>
    </section>
    </>
  )
}

export default CTA;
