import React from 'react'
import './Testimonials.css'
import profile1 from "../../assets/profile1.png"
import profile2 from "../../assets/profile2.png"
import profile3 from "../../assets/profile3.png"
import left from "../../assets/left-arrow.png"
import right from "../../assets/right-arrow.png"
import dot from "../../assets/slide.png"


function Testimonials() {
    
    return (
        <>
            <section className="testimonials">
                <div className="testimonial-container">
                    <div className="testimonial-heading">
                        <h2>
                            What KR Customizer's
                            <br />
                            <span>Clients are Saying</span>
                        </h2>
                    </div>

                    <div className="testimonial-wrapper">
                        <button className="arrow left-arrow">
                            <img src={left} alt="" />
                        </button>

                        {/* 1 */}
                        <div className="testimonial-card">

                            <div className="stars">
                                ★★★★★
                            </div>

                            <p>
                                “Customizing products used to be such a headache for us. With KR Customizer, our customers can design what they want and see it instantly before buying. It’s made shopping smoother, our sales are up, returns are down, and we finally have time to focus on growing the business. Honestly, I don’t know how we managed without it.”
                            </p>

                            <div className="client">

                                <img src={profile1} alt="" />

                                <div>
                                    <h4>James Parker</h4>
                                    <span>Store Owner</span>
                                </div>

                            </div>

                        </div>

                        {/* 2 */}
                        <div className="testimonial-card active">

                            <div className="stars">
                                ★★★★★
                            </div>

                            <p>
                                “KR Customizer’s tool works for all of the things we sell, like mugs, t-shirts, and gifts. Customers are more likely to buy when they can see their thoughts right away. It made our store feel more engaging, got more people involved, and turned casual shoppers into passionate customers who keep coming back for more.”
                            </p>

                            <div className="client">

                                <img src={profile2} alt="" />

                                <div>
                                    <h4>Lily Thompson</h4>
                                    <span>Small Business Founder</span>
                                </div>

                            </div>

                        </div>

                        {/* 3 */}
                        <div className="testimonial-card">

                            <div className="stars">
                                ★★★★★
                            </div>

                            <p>
                                “We didn't know how to start making custom sports gear, but we wanted to. It was really simple to set up this tool, and it works great with our Shopify shop. Lots of people have bought it before and will buy it again. It has completely changed how people see our business.”
                            </p>

                            <div className="client">

                                <img src={profile3} alt="" />

                                <div>
                                    <h4>James Parker</h4>
                                    <span>Store Owner</span>
                                </div>

                            </div>

                        </div>

                        <button className="arrow right-arrow">
                            <img src={right} alt="" />
                        </button>

                    </div>

                    <div className="dot">
                        <img src={dot} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials;
