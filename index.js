// const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')

// portfolioItems.forEach(portfolioItem => {
//     portfolioItem.addEventListener('mouseover', () => {
//         console.log(portfolioItem.childNodes);
//     })
// })


// console.log(window.location.href);
// const portfolioItems = document.querySelectorAll(".portfolio-item-wrapper");

// portfolioItems.forEach((portfolioItem) => {
//   portfolioItem.addEventListener("mouseover", () => {
//     console.log(portfolioItem.childNodes);
//     portfolioItem.childNodes[1].classList.add("img-darken");
//   });
//   portfolioItem.addEventListener("mouseout", () => {
//     portfolioItem.childNodes[1].classList.remove("img-darken");
//   });
// });

/*
const seatingChart = [
  ['beauty', 'victor', 'precious', 'marvel'],
  ['peace', 'promise', 'kingsley', 'nelly'],
  ['joshua', 'christian', 'david', 'ochuko']
]
for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  for (let j = 0; i < row.length; j++) {
    console.log(row[j])
  }
}


alert("Good Morning")
console.log(prompt("chris.ovwiokpe"));
console.log(2 + 2 - 5);
document.body.innerHTML = ('chris.ovwiokpe');


let maximum = parseInt(prompt("Enter your first guess!!!"));

while (!maximum) {
  maximum = parseInt(prompt("Enter valid number!!!"));
}
const input = Math.floor(Math.random() * maximum) + 1;
let attempts = 1;

let guess = parseInt(prompt("Enter valid guess number !!! Enter q to quit"));

while (parseInt(guess) !== input) {
  if (guess === "q") break;
  attempts++;
  if (guess === 'q') break;
  if (guess > input) {
    guess = prompt("Guess number too high!!! Enter q to quit");
  } else {
    guess = prompt("Guess number too low!!!  Enter q to quit");
  }

}
if (guess === "q") {
  console.log("OKAY, YOU QUIT!!!!");
} else {
  console.log("YOU WIN");
  console.log(`Congratulation!!!!!! YOU GUESS RIGHT: ${input} but ${attempts} attempts`);
}


//let subrabbit = ["cringe", "books", "chicken"];
//let input = prompt("Enter a valid items");

//while (!input) {
//  input = prompt("Enter a valid items")
//}
//console.log("subrabbit");

//new == Add A Todo
//list == List all Todos
//delete == List all Todos
//quit == Quit app


let input = prompt("Enter a valid items (press new to add items)");
let todo = ["chicken egg", "frozen fish"];
let quit = "Okay, you quit the APP";

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("************")
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i}: ${todo[i]}`)
    }
    console.log("************")
  } else if (input === "new") {
    const newTodo = prompt("Enter new items and q to quit");
    todo.push(newTodo);
    console.log(`${newTodo} Added to the list`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Ok, Enter your index number to delete"));
    if (!Number.isNaN(index)) {
      const deleted = todo.splice(index, 1);
      console.log(`Ok,deleted ${deleted[0]}`);
    } else {
      console.log("Unknow Number");
    }
  }
  input = prompt("Enter quit or press q to quit(press new to add item)");

}
console.log(`${quit}`);


function greet(firstName, lastName) {
  console.log(`Hey my firstName is ${firstName} and lastname${lastName}`);
}


function lastElement(value) {
  if (value.length >= 1) {
    let num = value.length - 1
    return value[num];
  }
  else {
    return null;
  }
}

lastElement([3, 5, 7]);
//lastElement([1]);
//lastElement([]);

function capitalize(str) {
  let firstLetter = str[0].toUpperCase();
  let num = str.length;
  let body = str.slice(1, num);
  return firstLetter + body;
}

function sumArray(arrayOfNumbers) {
  let total = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    total = total + arrayOfNumbers[i];
  }
  return total
}
sumArray([1, 2, 3]);

let square = function (num) {
  return num * num;
}
square();
*/
const square = {
  area(length) {
    return length * length;
  },
  perimeter(length) {
    return length * 4;
  }
}

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount + 1;
    return "EGG"
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

const doubles = numbers.map(function (num) {
  return num * 2;
})


const fullNames = [{ firstname: "winner", lastname: "peace" }, { firstname: "champion", lastname: "love" }, { firstname: "forgive", lastname: "Godwill" }, { firstname: "johnson", lastname: "raphael" }, { firstname: "joshua", lastname: "philip", }];

const firstname = fullNames.map(function (names) {
  return names.firstname.toUpperCase();
  //return names.lastname
})

const name = "chris";
const greet = (name) => {
  return `Hey ${"name"}!`;
}
//greet("chris");

