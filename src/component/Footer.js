import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                  See personalized recommendations
                </p>
                <p className="footer-subscription-text">
                You can cancel your membership at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input className="footer-input shadow" type="email" name="email" placeholder="Email or phoneNumber" />
                       <Link to="/login"><button className='footer-button btn btn-warning shadow  alignItems-center'>Sign in</button></Link>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h4>About us</h4>
                        <Link to="/">Job positions</Link>
                        <Link to="/">contact us</Link>
                        <Link to="/">Work with us</Link>
                    </div>
                    <div className="footer-link-items">
                        <h4>Guide</h4>
                        <Link to="/">Sitemap</Link>
                        <Link to="/">questions</Link>
                        <Link to="/">privacy</Link>
                    </div>
                   
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo" to="/">
                            eShop <i className="fab fa-typo3"/>
                        </Link>
                    </div>
                    <small className="website-rights">eShop © 2023</small>
                        
                </div>
            </section>
        </div>
    )
}

export default Footer
