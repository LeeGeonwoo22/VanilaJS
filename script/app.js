const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


function handleLoginButton(){
    console.log(loginInput.value)
    // console.log("cicked")
    const value = loginInput.value;
    if(value === "") {
        alert("Please write your name")
    }
    else if (value.length > 15) {
        alert("Your name is too long.")
    }
}
// function handleInputButton(){

// }

loginButton.addEventListener("click", handleLoginButton)
// loginInput.addEventListener("")

