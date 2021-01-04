
/*===================== Target DOM elements ============*/

let humanScore = document.querySelector('#human-score');

let computerScore = document.querySelector('#computer-score')

let gameDrawn = document.getElementById("game-round").children[5];

let gameRound = document.getElementById("game-round").children[3];

let gamesPlayed = document.getElementById("game-round").children[1];

let humanWins = document.getElementById("human-wins").children[1];

let computerWins = document.getElementById("computer-wins").children[1];

let name = document.getElementById("human-name");

let gameComment = document.getElementById("message");

let gameMessage = document.querySelector('#game-message'); 



/*===============================================================*/

/*===================== Global Variables ========================*/

choice = ["ROCK","PAPER","SCISSORS"]; 

var you = 0;
var cpu = 0;
let ties = 0;
let rounds = you + cpu;
let games = 0;
let won = 0; 
let lost = 0;

const playerSelection = " ";
const computerSelection = " "; 


/*====================================================================*/

/*=========================== Functions ===============================*/

/*=========================== HUMAN CHOICE ============================*/

function pickRock() {
   document.getElementById('human-choice').src ='images/rockwins.png';
   playRound(choice[0], computerSelection);
    game();
  }

// function that displays paper! when human selects paper
function pickPaper() {
   document.getElementById('human-choice').src ='images/paperwins.png'; 
   playRound(choice[1], computerSelection);
    game();
    }

// function that selects scissors when the human selects scissors
function pickScissors() {
    document.getElementById('human-choice').src ='images/scissorswins.png'; 
    playRound(choice[2], computerSelection);
    game();

}

/*====================================================================*/

/*====================== COMPUTER CHOICE =============================*/

// function that instructs the cpu on how to make selections and display them

function computerPlay() {
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];

    if (computerChoice === choice[0]) {
        document.getElementById('computer-choice').src ='images/rockwins copy.png';
        return choice[0]; 
    }
    else if (computerChoice === choice[1]) {
        document.getElementById('computer-choice').src = 'images/paperwins copy.png'; 
        return choice[1]; 
    }   
    else if (computerChoice === choice[2]) {
        document.getElementById('computer-choice').src = 'images/scissorswins copy.png'; 
        return choice[2]; 
    }
 }

/*===================================================================*/

/*======================== ROUNDS ==================================*/

function playRound(playerSelection, computerSelection)  {
    
    p1 = playerSelection += [];
    console.log(`You choose ${p1}`); 

    let p2 = computerSelection = computerPlay();
    console.log(`Computer choose ${p2}`);
    
switch (p1 === choice[0] || p1 === choice[1] || p1 === choice[2])   {

// YOU BOTH PICKED ROCK 
    case (p1 === p2):
    ties++
    gameDrawn.innerText=`${ties}`;
    gameMessage.textContent = '"It is a Draw!!"';
    gameComment.textContent = " - Draws don't count here -";
    console.log("Play Again!!!");
    break;

// YOU PICKED ROCK AND THE COMPUTER PICKED PAPER
    case (p1 === choice[0] && p2 === choice[1]): 
    rounds++;
    cpu++;
    gameRound.textContent = `${rounds}`;
    computerScore.textContent = `0${cpu}`;
    gameMessage.textContent = `"Computer Wins!! Paper Wraps Rock"`;
    gameComment.textContent = " - Oops!! -";
    console.log("You Lose! Paper beats Rock");
    break;

// YOU PICKED ROCK AND THE COMPUTER PICKED SCISSORS 
    case (p1 === choice[0] && p2 === choice[2]): 
    rounds++;
    you++;
    gameRound.textContent = `${rounds}`;
    humanScore.textContent = `0${you}`;
    gameMessage.textContent = `"${name.innerText} Wins!! Rock Breaks Scissors"`;
    gameComment.textContent = " - Nice Move!! -";
    console.log("You Win! Rock beats Scissors");
    break;

// YOU PICKED PAPER AND THE COMPUTER PICKED ROCK
    case (p1 === choice[1] && p2 === choice[0]): 
    rounds++;
    you++;
    gameRound.textContent = `${rounds}`;
    humanScore.textContent = `0${you}`;
    gameMessage.textContent = `"${name.innerText} Wins!! Paper Wraps Rock"`;
    gameComment.textContent = " - You are Good -";
    console.log("You Win! Paper beats Rock");
    break;

// YOU PICKED PAPER AND THE COMPUTER PICKED SCISSORS 
    case (p1 === choice[1] && p2 === choice[2]):
    rounds++;
    cpu++; 
    gameRound.textContent = `${rounds}`;
    computerScore.textContent = `0${cpu}`;
    gameMessage.textContent = `"Computer Wins!! Scissors Cuts Paper"`;
    gameComment.textContent = " - Hehe... Nice try - ";
    console.log("You Lose! Scissors beats Paper");
    break;

// YOU PICKED SCISSORS AND COMPUTER PICKED ROCK     
    case (p1 === choice[2] && p2 === choice[0]): 
    rounds++;
    cpu++;
    gameRound.textContent = `${rounds}`;
    computerScore.textContent = `0${cpu}`;
    gameMessage.textContent = `"Computer Wins!! Rock Breaks Scissors"`;
    gameComment.textContent = " - Yes, Computer Rocks!! - ";
    console.log("You Lose! Rock beats Scissors");
    break;

// YOU PICKED SCISSORS AND COMPUTER PICKED PAPER     
    case (p1 === choice[2] && p2 === choice[1]): 
    rounds++;
    you++;
    gameRound.textContent = `${rounds++}`;
    humanScore.textContent = `0${you++}`;
    gameMessage.textContent = `"${name.innerText} Wins!! Scissors Cuts Paper"`;
    gameComment.textContent = " - Correct! -";
    console.log("You Win! Scissors beats Paper");
    break;
}
}

