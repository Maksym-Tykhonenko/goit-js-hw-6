const categories = document.querySelector('#categories');
const allCategoris = categories.children.length
console.log(allCategoris)

const categoryItems = document.querySelectorAll('.item');
categoryItems.forEach(category => {
    const categoryItem = category.firstElementChild.textContent;
    const qwontetyPodCategory = category.lastElementChild.children.length
    console.log(
        `Категорія: ${categoryItem}, кількість подкатегорій: ${qwontetyPodCategory}`)
});








//Для каждого элемента li.item в списке ul#categories, найдет
// и выведет в консоль текст заголовка элемента(тега < h2 >)
//  и количество элементов в категории(всех вложенных в него < li >).

//Для выполнения этой задачи нужно использовать метод forEach()
// и свойства навигации по DOM.

