import axios from 'axios';

const ACTION_ROOT = 'auth';

const GET_CURRENT_USER = `${ACTION_ROOT}/GET_CURRENT_USER`;

export default function(state=null, action) {
	switch (action.type) {
		case GET_CURRENT_USER:
			return action.payload || false;
		default:
			return state;
	}
}

export const getCurrentUser = () => async (dispatch) => {
	const response = await axios.get('/api/current_user');

	dispatch({
		type: GET_CURRENT_USER,
		payload: response.data
	});
}
