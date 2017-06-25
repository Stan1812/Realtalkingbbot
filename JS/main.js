
var sentBtn=document.getElementById('sent')
var more=document.getElementById('more');
var script=document.createElement('script');
var head = document.head
head.appendChild(script)

function getJSON(url) {
  script.src = url
}

function infoUpdating(json) {
  //test
   var result = json.result
  console.log(result)
  
}
function userinput () {
	more.style.display="none";
	sentBtn.style.display="block"
}

function addUserMes(value){
	var talkBox=document.getElementById('talkBox')
	var userMe=document.createElement('div')
	userMe.className='usermessage'
	var user_message=document.createElement('div')
	var user_pic=document.createElement('i')
	user_pic.className='bot_pic'
	user_message.className='message'
	user_message.innerHTML=value
	userMe.appendChild(user_message)
	userMe.appendChild(user_pic)
	talkBox.appendChild(userMe)
}
function addBotMes(){

}

sentBtn.addEventListener('click',sentmessage)
function sentmessage(){
	var input_box=document.getElementById('input_box')
	var sent_value=input_box.value;
	console.log(sent_value);
	console.log('1')
	if (sent_value != undefined) {
	addUserMes(sent_value)}
  	var url = 'http://www.tuling123.com/openapi/api?&info='+ sent_value +'&dtype=json&key=82fb88e4e494415da7de531fbdb6bd8c&callback=infoUpdating'
   getJSON(url);
   input_box.value=' '
}
