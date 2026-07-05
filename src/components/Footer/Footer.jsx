import React from 'react'
import './Footer.css'
import footerLogo from "../../assets/footer-logo.png";
import logoText from "../../assets/logo-text.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedln.png";


function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">

                    <div className="footer-top">

                        <div className="footer-brand">
                            
                            <div className="footer-logo-wrapper">
                                <img src={footerLogo} alt="logo" className="footer-logo"/>
                            </div>
                            
                            <div className="brand-logo">
                                <img src={logoText} alt="KR Customizer" className="logo-text" />
                            </div>

                            <p>
                                8/F., CHINA HONG KONG
                                <br />
                                TOWER, 8-12 HENNESSY ROAD,
                                <br />
                                WAN CHAI, HONG KONG,
                                <br />
                                HONG KONG, 000000,
                                <br />
                                Hong Kong
                            </p>

                        </div>

                        <div className="footer-links">

                            <h4>Company</h4>

                            <a href="/">About Us</a>
                            <a href="/">Showcase</a>
                            <a href="/">Case Studies</a>
                            <a href="/">Blog</a>
                            <a href="/">Become a Partner</a>

                        </div>

                        <div className="footer-links">

                            <h4>Customizer</h4>

                            <a href="/">Bakery</a>
                            <a href="/">Fashion & Apparel</a>
                            <a href="/">Jewelry & Accessories</a>
                            <a href="/">Gifting & Occasion-Based</a>

                        </div>

                        <div className="footer-contact">

                            <h4>Contact Us</h4>

                            <p>📞 +91 904-530-1702</p>

                            <p>✉ sales@krcustomizer.com</p>

                            <p>✉ support@krcustomizer.com</p>

                            <h4 className="social-title">Social</h4>

                            <div className="social-icons">

                                <a href="/">
                                    <img src={instagram} alt="" />
                                </a>

                                <a href="/">
                                    <img src={twitter} alt="" />
                                </a>

                                <a href="/">
                                    <img src={facebook} alt="" />
                                </a>

                                <a href="/">
                                    <img src={linkedin} alt="" />
                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="footer-bottom">

                        <p>Privacy policy</p>

                        <p>© 2025 Customizer. All rights reserved.</p>

                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;
