const elems = document.querySelectorAll('.card__price_count');
const firstPrice = Number((elems[0].innerText).slice(0, -1));
const secondPrice = Number((elems[1].innerText).slice(0, -1));
const thirdPrice = Number((elems[2].innerText).slice(0, -1));
const fourthPrice = Number((elems[3].innerText).slice(0, -1));
const result = firstPrice + secondPrice + thirdPrice + fourthPrice;

const paragraph = document.querySelector('#basket__total__result');
paragraph.textContent = String(result) + 'р';

const myFunction = () => {
    paragraph.textContent = String(result / 100 * 80) + 'р';
    const changedSale = document.querySelector('.basket__button');
    changedSale.textContent = 'Скидка применена';
};