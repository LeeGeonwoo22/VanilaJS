const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document .querySelector("#greeting");
// 위 변수 처럼 중요한 정보를 담은게 아니라 대문자로 작성함.
const HIDDEN_CLASSNAME = "hidden";

function handleLoginButton(e){
    e.preventDefault();
    // add.("HIDDEN_CLASSNAME") 따옴표 주의
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username;
    localStorage.setItem("username", username)
    greeting.innerText = `Hello ${username}`;
    // .remove(HIDDEN_CLASSNAME)
    greeting.classList.remove(HIDDEN_CLASSNAME)
    // console.log(username)
}

loginForm.addEventListener("submit", handleLoginButton)


