const fruits = [
    { id: 1, name: 'Apple', description: 'An apple a day keeps the doctor away.', image: 'images/apple.jpg' },
    { id: 2, name: 'Banana', description: 'High in potassium.', image: 'images/banana.jpg' },
    // Add more fruits here
];

const fruitList = document.getElementById('fruitList');
const fruitDetails = document.getElementById('fruitDetails');

function showFruitList() {
    fruitList.innerHTML = fruits.map(fruit => `
        <div class="fruit-card" onclick="showFruitDetail(${fruit.id})">
            <img src="${fruit.image}" alt="${fruit.name}">
            <h3>${fruit.name}</h3>
        </div>
    `).join('');
}

function showFruitDetail(id) {
    const fruit = fruits.find(fruit => fruit.id === id);
    if (fruit) {
        fruitDetails.innerHTML = `
            <h2>${fruit.name}</h2>
            <img src="${fruit.image}" alt="${fruit.name}">
            <p>${fruit.description}</p>
            <button onclick="backToList()">Back to List</button>
        `;
        fruitList.style.display = 'none';
        fruitDetails.style.display = 'block';
    }
}

function backToList() {
    fruitDetails.style.display = 'none';
    fruitList.style.display = 'block';
}

showFruitList();
