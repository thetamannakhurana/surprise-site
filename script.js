// Countdown to 10 PM (22:00)
const targetTime = new Date();
targetTime.setHours(22, 0, 0, 0); // Set the target time to 10:00 PM today

function updateCountdown() {
    const now = new Date();
    const diff = targetTime - now;

    if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerText = `${hours}h ${minutes}m ${seconds}s left!`;
    } else {
        document.getElementById("countdown").innerText = "It's time! 🎉";
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call to update the countdown immediately
updateCountdown();

// Function to show the correct game based on the time of day
function showGame() {
    const now = new Date();
    const hour = now.getHours();

    // Hide all games initially
    document.querySelectorAll(".game").forEach(game => game.style.display = "none");

    // Show the game based on the time of day
    if (hour >= 8 && hour < 11) {
        document.getElementById("game1").style.display = "block"; // 8 AM - 11 AM
    } else if (hour >= 11 && hour < 14) {
        document.getElementById("game2").style.display = "block"; // 11 AM - 2 PM
    } else if (hour >= 14 && hour < 17) {
        document.getElementById("game3").style.display = "block"; // 2 PM - 5 PM
    } else if (hour >= 17 && hour < 19.5) {
        document.getElementById("game4").style.display = "block"; // 5 PM - 7:30 PM
    } else if (hour >= 19.5 && hour < 21) {
        document.getElementById("game5").style.display = "block"; // 7:30 PM - 9 PM
    }
}

// Call the function to show the correct game when the page loads
showGame();

// Function to reveal the next surprise message after the game is played
function revealMessage() {
    const message = "Here's your next surprise! 💌 Stay tuned!";
    document.getElementById("gameMessage").innerText = message;
    document.querySelectorAll(".game").forEach(game => game.style.display = "none"); // Hide games
    document.getElementById("gameMessage").style.display = "block"; // Show the message
}