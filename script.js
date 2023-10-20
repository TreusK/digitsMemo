let submitBtn = document.querySelector('.submitBtn');
let memoForm = document.querySelector('.memoForm');
let stringLength = document.querySelector('#stringLength');
let timer = document.querySelector('#timer');
let checkBoxes = document.querySelectorAll('.form-check-input');
let generatedNum = document.querySelector('.generatedNum');


memoForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
 	e.preventDefault();

 	let checkedArr = [];
  checkBoxes.forEach(elem => {
  	if (elem.checked == true) {
  		checkedArr.push(+elem.value)
  	}
  })
  //Validate checkbox
  if(checkedArr.length == 0) {
  	alert('Check at least 1 box');
  	return;
  }

  //Grab any number from the array of available sets
  let randomCheckNum = checkedArr[Math.floor(Math.random() * checkedArr.length)]
  
  //Create random X length number
  let lengthLimit = stringLength.value * 6;
  let randomNum = '';
  for(let i=0; i<lengthLimit; i++)  {
  	randomNum += Math.floor(Math.random() * 6);
  }

  //Show num on screen
  generatedNum.innerText = randomNum
}