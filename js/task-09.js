function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color =document.querySelector(".color");
console.log(color);

const btnColorChange = document.querySelector(".change-color");
console.log(btnColorChange);

btnColorChange.addEventListener("click",()=>{
  const changeColor = getRandomHexColor();

  document.body.style.backgroundColor = changeColor;

  color.textContent = changeColor;
  console.log(changeColor)
})