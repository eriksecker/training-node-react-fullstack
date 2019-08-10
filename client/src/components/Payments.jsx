import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import * as actions from '../redux/modules/auth';

class Payments extends Component {
	render() {
		return (
			<StripeCheckout
				name="Emaily"
				description="$5 for 5 email credits"
				amount={500}
				token={ (token) => {
					const {
						handleToken,
					} = this.props;

					handleToken(token);
				}}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className="btn">
					Add Credits
				</button>
			</StripeCheckout>
		)
	}
}

Payments = connect(null, actions)(Payments);

export default Payments;
