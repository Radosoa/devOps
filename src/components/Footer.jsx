import React from 'react';


const Footer = () =>{
     return (
          <footer className='footer section bd-container'>
               <div className="footer__container bd-grid">
                <div className="footer__content">
                    <a href="www.facebook.com" className="footer__logo">Tasty Food</a>
                    <span className="footer__description">Restaurant</span>
                    <div>
                        <a href="www.facebook.com" className="footer__social"><i class='bx bxl-facebook'></i></a>
                        <a href="www.instagram.com" className="footer__social"><i class='bx bxl-instagram'></i></a>
                        <a href="www.twitter.com" className="footer__social"><i class='bx bxl-twitter'></i></a>
                    </div>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Services</h3>
                    <ul>
                        <li><a href="www.facebok.com" className="footer__link">Delivery</a></li>
                        <li><a href="www.facebok.com" className="footer__link">Pricing</a></li>
                        <li><a href="www.facebok.com" className="footer__link">Fast food</a></li>
                        <li><a href="www.facebok.com" className="footer__link">Reserve your spot</a></li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Information</h3>
                    <ul>
                        <li><a href="www.facebok.com" className="footer__link">Event</a></li>
                        <li><a href="www.facebok.com" className="footer__link">Contact us</a></li>
                        <li><a href="www.facebok.com" className="footer__link">Privacy policy</a></li>
                        <li><a href="www.facebok.com" className="footer__link">Terms of services</a></li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Adress</h3>
                    <ul>
                        <li>Lima - Peru</li>
                        <li>Jr Union #999</li>
                        <li>999 - 888 - 777</li>
                        <li>tastyfood@email.com</li>
                    </ul>
                </div>
            </div>

            <p className="footer__copy">&#169; Copyright 2024</p>
          </footer>
     )
}

export default Footer;