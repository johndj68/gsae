document.addEventListener("DOMContentLoaded", function() {
    const foodList = document.getElementById("food-items");
    const foodForm = document.getElementById("food-form");
    const reservationForm = document.getElementById("reservation-form");
    const foodToReserveSelect = document.getElementById("food-to-reserve");

    foodForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const foodName = document.getElementById("food-name").value;
        const expirationDate = document.getElementById("expiration-date").value;

        if (foodName && expirationDate) {
            // Create a new list item to display the food information
            const listItem = document.createElement("li");
            listItem.textContent = `${foodName} (Validade: ${expirationDate})`;
            
            // Create an option in the food selection dropdown
            const option = document.createElement("option");
            option.value = foodName;
            option.textContent = foodName;
            foodToReserveSelect.appendChild(option);
            
            // Add the new item to the food list
            foodList.appendChild(listItem);
            
            // Clear the input fields
            document.getElementById("food-name").value = "";
            document.getElementById("expiration-date").value = "";
        }
    });

    reservationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const selectedFood = foodToReserveSelect.value;
        const pickupTime = document.getElementById("pickup-time").value;

        if (selectedFood && pickupTime) {
            // You can implement the reservation logic here (e.g., store in a database)
            alert(`Você reservou: ${selectedFood}\nHorário de retirada: ${pickupTime}`);
        }
    });
});