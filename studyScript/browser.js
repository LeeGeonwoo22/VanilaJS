// title 바꾸기
function changeTitle(a){
    document.title =(a)
    console.log(document.title)
}

// title 확인
// function title(){
//     console.log(document.title)
// }

// 클래스 엘리번트를 한번에 가져올때 쓰임
const hello  = document.getElementsByClassName("hello");

// 태그내용만 가져오고 싶을때 
const tag = document.getElementsByTagName("h1")
// 특정 클래스 내부의 태그내용을 가져오고 싶을때
const classTag = document.querySelector(".class tag")
// 특정 아이디에서 첫번째 자식 h1만 가져오기 
// const title = document.querySelector("#id:first-child h1")
const title = document.querySelector("div.hello:first-child h1")
// 특정 아이디 선택 하기
const id =  document.getElementById("id")

// 이벤트 리스너 

// 타이틀을 클릭했을때 나타남

// function handleTitleClick() {
//     const classList. = title.style.color 
//     // console.log("title was Clicked!")
//     if (classList. === "blue") {
//         classList. = "tomato";
//     } else {
//         classList. = "blue";
//     }
// }

function handleTitleClick() {
    const clickedClass = "clicked";
    // console.log("title was Clicked!")
    if (title.classList.contains(clickedClass)) {
        title.classList.remove(clickedClass);
    } else {
        title.classList.add(clickedClass);
    }
    // 이것 한줄로 구현이 됨.
    // title.classList.toggle(clickedClass)
}

function handleMouseEnter(){
    title.innerText = "mouse is here"
    // console.log("mouse is here!")
}

function handleMouseLeaver(){
    title.innerText = "Mouse is gone"
}

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }

function handleWindowCopy(){
    alert("copier!")
}

function handleWindowOffline(){
    alert("Wifi Offline")
}
function handleWindowOnline(){
    alert("Online, All good")
}

console.log('title.onclick = handleTitleClick;' )
// title.addEventListener("click", handleTitleClick);
//똑같이 작동한다. 
title.onclick = handleTitleClick;
// title.addEventListener("mouseenter", handleMouseEnter);
title.onmouseenter = handleMouseEnter;
title.addEventListener("mouseleave", handleMouseLeaver);

// window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

