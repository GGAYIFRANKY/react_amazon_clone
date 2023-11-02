import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from './StateProvider';

const Checkout = () => {

	const [{basket}, dispatch] = useStateValue();

	return (

		<div className="checkout">
			<div className="checkout_left">
				<img className="checkout_ad" src="https://ug.jumia.is/cms/3DAYS_BF_STICKY_BANNER_COUNT_DOWN.gif" alt="" />
				<div>
					<h2 className="checkout_title">Your Shopping Basket</h2>
				</div>

				{basket.map(item => (
					<CheckoutProduct 
						id={item.id}
						title={item.title}
						image={item.image}
						price={item.price}
						rating={item.rating}
					/>

				))}
				
			</div>
			<div className="checkout_right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;