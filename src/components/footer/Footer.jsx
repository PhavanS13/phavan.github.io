import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Phavan</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Skills</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Services</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href="https://www.instagram.com/phavankumaar/"
                        className="footer__social-link"
                        target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>

                    <a
                        href="https://www.instagram.com/phavankumaar/"
                        className="footer__social-link"
                        target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a
                        href="https://twitter.com/phavan_official"
                        className="footer__social-link"
                        target="_blank">
                        <i class="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Phavan Kumaar. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer