import React, { Component } from 'react';

class Formulaire extends Component {
	state = {
		message: ''
	};

	createMessage = () => {
		const { addMessage, pseudo } = this.props;

		const message = {
			pseudo: pseudo,
			message: this.state.message,
		};

		addMessage(message);

		// reset
		this.setState({ message: '' });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.createMessage();
	};

	handleChange = event => {
		const message = event.target.value;
		this.setState({ message });
	};

	handleKeyUp = event => {
		if (event.key === 'Enter') {
			this.createMessage();
		}
	};

	render() {
		return (
			<form className='form' onSubmit={this.handleSubmit}>
				<textarea
					value={this.state.message}
					onChange={this.handleChange}
					onKeyUp={this.handleKeyUp}
					maxLength='140'
					required
				/>
				<div className='info'>140</div>
				<button type='submit'>Envoyer !</button>
			</form>
		);
	}
}

export default Formulaire;
