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

  //Create random X length number
  let randomNum = makeRandomOfLength(stringLength);

  //Modify random number to fit chosen sets (if all sets arent chosen)
  if(checkedArr.length != 10) {
  	let randomNumArr = randomNum.split('');
  	for(let i=0; i<= randomNumArr.length; i+=2) {
  		randomNumArr[i] = getRandomFromArr(checkedArr);
  	}
  	randomNum = randomNumArr.join('');
  }
  
  //Show num on screen
  generatedNum.innerText = randomNum

}


//Helpers
function getRandomFromArr(arr) {
	return arr[Math.floor(Math.random() * arr.length)]
}

function makeRandomOfLength(strLnght) {
	let lengthLimit = strLnght.value * 6;
  let randomNum = '';
  for(let i=0; i<lengthLimit; i++)  {
  	randomNum += Math.floor(Math.random() * 6);
  }
  return randomNum;
}