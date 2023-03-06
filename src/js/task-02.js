const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(ingredient => {
  const nameOfIngredient = document.createElement("li");
  console.log(nameOfIngredient)
  nameOfIngredient.textContent = `${ingredient}`;
  nameOfIngredient.classList.add("item")

  return nameOfIngredient;
})
console.log(elements)
const list = document.querySelector("#ingredients")
list.append(...elements);
