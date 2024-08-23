'use strict'
//1.
const ulCategories = document.querySelectorAll("#categories .item ");

console.log(`Number of categories:${ulCategories.length}`);

//2.
ulCategories.forEach((category) => {
    const categoryTitle = category.querySelector("h2").textContent
    console.log(`Category: ${categoryTitle}`)

    const nrElemente = category.querySelectorAll("ul li");
    
    console.log(` Elements:${nrElemente.length}`)
});
 


