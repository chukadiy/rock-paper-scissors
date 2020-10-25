
/*===================== Target DOM elements ============*/


let gamesPlayed =  document.getElementById("game-round").children[1];
console.log(gamesPlayed);

let humanWins = document.getElementById("human-wins").children[1];
console.log(humanWins);

let name = document.getElementById("human-name");
console.log(name);

let computerWins = document.getElementById("computer-wins").children[1];
console.log(computerWins);

let winner = document.getElementsByClassName("message");
console.log(winner);





/*===============================================================*/

/*===================== Global variables ========================*/

choice = ["ROCK","PAPER","SCISSORS"]; 

let rock = choice[0];
let paper = choice[1];   
let scissors = choice[2];

var humanScore = 0 ;
var computerScore = 0;
var ties = 0 ;
let rounds = 0 ;

 
/*==================================================================*/

const playerSelection = " ";
const computerSelection = " "; 

/*========================================================*/

/*===================== Functions =======================*/

/*
for (value in decisions){
value = "ROCK" ? playRound(rock, computerSelection)
: value = "PAPER" ? playRound(paper, computerSelection)
: playRound(scissors, computerSelection)  
}
*/
/*====================== HUMAN CHOICE ==================================*/

function pickRock() {
   document.getElementById('human-choice').src ='images/rockwins.png';
   playRound("ROCK", computerSelection);
    }

// function that displays paper! when human selects paper
function pickPaper() {
   document.getElementById('human-choice').src ='images/paperwins.png'; 
   playRound(choice[1], computerSelection);
}
// function that selects scissors when the human selects scissors
function pickScissors() {
    document.getElementById('human-choice').src ='images/scissorswins.png'; 
    playRound(choice[2], computerSelection);
}


/*====================== COMPUTER CHOICE ==================================*/


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


// create a function called humanPlay that iterates an array called choice
// the iteration should only select from the array list when called 
//


/*====================== ROUNDS ==================================*/


function playRound(playerSelection, computerSelection)  {
     //human selection 
    
     p1 = playerSelection += [];

    let p2 = computerSelection = computerPlay();

    // console.log(`You choose ${p1}`); 
    console.log(`You choose ${p1}`); 

    console.log(`Computer choose ${p2}`);
    
switch (p1 === choice[0] || p1 === choice[1] || p1 === choice[2])   {

// YOU BOTH PICKED ROCK 
    case (p1 === p2):
    ties++;   
    document.getElementById("game-round").children[5].innerText=`${ties++}`;
    console.log("Play Again!!!");
    document.querySelector('#game-message').textContent = `It's a Draw!!`;
    return "Draw!!"

// YOU PICKED ROCK AND THE COMPUTER PICKED PAPER
    case (p1 === choice[0] && p2 === choice[1]): 
    rounds++;
    computerScore++;
    document.getElementById("game-round").children[3].textContent = `${rounds++}`;
    document.querySelector('#computer-score').textContent = `0${computerScore++}`;
    console.log("You Lose! Paper beats Rock");
    document.querySelector('#game-message').textContent = `Computer Wins!! Paper Wraps`;
    return "You Lose!! Paper beats Rock";


// YOU PICKED ROCK AND THE COMPUTER PICKED SCISSORS 
    case (p1 === choice[0] && p2 === choice[2]): 
    rounds++;
    humanScore++;
    document.getElementById("game-round").children[3].textContent = `${rounds++}`;
    document.querySelector('#human-score').textContent = `0${humanScore++}`;
    console.log("You Win! Rock beats Scissors");
    document.querySelector('#game-message').textContent = `${name.innerText} Wins!! Rock Breaks!!`;
    return;

// YOU PICKED PAPER AND THE COMPUTER PICKED ROCK
    case (p1 === choice[1] && p2 === choice[0]): 
    rounds++;
    humanScore++;
    document.getElementById("game-round").children[3].textContent = `${rounds++}`;
    document.querySelector('#human-score').textContent = `0${humanScore++}`;
    console.log("You Win! Paper beats Rock");
    document.querySelector('#game-message').textContent = `${name.innerText} Wins!! Paper Wraps!!`;
    return;

// YOU PICKED PAPER AND THE COMPUTER PICKED SCISSORS 
    case (p1 === choice[1] && p2 === choice[2]): 
    rounds++;
    computerScore++;
    document.getElementById("game-round").children[3].textContent = `${rounds++}`;
    document.querySelector('#computer-score').textContent = `0${computerScore++}`;
    console.log("You Lose! Scissors beats Paper");
    document.querySelector('#game-message').textContent = `Computer Wins!! Scissors Cuts!!`;
    return;

// YOU PICKED SCISSORS AND COMPUTER PICKED ROCK     
    case (p1 === choice[2] && p2 === choice[0]): 
    rounds++;
    computerScore++;
    document.getElementById("game-round").children[3].textContent = `${rounds++}`;
    document.querySelector('#computer-score').textContent = `0${computerScore++}`;
    console.log("You Lose! Rock beats Scissors");
    document.querySelector('#game-message').textContent = `Computer Wins!! Rock Breaks!!`;
    return;

// YOU PICKED SCISSORS AND COMPUTER PICKED PAPER     
    case (p1 === choice[2] && p2 === choice[1]): 
    rounds++;
    humanScore++;
    document.getElementById("game-round").children[3].textContent = `${rounds++}`;
    document.querySelector('#human-score').textContent = `0${humanScore++}`;
    console.log("You Win! Scissors beats Paper");
    document.querySelector('#game-message').textContent = `${name.innerText} Wins!! Scissors Cuts!!`;
    return;
}
}

/*
function game ()  {                   
    while (count < 1) {
    console.log (`Human ${humanScore} : Computer ${computerScore}`);
    }
    //6. choose the winner of the round
    if (humanScore > computerScore){
        document.getElementsByClassName("message").innerText = " - You won the game - ";
    }
    else if (humanScore < computerScore){
        document.getElementsByClassName("message").innerText = " - You lost the game - ";
    }
    else if (humanScore = computerScore){
        document.getElementsByClassName("message").innerText = " - It was A Tie Round - ";
    }
    else {
        document.getElementsByClassName("message").innerText = " - Make a Choice - ";
}
*/
