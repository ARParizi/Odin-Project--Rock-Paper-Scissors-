let answer = prompt("Please enter 'Rock', 'Paper', or 'Scissors'");
console.log(`You chose ${answer}`);


function getComputerChoice() {
    
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice)
        return 'draw';

    switch (playerChoice) {
        case 'Rock':
            if (computerChoice === 'Scissors')
                return 'Player';
            break;

        case 'Paper':
            if (computerChoice === 'Rock')
                return 'Player';
            break;

        case 'Scissors':
            if (computerChoice === 'Paper')
                return 'Player';
            break;

        default:
            break;
    }

    return 'Computer';
}