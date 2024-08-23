
const fontSize = document.getElementById("font-size-control");

const text = document.getElementById("text")

fontSize.addEventListener("input",() => {
const changeSize = fontSize.value + 'px';
text.style.fontSize = changeSize;
console.log(changeSize)
});

