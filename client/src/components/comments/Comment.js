import React from 'react'

const Comment = ({comment: {id, content}, postId, title, deleteComment}) =>
	<div>
		<li>
			{description}
			<button onClick={() => deleteComment(id, postId)}>Delete</button>
		</li>
	</div>

export default Comment