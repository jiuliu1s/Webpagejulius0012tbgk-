
function indexl(){
	var lin=document.getElementById('myframe');

	lin.src='auth/login.html';
}
function indexr(){
var lin=document.getElementById('myframe');

	lin.src='auth/register.html';
}
function indexo(){
	var lin=document.getElementById('myframe');

	lin.src='auth/logout.html';
}
function indexi(){
	var lin=document.getElementById('myframe');

	lin.src='items/item.html';
}
function validation(){
	var lin=document.getElementById('myframe');

	var pwd =document.getElementById('pwd').value;
	var pwd2 =document.getElementById('pwd2').value;
	if(pwd!=pwd2){
		alert('password does not match');
		lin.src='auth/register.html';
	}
	else{
		alert('welcome to our website');
		
		lin.src='../items/item.html';
	}
}
function ctrl(){
	var ctrls=document.getElementById('yel');
	if(ctrls.style.width=='8em'){
		ctrls.style.width='.1em';
		ctrls.style.visibility='collapse';
	}
	else{
		ctrls.style.width='8em';
		ctrls.style.visibility='visible';
	}
}
function login1(){
alert('login success');
	var lin=document.getElementById('myframe');
	lin.src='../items/item.html';
}