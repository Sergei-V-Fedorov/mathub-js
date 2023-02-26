
// GAME

const getRandNumInRange = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(0)
}

const getTask = () => {
  const randomNum1 = getRandNumInRange(0, 100)
  const randomNum2 = getRandNumInRange(0, 100)

  const sign = (Math.random() > 0.5) ? "+" : "-"

  const task = `${randomNum1} ${sign} ${randomNum2}`
  gameState.rightAnswer = eval(task)
  return task
}


const toggleGameState = () => {
  gameState.taskInProcess = !gameState.taskInProcess
}

const gameElements = document.getElementById("game").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
  taskInProcess: false,
  rightAnswer: null,

}

const startGameFunc = () => {
  if (!gameState.taskInProcess) {
    title.innerText = "Игра началась!"
    userAnswer.value = null
    userTask.innerText = getTask()
    userAnswer.hidden = false
    btnGame.innerText = "Проверить!"
    toggleGameState()

  } else {
    const isRight = gameState.rightAnswer == userAnswer.value
    userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
    title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
    btnGame.innerText = "Начать заново!"
    toggleGameState()
  }
}


btnGame.addEventListener("click", startGameFunc)

userAnswer.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    startGameFunc()
  } else if (e.key === "Escape") {
    // убрать фокус
    userAnswer.blur()
  }
})



// DOM document object model

// структура документа
console.log(document)

// свойства документа
console.dir(document)

const name = document.getElementById("name")

// выбирает первый попавшийся селектор
const selectedEl = document.querySelector(".game")

// выбирает все селекторы
const selectedEls = document.querySelectorAll(".game")

// выбрать p внутри селектора
// выбирает первый попавшийся селектор
const parag = document.querySelectorAll("#game p")
console.log(parag[0])

const allDiv = document.querySelectorAll(".block-container > div")
// console.log(allDiv[0])
const counter = document.querySelector(".block span")


const counterState = {
  counter: 0,
  setCountValue(value) {
    this.counter += value
    counter.innerText = this.counter
  }
}

const changeCount = (value) => {
  counterState.counter += value
  counter.innerText = counterState.counter
}

const eventFunc = (e) => {
  // присвоить элементу класс css
  // allDiv[i].className = "choosen-element"

  // e - event событие
  // target - объект, на который кликнули
  
  // увеличиваем счетчик
  if (e.target.className === "") {
    e.target.className = "choosen-element"
    counterState.setCountValue(1)
  }
  else {
    e.target.className = ""
    counterState.setCountValue(-1)
  }
}

for (let i = 0; i < allDiv.length; i++) {
  allDiv[i].addEventListener("click", eventFunc)
}

// удалить обработчик
// allDiv[2].removeEventListener("click", eventFunc)



// Асинхронное выполнение

function timeIsOver() {
  alert("Время вышло!")
}

// функция выполняется по истечении времени в мсек
// setTimeout(timeIsOver, 2000)

// цикличность действий с заданным интервалом времени
// setInterval(timeIsOver, 3000)

// остановить выполнение функций
// const alarm = setInterval(timeIsOver, 3000)

// const alarm = setInterval(() => {
//   let isWantSleep = confirm("Хотите ли вы спать?")
//   if (isWantSleep) {
//     console.log("tic")
//   } else {
//     clearInterval(alarm)
//   }
// }, 3000)

// асинхронность
// console.log("1")
// setTimeout(() => {
//   console.log("2")
// }, 0)

// console.log("3")

const postBlock = document.querySelector(".post-container")
const postBtn = document.querySelector(".post button")
// const postTitle = document.querySelector(".post-container h3")
// const postBody = document.querySelector(".post-container span")


function addPost(title, body) {
  // создаем блоки тэгов h3 и span
  const postTitle = document.createElement("h3")
  const postBody = document.createElement("span")
  const postItem = document.createElement("p")

  // добавляем внутрь тэгов контент
  postTitle.innerText = title
  postBody.innerText = body

  // добавить в блок p блоки h3 и span
  postItem.append(postTitle, postBody)
  // добавить в блок post-container блок p
  postBlock.append(postItem)  
}

// если в стрелочную функцию передается 1 аргумент, можно писать
// f((arg) => {})
// f(arg => {})
// f(arg => {return 5})
// f(arg => 5)

// обработка запросов
function getPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      for (item of data) {
        addPost(item.title, item.body)
      }
    })
    .catch((err) => {
      console.log(err.message)
    })
}

function createPost(title, body, userId) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: JSON.stringify ({
      title: title,
      body: body,
      userId: userId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
  })
  .then((response) => {
    console.log(response)
    return response.json()
  })
  .catch((err) => {
    console.log(err.message)
  })  
}

postBlock.addEventListener("click", getPost)

postBtn.onclick = () => getPost()

// createPost("title", "body", 15)