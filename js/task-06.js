 const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur",()=>{
    const dataLength = Number(validationInput.dataset.length);

    if (validationInput.value.length === dataLength){
        validationInput.classList.add("valid");
    } else{
        validationInput.classList.add("invalid");     
    }
 console.log(dataLength);
});


