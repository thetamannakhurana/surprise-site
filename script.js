function checkPassword() {
    let password = document.getElementById("password-input").value;
    if (password === "cutie") {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        document.getElementById("wrong-pass").style.display = "block";
    }
}

// Countdown Timer
function updateCountdown() {
    const eventTime = new Date();
    eventTime.setHours(22, 0, 0); // 10 PM
    const now = new Date();
    const diff = eventTime - now;

    if (diff > 0) {
        let hours = Math.floor(diff / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById("countdown").innerHTML = "Time for your surprise! 🎉";
    }
}
setInterval(updateCountdown, 1000);

// Schedule Reminder Messages
const messages = [
    { time: "09:30", text: "Good morning, my cutest cutie! ☀️💖 Today is going to be full of little surprises, just like you fill my life with happiness. Keep that smile on! 😊💕" },
    { time: "11:00", text: "Hey love, just a tiny reminder that today is special, but you don’t know why yet! 🤭 Keep wondering… and keep being adorable! 😘" },
    { time: "14:00", text: "It’s the middle of the day, and I just wanted to remind you that you are the most special person ever! 💘 Hope you’re having a great time! 🎀" },
    { time: "17:00", text: "The countdown is getting shorter! ⏳💖 Can you feel the excitement? Something sweet is waiting for you soon! 🥰" },
    { time: "19:30", text: "A little more patience, my love! 💕 Just a couple of hours left until your heart melts (hopefully not literally 😆)! 😘" },
    { time: "21:00", text: "The wait is OVER! Call me as soon as you're free, and let your final surprise begin! ✨💖 Can't wait to hear your voice! 😘" }
];

function showMessages() {
    const now = new Date();
    const currentTime = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
    
    messages.forEach((msg) => {
        if (msg.time === currentTime) {
            let messageBox = document.getElementById("message-box");
            let messageDiv = document.createElement("div");
            messageDiv.className = "love-note";
            messageDiv.innerHTML = msg.text;
            messageBox.appendChild(messageDiv);
            messageDiv.style.display = "block";
        }
    });
}

setInterval(showMessages, 60000);
