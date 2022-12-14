import React from "react";

const Aftercare = () => {
    return (
        <section id="carepage" className="page informpage">
				<div id="careleft" className="leftpageshape">
					<div>Aftercare and Removal</div>
					<h2 className="care-btn">Nail Care instructions</h2>
					<h2 className="removal-btn">Removal instructions</h2>
				</div>

				<div id="careright" className="rightpageshape">
					<div id="care-text">
						<ul id="care-instr">
							<h1 id="care-head">How to care</h1>
							<li>Wear gloves when doing the dishes, cleaning, gardening etc.</li>
							<li>Keep them away from heat and harsh chemicals.</li>
							<li>Keep away from heat.</li>
							<li>Do not use your nails to pry things open like cans or breaking through tape on packaging
								as this will not only cause damage to your false nail but your own nails as well.</li>
							<li>Ensure you dry your hands thoroughly after washing them.</li>
						</ul>
					</div>

					<div id="removal-text">
						<ul id="removal-instr">
							<h1>Removal</h1>
							<h3>Longer Removal: To reuse the Nails.</h3>
							<li>Apply oil around the cuticle.</li>
							<li>Put hands in warm soapy water and soak for 15 minutes.</li>
							<li>Very gently pry off with the wooden stick,</li>
							<li>It they wont come of very easily repeat the process.</li>
							<li>Buff off any remaining glue.</li>
							<br />

							<h3>Quick Removal: Nails will NOT be reusable, with this removal process.</h3>
							<li>Put some pure acetone in a bowl.</li>
							<li>Place the bowl with acetone in to a bowl of warm water.</li>
							<li>Place one of your hands in the acetone, and cover with a towel. </li>
							<li>Leave to soak for 5 minutes.</li>
							<li>Take your hand out and gently pry off with the wooden stick.</li>
							<li>If its not ready to come off, then put in to soak again. </li>
							<br />

							<b>Patience is key with this process! DO NOT FORCE THE NAILS OFF OTHERWISE YOU WILL DAMAGE
								YOUR OWN NAILS.</b>
						</ul>
					</div>
				</div>
			</section>
    )
}

export default Aftercare;