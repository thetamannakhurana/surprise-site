function checkPassword() {
    var password = document.getElementById("password").value;
    var correctPassword = "mycutie"; // Change this

    if (password === correctPassword) {
        window.location.href = "secret.html"; 
    } else {
        document.getElementById("error-message").innerText = "Oopsie! Try again, cutie! 🥺";
    }
}
