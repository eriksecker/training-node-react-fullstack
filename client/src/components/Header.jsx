import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<nav>
				<div class="nav-wrapper">
					<Link to="/" className="left brand-logo">Logo</Link>
					<ul id="nav-mobile" className="right">
						<li><a href="/">Login With Google</a></li>
					</ul>
				</div>
				</nav>
		);
	}
}

export default Header;
