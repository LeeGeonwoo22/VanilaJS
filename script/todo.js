const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteTodo(e){
    // path, button을 통해 어느 엘리먼트에서 클릭이 일어났는지 알 수 있다. 
    console.log(e)
    // 디테일하게 찾아보기
    console.dir(e.target)
    console.dir(e.target.parentElement)
    const li = e.target.parentElement;
    li.remove();
}
function paintTodo(newTodo){
    // todo list 추가 
    console.log("i will paint hello", newTodo)
    const li = document.createElement("li")
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    const button = document.createElement("button");
    // console.log(li);
    toDoList.appendChild(li);
    // 삭제버튼 추가
    button.innerText = "X";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(e){
    e.preventDefault();
    // console.log(toDoInput.value)
    // 엔터 누르면 자동으로 비워짐
    const newToDo= toDoInput.value;
    toDoInput.value = "";
    // console.log(newToDo, toDoInput.value)
    paintTodo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
