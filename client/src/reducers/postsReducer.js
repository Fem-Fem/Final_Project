export default function postsReducer(state = {
	posts: [],
	current_post: [],
	current_post_comments: []
}, action) {

	switch (action.type) {

		case 'GET_POSTS':
			return {
				...state, posts: action.payload
			}

		case 'GET_POST':
			return {
				...state, current_post: action.payload, current_post_comments: action.payload.comments
			}

		case 'ADD_POST':
			return {
				...state,
				posts: [...state.posts, action.payload],
				current_post: action.payload
			}

		case 'ADD_COMMENT':
			return {
				...state,
				current_post_comments: [...state.current_post_comments, action.payload]
			}

		case 'DELETE_POST':
			const posts = state.posts.filter(post => post.id !== action.id);
			return {...state, posts}



		case 'DELETE_COMMENT':
			const comments = state.comments.filter(comment => comment.id !== action.id);
			return {...state, comments}

		default:
			return state;
	}
};