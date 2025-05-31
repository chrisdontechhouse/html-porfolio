//console.log(`chartQuantity: ${chartQuantity}`)
//let calculation = "";
/*
let hour = 7;
let name = 'christopher';

//const randomHours = Math.random();


if(hour >= 6 && hour <= 12 ){
    hour = (`Good morning, ${name}`);
}else if (hour >= 13 && hour <= 17){
    hour = (`Good afternoon, ${name}`);
}else if (hour >= 18 && hour <= 24){
    hour = (`Good night, ${name}`);
}

console.log(hour);

let age = 33;
const isHoliday = true;

if(age <= 0 || age <= 6){
    age = (`Discount ${'isHoliday'}`);
}else if (age >= 7 || age <= 64){
    age = (`No Discount ${isHoliday}`);
}
console.log(age);

let Number = "";
const randomNumber = Math.random();

if(randomNumber < 0.5){
    Number = "Head";
}else if(randomNumber > 0.6){
    Number = "Tail";
}
console.log(Number);
*/
//This are shortcut for if-statement
//Ternary operator: ?:
//Guard operator: &&
//Defualt operator: ||

/*
const score = {
    win:  0,
    loss:  0,
    Tie:  0,
}


function gamePlay(gameMove){
  const computerMove = computerMoveProduct();

    let product = '';

    if(gameMove === 'Rock'){
        if(computerMove === 'Rock'){
            product = 'Tie';
          }else if (computerMove === 'Paper'){
            product = 'You win';
          }else if (computerMove === 'Scissors'){
            product = 'You loss';
          }
        }else if (gameMove === 'Paper'){
              if(computerMove === 'Rock'){
                product = 'You win';
              }else if (computerMove === 'Paper'){
                product = 'lose';
              }else if (computerMove === 'Scissors'){
                product = 'Tie';
              }
        }else if (gameMove === 'Scissors'){
              if(computerMove === 'Scissors'){
                product = 'You lose';
              }else if (computerMove === 'Paper'){
                product = 'Tie';
              }else if (computerMove === 'Rock'){
                product = 'You win';
              }
        }
        alert(`You picked ${gameMove}, computer picked: ${computerMove} ${product}`) 
    }
  
    /* 
     if(product === 'You win'){
        score.win += 1;
     }else if(product === 'You loss'){
        score.loss += 1;
     }else if (product === 'Tie'){  
        score.Tie += 1;
     }
        
function computerMoveProduct(){
    randomNumber = Math.random(); 

    computerMove = '';
      
      if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
      }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'Paper';
        }else if (randomNumber >= 2/3 && randomNumber < 1){
          computerMove = 'Scissors';
        }
        return 'computerMove'
}
*/

function greet (name){ 
  there = (`hello ${name}`);
  
}

greet();

let basketball = {
  price: 2095,
}
console.log(basketball);
console.log(basketball.price);

basketball.price = 2595;
console.log(basketball.price);

//basketball['price'] = 'delivery-time' ;this to replace price with delivering.
basketball ['delivery-time'] = '3 day';
 
console.log(basketball);


function comparePrice(product1,product2){
      console.log(product1 = {
        name: 'drink',
        price: '$100'
      })
      console.log(product2 = {
        name: 'food',
        price: '$150'
      })
      return 'product1';
    }
comparePrice();


let productMarket1 = {
  name: 'coka',
  price: 100
}
let  productMarket2 ={
  name: 'spirit',
  price: 150
}

function isSameProduct(productMarket1,productMarket2){

 if(productMarket1 === productMarket2 ){
    result = 'true';
  }else{
    result = 'false';
  }
}

isSameProduct();
console.log('productMarket1' === 'productMarket2');

let message = 'HELLO WORLD';
message = message.toLowerCase();
//message = message.repeat(3);

console.log(message);

let study = 'test';
study = study.repeat(2);

console.log(study);

function handCostKeydown(Event){
if(event.key === 'Enter') {
  calculatorTotal();
}
}

function subscribe(){
const buttonElement = document.querySelector('jvs-subscribe');

if(buttonElement.innerText === 'subscribe'){
  buttonElement.innerHTML = 'subscribed'
}else{
  buttonElement.innerHTML = 'subscribe'
}
}

function calculatorTotal(){
  const inputElement = document.querySelector('.jvs-cost-input');
  let cost = Number(inputElement.value);

  if(cost < 40){
    cost += 10;
  }
  document.querySelector('.jvs-cost').innerHTML = `$${cost}`;
}


console.log(document.querySelector('button'));

document.querySelector('.jvs-button').innerHTML  = '9b done!';

function headButton(){
const headDocument = document.querySelector('.jvs-result').innerHTML

  if(headDocument.innerHTML === 'head'){
    headDocument.innerHTML = 'head';
  }
  document.querySelector('.jvs-result').innerHTML = `You chose: heads`;
}



function tailButton(){
  const tailDocument = document.querySelector('.jvs-result').innerHTML

  if(tailDocument.innerHTML === 'tail'){
    tailDocument.innerHTML = 'tail';
  }

  document.querySelector('.jvs-result').innerHTML = `You chose: tails`;
}


function submitButton(){
let result = document.querySelector('.jvs-name').value

  document.querySelector('.jvs-page').innerHTML = `Your name is: ${result}`
}
function eventButton(event){
if(event.key === 'Enter'){
  submitButton()
}
}


function addChartQuantity(chartResult){
  let chartNumber = '';

  if(chartResult === 'addChartButton'){

    chartNumber = 1;
   
  }else if (chartResult === 'addChartButtonTwo'){

    if('add-button' === 1){
      chartNumber = 2;
    }else{
      chartNumber += 3;
    }

  }else if(chartResult === 'addChartButtonThree'){

    chartNumber = 3;
    chartNumber += 3;

  }else if(chartResult === 'addChartButtonFourt'){

    chartNumber = 6;
    chartNumber += 4;

  }else if(chartResult === 'addChartButtonFive'){

    chartNumber = 10;
    chartNumber += 5;
  
  }else if(chartResult === 'addChartButtonRemoval'){

    chartNumber = 0;

  }else if(chartResult === 'minusChartButtonTwo'){

    if(chartResult === 'minusChartButtonTwo' > 'add-button'){
      chartNumber -= 2;
    }else{
      chartNumber = 0;
    } 

  }else if (chartResult === 'minusChartButtonThree'){

    chartNumber -= 3;

  }

  document.querySelector('.add-button').innerHTML = `Chart Quantity: ${chartNumber}`

}


/*
function addChartQuantity(){
  const productElement = document.querySelector('add-button')
  
  let chartNumber = 1;
  chartNumber = chartNumber;

    document.querySelector('.add-button').innerHTML = `Chart Quantity: ${chartNumber}`
}

function addChartButton(){
  const productElement = document.querySelector('add-button')
  
  let chartNumber = 2;
  chartNumber = chartNumber;

    document.querySelector('.add-button').innerHTML = `Chart Quantity: ${chartNumber}`
}
*/


function subscribeButton(){
  const subscribeFunction = document.querySelector('.button-subscribe')

  if(subscribeFunction.innerText === 'subscribe'){
    subscribeFunction.innerHTML = 'subscribed'; 
    subscribeFunction.classList.add('jv-subscribed')
  }else{
    subscribeFunction.innerHTML = 'subscribe'
    subscribeFunction.classList.remove('jv-subscribed')
  }
}
