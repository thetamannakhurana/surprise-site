// Countdown to 10 PM
const targetTime = new Date();
targetTime.setHours(22, 0, 0, 0); 

function updateCountdown() {
    const now = new Date();
    const diff = targetTime - now;

    if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerText = `${hours}h ${minutes}m ${seconds}s left!`;
    } else {
        document.getElementById("countdown").innerText = "It's time! 💖";
    }
}
setInterval(updateCountdown, 1000);

// Game 1: Catch the Hearts
let heartsCaught = 0;
let maxHearts = 5;

function startCatchHeartsGame() {
    const heartArea = document.getElementById("heartArea");
    let heartCount = 0;

    const heartInterval = setInterval(() => {
        if (heartCount >= maxHearts) {
            clearInterval(heartInterval);
            return;
        }

        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "absolute";
        heart.style.left = `${Math.random() * 90}%`;
        heart.style.top = "-50px";
        heart.style.fontSize = "30px";
        heart.style.cursor = "pointer";
        heart.style.transition = "top 2s linear";
        heartArea.appendChild(heart);

        setTimeout(() => {
            heart.style.top = "100%";
        }, 0);

        heart.addEventListener("click", () => {
            heartsCaught++;
            heart.remove();
            if (heartsCaught === maxHearts) {
                clearInterval(heartInterval);
                revealMessage();
            }
        });

        heartCount++;
    }, 1500);
}

// Game 3: Click Challenge
let score = 0;

function startClickChallengeGame() {
    const clickArea = document.getElementById("clickArea");
    const scoreDisplay = document.getElementById("score");

    clickArea.addEventListener("click", () => {
        score++;
        scoreDisplay.innerText = score;
        if (score >= 50) {
            revealMessage();
        }
    });
}

// Game 4: Maze Game
let playerPosition = { x: 10, y: 10 };

function startMazeGame() {
    const player = document.getElementById("player");

    document.addEventListener("keydown", (event) => {
        const moveDistance = 5;

        if (event.key === "ArrowUp") playerPosition.y -= moveDistance;
        if (event.key === "ArrowDown") playerPosition.y += moveDistance;
        if (event.key === "ArrowLeft") playerPosition.x -= moveDistance;
        if (event.key === "ArrowRight") playerPosition.x += moveDistance;

        player.style.left = playerPosition.x + "px";
        player.style.top = playerPosition.y + "px";

        if (playerPosition.x >= 450 && playerPosition.x <= 470 &&
            playerPosition.y >= 270 && playerPosition.y <= 290) {
            revealMessage();
        }
    });
}

// Game 5: Word Puzzle
const words = ["LOVE", "HAPPY", "CUTIE", "HEART", "SURPRISE"];
let currentWord = "";
let scrambledWord = "";

function startWordPuzzleGame() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = scrambleWord(currentWord);
    document.getElementById("scrambled-word").innerText = scrambledWord;
}

function scrambleWord(word) {
    const wordArray = word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    return wordArray.join("");
}

function checkAnswer() {
    const userInput = document.getElementById("user-input").value.toUpperCase();
    if (userInput === currentWord) {
        revealMessage();
    } else {
        alert("Oops! Try again!");
    }
}

function revealMessage() {
    alert("You unlocked the next surprise!");
}