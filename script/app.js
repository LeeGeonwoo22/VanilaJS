const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const link = document.querySelector("a")

function handleLoginButton(e){
    e.preventDefault();
    console.log(loginInput.value)

}

function handleLinkClick(e){
    // 모든 동작을 막게 되므로 alert을 사용하지않음 
    e.preventDefault();
    alert("clicked!")
}

loginForm.addEventListener("submit", handleLoginButton)
link.addEventListener("click", handleLinkClick);

