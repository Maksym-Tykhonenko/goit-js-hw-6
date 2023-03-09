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