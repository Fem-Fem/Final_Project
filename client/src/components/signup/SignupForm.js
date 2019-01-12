import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signupUser } from '../actions/signupUser';

class SignupForm extends Component {

	constructor(props) {
		super(props);

		this.handleUsernameChange = this.handleUsernameChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)

		this.handleSubmit = this.handleSubmit.bind(this)

		this.state = {
		username: "",
		password: "",
	};

}


handleUsernameChange = event => {
	this.setState({
		username: event.target.value
	})
}

handlePasswordChange = event => {
	this.setState({
		password: event.target.value,
	})
}

handleSubmit = event => {
	event.preventDefault();

	const user = this.state
	this.props.signupUser(user)
	console.log(this.state)
}

render() {
	return (
		<form onSubmit = {this.handleSubmit}>
			<FormGroup>
				<ControlLabel>Username</ControlLabel>
				<FormControl
				name="username"
				type="text"
				value={this.state.value}
				placeholder="Enter username"
				onChange={this.handleUsernameChange}
				/>
			</FormGroup>

			<FormGroup controlID="password">
				<ControlLabel>Password</ControlLabel>
				<FormControl
				name="password"
				type="password"
				value={this.state.value}
				placeholder="Enter password"
				onChange={this.handlePasswordChange}
				/>
			</FormGroup>
			<Button type="submit">Sign Up</Button>
		</form>
		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	signupUser
}, dispatch)

export default connect(null, mapDispatchToProps)(signupUser)