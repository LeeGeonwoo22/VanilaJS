const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");

function handleLoginButton(e){
    // 어떤 이벤트의 기본행동이든지 발생하지 않도록 방지함
    // 기본적으로 페이지를 새로고침하도록 되어있지만 그걸 방지함. 
    e.preventDefault();
    console.log(loginInput.value)
    // const value = loginInput.value;
    // if(value === "") {
    //     alert("Please write your name")
    // }
    // else if (value.length > 15) {
    //     alert("Your name is too long.")
    // }
}
// function handleInputButton(){

// }

loginForm.addEventListener("submit", handleLoginButton)
// loginInput.addEventListener("")

