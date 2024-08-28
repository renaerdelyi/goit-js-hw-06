 const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur",()=>{
    const dataLength = Number(validationInput.dataset.length);

    if (validationInput.value.length === dataLength){
    
     validationInput.classList.add("valid");   validationInput.classList.remove("invalid");
    } else{
        validationInput.classList.add("invalid"); 
        validationInput.classList.remove("valid");    
    }
 console.log(dataLength);
});


