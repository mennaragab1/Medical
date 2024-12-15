function validateForm(event) {
    // Get all the input fields
    var inputs = document.querySelectorAll('input[required]');
    for (var i = 0; i < inputs.length; i++) {
        // Check if the field is empty
        if (inputs[i].value === "") {
            event.preventDefault();  // Prevent form submission
            alert("Please fill out all required fields.");
            return false;
        }
    }
    // If everything is filled, form will submit
    alert("Your order is submitted successfully, Wait for our call !");
}