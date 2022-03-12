const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
// save Todolist
let toDos = [];

const TODOS_KEY = "todos"

function saveToDos(){
    // 로컬 스토리지에는 텍스트만 저장가능하다.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e){
    // path, button을 통해 어느 엘리먼트에서 클릭이 일어났는지 알 수 있다. 
    console.log(e)
    // 디테일하게 찾아보기
    console.dir(e.target)
    console.dir(e.target.parentElement)
    const li = e.target.parentElement;
    li.remove();
    // toDos = toDos.filter((toDo) => toDo.id !== li.id); 
    // console.log(typeof toDo.id) 처보면 숫자가 아닌 '문자'로 나온다.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
}

function paintTodo(newTodo){
    // todo list 추가 
    console.log("i will paint hello", newTodo)
    const li = document.createElement("li")
    // 아이디 만들기
    li.id = newTodo.id;
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    // console.log(li);
    toDoList.appendChild(li);
    // 삭제버튼 추가
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(e){
    e.preventDefault();
    // console.log(toDoInput.value)
    // 엔터 누르면 자동으로 비워짐
    const newTodo= toDoInput.value;
    toDoInput.value = "";
    // console.log(newToDo, toDoInput.value)
    
    // 아이디 부여 하기
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    
    // 저장하기
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);

if(savedToDos!==null){
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos)
    // parsedToDos.forEach((ele)=>console.log("this is the turn of", ele))
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
  }
