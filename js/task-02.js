const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngrediente = document.getElementById("ingredients")

 for(let i = 0; i < ingredients.length; i++ ){
  const li = document.createElement("li")
  li.textContent = ingredients[i];
  li.classList.add('item');
  listIngrediente.append(li)
  
   }
console.log(ingredients)