/*=========================    RESET    ====================================*/

function reset() {
    won = 0;
    lost = 0; 

    you = 0;
    cpu = 0;

    ties = 0;
    rounds = 0;

    games = 0;

    humanScore.textContent = `0${you}`;
    computerScore.textContent = `0${cpu}`;

    gameDrawn.innerText = `${ties}`;
    gameRound.textContent = `${rounds}`;
    gamesPlayed.textContent = `${games}`;

    humanWins.textContent = `0${won}`;
    computerWins.textContent = `0${lost}`;

    gameMessage.textContent = `"Hello, please make a choice"`;
    gameComment.textContent = "- Best of Nine Games Wins -";
}

/*======================== Game Counts ====================================*/

function game()  {  
        if (rounds == 5 && rounds >= 5 ){
            if (you > cpu){
                won++;
                games++;
                youWin = 0;
                cpuWin = 0;
                you = 0;
                cpu = 0;
                ties = 0;
                rounds = 0;
                humanWins.textContent = `0${won}`;
                gamesPlayed.textContent = `${games}`;
                humanScore.textContent = `0${you}`;
                computerScore.textContent = `0${cpu}`;
                gameDrawn.innerText = `${ties}`;
                gameMessage.textContent = ``;
                gameRound.textContent = `${rounds}`;
                alert(`YOU WON!! \n\n Games Played: ${gamesPlayed.innerText} \n YOU: ${humanWins.innerText} \n CPU: ${computerWins.innerText} \n \n Click Ok/Cancel to Continue`);
                }

            else {
                lost++;
                games++;
                youWin = 0;
                cpuWin = 0;
                you = 0;
                cpu = 0;
                ties = 0;
                rounds = 0;
                computerWins.textContent = `0${lost}`;
                gamesPlayed.textContent = `${games}`;
                humanScore.textContent = `0${you}`;
                computerScore.textContent = `0${cpu}`;
                gameDrawn.innerText = `${ties}`;
                gameMessage.textContent = ``;
                gameComment.textContent = "";
                gameRound.textContent = `${rounds}`;
                alert(`CPU WON!! \n\n Games Played: ${gamesPlayed.innerText} \n YOU: ${humanWins.innerText} \n CPU: ${computerWins.innerText} \n \n Click Ok/Cancel to Continue`);
                 }
        }
    }


    

