import React from 'react';
import ReactDOM from 'react-dom';
import './chatBubble.css';

class ChatWrapper extends React.Component{
	render(){
		return (
			<div className="speech-wrapper">
				<BubbleChat />
				<BubbleChatAlt />
				<FormChat />
			</div>
		);
	}
}

class BubbleChat extends React.Component{
	render(){
		return(
			<div className="bubble">
				<TextChat />
				<div className="bubble-arrow"></div>
			</div>
		);
	}
}

class BubbleChatAlt extends React.Component{
	render(){
		return(
			<div className="bubble alt">
				<TextChat />
				<div className="bubble-arrow alt"></div>
			</div>
		);
	}
}

class TextChat extends React.Component{
	render(){
		return(
			<div className="txt">
				<p className="name">Benni</p>
				<p className="message">Hey, check out this Pure CSS speech bubble...</p>
				<span className="timestamp">10:20 pm</span>
			</div>
		);
	}
}

class FormChat extends React.Component{
	render(){
		return(
			<form>
				<input className="addform" type="text" placeholder="Type a message" />
			</form>
		);
	}
}


ReactDOM.render(<ChatWrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

