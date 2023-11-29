const testP = document.getElementById("textP")

testP.innerText = "超酷的啦"

// storage
// localStorage / sessionStorage

// JSON.Stringify
// JSON.parse

// let dog = {
//     name:"可口可樂",
//     type:"臘腸",
//     age:2
// }

// let dog = [1,2,3,4,5]
let dog = 11

localStorage.setItem("dog", JSON.stringify(dog))
console.log(JSON.stringify(dog))
console.log(typeof(JSON.stringify(dog)))

let obj = localStorage.getItem("dog")
console.log(JSON.parse(obj))