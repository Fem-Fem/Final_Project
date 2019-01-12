export default function manage(state = {
	posts: [],
	comments: [],
	logged_in: [],
}, action) {

	switch (action.type) {

		case 'STORE_USER':
			const user = {title: action.username};
			return {
				...state,
				logged_in: [true]
			}

		case 'UNSTORE_USER':
			return {
				...state,
				logged_in: [false]
			}

		default:
			return state;
	}
};