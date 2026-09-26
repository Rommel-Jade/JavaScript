// Store the selected car
let selectedCar = "";
let selectedPrice = 0;


// Select a car
function selectCar(carName, price) {

    selectedCar = carName;
    selectedPrice = price;

    // Put the selected car into the booking form
    document.getElementById("car").value = carName;

    // Scroll to booking form
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}


// Booking form
document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const days = Number(document.getElementById("days").value);
    const result = document.getElementById("result");

    // Check if a car was selected
    if (selectedCar === "") {
        alert("Please select a car first.");
        return;
    }

    // Check number of days
    if (days <= 0) {
        alert("Please enter a valid number of rental days.");
        return;
    }

    // Calculate total
    const total = selectedPrice * days;

    // Display result
    result.style.display = "block";

    result.innerHTML = `
        <h3>Booking Summary</h3>

        <p><strong>Customer:</strong> ${name}</p>

        <p><strong>Car:</strong> ${selectedCar}</p>

        <p><strong>Rental Period:</strong> ${days} day(s)</p>

        <p><strong>Price per Day:</strong> ₱${selectedPrice.toLocaleString()}</p>

        <p><strong>Total Cost:</strong> 
        ₱${total.toLocaleString()}</p>

        <br>

        <p>✅ Your rental request has been calculated successfully!</p>
    `;

    // Scroll to result
    result.scrollIntoView({
        behavior: "smooth"
    });
});