(this.webpackJsonpmonochat=this.webpackJsonpmonochat||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(10)},function(e,t,a){"use strict";a.r(t);var s=a(2),n=a(3),i=a(5),r=a(4),c=a(1),l=a(6),o=a(0),h=a.n(o),m=a(8),u=a.n(m),p=(a(15),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={chatList:[],refresh:!1,name:"",url:""},a.refreshChat=a.refreshChat.bind(Object(c.a)(a)),a.scrollToEnd=a.scrollToEnd.bind(Object(c.a)(a)),a.changeName=a.changeName.bind(Object(c.a)(a)),a.gotoHome=a.gotoHome.bind(Object(c.a)(a)),a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"gotoHome",value:function(e){e.preventDefault(),this.setState({chatList:[],refresh:!1,name:"",url:""})}},{key:"refreshChat",value:function(){this.setState({refresh:!0})}},{key:"changeName",value:function(e,t){this.setState({name:e,refresh:!0,url:t})}},{key:"scrollToEnd",value:function(){var e=document.getElementById("style-4");e.scrollTop=e.scrollHeight-e.clientHeight}},{key:"componentDidUpdate",value:function(){this.state.refresh&&this.scrollToEnd()}},{key:"render",value:function(){if(this.state.refresh){var e=[];this.state.chatList.forEach((function(t){t.isAlt?e.push(h.a.createElement(f,{key:t.id,chat:t})):e.push(h.a.createElement(g,{key:t.id,chat:t}))}));var t="",a=this.state.name.split(":");return t="luv"===a[0]?a[1]:this.state.name,h.a.createElement("div",{className:"speech-wrapper"},h.a.createElement(d,{him:this.state.name,url:this.state.url,gotoHome:this.gotoHome,realName:t}),h.a.createElement("div",{className:"container",id:"style-4"},e),h.a.createElement(N,{chats:this.state.chatList,refreshChat:this.refreshChat,him:t}))}return h.a.createElement(b,{changeName:this.changeName})}}]),t}(h.a.Component)),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={name:"",url:""},a.fillName=a.fillName.bind(Object(c.a)(a)),a.fillURL=a.fillURL.bind(Object(c.a)(a)),a.submitName=a.submitName.bind(Object(c.a)(a)),a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"submitName",value:function(e){e.preventDefault(),""!==this.state.name?(this.props.changeName(this.state.name,this.state.url),this.setState({name:"",url:""})):alert("Nama tidak boleh kosong")}},{key:"fillName",value:function(e){this.setState({name:e.target.value})}},{key:"fillURL",value:function(e){this.setState({url:e.target.value})}},{key:"render",value:function(){return h.a.createElement("div",{className:"homepage"},h.a.createElement("h1",{className:"title"},"MonoChat"),h.a.createElement("p",{className:"description"},"WebApp untuk chat dengan diri sendiri",h.a.createElement("br",null)," atau pura-pura chat dengan orang lain."),h.a.createElement("div",{className:"homeform"},h.a.createElement("p",{className:"label"},"Siapa yang ingin kamu ajak bicara?"),h.a.createElement("form",{onSubmit:this.submitName},h.a.createElement("input",{type:"text",placeholder:"Nama",value:this.state.name,onChange:this.fillName}),h.a.createElement("input",{type:"text",placeholder:"URL foto (opsional)",value:this.state.url,onChange:this.fillURL}),h.a.createElement("button",{type:"submit",onClick:this.submitName},"Mulai"))))}}]),t}(h.a.Component),d=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e="",t=this.props.him.split(":");return e="luv"===t[0]?a(16)("./"+t[1]+".PNG"):""===this.props.url?"https://exelord.com/ember-initials/images/default-d5f51047d8bd6327ec4a74361a7aae7f.jpg":this.props.url,h.a.createElement("div",{className:"header"},h.a.createElement("img",{src:e,className:"profpic",alt:this.props.him}),h.a.createElement("p",{className:"name"},h.a.createElement("b",null,this.props.realName)),h.a.createElement("span",{className:"backlink"},h.a.createElement("a",{href:"back",onClick:this.props.gotoHome},"Kembali")))}}]),t}(h.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"bubble"},h.a.createElement(v,{chat:this.props.chat}))}}]),t}(h.a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"bubble alt"},h.a.createElement(v,{chat:this.props.chat}))}}]),t}(h.a.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"txt"},h.a.createElement("p",{className:"name"},this.props.chat.name),h.a.createElement("p",{className:"message"},this.props.chat.message),h.a.createElement("span",{className:"timestamp"},this.props.chat.time))}}]),t}(h.a.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={message:""},a.addChat=a.addChat.bind(Object(c.a)(a)),a.fillMsg=a.fillMsg.bind(Object(c.a)(a)),a.addChatAlt=a.addChatAlt.bind(Object(c.a)(a)),a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"fillMsg",value:function(e){this.setState({message:e.target.value})}},{key:"addChatAlt",value:function(e){if(e.ctrlKey){var t=new Date,a=this.props.chats[this.props.chats.length-1],s=1;void 0!==a&&(s=a.id+1);var n={id:s,name:this.props.him,message:this.state.message,time:t.getHours()+":"+t.getMinutes(),isAlt:!0};""!==this.state.message&&this.props.chats.push(n),this.setState({message:""}),this.props.refreshChat(),document.getElementById("messageField").focus()}}},{key:"addChat",value:function(e){e.preventDefault();var t=new Date,a=this.props.chats[this.props.chats.length-1],s=1;void 0!==a&&(s=a.id+1);var n={id:s,name:"Aku",message:this.state.message,time:t.getHours()+":"+t.getMinutes(),isAlt:!1};""!==this.state.message&&this.props.chats.push(n),this.setState({message:""}),this.props.refreshChat()}},{key:"render",value:function(){return h.a.createElement("form",{onSubmit:this.addChat},h.a.createElement("input",{id:"messageField",className:"addform",type:"text",placeholder:"Ketik sebuah pesan",onChange:this.fillMsg,onKeyDown:this.addChatAlt,value:this.state.message,autoComplete:"off"}),h.a.createElement("span",{className:"formlabel"},"Tekan ENTER untuk berbicara sebagai kamu, tekan CTRL untuk berbicara sebagai lawan."))}}]),t}(h.a.Component);u.a.render(h.a.createElement(p,null),document.getElementById("root"))},,,,,function(e,t,a){},function(e,t,a){var s={"./Abdul Rokhman.PNG":17,"./Andi Iqbal.PNG":18,"./Angga Dian.PNG":19,"./Anggoro Islam.PNG":20,"./Jevo Batara.PNG":21,"./Rizky Adi.PNG":22};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=i,e.exports=n,n.id=16},function(e,t,a){e.exports=a.p+"static/media/Abdul Rokhman.bc726f9c.PNG"},function(e,t,a){e.exports=a.p+"static/media/Andi Iqbal.616b1e0d.PNG"},function(e,t,a){e.exports=a.p+"static/media/Angga Dian.2ff68924.PNG"},function(e,t,a){e.exports=a.p+"static/media/Anggoro Islam.f4cf389a.PNG"},function(e,t,a){e.exports=a.p+"static/media/Jevo Batara.2414cbb9.PNG"},function(e,t,a){e.exports=a.p+"static/media/Rizky Adi.8d705b6a.PNG"}],[[9,1,2]]]);
//# sourceMappingURL=main.4505a507.chunk.js.map