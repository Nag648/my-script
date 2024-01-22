// Sample food data
const foods = [
    {
        name: 'Pizza',
        description: 'A delicious combination of cheese, tomato sauce, and various toppings on a crispy crust.',
        image: 'pizza.jpg',
    },
    {
        name: 'Burger',
        description: 'A juicy patty with lettuce, tomato, cheese, and condiments sandwiched between two buns.',
        image: 'burger.jpg',
    },
    {
        name: 'Sushi',
        description: 'Fresh and flavorful bites of rice, fish, and vegetables, often served with soy sauce and wasabi.',
        image: 'sushi.jpg',
    },
];

// Get the foodList element from the DOM
const foodList = document.getElementById('foodList');

// Function to display food items
function displayFoods() {
    foods.forEach(food => {
        // Create a div for each food item
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');

        // Populate the div with food details
        foodItem.innerHTML = `
            <h2>${food.name}</h2>
            <p>${food.description}</p>
            <img src="${food.image}" alt="${food.name}">
        `;

        // Add the food item to the foodList
        foodList.appendChild(foodItem);
    });
}

// Call the function to display foods when the page loads
window.onload = displayFoods;
