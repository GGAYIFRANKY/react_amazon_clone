import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@mui/icons-material/Star';
import {useStateValue} from './StateProvider';


const CheckoutProduct = ({id, image, title, price, rating}) => {

	const [{basket}, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id, 
		})
	}

	return (

		<div className="checkoutProduct">
			<img className="checkoutProduct_image" src={image} />

			<div className="checkoutProduct_info">
				<p className="checkoutProduct_title">{title}</p>
				<p className="checkoutProduct_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct_rating">
					{Array(rating).fill().map((_, i) => (
						<p><StarIcon className="product_starIcon" /></p>
					))}
				</div>
				<button 
				className="checkoutProduct_button"
				onClick={removeFromBasket}
				>Remove from basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;