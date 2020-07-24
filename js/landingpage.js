const login = document.getElementById("login");
const usernameerror = document.getElementById('usernameerror');
const passworderror = document.getElementById('passworderror');
const repeatpassworderror = document.getElementById('repeatpassworderror');
const cancel = document.getElementById('cancel');
const form = document.getElementById("form");
const username = document.getElementById('username');
const blankerror = document.getElementById('blankerror');

//At least one letter and one character
const password = document.getElementById('password');
// Must contain at least one number 0-9
const repeatpassword = document.getElementById('repeatpassword');
const formButtons = document.querySelectorAll('button');
const formcancel = document.querySelectorAll("button[type=submit]");


const changeColor = () => {
	formButtons.forEach((button) => {
		if (button.style.color === 'red') {
			button.style.color = '#592E83';
		} else {
			button.style.color = 'red';
		}
	});
};

const changeColorCancel = ()=>{
	formcancel.forEach((button)=>{
		if(button.style.color === "red"){
		   button.style.color = "#592E83";
		}else{
			button.style.color = "red";
		}
	});
};

function validation(evt) {
  evt.preventDefault();
  
	const nameRegex = /^[a-zA-Z0-9]+$/;
	const passwordRegex = /^\d+$/;

	const checkusername = nameRegex.test(username.value);
	const checkpassword = passwordRegex.test(password.value);
	const checkrepeatpassword = passwordRegex.test(repeatpassword.value);

	if (!checkusername) {
		usernameerror.innerHTML = 'User name needs min a-z (lowercase), A-Z (uppercase), with min 0-9';
	} else {
		usernameerror.innerHTML = '';
	}

	if (!checkpassword) {
		passworderror.innerHTML = 'Password need min 1 number 0-9';
	} else {
		passworderror.innerHTML = '';
	}
  
  if (!checkrepeatpassword) {
		repeatpassworderror.innerHTML = 'Repeated Password need min 1 number 0-9';
	} else {
		repeatpassworderror.innerHTML = '';
	}

	if (!checkusername || !checkpassword || !checkrepeatpassword) {
		return false;
	}

	if (password.value === repeatpassword.value) {
		repeatpassworderror.innerHTML = '';
	} else {
		repeatpassworderror.innerHTML = "Repeated password doesn't match";
		return false;
	}
	
	alert("Loading to snake game!");
        setTimeout(function(){
            window.location="snake.html";
        },1000);
}

cancel.addEventListener("click", function(e){
	e.preventDefault();
	form.reset();
});

formcancel.forEach((button)=> button.addEventListener("click", changeColorCancel));
formButtons.forEach((button) => button.addEventListener('mouseover', changeColor));
formButtons.forEach((button) => button.addEventListener('mouseout', changeColor));
