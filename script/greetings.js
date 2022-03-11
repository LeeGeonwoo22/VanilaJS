const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document .querySelector("#greeting");
// 위 변수 처럼 중요한 정보를 담은게 아니라 대문자로 작성함.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginButton(e){
    e.preventDefault();
    // add.("HIDDEN_CLASSNAME") 따옴표 주의
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username;
    // greeting.innerText = `Hello ${username}`;
    localStorage.setItem(USERNAME_KEY, username)
    // .remove(HIDDEN_CLASSNAME)
    // greeting.classList.remove(HIDDEN_CLASSNAME)
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}
const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername ===null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", handleLoginButton)
}else {
    paintGreetings(savedUsername);
}