let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#new-game");

const userScorePara = document.querySelector("#you");
const compScorePara = document.querySelector("#comp");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
 };

const drawGame = () => {
    console.log("Game is Draw. ");
    msg.innerText = "Game was draw. Play Again!";
    msg.style.backgroundColor = "#081b31";
    msg.style.color = "white";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "black";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose! ";
        msg.style.backgroundColor = "red";
        msg.style.color = "black";
    }
};

const playGame = (userChoice) => {
    console.log("user Choice = ",userChoice);
    //Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("comp Choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors";
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock";
        } else {
            userWin = compChoice === "paper";
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


document.getElementById("new-game").addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play Again!";
    msg.style.backgroundColor = "";
    msg.style.color = "";
})

