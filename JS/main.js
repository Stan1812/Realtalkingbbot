
var sentBtn=document.querySelector('#sent')
var more=document.querySelector('#more');


function getJSON(url) {
  script.src = url
}


/*
 *使用本地添加script标签的方法来请求
 var script=document.createElement('script');
 var head = document.head
 head.appendChild(script)
  function infoUpdating(json) {
  //test
    var result = json.result
   console.log(result)
}
*
*/


function userinput () {
	more.style.display="none";
	sentBtn.style.display="block"
}

function userexit(){
		more.style.display="block";
	sentBtn.style.display="none"
}
function addUserMes(value){
	var talkBox=document.querySelector('#talkBox')
	var userMe=document.createElement('div')
	userMe.className='usermessage'
	var user_message=document.createElement('div')
	var user_pic=document.createElement('i')
	user_pic.className='user_pic'
	user_message.className='message'
	user_message.innerHTML=value
	userMe.appendChild(user_message)
	userMe.appendChild(user_pic)
	talkBox.appendChild(userMe)
}
function addBotMes(value){
	var talkBox=document.querySelector('#talkBox')
	var botMe=document.createElement('div')
	botMe.className='botmessage'
	var bot_message=document.createElement('div')
	var bot_pic=document.createElement('i')
	bot_pic.className='bot_pic'
	bot_message.className='message'
	bot_message.style.background='white'
	bot_message.innerHTML=value
	
	botMe.appendChild(bot_pic)
	botMe.appendChild(bot_message)
	talkBox.appendChild(botMe)
}

sentBtn.addEventListener('click',sentmessage)
function sentmessage(){
	var input_box=document.querySelector('#input_box')
	var sent_value=input_box.value;
	console.log(sent_value);
	console.log('1')
	if (sent_value != undefined) {
	addUserMes(sent_value)}
	request.open('GET','http://www.tuling123.com/openapi/api?&info='+ sent_value +'&dtype=json&key=82fb88e4e494415da7de531fbdb6bd8c')
	request.send();
  //	var url = 'http://www.tuling123.com/openapi/api?&info='+ sent_value +'&dtype=json&key=82fb88e4e494415da7de531fbdb6bd8c&callback=infoUpdating'
   //getJSON(url);
   input_box.value=' '
}

function success (text){
	console.log(text);
	var result=JSON.parse(text);
	message=result.text
	console.log(message)
	console.log(typeof(text))
	addBotMes(message)
}
function fail (text) {
	console.log('返回数据失败')
}
var request = new  XMLHttpRequest();
request.onreadystatechange =function(){
	if(request.readyState==4){
		if(request.status==200){
			return success (request.responseText);
		}else{
			return fali(request.status)
		}
}}
