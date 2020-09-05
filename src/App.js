import React, { Component, createRef } from 'react';
import './App.css';

import Formulaire from './components/Formulaire';
import Message from './components/Message';

class App extends Component {
	state = {
		messages: {},
		pseudo: this.props.match.params.pseudo,
	};

	messagesRef = createRef();

	addMessage = message => {
		const messages = { ...this.state.messages };
		messages[`message-${Date.now()}`] = message;
		Object.keys(messages)
			.slice(0, -15)
			.forEach(key => {
				messages[key] = null;
			});
		this.setState({ messages });
	};

	render() {
		return (
			<div className='box'>
				<div>
					<div className='messages'>
						<Message />
						<Message />
						<Message />
					</div>
				</div>
				<Formulaire
					length={150}
					pseudo={this.state.pseudo}
					addMessage={this.addMessage}
				/>
			</div>
		);
	}
}

export default App;
