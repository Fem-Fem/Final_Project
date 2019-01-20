export default function postsReducer(state = {
	posts: [],
	current_post: []
}, action) {

	switch (action.type) {

		case 'GET_POSTS':
			return {
				...state, posts: action.payload
			}

		case 'GET_POST':
		// console.log(action.payload.comments)
		// console.log(action.payload.comments[0].id)
			return {
				...state, current_post: [action.payload]
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
				current_post: [...state.current_post.comments, action.payload]
			}

		case 'DELETE_POST':
			const posts = state.posts.filter(post => post.id !== action.payload.id);
			return {...state, posts}


		case 'DELETE_COMMENT':
			const comments = state.current_post_comments.filter(comment => comment.id !== action.payload.id);
			return {...state, 
				current_post_comments: comments}

		default:
			return state;
	}
};