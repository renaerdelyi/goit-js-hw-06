const inputName = document.getElementById("name-input");


const outputName = document.getElementById("name-output");


inputName.addEventListener("input",()=>{
if(inputName.value === ""){
    outputName.textContent = "Anonymous";
    
}else{
    outputName.textContent = inputName.value;
console.log(outputName); 
}

});
 



      