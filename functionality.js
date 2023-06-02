const objectOne = document.querySelector('#objectOne')
const objectTwo = document.querySelector('#objectTwo')

let numOne = []
let numTwo = []
let resultPress = false
let calMethod = false
let postResult = null

const typeFunction = (event) => {
  keyEvent = event.key

  if (numOne.length > 1) {
    keyEvent === '+'
      ? (calMethod = '+')
      : keyEvent === '-'
      ? (calMethod = '-')
      : keyEvent === '*'
      ? (calMethod = '*')
      : keyEvent.toLowerCase() === 'x'
      ? (calMethod = 'x')
      : keyEvent === '/'
      ? (calMethod = '/')
      : null
  }

  if (!calMethod) {
    !isNaN(keyEvent) ? numOne.push(parseInt(keyEvent)) : null
    objectTwo.innerHTML = parseInt(numOne.toString().replaceAll(',', ''))
  } else if (calMethod) {
    !isNaN(keyEvent) ? numTwo.push(parseInt(keyEvent)) : null
    objectOne.innerHTML = parseInt(numOne.toString().replaceAll(',', ''))
    if (numTwo.length < 1 || objectTwo.innerHTML === NaN) {
      objectTwo.innerHTML = ''
    } else {
      objectTwo.innerHTML = parseInt(numTwo.toString().replaceAll(',', ''))
    }
  }

  if (keyEvent === '=' || keyEvent === 'Enter') {
    numOne = parseInt(numOne.toString().replaceAll(',', ''))
    numTwo = parseInt(numTwo.toString().replaceAll(',', ''))
    resultPress = true
    if (calMethod === '+') {
      postResult = numOne + numTwo
      calMethod = false
      numOne = []
      numTwo = []
      objectTwo.innerHTML = postResult
      objectOne.innerHTML = ''
    }
    if (calMethod === '-') {
      postResult = numOne - numTwo
      calMethod = false
      numOne = []
      numTwo = []
    }
    if (calMethod === '*') {
      postResult = numOne * numTwo
      calMethod = false
      numOne = []
      numTwo = []
    }
    if (calMethod === 'x') {
      postResult = numOne * numTwo
      calMethod = false
      numOne = []
      numTwo = []
    }
    if (calMethod === '/') {
      postResult = numOne / numTwo
      calMethod = false
      numOne = []
      numTwo = []
    }
    if (!numTwo) {
      postResult = numOne
      calMethod = false
      numOne = []
      numTwo = []
    }
  }

  if (resultPress === true && keyEvent === '+') {
    if (numTwo.length < 1 || numOne.length < 1) {
      objectTwo.innerHTML = 'BOMB'
    }
    calMethod = '+'
    resultPress = false
    numOne = postResult
    objectOne.innerHTML = numOne
  } else if (resultPress === true && keyEvent === '-') {
    calMethod = '-'
    resultPress = false
    numOne = postResult
  } else if (resultPress === true && keyEvent === '*') {
    calMethod = '*'
    resultPress = false
    numOne = postResult
  } else if (resultPress === true && keyEvent === 'x') {
    calMethod = '*'
    resultPress = false
    numOne = postResult
  } else if (resultPress === true && keyEvent === '/') {
    calMethod = '/'
    resultPress = false
    numOne = postResult
  }
  console.log(
    'numOne:',
    numOne,
    'numTwo:',
    numTwo,
    'postResult:',
    postResult,
    'Cal method:',
    calMethod,
  )
}
document.addEventListener('keydown', typeFunction)
