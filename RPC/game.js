let userScore = 0 ;
let compScore = 0 ;

const userScrorePara = document.getElementById("user-score   ");
const computerScrorePara = document.getElementById("computer-score"); 

 
const result = document.getElementById("play");
const choices = document.querySelectorAll(".choice");
console.log(choices)

const generateComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    computerChoice = Math.floor(Math.random() * 3);
    return  options[computerChoice];
}

const drawGame = () => {
    result.innerText = "Draw Game !!";
    result.style.color = "white"
}

const showWinner = (userWin,userChoice,computerChoice) => {
    if(userWin) {
        userScore++;
        userScrorePara.innerText = userScore
        result.innerText = `You Win !! ${userChoice} beats ${computerChoice}`;
        result.style.color = "green";
    }
    else{
        compScore++; 
        computerScrorePara.innerText = compScore;
        result.innerText = `Computer Win !! ${computerChoice} beats ${userChoice}`;
        result.style.color = "red";
        
    }
}

const playGame = (userChoice) => {
    const computerChoice = generateComputerChoice();
    if (userChoice === computerChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }
         else if(userChoice === "scissors"){
            userWin = computerChoice === "rock" ? false : true ;
        }
        else {
            userWin = computerChoice === "scissors" ? false : true
        }

        showWinner(userWin,userChoice , computerChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click',() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

 