// Countdown to 9 PM
const targetTime = new Date();
targetTime.setHours(21, 0, 0, 0); 

function updateCountdown() {
    const now = new Date();
    const diff = targetTime - now;

    if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("countdown").innerText = `${hours}h ${minutes}m left!`;
    } else {
        document.getElementById("countdown").innerText = "It's time! 💖";
    }
}
setInterval(updateCountdown, 1000);

// Timed messages
function showReminders() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    let message = "";
    if (hour === 10) message = "Good morning again, Cutie! 🌸 Hope your day is going great so far!";
    if (hour === 11 && minute >= 30) message = "Hey love! 💕 Just reminding you that I adore you!";
    if (hour === 14) message = "Lunchtime hug! 🤗 Eat well, my Cutie!";
    if (hour === 17) message = "Evening reminder! 🌆 Can't wait to talk to you soon!";
    if (hour === 19 && minute >= 30) message = "Almost time, Cutie! 🥰 Just a little longer!";
    if (hour === 21) message = "It's time! 🎉 Call me now for your final surprise! 😘";

    if (message) document.getElementById("reminder").innerText = message;
}
setInterval(showReminders, 60000);
