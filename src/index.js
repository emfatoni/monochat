import React from 'react';
import ReactDOM from 'react-dom';
import './chatBubble.css';

class ChatWrapper extends React.Component{
	render(){
		return (
			<div className="speech-wrapper">
				<HeaderChat />
				<div class="container" id="style-4">
					<BubbleChat />
					<BubbleChatAlt />
					<BubbleChat />
					<BubbleChat />
					<BubbleChat />
					<BubbleChatAlt />
					<BubbleChatAlt />
					<BubbleChatAlt />
				</div>
				<FormChat />
			</div>
		);
	}
}


class HeaderChat extends React.Component{
	render(){
		return(
			<div className="header">
				<img src="https://www.trickscity.com/wp-content/uploads/2018/09/IMG_0976.jpg" className="profpic" />
				<p class="name" ><b>No Name</b></p>
			</div>
		);
	}
}

class BubbleChat extends React.Component{
	render(){
		return(
			<div className="bubble">
				<TextChat />
				
			</div>
		);
	}
}

class BubbleChatAlt extends React.Component{
	render(){
		return(
			<div className="bubble alt">
				<TextChat />
				
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

