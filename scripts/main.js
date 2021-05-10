const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator-keys')

keys.addEventListener('click', event => {
 console.log(event.target)

});

//button.addEventListener('click', event => {
 //console.log(event.target)
//});

const key = calculator.target
const action = keys.action

if (!action) {
  console.log('number key!')
}

if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  console.log('operator key!')
}

if (action === 'decimal') {
  console.log('decimal key!')
}

if (action === 'clear') {
  console.log('clear key!')
}

if (action === 'calculate') {
  console.log('equal key!')
}

const display = document.querySelector('.calculator-screen')

keys.addEventListener('click', e => {
  if (event.target.matches('button')) {
    const key = event.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent

  }
});

function textContent(event) {

console.log(!action)

  if (displayedNum = '9') {
    display.textContent = keyContent
  }
}
function keyContent(event) {
  console.log(!ac)
}
if (!action) {
  if (displayedNum = '0') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}

if (action === 'decimal') {
  display.textContent = displayedNum + '.'
}

if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  key.classList.add('is-depressed')
}


//const calculator = document.querySelector('.calculator')











//const key = event.target
//const action = key.dataset.action
//const $numberButtons = document.querySelectorAll('.number');
//function
//$numberButtons forEach (function(button) {
//  button.addEventListener('click', pushNumber);

//})
//const button = document.querySelector('button');

//button.addEventListener('click', event => {
  //console.log(event.target)
//});


//const number = document.querySelector('number');

//button.addEventListener('click', event => {
 //console.log(event.target)
//});

//const display = document.querySelector('.calculator__display')

//const calculator = document.querySelector('.calculator')
//const keys = calculator.querySelector('.calculator-keys')
//console.log(keys)

//keys.addEventListener('click', e => {
 //if (e.target.matches('button')) {

 //}
//});


//const key = e.target
//const action = key.dataset.action

//if ('!action') {
  //console.log('number key!')
//}


//if (
//  action === 'add' ||
//  action === 'subtract' ||
//  action === 'multiply' ||
//  action === 'divide'
//) {
//  console.log('operator key!')
//}

//if (action === 'decimal') {
//  console.log('decimal key!')
//}

//if (action === 'clear') {
  //console.log('clear key!')
//}

//if (action === 'calculate') {
//  console.log('equal key!')
//};

//keys.addEventListener('click', e => {
//  if (e.target.matches('button')) {
  //  const key = e.target
  //  const action = key.dataset.action
//const keyContent = key.textContent
    //const displayedNum = display.textContent

//  }
//});
//const number = document.querySelector('number');
//button.addEventListener('click', event => {
  //console.log(event.target)
//});
//function pushNumber(event) {
  //number.addEventListener('click', event =>{
  //console.log(event.target);
  //})
//};

//keys.addEventListener('click', e => {
 // if (e.target.matches(‘number’)) {
 //
 // }
 //console.log('click');
//});
