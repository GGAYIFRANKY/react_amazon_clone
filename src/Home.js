import React from 'react';
import Product from './Product.js';
import './Home.css';



const Home = () => {

	return (
		<div className="home">
			<div className="home_container">
				<img className="home_image" src="https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg" />
			</div>

			<div className="home_row">
				<Product 
				id='112233'
				title='Anker Magnetic Battery, 5K Foldable Magnetic Wireless Portable Charger with Stand and USB-C (On The Side), Only for MagSafe, iPhone 15/15 Plus/15 Pro/15 Pro Max, iPhone14/13 Series (Interstellar Gray)' 
				price={34.55} image='https://m.media-amazon.com/images/I/61wNCQ0NdgL._AC_SX569_.jpg'
				rating={3}
				/>
				<Product
				id='112234'
				title='HP 24mh FHD Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)' 
				price={168.99} image='https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SX425_.jpg'
				rating={4}
				/>
				<Product
				id='112235'
				title='ROVE R2-4K Dash Cam Built-in WiFi GPS Car Dashboard Camera Recorder with UHD 2160P, 2.4" IPS Screen, 150° Wide Angle, WDR, Night Vision' 
				price={28.99} image='https://m.media-amazon.com/images/I/81rsMys9S8L._AC_UL320_.jpg'
				rating={5}
				/>
			</div>
			<div className="home_row">
				<Product
				id='112236' 
				title='Anker Magnetic Battery, 5K Foldable Magnetic Wireless Portable Charger with Stand and USB-C (On The Side), Only for MagSafe, iPhone 15/15 Plus/15 Pro/15 Pro Max, iPhone14/13 Series (Interstellar Gray)' 
				price={34.55} image='https://m.media-amazon.com/images/I/61wNCQ0NdgL._AC_SX569_.jpg'
				rating={3}
				/>
				<Product
				id='112237'
				title='HP 24mh FHD Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)' 
				price={168.99} image='https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SX425_.jpg'
				rating={4}
				/>
				<Product
				id='112238'
				title='ROVE R2-4K Dash Cam Built-in WiFi GPS Car Dashboard Camera Recorder with UHD 2160P, 2.4" IPS Screen, 150° Wide Angle, WDR, Night Vision' 
				price={28.99} image='https://m.media-amazon.com/images/I/81rsMys9S8L._AC_UL320_.jpg'
				rating={5}
				/>
			</div>
			<div className="home_row">
				<Product 
				id='112239'
				title='Anker Magnetic Battery, 5K Foldable Magnetic Wireless Portable Charger with Stand and USB-C (On The Side), Only for MagSafe, iPhone 15/15 Plus/15 Pro/15 Pro Max, iPhone14/13 Series (Interstellar Gray)' 
				price={34.55} image='https://m.media-amazon.com/images/I/61wNCQ0NdgL._AC_SX569_.jpg'
				rating={3}
				/>
				<Product
				id='112240'
				title='HP 24mh FHD Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)' 
				price={168.99} image='https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SX425_.jpg'
				rating={4}
				/>
				<Product
				id='112241'
				title='ROVE R2-4K Dash Cam Built-in WiFi GPS Car Dashboard Camera Recorder with UHD 2160P, 2.4" IPS Screen, 150° Wide Angle, WDR, Night Vision' 
				price={28.99} image='https://m.media-amazon.com/images/I/81rsMys9S8L._AC_UL320_.jpg'
				rating={5}
				/>
			</div>
		</div>
	);
}


export default Home;