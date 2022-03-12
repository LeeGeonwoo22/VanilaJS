const todos = [{text : "lalala"}, {text:"lololo"}]

// 매개변수 todo는 무엇을 넣어도 상관이 없다. 
function sexyFilter(el){
    return el.text !== "lololo"
}

console.log('sexyFilter(todos): ',sexyFilter(todos))
// "true"
console.log('todos.filter(sexyFilter) :',todos.filter(sexyFilter))
// "lalala"

const arr = [1,2,3,4,5]
const newArr = arr.filter((item) => item > 2)

console.log('newArr :', newArr) // [3,4,5]