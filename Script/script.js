let countDisplayElem = document.querySelector('.countDisplay');
let addNumElem = document.querySelector('.add-num');
let subNumElem = document.querySelector('.sub-num');
let inputElem = document

const val = (document.querySelector('#input.valueInputField'));

let count = 0;

updateDisplay();


addNumElem.addEventListener("click",()=>{
  addtoCounter();

  updateDisplay();
});

subNumElem.addEventListener("click",()=>{
  subtractCounter();

  updateDisplay();
});


const addtoCounter = () => {
  count+=parseInt(val.value)
}

const subtractCounter = () => {
  count-=parseInt(val.value)
}

function updateDisplay(){
  countDisplayElem.innerHTML = count;
};
