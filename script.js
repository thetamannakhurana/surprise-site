function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    if (password === "cutiepie") {  // Change this to your own password!
        window.location.href = "secret.html";
    } else {
        document.getElementById("errorMsg").innerText = "Wrong password, try again! 💔";
    }
}

// COUNTDOWN TIMER TO 10PM
function updateCountdown() {
    const targetTime = new Date();
    targetTime.setHours(22, 0, 0, 0); // 10 PM today

    const now = new Date();
    const timeLeft = targetTime - now;

    if (timeLeft <= 0) {
        document.getElementById("timer").innerText = "It's time! Call me! ❤️";
        return;
    }

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timer").innerText = `${hours}h ${minutes}m ${seconds}s left!`;
    setTimeout(updateCountdown, 1000);
}

// REMINDER POPUPS THROUGHOUT THE DAY
function scheduleReminders() {
    const reminders = [
        { time: "10:00", message: "Good morning, Cutie! ☀️ Hope you have a great day! 💖" },
        { time: "12:00", message: "Heyyy, don’t forget something special is happening today! 🎁" },
        { time: "15:00", message: "It's afternoon! Just a lil reminder that I love you! 😘" },
        { time: "18:00", message: "Evening vibes 🌆 Almost time for your final surprise! Excited? 💕" },
        { time: "21:30", message: "30 minutes to go! ⏳ Get ready, Cutie! 💝" }
    ];

    function checkReminders() {
        const now = new Date();
        const currentTime = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');

        reminders.forEach(reminder => {
            if (reminder.time === currentTime) {
                alert(reminder.message);
            }
        });

        setTimeout(checkReminders, 60000); // Check every minute
    }

    checkReminders();
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("timer")) {
        updateCountdown();
        scheduleReminders();
    }
});

