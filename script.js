function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    // Clear any previous error messages
    clearErrorMessages();

    if (firstName === "" || lastName === "" || email === "" || phone === "" || password === "" || confirmPassword === "" || !gender) {
        showErrorMessage("All fields are required.");
        return false;
    }

    if (password !== confirmPassword) {
        showErrorMessage("Passwords do not match.");
        return false;
    }

    // Basic email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        showErrorMessage("Please enter a valid email address.");
        return false;
    }

    // Basic phone number validation (example: simple length check)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        showErrorMessage("Please enter a valid 10-digit phone number.");
        return false;
    }

    return true;
}

function showErrorMessage(message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error";
    errorDiv.textContent = message;
    document.querySelector(".container").appendChild(errorDiv);
}

function clearErrorMessages() {
    const errorMessages = document.querySelectorAll(".error");
    errorMessages.forEach((msg) => msg.remove());
}