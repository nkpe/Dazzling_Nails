import React from "react";
import './About.css';

const About = () => {
    return (
        <section id="aboutpage" className="page informpage">
				<div id="aboutleft" className="leftpageshape">
					<img src="public/images/about_us_side.jpg" alt="About Us" />
					<div className="leftheader">About Us</div>
				</div>

				<div id="aboutright" className="rightpageshape">
					<article className="about-text"> Here at Dazzling Nails we produce hand painted false nails of the
						highest quality. <br />
						Whether you need amazing nails for 1 day, a weekend or up to 2 weeks; a special occasion,
						holiday or just a weekend. We got every occasion covered.
						Newest designs can be found here.
						Special limited edition sets can be found here.
					</article>
				</div>
			</section>
    );
}

export default About;