import React,{ useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import text from "../../assets/logo-text.png"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <img src={logo} alt="Logo" className="logo-icon" />
                        <img src={text} alt="Logo Text" className="logo-text" />
                    </div>

                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <li><a href="#">Showcase <svg className='svg' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg></a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                    <div className="nav-right">
                        <button className="btn">BOOK A DEMO</button>
                    </div>

                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
