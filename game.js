const playerZone = document.getElementById("playerArea");
const computerZone = document.getElementById("computerArea");
const rockLeftSource = "assets/PierreGauche.png";
const rockRightSource = "assets/PierreDroite.png";
const paperLeftSource = "assets/FeuilleGauche.png";
const paperRightSource = "assets/FeuilleDroite.png";
const cisorsLeftSource = "assets/CiseauxGauche.png";
const cisorsRightSource = "assets/CiseauxDroite.png";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function srcModify (id, source){
    document.getElementById(id).src = source;
}

function generateNewComputerSign (){
// Generating a random number which will be transformed in a sign.
let randomNumber = 0;
randomNumber = getRandomInt(3);
switch(randomNumber){
    case 0: 
        srcModify("computerArea", rockRightSource);
        break;
    case 1: 
        srcModify("computerArea", paperRightSource);
        break;
    case 2: 
        srcModify("computerArea", cisorsRightSource);
        break;
    }
    return randomNumber;
}

function displaySigns(playerSource){
    srcModify("playerArea", playerSource);
    const signValue = generateNewComputerSign();
    return signValue;
}        
   
  
let playerScoreScreen = document.querySelector(".game__score__player");
let computerScoreScreen = document.querySelector(".game__score__computer");
const rockButton = document.getElementById("buttonRock");
const paperButton = document.getElementById("buttonPaper");
const cisorsButton = document.getElementById("buttonCisors");
let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener("click",function(){
    computerSign=displaySigns(rockLeftSource);
    switch(computerSign){
        case 0:
            break;
        case 1:
            computerScore+=1;
            computerScoreScreen.innerHTML =(computerScore);
            break;
        case 2:
            playerScore+=1;
            playerScoreScreen.innerHTML =(playerScore);
            break;
        default:
            break;
    }
})
paperButton.addEventListener("click",function(){
    computerSign=displaySigns(paperLeftSource);
    switch(computerSign){
        case 0:
            playerScore+=1;
            playerScoreScreen.innerHTML =(playerScore);
            break;
        case 1:
            break;
        case 2:
            computerScore+=1;
            computerScoreScreen.innerHTML =(computerScore);
            break;
        default:
            break;
    }
})
cisorsButton.addEventListener("click",function(){
    computerSign=displaySigns(cisorsLeftSource);
    switch(computerSign){
        case 0:
            computerScore+=1;
            computerScoreScreen.innerHTML =(computerScore);
            break;
        case 1:
            playerScore+=1;
            playerScoreScreen.innerHTML =(playerScore);
            break;
        case 2:
            break;
        default:
            break;
    }
})