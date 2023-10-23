let submitBtn = document.querySelector('.submitBtn');
let memoForm = document.querySelector('.memoForm');
let stringLength = document.querySelector('#stringLength');
let timerForm = document.querySelector('#timerForm');
let checkBoxes = document.querySelectorAll('.form-check-input');
let generatedNum = document.querySelector('.generatedNum');
let generatedNumContainer = document.querySelector('.generatedNumContainer');
let resultFormContainer = document.querySelector('.resultFormContainer');

let timer = document.querySelector('#timer');
let timerContainer = document.querySelector('.timerContainer')
let timerInterval;

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
  generatedNum.innerText = randomNum;
  createTimer(timerForm.value);
  showElem(generatedNumContainer);
  showElem(timerContainer); 
  hideElem(resultFormContainer);
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


function createTimer(time) {
	clearInterval(timerInterval);

  let minute = Math.floor(time / 60);
	let second = time % 60;

  timerInterval = setInterval(function () {
    timer.innerHTML =
      (minute < 10 ? '0' + minute : minute) +
      ':' +
      (second < 10 ? '0' + second : second);

    if (minute != 0 && second == 0) {
      minute--;
      second = 60;
    }

    if (minute == 0 && second == 0) {
  		hideElem(timerContainer);
  		hideElem(generatedNumContainer);
  		showElem(resultFormContainer);
  		clearInterval(timerInterval);
  	}

  	second--;

  }, 1000);

};

function hideElem(elem) {
	elem.classList.add('d-none');
}

function showElem(elem) {
	elem.classList.remove('d-none');
}


