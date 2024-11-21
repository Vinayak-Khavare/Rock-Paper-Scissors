const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const userScorecard = document.querySelector(".userscore");
const compScorecard = document.querySelector(".compscore");

let userScore = 0;
let compScore = 0;

const getCompChoice = () => {
    let choices = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return choices[idx];
};

const gameDraw = (choice) => {
    msg.innerText = `Game Draw! Both of you played ${choice}!`;
    msg.style.backgroundColor = "#3B3B58";
    msg.style.color = "#CF9893";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorecard.innerText = userScore;
        msg.innerText = `You win! You played ${userChoice}, while Computer played ${compChoice}.`;
        msg.style.backgroundColor = "#BC7C9C";
        msg.style.color = "#3B3B58";
    } else {
        compScore++;
        compScorecard.innerText = compScore;
        msg.innerText = `You lose! You played ${userChoice}, while Computer played ${compChoice}.`;
        msg.style.backgroundColor = "#7A5980";
        msg.style.color = "#3B3B58";
    }
};

const playGame = (userChoice) => {
    const compChoice = getCompChoice();

    if (userChoice === compChoice) {
        gameDraw(userChoice);
        return; 
    }

    let userWin = false;
    if (userChoice === "rock") {
        userWin = compChoice === "scissors";
    } else if (userChoice === "paper") {
        userWin = compChoice === "rock";
    } else {
        userWin = compChoice === "paper";
    }

    showWinner(userWin, userChoice, compChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
