
//2. Create an array that tells computer what choices it is allowed to pick 
choice = ["ROCK", "PAPER", "SCISSORS"];

//declare a score for human and computer 
var humanScore = 0 ;
var computerScore = 0;
let count = humanScore + computerScore ;


//1.  create a function telling computer how to select choice randomly 
function computerPlay(){
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}

//4. create a function that makes the decisions based on selections 
function playRound(playerSelection, computerSelection)  {

//4a. Assign p1 and p2 as the container for playerselection and computerSelection.. becasue its shorter and easier to use
    playerSelection = prompt("Enter your choice: Rock, Paper or Scissors: ");
    let p1 = playerSelection.toUpperCase(); 
    let p2 = computerSelection = computerPlay();

    console.log (`You choose ${p1}`); 
    console.log (`Computer choose ${p2}`);

//4b. initially had the if condition at the bottom. 

    switch (p1 === choice[0] || p1 === choice[1] || p1 === choice[2])   {

        case (p1 === p2):
        alert ("Please Enter a valid choice: Rock Paper or Scissors!!!");
        return "Play Again!!!";  
        break;

        case (p1 === choice[0] && p2 === choice[1]): 
        computerScore++;
        count ++;
        return "You Lose! Paper beats Rock";
        break;

        case (p1 === choice[0] && p2 === choice[2]): 
        humanScore++;
        count ++;
        return "You Win! Rock beats Scissors";
        break;

        case (p1 === choice[1] && p2 === choice[0]): 
        humanScore++;
        count ++;
        return "You Win! Paper beats Rock";
        break;

        case (p1 === choice[1] && p2 === choice[2]): 
        computerScore++;
        count ++;
        return "You Lose! Scissors beats Paper";
        break;

        case (p1 === choice[2] && p2 === choice[0]): 
        computerScore++;
        count ++;
        return "You Lose! Rock beats Scissors";
        break;

        case (p1 === choice[2] && p2 === choice[1]): 
        humanScore++;
        count ++;
        return "You Win! Scissors beats Paper";
        break;

    }

    if (p1 !== choice[0] || p1 !== choice[1] || p1 !== choice[2])   {
        alert ("enter a valid choice");
        count += 0; 
        return "Invalid answer";
    }
} 
//3. declare selection  for human and computer to test the console.log 
    const playerSelection = " "; 
    const computerSelection = " "; 



//5. Function the loops playRound 5 times, saves the score,  and determines the winner based on scores 
    function game ()    {                   
        while (count < 5) {
        console.log(playRound(playerSelection, computerSelection));
        print (`Human ${humanScore} : Computer ${computerScore}`);
        }

        //6. choose the winner of the round
        if (humanScore > computerScore){
            return "You won the game!";
        }
        else if (humanScore < computerScore){
            return "You lost the game!!"
        }
        else if (humanScore = computerScore){
            return "It was A Tie Round";
        }
        else {
            return "You lost the game!";
    }
    }

    console.log(game());