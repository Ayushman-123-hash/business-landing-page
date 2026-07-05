import React from 'react'
import './FAQ.css'
import upArrow from "../../assets/up-arrow.png";
import downArrow from "../../assets/down-arrow.png";

function FAQ() {
    return (
        <>
            <section className="faq">
                <div className="faq-container">
                    <div className="faq-heading">
                        <h2>
                            <span>Need Help?</span> We've Got You Covered
                        </h2>

                        <p>
                            Here are some quick answers to things people ask us all
                            the time.
                        </p>
                    </div>

                    <div className="faq-list">

                        {/* 1 */}
                        <div className="faq-card active">

                            <div className="faq-question">

                                <h3>
                                    How do I create my first customized ecommerce product?
                                </h3>

                                <img src={upArrow} alt="up arrow" />

                            </div>

                            <div className="faq-answer">

                                <p>
                                    Pick any product you like—clothing, mugs, jewellery, you name it. Click “Customize,” and our design tool will open. Change colors, add text, upload images, and watch your product update instantly.
                                </p>

                            </div>

                        </div>

                        {/* 2 */}
                        <div className="faq-card">

                            <div className="faq-question">

                                <h3>
                                    Can I use my photos or logo?
                                </h3>

                                <img src={downArrow} alt="down arrow" />

                            </div>

                        </div>

                        {/* 3 */}
                        <div className="faq-card">

                            <div className="faq-question">

                                <h3>
                                    Do you have to order a certain amount?
                                </h3>

                                <img src={downArrow} alt="down arrow" />

                            </div>

                        </div>

                        {/* 4 */}
                        <div className="faq-card">

                            <div className="faq-question">

                                <h3>
                                    What kind of products can I personalize?
                                </h3>

                                <img src={downArrow} alt="down arrow" />

                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQ;
