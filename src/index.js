import React from 'react';
import ReactDOM from 'react-dom';
import './chatBubble.css';

class ChatWrapper extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			chatList: [],
			refresh: true,
			name: 'luv:Angga Dian',
			url: ''
		}

		this.refreshChat = this.refreshChat.bind(this);
		this.scrollToEnd = this.scrollToEnd.bind(this);
		this.changeName = this.changeName.bind(this);
		this.gotoHome = this.gotoHome.bind(this);
	}

	gotoHome(e){
		e.preventDefault();

		this.setState({
			chatList: [],
			refresh: false,
			name: '',
			url: ''
		});
	}

	refreshChat(){
		this.setState({
			refresh: true
		});
	}

	changeName(name, url){
		this.setState({
			name: name,
			refresh: true,
			url: url
		});
	}

	scrollToEnd(){
		let container = document.getElementById("style-4");

		container.scrollTop = container.scrollHeight - container.clientHeight;
	}

	componentDidUpdate(){
		if(this.state.refresh){
			this.scrollToEnd();	
		}
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

			let realName = '';
			const nameSplit = this.state.name.split(":");

			if(nameSplit[0] === 'luv'){
				realName = nameSplit[1];
			}else{
				realName = this.state.name;
			}

			return (
				<div className="speech-wrapper">
					<HeaderChat him={this.state.name} url={this.state.url} gotoHome={this.gotoHome} realName={realName} />
					<div className="container" id="style-4">
						{bubbleList}
					</div>
					<FormChat chats={this.state.chatList} refreshChat={this.refreshChat} him={realName} />
				</div>
			);
		}else{
			return(
				<HomePage changeName={this.changeName} />
			);
		}
	}
}

class HomePage extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			name: '',
			url: ''
		}

		this.fillName = this.fillName.bind(this);
		this.fillURL = this.fillURL.bind(this);
		this.submitName = this.submitName.bind(this);
	}

	submitName(e){
		e.preventDefault();

		if(this.state.name !== ''){
			this.props.changeName(this.state.name, this.state.url);	

			this.setState({
				name: '',
				url: ''
			});
		}else{
			alert("Nama tidak boleh kosong");
		}
	}

	fillName(e){
		this.setState({
			name: e.target.value
		});
	}

	fillURL(e){
		this.setState({
			url: e.target.value
		});
	}

	render(){
		return(
			<div className="homepage">
				<h1 className="title">MonoChat</h1>
				<p className="description">WebApp untuk chat dengan diri sendiri<br /> atau pura-pura chat dengan orang lain.</p>
				<div className="homeform">
					<p className="label">Siapa yang ingin kamu ajak bicara?</p>
					<form onSubmit={this.submitName} >
						<input type="text" placeholder="Nama" value={this.state.name} onChange={this.fillName} />
						<input type="text" placeholder="URL foto" value={this.state.url} onChange={this.fillURL} />
						<button type="submit" onClick={this.submitName} >Go</button>
					</form>
				</div>
			</div>
		);
	}
}


class HeaderChat extends React.Component{
	render(){
		let url = '';
		const splitURL = this.props.him.split(":");

		if(splitURL[0] === 'luv'){
			url = require('./profpic/'+splitURL[1]+'.PNG');
		}else{
			if(this.props.url === ''){
				url = 'https://exelord.com/ember-initials/images/default-d5f51047d8bd6327ec4a74361a7aae7f.jpg';
			}else{
				url = this.props.url;
			}
		}

		return(
			<div className="header">
				<img src={url} className="profpic" alt={this.props.him} />
				<p className="name" ><b>{this.props.realName}</b></p>
				<span className="backlink"><a href="back" onClick={this.props.gotoHome} >Back</a></span>
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

			if(this.state.message !== ''){
				this.props.chats.push(aChat);	
			}

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

		if(this.state.message !== ''){
			this.props.chats.push(aChat);	
		}

		this.setState({
			message: ''
		});

		this.props.refreshChat();
	}

	render(){
		return(
			<form onSubmit={this.addChat} >
				<input id="messageField" className="addform" type="text" placeholder="Type a message" onChange={this.fillMsg} onKeyDown={this.addChatAlt} value={this.state.message} autoComplete="off" />
			</form>
		);
	}
}


ReactDOM.render(<ChatWrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

