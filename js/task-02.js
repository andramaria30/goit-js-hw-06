const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



let selectare_elem_ul =document.getElementById("ingredients");

for(let i=0; i<ingredients.length; i++) {

    let creare_li_item = document.createElement("li")

    creare_li_item.textContent = ingredients[i];

    selectare_elem_ul.appendChild(creare_li_item)

    creare_li_item.classList.add("item")

    selectare_elem_ul.appendChild(creare_li_item)

}

console.log(selectare_elem_ul);
