const orderButton = document.querySelector(".button-container");
const dishesByDay = {
    Monday: ["Butter Chicken", "Paneer Makhai", "Kabuli Pulau"],
    Tuesday: ["Chicke Biryani", "Paneer Makhani", "Kabuli Pulau"],
    Wednesday: ["dal rice", "Chhole Bhaturey", "Paneer Makhani"],
    Thursday: ["Kabuli Pulau", "Chicken Biryani", "dal rice"],
    Friday: ["Kabuli Pulau", "Chicken Biryani", "dal rice"],
    Saturday: ["Paneer Makhani", "Kabuli Pulau", "Chicken Biryani"],
    Sunday: ["Paneer Makhani", "Chicken Biryani", "Kabuli Pulau"],
};

function showDishes(day) {
    const dishesContainer = document.getElementById("dishesContainer");
    const dishesForDay = dishesByDay[day];
    // Clear previous content
    dishesContainer.innerHTML = '';

    // Display dishes for the selected day
    dishesForDay.forEach(dish => {
        const dishElement = document.createElement('div');
        dishElement.classList.add('dish');
        dishElement.textContent = dish;
        dishesContainer.appendChild(dishElement);
    });
    orderButton.classList.remove("hide");
    // Update all-dishes section
}

function updateAllDishesSection() {
    // Update dishes for each day in the all-dishes section
    for (const day in dishesByDay) {
        const dayDishesContainer = document.getElementById(day + "Dishes");
        const dayDishes = dishesByDay[day];

        // Clear previous content
        dayDishesContainer.innerHTML = '';

        // Display dishes for the day
        dayDishes.forEach(dish => {
            const dishElement = document.createElement('div');
            dishElement.classList.add('dish');
            dishElement.textContent = dish;
            dayDishesContainer.appendChild(dishElement);
        });
    }
}
