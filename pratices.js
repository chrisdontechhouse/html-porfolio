/*
let calculation = "";

function updateCalculation() {
  console.log(`${calculation}`);
}

function playerGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'You Tie';
    } else if (computerMove === 'paper') {
      result = 'You loss';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    }
    else if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You Loss';
      } else if (computerMove === 'paper') {
        result = 'You Win';
      } else if (computerMove === 'scissors') {
        result = 'Tie';
      }
    } else if (playerMove === 'paper') {
      if (computerMove === 'paper') {
        result = 'You loss';
      } else if (computerMove === 'scissors') {
        result = 'Tie';
      } else if (computerMove === 'rock') {
        result = 'You win';
      }
    }
  }
  alert(`You picked ${playerMove}. computer picked ${computerMove}. ${result}`);
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  return computerMove;

}



let hour = 30;
let hourMove = '';

function hourMeter() {
  if (hour >= 6 && hour < 12) {
    hourMove = 'Good morning';
  } else if (hour >= 13 && hour < 17) {
    hourMove = 'how are you doing today';
  } else {
    hourMove = 'see you leter, sweet dreams';
  }

  // this sis to confirm if the console.log(hourMove) is working.
  //console.log(hourMove);


  let hourMoveResult = '';

  if (hourMove === 'Good morning') {
    hourMoveResult = 'It is chris time for work';
  } else if (hourMove === 'how are you doing today') {
    hourMoveResult = 'It afternoon!!! Time for lunch, you need break';
  } else if (hourMove === 'see you leter, sweet dreams') {
    hourMoveResult = 'This is closing hour, Good Bye';
  }

  // this sis to confirm if the console.log(hourMoveResult) is working.
  //console.log(hourMoveResult);

  alert(`This is the message "${hourMoveResult}"`);
}

let age = 65;
const isHoliday = true;

let holiday = '';

function ageMeter() {
  if (age < 65 || age === 65) {
    holiday = 'Discount';
  } else {
    holiday = 'No Discount';
  }
  //console.log(holiday);

  holidayMove = '';

  if (holiday === 'Discount') {
    holidayMove = 'Discount, you are lucky';
    console.log(isHoliday);
  } else {
    holidayMove = 'No Discount, you are above the age';
  }
  console.log(holidayMove);
  //alert(`${isHoliday} ${holidayMove}`);
}



const randomNumbers = Math.random();

function guessMoves() {
  if (randomNumbers < 0.5) {
    console.log('Heads');
  } else {
    console.log('Tails');
  }
}
[]

/*
 for (let i = 25; i >= 0; i -= 5) {
   console.log(i);
 }
*/

/*
function greet(name) {
  if (name) {
    console.log(`Hello ${name}`);
  } else {
    console.log("Hi there");
  };
}

greet('chris');

let comment = 'Hello have you eaten today....';

for (let num = 1; num <= comment.length; num += 1) {
  //console.log(`${comment}`);
  console.log(num, [comment]);
}

for (let i = 0; i <= 10; i++) {
  console.log(`${comment}`)
  for (let j = 0; j <= 11; j++) {
    console.log('God is good')
  }
}


let maximum = Math.floor(Math.random() * 5);
let input = parseInt(prompt('Enter a valid Number'));

while (maximum !== input) {
  input = parseInt(prompt('Enter a valid Number'));
};
console.log('congratulation you have the missing number'); 
*/

//Declear the variables
let attempts = 0;

const randoMove = Math.floor(Math.random() * 100) + 1;

const inbox = document.getElementById("inbox");
const result = document.getElementById("result");
const guess = document.getElementById("guess");
const attemptsMove = document.getElementById("attempts");

//Event listner
result.addEventListener("click", guessButton);


// Condictional statement
function guessButton() {
  const countNumber = Number(inbox.value);
  if (countNumber === randoMove) {
    result.textContent = "Congratulation you win the guess number.";
  } else if (countNumber > randoMove) {
    result.textContent = "Too High, Try again!!!!";
  } else {
    result.textContent = "Too Low, Try again!!!!";
  }
  attemptsMove.textContent = `attempt: ${attempts++}`;
}

/*
let classWorksNames = [
  ['peter', 'marks', 'wisdoms', 'boys'],
  ['matthew', 'thomas', 'wisdoms', 'boys', 'james'],
  ['jerry', 'kings', 'paul', 'emma'],
]

for (let i = 0; i < classWorksNames.length; i++) {
  const row = classWorksNames[i];
  console.log(`ROW${i}`)

  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
*/

//TODO LIST
// "new"- Add A Todos
// "list" - List All Todos
// "delete" - Remove Specific Todo
// "quit" - Quit App


let input = prompt("please Enter Items");
const todos = ["Eating cat", "jumping monkey", "Happy Family is Good"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log('**********');
    for (i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log('**********');
  } else if (input === "new") {
    const newtodo = prompt("What new item are you Adding?");
    todos.push(newtodo);
    console.log(`${newtodo}: added to the list`);
  } else if (input === "delete") {
    input = prompt("What are you deleting?");
    const deleteItems = todos.splice(input, 1);
    console.log(`${deleteItems}: deleted from the list`);
  }
  input = prompt("please Enter Items");
}
console.log("Okay, You quit App");




function repeat(person, gender) {
  let result = "";
  for (let i = 0; i < gender; i++) {
    result += person;
  }
  console.log(result)
}
repeat('#####', 4);


//putting a function inside a variable
const mutipleNumbers = function multiply(num1, num2) {
  let sum = num1 * num2;
  return sum;
}
mutipleNumbers(2, 9);
mutipleNumbers(3, 7);
mutipleNumbers(6, 10);
mutipleNumbers(5, 11)

//using function directly
function multiply(num1, num2) {
  let sum = num1 * num2;
  return sum;
}
multiply(2, 9);
multiply(3, 7);
multiply(6, 10);


function isWearShotWeather(temperature) {
  if (temperature < 75) {
    return true;
  } else {
    return false;
  }
}
isWearShotWeather(70);


function comment() {
  let rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("you are lucky, you won");
      console.log("you are lucky, you won");
      console.log("you are lucky, you won");
    };
  } else {
    return function () {
      alert("you are not allowed");
      alert("you are not allowed");
      alert("you are not allowed");
    }
  }
}


const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// const actorsName = fullNames.map();
// function actorsName(first, last) {
//   console.log(`${first, last}`);
// }

// actorsName(fullNames[first, last])

const rollDies = () => (
  Math.floor(Math.random() * 6) + 1
)

const doneTodos = document.querySelectorAll(".done");
const checkbox = document.querySelector(".checkbox");

document.querySelector('h1').innerText = 'distgusting';

document.getElementById("container").style.color = "blue";
document.getElementById("container").style.textAlign = "center";
document.getElementById("imgcontainer").style.width = "100px";
document.getElementById("imgcontainer").style.borderRadius = "150px";

//{'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'}


const elementcolor = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const spans = document.querySelectorAll('h2 span')

for (i = 0; i < spans.length; i++) {
  spans[i].style.color = elementcolor[i];
}


//document.getAttribute('.highlight').style.colour = 'purple';
//classList.add('ul', 'li').style.color = '7FDBFF'
const contains = document.querySelector(".highlight");
contains.classList.add('red');

//const containsList = contains.classList.add('hightlight');
//iconst containslist = contains.classList.add('red')

//containslist.add('purple');

let ul = document.querySelector('ul')
containslist = ul.classList.add('green');




