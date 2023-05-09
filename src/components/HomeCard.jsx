import React from 'react';
import '../stylesheets/homeCard.css';
import cardImage from '../assets/pexels-josh-hild-12405197.jpg';

function HomeCard() {
	return (
		<>
			<div className='card'>
				<img src={cardImage} alt='card' className='card-image' />
			</div>
		</>
	);
}

export default HomeCard;
