const form = document.getElementById("donationForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const donationData = {
        name: form.name.value,
        email: form.email.value,
        amount: form.amount.value,
        message: form.message.value,
        date: new Date().toISOString()
    };

    let donations = JSON.parse(localStorage.getItem("donations")) || [];
    donations.push(donationData);
    localStorage.setItem("donations", JSON.stringify(donations));

    alert("Thank you for your donation!");
    form.reset();
});