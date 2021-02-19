const h1 = document.querySelector('h1');
h1.innerHTML += ' from <i>JS!</i>';
h1.style.color = 'red';
// h1.hidden = true;

// Робимо годинник
setInterval(updateClock, 1000);
function updateClock() {
    const clock = document.querySelector('.clock');
    clock.innerText = new Date().toLocaleTimeString();
}

// Таймер самознищення сторінки
const timeStamp = new Date();
// setInterval(updateSelfDestruct, 1000);
function updateSelfDestruct() {
    const currTime = new Date();
    const deltaSec =  Math.round((currTime - timeStamp)/1000);
    const outputContainer = document.querySelector('.destruct');
    const liveSecs = 10;
    const leftSecs = liveSecs - deltaSec;
    outputContainer.innerText = leftSecs;
    if (leftSecs <= 0) {
        document.querySelector('body').innerHTML = '';
    }
}

const products = [
    'Audi Q7',
    'BMW X5',
    'Tesla Model X',
    'Toyota Tundra'
];
function addProducts(products) {
    const productsContainer = document.querySelector('.products');
    for (const product of products) {
        productsContainer.innerHTML += `<p class="product">${product}</p>`;
    }
}
addProducts(products);

function addMarkToProducts() {
    const products = document.querySelectorAll('.product');
    for (const product of products) {
        product.innerHTML += '!';
    }
}
addMarkToProducts();

/*
document.getElementById('id'); // Знаходить по Id
document.getElementsByClassName('class'); // Знаходить по класу
document.getElementsByTagName('tag'); // Знаходить по тегу
*/

const btnSelfDestruct = document.querySelector('.self-destruct');
btnSelfDestruct.addEventListener('click', selfDestruct);
function selfDestruct() {
    document.querySelector('body').innerHTML = '';
    document.querySelector('body').classList.add('dark');
}


// Calculator
document.querySelector('.calculator .calc')
    .addEventListener('click', () => {
        const display = document.querySelector('.display');
        display.value = eval(display.value);
    });