import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <section id="contactuspage" className="page informpage">
            <div id="contactleft" className="leftpageshape">
                <div className="leftheader">Contact Us</div>
                <h2 className="contact-btn">General Enquiries</h2>
                <h2 className="bespokeform-btn">Bespoke Nails Enquiries</h2>
            </div>


            <div id="contactright" className="rightpageshape">
                <form id="contactform" style="display:none;" name="contactform" action="/contactSubmit" method="post" autocomplete="on">

                    <div className="form-row">
                        <input id="input-name" type="text" name="name" placeholder="Name:" />
                        <select id="topicselect" name="topic">
                            <option value="" disabled selected style="display:none;">Topic:</option>
                            <option value="order-enquiry">Order Enquiry</option>
                            <option value="existing-order">Existing Order</option>
                            <option value="delivery-enquiry">Delivery</option>
                            <option value="returns-enquiry">Returns</option>
                            <option value="aftercare-enquiry">Aftercare</option>
                            <option value="size-enquiry">Nail Size/Shape</option>
                            <option value="other-enquiry">Other</option>
                        </select>
                    </div>

                    <div className="form-row">
                        <input type="email" name="mail" placeholder="Email:" />
                        <input type="tel" name="telephone" placeholder="Telephone:" />
                    </div>

                    <div className="form-row">
                        <textarea id="contact-message" name="message" placeholder="Message:"></textarea>
                    </div>
                    <div className="form-row">
                        <input id="contact-submit" type="submit" value="Submit" />
                    </div>
                </form>

                <form id="bespokeform" style="display:none;" name="bespokeform" action="/bespokeSubmit"
                    method="post" autocomplete="on">
                    <h1>Pack Size</h1>
                    <select id="bespoke-pk-size" name="bespoke-pk-size">
                        <option value="" disabled selected style="display:none;">Pack Size:</option>
                        <optgroup label="Pack of 10">
                            <option value="10pk-small">Small</option>
                            <option value="10pk-medium">Medium</option>
                            <option value="10pk-large">Large</option>
                            <option value="10pk-exlarge">Extra Large</option>
                            <option value="10pk-custom">Custom</option>
                        </optgroup>
                        <optgroup label="Pack of 24">
                            <option value="24pk-all">All sizes</option>
                        </optgroup>
                    </select>
                    <input id="10pk-customsize" type="text" name="10pk-custom-size"
                        placeholder="Enter custom sizes here" />
                    <select id="bespoke-shape" name="bespoke-shape">
                        <option value="" disabled selected style="display:none;">Nail Shape:</option>
                        <option value="medium-oval">Medium Oval</option>
                        <option value="medium-coffin">Medium Coffin</option>
                        <option value="ultra-coffin">Ultra Coffin</option>
                        <option value="medium-stiletto">Medium Stiletto</option>
                        <option value="ultra-stiletto">Ultra Stiletto</option>
                    </select>
                    <select id="bespoke-colour" name="bespoke-colour">
                        <option value="" disabled selected style="display:none;">Preferred Colour:</option>
                        <option value="white">White</option>
                        <option value="yellow">Yellow</option>
                    </select>

                    <textarea id="bespoke-comment" name="bespoke-comment" placeholder="Comments:"></textarea>

                </form>
            </div>
        </section>
    )
}

export default Contact;