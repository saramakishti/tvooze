import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
	return (
		<header className='landing-page-header'>
			<h1>Welcome to Tvooze.</h1>
			<h1>
				<Link to='/'>All TV Shows</Link>
			</h1>
			<h1>
				<Link to='/categories'>Categories</Link>
			</h1>
		</header>
	);
};

export default Header;
