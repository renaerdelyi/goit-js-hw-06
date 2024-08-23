let counterValue= 0;

const valueElement = document.querySelector("#value")

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

function updateValue() {
    valueElement.textContent = counterValue;
   
  }
 
  decrementButton.addEventListener('click',(handler1)=>{
    counterValue -= 1;
    updateValue(handler1);
    console.log(counterValue)
  });

  incrementButton.addEventListener('click',(handler2) =>{
    counterValue += 1;
    updateValue(); 
    console.log(counterValue)
  })
 


