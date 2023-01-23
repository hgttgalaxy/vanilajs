const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const FORM_HIDDEN = "hidden";

const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY)





function onLoginSubmt(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    loginForm.classList.add(FORM_HIDDEN);
    paintGreetings(username);
   
}

function paintGreetings(username){
    greeting.innerText = `welcome ${username}`;
    greeting.classList.remove(FORM_HIDDEN);

}


if (savedUsername === null){
    //로그인 폼 보여주기
    loginForm.classList.remove(FORM_HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmt);

    
} else{
    // 저장된 사용자이름 보여주고 환영하기
    paintGreetings(savedUsername);

}
