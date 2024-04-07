let chanceOfReset = 0;
let maxScore = 0;
let totalClicks = 0;

const button = document.getElementById("gameButton");
const maxScoreDiv = document.getElementById("maxScore");
const totalClicksDiv = document.getElementById("totalClicks");
const messageDiv = document.getElementById("message");

button.addEventListener("click", function() {
    totalClicks++;
    button.textContent = totalClicks;

    if (Math.random() * 100 < chanceOfReset) {
        messageDiv.textContent = "You Lose!";
        if (totalClicks > maxScore) {
            maxScore = totalClicks;
            maxScoreDiv.textContent = `Max ${maxScore}`;
        }
        totalClicks = 0;
        chanceOfReset = 0;
        button.textContent = totalClicks;
    } else {
        chanceOfReset = Math.min(chanceOfReset + 1, 100);
        messageDiv.textContent = "";
    }
    totalClicksDiv.textContent = `Total ${totalClicks}`;
});

function toggleSettings() {
    var settingsMenu = document.getElementById('settingsMenu');
    settingsMenu.classList.toggle('hidden');
}

function changeButtonColor(color) {
    var gameButton = document.getElementById('gameButton');
    switch (color) {
        case 'yellow':
            gameButton.style.backgroundColor = '#FFD700'; 
            break;
        case 'purple':
            gameButton.style.backgroundColor = '#800080'; 
            break;
        case 'brown':
            gameButton.style.backgroundColor = '#A52A2A'; 
            break;
    }
}

function toggleInfo() {
    var infoPopup = document.getElementById('infoPopup');
    infoPopup.classList.toggle('hidden');
}
