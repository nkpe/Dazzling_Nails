import React from "react";
import './Delivery.css';

const Delivery = () => {
    return (
        <section id="delivery-info" className="page longpage">
				<div id="delivery-text">
					<h1>Delivery Information</h1>
					<p>All UK delivery is £2.50, first class, signed and tracked.<br />
						Please allow 5 days from day of purchase for designs to be created.<br />
						You will receive an email once your order has been dispatched, and tracking number will be
						provided.</p>
				</div>

				<div id="returns-text">
					<h1>Returns Policy</h1>
					<p>As all our press on nails are handmade we do not accept returns or refunds. Any problems with
						your package then please get in contact with us within 4 days of receiving your package. we will
						do our best to help resolve your issue.</p>
				</div>
			</section>
    )
}

export default Delivery;