import React from "react";
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
		<div id="footer-top">
			<ul>
				<li>
					<h2 className="footer-head">Help and Contact</h2>
				</li>
				<li>
					<Link to="/about" className="info-btn">About Us</Link>
				</li>
				<li>	
					<Link to="/contact" className="contact-btn">Contact Us</Link>
				</li>
				<li>
					<Link to="/unique-sizes" className="uniquesize-btn">Unique Sizes Guide</Link>
				</li>
				<li>
					<Link to="/unique-sizes" className="shapeguide-btn">Shape Guide</Link>
				</li>
				<li>
					<Link to="/aftercare" className="care-btn">Aftercare & Removal</Link>
				</li>
				<li>					
					<Link to="/faq" className="faq-btn">FAQ's</Link>
				</li>
			</ul>

			<ul>
				<li>
					<h2 className="footer-head">Information</h2>
				</li>
				<li>					
					<Link to="delivery" className="delivery-btn">Delivery & Returns Policy</Link>
				</li>
				<li>
					<Link to="terms" className="terms-btn">T&C's</Link>
				</li>
				{/* <Link>Privacy Policy</Link>
				<Link>Cookie Policy</Link> */}
			</ul>
		</div>

		<div id="footer-bottom">
			<p id="copyr">© Dazzling Nails Co 2023</p>
			<div className="social-media">
				<i className="fab fa-facebook fb-btn"></i>
				<i className="fab fa-instagram blog-btn"></i>
			</div>
		</div>

	</footer>
    );
}

export default Footer;