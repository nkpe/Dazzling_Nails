import React from "react";

import './Footer.css';

const Footer =() => {
    return (
        <footer>
		<div id="footer-top">
			<ul>
				<h2 className="footer-head">Help and Contact</h2>
				<li className="info-btn">About Us</li>
				<li className="contact-btn">Contact Us</li>
				<li className="uniquesize-btn">Unique Sizes Guide</li>
				<li className="shapeguide-btn">Shape Guide</li>
				<li className="care-btn">Aftercare & Removal</li>
				<li className="faq-btn">FAQ's</li>
			</ul>

			<ul>
				<h2 className="footer-head">Information</h2>
				<li className="delivery-btn">Delivery & Returns Policy</li>
				<li className="terms-btn">T&C's</li>
				<li>Privacy Policy</li>
				<li>Cookie Policy</li>
			</ul>
		</div>

		<div id="footer-bottom">
			<p id="copyr">© Dazzling Nails Co 2020</p>
			<div className="social-media">
				<i className="fab fa-facebook fb-btn"></i>
				<i className="fab fa-instagram blog-btn"></i>
			</div>
		</div>

	</footer>
    );
}

export default Footer;