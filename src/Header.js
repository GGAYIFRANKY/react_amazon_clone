import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {

	return (
		<div className="header">
			<img 
			className="header_logo"
			src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695"
			/>
			<div className="header_search">
				<input 
				className="header_searchInput" 
				type="text" />
				<SearchIcon 
				className="header_searchIcon" />
			</div>

			<div className="header_nav" >
				<div className="header_option">
					<span className="header_optionLineOne">Hello Guest</span>
					<span className="header_optionLineTwo">Sign In</span>
				</div>
				<div className="header_option">
					<span className="header_optionLineOne">Returns</span>
					<span className="header_optionLineTwo">& Orders</span>
				</div>
				<div className="header_option">
					<span className="header_optionLineOne">Your</span>
					<span className="header_optionLineTwo">Prime</span>
				</div>
			</div>

			<div className="header_optionBasket">
				<ShoppingCartIcon />
				<span 
				className="header_optionLineTwo header_basketCount">0</span>
			</div>
		</div>
	);
}

export default Header;