import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Deconnexion extends Component {
	state = {
		back: false,
	};

	handleClick = event => {
		event.preventDefault();
		this.setState({ back: true });
	};

	render() {
		if (this.state.back) {
			return <Redirect push to={`/`}></Redirect>;
		}

		return (
			<div>
				<button class='quit' onClick={this.handleClick}>
					Quit
				</button>
			</div>
		);
	}
}

export default Deconnexion;
