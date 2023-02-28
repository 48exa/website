const choices = ['rock', 'paper', 'scissors'];
const move = document.getElementById("text-input-choice");
const scoreboard = document.getElementById("scoreboard");
const gamesPlayed = document.getElementById("games-played");
const lineNbr = document.getElementById("line-nbr");
const gamefeed = document.getElementById("gamefeed-printbox");
const lineprint = () => { line++; lineNbr.innerHTML += `<br> ${line}` }
const win = () => { uScore++; scoreboard.innerHTML = `Score: ${uScore} / ${pScore}`; }
const lose = () => { pScore++; scoreboard.innerHTML = `Score: ${uScore} / ${pScore}`; }

let PCmove = "";
let games = 0;
let line = 0;
let uScore = 0;
let pScore = 0;


function convert() {
    move.value = move.value.toLowerCase()

    switch (move.value) {
        case "r":
            move.value = "rock";
            break;
        case "p":
            move.value = "paper";
            break;
        case "s":
            move.value = "s";
            break;
    }
}

function princrement() { //print + increment
    games++;
    line++;

    gamesPlayed.innerHTML = `Games played: ${games}`;

    if (gamefeed.innerHTML == "Your games will be printed here.") {
        gamefeed.innerHTML = "<strong>Game #1</strong> <br>"
        lineNbr.innerText = "1"
    } else {
        lineprint();
        lineprint();
        gamefeed.innerHTML += `<br><strong>Game #${games}</strong> <br>`;
    }

    lineprint()
    gamefeed.innerHTML += `<em>You chose ${move.value}</em> <br>`;
    gamefeed.scrollTop = gamefeed.scrollHeight;
}

function validate() {
    lineprint()
    gamefeed.innerHTML += `<em>PC chose ${PCmove}</em> <br>`;

    if (move.value == "rock" && PCmove == "scissors" ||
        move.value == "paper" && PCmove == "rock" ||
        move.value == "scissors" && PCmove == "paper") {
        win();
        lineprint();
        gamefeed.innerHTML += `<u>You win! ${move.value} beats ${PCmove}</u><br>`;
    } else if (PCmove == "rock" && move.value == "scissors" ||
        PCmove == "paper" && move.value == "rock" ||
        PCmove == "scissors" && move.value == "paper") {
        lose();
        lineprint();
        gamefeed.innerHTML += `<u>You lose! ${PCmove} beats ${move.value}</u><br>`;
    } else if (!choices.includes(move.value)) {
        lose();
        lineprint();
        gamefeed.innerHTML += `<u>You lose! ${move.value} is not a valid move!</u><br>`;
    } else {
        lineprint();
        gamefeed.innerHTML += `<u>You tied! You both chose ${PCmove}</u><br>`;
    }
}

function run() {
    PCmove = choices[Math.floor(Math.random() * 3)];
    convert();
    princrement();
    validate();
    move.value = "";
}
