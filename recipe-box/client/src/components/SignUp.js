import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { addUserDb } from '../actions/user';

class SignUp extends Component {
	constructor(props) {
		super(props);
};
	
	handleChange = event => {
		this.props.updateSignUpInput(event.target.name, event.target.value)
	};
	
	
	handleOnSubmit = event => {
		event.preventDefault()
		const {history} = this.props
		this.props.addUserDb(this.props.formData, history)
	};
	
	render() {	
	
	return (
		<div>
			<h2 className="diner_style">Sign Up!</h2>
			<form onSubmit={e => this.handleOnSubmit(e)}>
					<div className="recipe_form">
					<label> 
						name:
						<input
							type="text"
							name="name"
							value={this.props.formData.name}
							onChange={this.handleChange}
						/>
					</label>
					</div>
					<div className="username">
					<label> 
						recipe:
						<textarea
							type="text"
							name="username"
							value={this.props.formData.username}
							onChange={this.handleChange}
						/>
					</label>
					</div>
					<div className="recipe_form">
					<label> 
						notes:
						<textarea
							type="text"
							name="password"
							value={this.props.formData.password}
							onChange={this.handleChange}	
						/>
					</label>
					</div>
				<div>
					<button type="submit">Save</button>
				</div>
			</form>
		</div>
		)
	}
	
	componentDidMount() {
		this.props.resetForm()
	}
}



const mapStateToProps = (state) => {
	return {
		formData: state.form
	}
}

export default SignUp;