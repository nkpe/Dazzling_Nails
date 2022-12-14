import React from "react";
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
		<div id="footer-top">
			<ul>
				<h2 className="footer-head">Help and Contact</h2>
				<Link to="/about" className="info-btn">About Us</Link>
				<Link to="/contact" className="contact-btn">Contact Us</Link>
				<Link to="/unique-sizes" className="uniquesize-btn">Unique Sizes Guide</Link>
				<Link to="/unique-sizes" className="shapeguide-btn">Shape Guide</Link>
				<Link to="/aftercare" className="care-btn">Aftercare & Removal</Link>
				<Link to="/faq" className="faq-btn">FAQ's</Link>
			</ul>

			<ul>
				<h2 className="footer-head">Information</h2>
				<Link to="delivery" className="delivery-btn">Delivery & Returns Policy</Link>
				<Link to="terms" className="terms-btn">T&C's</Link>
				{/* <Link>Privacy Policy</Link>
				<Link>Cookie Policy</Link> */}
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