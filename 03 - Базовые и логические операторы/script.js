// оператор присваивания
const a = "variant1"

// сравнение по значению ==
console.log(5 == "5")

// сравнение по типу и значению ===
console.log(5 === "5")

// + преобразует строку в число
console.log(typeof +"15")

// Операторы преобразования типов
// Number,  String, Boolean

// + преобразует число в строку
console.log(typeof (15 + ""))

// отрицание !

// const go = confirm("Будем бегать?")
// if (go) {
//   alert("Побежали")
// } else {
//   alert("Стоим")
// }

// const go = prompt("Куда побежим?", "домой")
// if (go) {
//   alert("Побежали")
// } else {
//   alert("Стоим")
// }

// const userName = prompt("Who are you?", "anonim")
// if (userName == "admin") {
//   alert("Hello boss")
// } else if (userName == "anonim") {
//   alert("I don't know you")
// } else if (userName == null) {
//   alert("You don't exist") 
// } else {
//   alert(`Hi ${userName}`)
// }

// логические и &&  или ||

// const userName = prompt("Who are you?", "anonim")
// if (userName == "admin") {
//   alert("Hello boss")
// } else if (userName == "anonim" || !userName) {
//   alert("I don't know you")
// } else {
//   alert(`Hi ${userName}`)
// }

// const counts = prompt("До скольки досчитать?", 20)
// let i = 0
// while (i <= counts) {
//   console.log(i)
//   // i = i + 1
//   // i += 1
//   // ++i
//   i++
// }

// const counts = prompt("До скольки досчитать?", 20)
// let i = 10
// do {
//   console.log(i++)
// } while (i <= counts)

// const arr = []

// for (let i = 1; i <= 50; ++i){
//   arr.push(i)
// }
// // console.log(arr)

// const newArr = []

// for (item of arr) {
//   if (!(item % 3)) {
//     newArr.push(item)
//   }
// }

// console.log(newArr)

// const obj = {
//   name: "Sasha",
//   age: 25,
//   city: "Voronezh"
// }

// for (key in obj) {
//   console.log(key, ":", obj[key])
// }

// from 0 to 1
const randomValue1 = (Math.random() * 100).toFixed(0)
const randomValue2 = (Math.random() * 100).toFixed(0)

const isPlus = Math.random() > 0.5

const gameElements = document.getElementById("game").children

if (isPlus) {
  gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
} else {
  gameElements[1].innerText = `${randomValue1} - ${randomValue2}`
}
console.log(gameElements)

let num = 17

let str = "17"

let empty = null

if ( str - num ) {

    console.log('first')

} else if (empty - num) {

    console.log("second")

} else if (str - empty) {

    console.log("third")

} else {

    console.log("no one")

}