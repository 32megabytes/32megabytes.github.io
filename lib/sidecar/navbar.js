document.addEventListener("DOMContentLoaded", function () {
    fetch("menu.html") // Fetch the navbar file
        .then(response => response.text()) // Convert response to text
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data; // Insert into the page
        })
        .catch(error => console.error("Error loading navbar:", error));
});
