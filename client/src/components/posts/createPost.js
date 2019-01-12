import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createPost } from '../actions/postActions'

class CreatePost extends Component {

	constructor() {
		super();
		this.state = {
			content: '',
			title: '',
		};
	}

handleTitleChange = event => {
		this.setState({
			title: event.target.value
		})
	}

handleContentChange = event => {
		this.setState({
			content: event.target.value,
		})
	}

handleSubmit = event => {
	event.preventDefault();

	console.log(this.state);
	this.props.createPost(this.state)
	this.setState({
		title: "",
		content: ""})
}

render(
	return (
		<form onSubmit = {this.handleSubmit}>
			<FormGroup>
				<ControlLabel>Username</ControlLabel>
				<FormControl
				name="title"
				type="text"
				value={this.state.value}
				placeholder="Enter title"
				onChange={this.handleTitleChange}
				/>
			</FormGroup>

			<FormGroup
				<ControlLabel>Content</ControlLabel>
				<FormControl
				name="content"
				type="text"
				value={this.state.value}
				placeholder="Enter content"
				onChange={this.handleContentChange}
				/>
			</FormGroup>
			<Button type="submit">Upload Post</Button>
		</form>
		)
)


const mapDispatchToProps = dispatch => bindActionCreators({
	createPost}
}, dispatch)

export default connect(null, mapDispatchToProps)(createPost)