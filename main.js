
//CLASS 21
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let string = 'GoodBye'
console.log(string.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subtractFrom100(n1,n2,n3,n4,n5) {
  let difference = 100 - n1 - n2 -n3 - n4 - n5;
  return Math.abs(difference)
}
console.log(subtractFrom100(10,5,25,20,15))


//Create Function that takes in 3 numbers and console.log the lowest and highest values and call the function.
function highestLowest(n1,n2,n3) {
 let min = Math.min(n1,n2,n3)
 let max = Math.max(n1,n2,n3)
 return `The lowest number is ${min} and the highest number is ${max}`
}
console.log(highestLowest(10,4,9))

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

console.log('headsTails')
// function headsTails() {
//   return Math.random() < 0.5 ? 'heads' : 'tails';
// }

const headsTails = _ => Math.random() < 0.5 ? 'heads' : 'tails';

//Create a function that takes in an array of numbers. Alert the sum of the second lowest and the second highest number
function sumOfSecondHighAndLow(nums) {
  let numbers = nums.sort((a,b) => a - b )
  return numbers[1] + numbers[nums.length -2];
}
console.log(sumOfSecondHighAndLow([21,56,88,24,1,99,710]))


//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function Character(name, power, weakness, health) {
  this.name = name
  this.power = power
  this.weakness = weakness
  this.hitPoints = health
  this.powerMove = function() {
    console.log(`${this.name} slams the foe with ${this.power}!`)
  }
  this.saying = function() {
    console.log(`I am Supa${this.name}!`)
  }
  this.death = function() {
    console.log(`${this.name}'s ${this.hitPoints}hitpoints have been depleted by ${this.weakness} knives.`)
  }
}

//Create a stopwatch object that has four properties and three methods

let stopwatch = {}
stopwatch.brand = 'Acme'
stopwatch.color = 'black'
stopwatch.type = 'digital'
stopwatch.shape = 'square'
stopwatch.start = function() {
  console.log('start watch')
}
stopwatch.stop = function() {
  console.log('stop watch')
}

stopwatch.off = function() {
  console.log(`Turn off ${this.brand} stopwatch`)
}

stopwatch.off()


//Constructor for new fighter
let johnnyBoomFists = new Character('johnnyBoomFists', 'Fire Fists', 'poison', 350) 
johnnyBoomFists.saying()
johnnyBoomFists.powerMove()
johnnyBoomFists.death()


// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
  if (Math.random() < 0.33) {
    return 'rock'
  } else if (Math.random() < 0.66) {
    return 'paper'
  } else {
    return 'scissors'
  }
}
console.log(rockPaperScissors())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(playerChoice) {
  let bot = rockPaperScissors()
  if ( 
    (playerChoice === 'rock' && bot === 'scissors') ||
    (playerChoice === 'paper' && bot === 'rock') || 
    (playerChoice === 'scissors' && bot === 'paper') ) 
    {
      console.log(`Player:${playerChoice} & Bot:${bot} = Player wins`)} 
  else if (bot === playerChoice) {
    console.log(`Tie`)
  } else {
    console.log(`Player:${playerChoice} and Bot:${bot} = Bot wins`)
  }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGameXTimes(arr) {
  arr.forEach(choice => checkWin(choice))
}

playGameXTimes(['scissors','rock','paper'])

//CLASS 22
//Arrays
//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numbers = [5,3,2,4,12,3]
let sum = numbers.reduce( (acc,c) => acc + c, 0 )
console.log(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squaringArrayNums(arr) {
return arr.map(num => Math.pow(num, 2))
}
console.log(squaringArrayNums([2,3,4]))

//Create a function that takes string
//Print the reverse of that string to the console
//requires the string be split-to anrray
//reverse the array order
//join the array elements back to string
function reverseString(str) {
  let reverse = str.split('').reverse().join('')
  console.log(reverse)
}
reverseString('cat')
reverseString('BOB')
reverseString('Halloween')
reverseString('civic')

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function checkIfPalidrome(str) {
  let reversed = str.split('').reverse().join('')
  console.log(reversed, str)
  if (reversed !== str) {
    console.log(`${str} not a palidrome`)
  } else {
    console.log(`${str} is a palidrome`)
  }
}

checkIfPalidrome('hello')
checkIfPalidrome('deified')
checkIfPalidrome('civic')

//OBJECTS
//Create a mouse object that has four properties and three methods with literal notation
//Create a pc mouse
let mouse = {}
mouse.brand = 'Apple'
mouse.color = 'silver'
mouse.price = 59.99
mouse.type = 'wireless'
mouse.rightClick = function() {
  console.log('rightClick click')
}
mouse.leftClick = function() {
  console.log('click leftClick')
}
mouse.wheel = function() {
  console.log('scroll')
}

mouse.wheel()
console.log(`${mouse.brand}'s ${mouse.color}, ${mouse.type} mouse retails for $${mouse.price}.`)

//Use his constructor to createCar
// create couple cars
// add Prototype update for bluetooth
function CarBuilder(vin, carMake, carModel,color, numberOfDoors) {
  this.vin = vin
  this.make = carMake
  this.model = carModel
  this.color = color
  this.doorCt = numberOfDoors
  this.lock = function() {
    console.log(`${this.make} ${this.model} has ${this.doorCt} doors requiring locks.`)
  }
  this.paint = function() {
    console.log(`${this.model} with Vin Number: ${this.vin} must be painted with four layers of ${this.color} and 2 clearcoats.`)
  }
}

let jeepRubicon = new CarBuilder('1A34Z543', 'Chrysler', 'Jeep Rubicon', 'blue', 5)
let nissanMaxima = new CarBuilder('1S221B43', 'Nissan', 'Maxima', 'red', 4)

console.table(jeepRubicon)
jeepRubicon.paint()
console.table(nissanMaxima)
nissanMaxima.lock()

//Prototype
CarBuilder.prototype.bluetooth = true;
console.log(jeepRubicon, nissanMaxima)

///CLASS CONSTRUCTOR FOR sodapop options

class DrinkMenuItem {
  constructor(name, size, price, description) {
    this.name = name
    this.size = size
    this.price = price
    this.description = description
  }
  mixAddOns() {
    return 1.00
  }
  priceAddOns() {
    console.log(`${this.size} ${this.name} will be ${this.price + this.mixAddOns()} with extras.`)
  }
}

let dirtyCokeZero = new DrinkMenuItem('Dirty Diet Coke', 'Large', 4.99, 'Dirty Diet Coke has cherry and vanilla flavoring in Coke Zero with a splash of cream')

console.log(dirtyCokeZero)
console.log(`${dirtyCokeZero.name} without extras is ${dirtyCokeZero.price} for the ${dirtyCokeZero.size}`)
dirtyCokeZero.priceAddOns()


// DOG CEO API simply get new image after btn clicked
//Get a dog photo from the dog.ceo api and place the photo in the DOM
//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = `https://dog.ceo/api/breeds/image/random`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data)
        // console.log(data.message)
        document.querySelector('img').src = data.message
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

