
// STRING
const str1 = 'I\'m OK'
const str2 = "Text\nnew line"
const str3 = `I'm say: ${str1}`

console.log(str1, typeof str1)
console.log(str2, typeof str2)
console.log(str3, typeof str3)

// NUMBER от -(2**53 - 1) до (2**53 - 1)
// операции + - * / **
const num1 = 75 + 15
const num2 = 79 * 9
// alert(num2)
// вычисления можно писать в консоли
// происходит преобразования строки в число
console.log(79 - "5")
console.log(2 * " 2 ")
// при сложении типы приводятся к строке
console.log(2 + "  2  ")
// при других операциях, элементы приводятся к числам
console.log(2 / "3")
// если не могут быть преобразоваы, результат NaN
console.log(2 * "a")
const inf = 17 / 0

// BIGINT
// они не округляются в отличие от NUMBER
const bigint = 103123123n

// BOOLEAN
// > < >= <= >== <== == ===
// true / false
const bool = 10 > 5
console.log(bool)

// NULL
let empty = null
console.log(empty, typeof null)

// UNDEFINED
let box = undefined
console.log(box, typeof box)
let box2
console.log(box2, typeof box2)

// SYMBOL
// уникальные названия
const unique = Symbol('id')
const unique2 = Symbol('id')
console.log(unique == unique2)

// OBJECT
// набор пар ключ-значение
const obj = {
  name: "Sasha",
  age: 19,
  isHappy: true,
}

console.log(obj.name)
// используется при динамическом формировании объекта
console.log(obj['age'])

obj.job = "Google"
console.log(obj)

// Array - зарезервировано
const array = ["Ann", 18, false]
array[3] = "Facebook"
console.log(array)
console.log(array[3])