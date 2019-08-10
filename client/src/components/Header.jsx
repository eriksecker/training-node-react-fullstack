import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';

class Header extends Component {
	render() {
		const {
			auth,
		} = this.props;

		return (
			<nav>
				<div className="nav-wrapper">
					<Link
						to={ auth ? '/surveys' : '/' }
						className="left brand-logo"
					>
						Logo
					</Link>
					<ul id="nav-mobile" className="right">
						{ this.renderContent() }
					</ul>
				</div>
			</nav>
		);
	}

	renderContent() {
		const {
			auth,
		} = this.props;

		switch(auth) {
			case null:
				return null;
			case false:
				return (
					<li><a href="/auth/google">Login With Google</a></li>
				);
			default:
				return (
					<React.Fragment>
						<li><Payments /></li>
						<li><a href="/api/logout">Logout</a></li>
					</React.Fragment>
				)
		}
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth,
	}
}

Header = connect(mapStateToProps)(Header);

export default Header;
