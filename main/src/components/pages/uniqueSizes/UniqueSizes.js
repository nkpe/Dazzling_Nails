import React from "react";
import'./UniqueSizes.css';

const UniqueSizes = () => {
    return (
        <section id="uniquesize-guide" className="page longpage">
				<article id="uniquesize-top">
					<h1>Unique Sizes<br />Guide</h1>
					<div>
						<p id="unique-p1">Choose from two size packs: 24 Pack or 10 Pack (custom)</p>
						<p id="unique-p2">Our 24 pack includes all our sizes, making it an ideal starter pack or party
							pack to share with friends and family.</p>
						<p id="unique-p3">The 10 pack is perfect for customising the set to fit your nails perfectly.
							Please see our size guide below for details on custom sizes.
							Alternatively you can use our 24 pack to find your custom sizes.</p>
					</div>
				</article>
				<article id="uniquesize-bottom">
					<p>To measure your nails, use a flexible measuring tape to measure from the edge of the nail across
						to the other edge. Always measure all 10 nails, every nail can vary in size.
						If you find one size is too big the next size is too small, order the one that is slightly too
						big, when you receive your set slightly file down the edges until it fits.

						If there is a set in our shop you like and need them in a unique size pack, select 'unique size
						pack' in the drop down menu, put your numbers in order sequence from thumb to Pinky, left hand
						first and right hand second.

						EXAMPLE: Left 1,4,3,5,9,1,5,3,6,8 Right
					</p>
					<img src="public/images/info_unique_sizes.jpg" />
				</article>
			</section>
    )
}

export default UniqueSizes;