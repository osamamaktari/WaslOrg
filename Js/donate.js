const form = document.getElementById("donationForm");

function showError(input, message) {
    const span = input.parentElement.querySelector(".error");
    if (span) {
        span.textContent = message;
        span.style.color = "red";
    }
    input.style.border = "2px solid red";
}

function showSuccess(input) {
    const span = input.parentElement.querySelector(".error");
    if (span) {
        span.textContent = "";
    }
    input.style.border = "2px solid green";
}

function validateInput() {
    let valid = true;

    const name = form.querySelector("[name='name']");
    const email = form.querySelector("[name='email']");
    const amount = form.querySelector("[name='amount']");
    const message = form.querySelector("[name='message']");

    // Name validation
    if (!/^[A-Za-z\s]{2,}$/.test(name.value.trim())) {
        showError(name, "Enter a valid name (letters only, min 2 chars).");
        valid = false;
    } else {
        showSuccess(name);
    }

    // Email validation
    if (!/^[\w\.-]+@[\w\.-]+\.\w{2,}$/.test(email.value.trim())) {
        showError(email, "Enter a valid email address.");
        valid = false;
    } else {
        showSuccess(email);
    }

    // Amount validation
    if (!/^\d+(\.\d{1,2})?$/.test(amount.value.trim()) || parseFloat(amount.value) <= 0) {
        showError(amount, "Enter a valid donation amount.");
        valid = false;
    } else {
        showSuccess(amount);
    }

    // Message validation (optional)
    if (message.value.trim() && message.value.trim().length < 5) {
        showError(message, "Message must be at least 5 characters.");
        valid = false;
    } else {
        showSuccess(message);
    }

    return valid;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (!validateInput()) return;

    const name = form.querySelector("[name='name']").value;
    const email = form.querySelector("[name='email']").value;
    const amount = form.querySelector("[name='amount']").value;
    const message = form.querySelector("[name='message']").value;

    const donationData = { name, email, amount, message };

    let donations = JSON.parse(localStorage.getItem("donations")) || [];
    donations.push(donationData);
    localStorage.setItem("donations", JSON.stringify(donations));

    alert("Thank you for your donation!");
    form.reset();

    // Reset styles
    [name, email, amount, message].forEach((fieldName) => {
        const input = form.querySelector(`[name='${fieldName}']`);
        input.style.border = "";
        const span = input.parentElement.querySelector(".error");
        if (span) span.textContent = "";
    });
});

// Optional: real-time validation
["name", "email", "amount", "message"].forEach((fieldName) => {
    const input = form.querySelector(`[name='${fieldName}']`);
    input.addEventListener("input", validateInput);
});