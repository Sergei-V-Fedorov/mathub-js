// FUNCTION

// declaration
function scream() {
  alert("AAAAAA")
}

// scream()

// expression
const wowScream = function() {
  alert("WOOOOOW")
}

// wowScream()

// arrow
const arrow = () => {
  alert("arrow in the sky")
}

// arrow()


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

btnGame.onclick = () => {
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

// if (isPlus) {
//   gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
// } else {
//   gameElements[1].innerText = `${randomValue1} - ${randomValue2}`
// }

