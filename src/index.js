import React from 'react';
import ReactDOM from 'react-dom';
import './chatBubble.css';

class ChatWrapper extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			chatList: [],
			refresh: true,
			name: 'Abdul Rokhman'
		}

		this.refreshChat = this.refreshChat.bind(this);
		this.scrollToEnd = this.scrollToEnd.bind(this);
	}

	refreshChat(){
		this.setState({
			refresh: true
		});
	}

	scrollToEnd(){
		let container = document.getElementById("style-4");

		container.scrollTop = container.scrollHeight - container.clientHeight;
	}

	componentDidUpdate(){
		this.scrollToEnd();
	}

	render(){
		if(this.state.refresh){
			let bubbleList = [];

			this.state.chatList.forEach(c => {
				if(!c.isAlt){
					bubbleList.push(<BubbleChatAlt key={c.id} chat={c} />);
				}else{
					bubbleList.push(<BubbleChat key={c.id} chat={c} />);
				}
			});

			return (
				<div className="speech-wrapper">
					<HeaderChat him={this.state.name} />
					<div className="container" id="style-4">
						{bubbleList}
					</div>
					<FormChat chats={this.state.chatList} refreshChat={this.refreshChat} him={this.state.name} />
				</div>
			);
		}
	}
}


class HeaderChat extends React.Component{
	render(){
		return(
			<div className="header">
				<img src="https://www.trickscity.com/wp-content/uploads/2018/09/IMG_0976.jpg" className="profpic" alt="profpic" />
				<p className="name" ><b>{this.props.him}</b></p>
			</div>
		);
	}
}

class BubbleChat extends React.Component{
	render(){
		return(
			<div className="bubble">
				<TextChat chat={this.props.chat} />
			</div>
		);
	}
}

class BubbleChatAlt extends React.Component{
	render(){
		return(
			<div className="bubble alt">
				<TextChat chat={this.props.chat} />
			</div>
		);
	}
}

class TextChat extends React.Component{
	render(){
		return(
			<div className="txt">
				<p className="name">{this.props.chat.name}</p>
				<p className="message">{this.props.chat.message}</p>
				<span className="timestamp">{this.props.chat.time}</span>
			</div>
		);
	}
}

class FormChat extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			message: ''
		};

		this.addChat = this.addChat.bind(this);
		this.fillMsg = this.fillMsg.bind(this);
		this.addChatAlt = this.addChatAlt.bind(this);
	}

	fillMsg(e){
		this.setState({
			message: e.target.value
		});
	}

	addChatAlt(e){
		if(e.ctrlKey){

			const today = new Date();
			const lastChat = this.props.chats[this.props.chats.length - 1];
			let id = 1;

			if(lastChat !== undefined){
				id = lastChat.id+1;
			}

			let aChat = {
				id: id,
				name: this.props.him,
				message: this.state.message,
				time: today.getHours()+':'+today.getMinutes(),
				isAlt: true
			};

			this.props.chats.push(aChat);

			this.setState({
				message: ''
			});

			this.props.refreshChat();

			document.getElementById("messageField").focus();
		}
	}

	addChat(e){
		e.preventDefault();

		const today = new Date();
		const lastChat = this.props.chats[this.props.chats.length - 1];
		let id = 1;

		if(lastChat !== undefined){
			id = lastChat.id+1;
		}

		let aChat = {
			id: id,
			name: 'Aku',
			message: this.state.message,
			time: today.getHours()+':'+today.getMinutes(),
			isAlt: false
		};

		this.props.chats.push(aChat);

		this.setState({
			message: ''
		});

		this.props.refreshChat();
	}

	render(){
		return(
			<form onSubmit={this.addChat} >
				<input id="messageField" className="addform" type="text" placeholder="Type a message" onChange={this.fillMsg} onKeyDown={this.addChatAlt} value={this.state.message} />
			</form>
		);
	}
}


ReactDOM.render(<ChatWrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

