while (false) {
    let answer = prompt("Please enter 'Rock', 'Paper', or 'Scissors'");
    console.log(`You chose ${answer}`);
    let computerChoice = getComputerChoice();
    console.log(`Computer chose ${computerChoice}`);
    console.log(`Winner is: ${getWinner(answer.toLowerCase(), computerChoice.toLowerCase())}`);   
}

function getComputerChoice() {
    let randomInt = Math.floor(3 * Math.random());
    switch (randomInt) {
        case 0:
            return 'Rock'

        case 1:
            return 'Paper'

        case 2:
            return 'Scissors'
    
        default:
            throw new Error("Impossible outcome");
    }
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice)
        return 'draw';

    switch (playerChoice) {
        case 'rock':
            if (computerChoice === 'scissors')
                return 'Player';
            break;

        case 'paper':
            if (computerChoice === 'rock')
                return 'Player';
            break;

        case 'scissors':
            if (computerChoice === 'paper')
                return 'Player';
            break;

        default:
            break;
    }

    return 'Computer';
}