const buttonStart = document.getElementById('buttonStart');
const buttonHold = document.getElementById('buttonHold');
const rollResult = document.getElementById('rollResult');
const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');
const scoreP1 = document.getElementById('scoreP1');
const scoreP2 = document.getElementById('scoreP2');
const mainP1 = document.getElementById('mainP1');
const mainP2 = document.getElementById('mainP2');


buttonHold.style.visibility = "hidden";
icon1.style.visibility = "hidden";
icon2.style.visibility = "hidden";
scoreP1.style.visibility = "hidden";
scoreP2.style.visibility = "hidden";
mainP1.style.visibility = "hidden";
mainP2.style.visibility = "hidden";


const dice = {
    sides: 20,
    roll() {
      return Math.floor(Math.random() * this.sides) + 1;
    }
}

class Player{
    constructor(){
    this.rollResultNum = 0;
    this.scoreNum = 0;
    this.mainScore = 0;
    }
    calc() {
         this.scoreNum +=this.rollResultNum;
    }
    calcMain() {
        this.mainScore +=this.scoreNum;
    }

}
const player1 = new Player();
const player2 = new Player();

let currentPlayer = player1;
let currentScore = scoreP1;
let currentIcon = icon1;
let mainScore = mainP1;

const updateActivePlayer = () => {
    currentPlayer == player1 ? currentPlayer = player2: currentPlayer = player1;
    currentScore == scoreP1 ? currentScore = scoreP2: currentScore = scoreP1;
    mainScore == mainP1 ? mainScore = mainP2: mainScore = mainP1;
}

const updateActiveScore = () => {
    currentPlayer.calcMain();
    mainScore.textContent = currentPlayer.mainScore;
    currentPlayer.scoreNum = 0;
    currentScore.textContent = currentPlayer.scoreNum;
}

const updateActiveIcon = () => {
    if (currentIcon == icon1){
        currentIcon = icon2;
        icon2.style.visibility = "visible";
        icon1.style.visibility = "hidden";
    }
    else {
        currentIcon = icon1;
        icon1.style.visibility = "visible";
        icon2.style.visibility = "hidden";
    };
}

const playAgain = () => {
    buttonStart.textContent = 'Play Again?';
    buttonHold.style.visibility = "hidden";
    player1.rollResultNum = 0;
    player1.scoreNum = 0;
    player2.rollResultNum = 0;
    player2.scoreNum = 0;
}

const checkActivePlayer = () => {
    if (currentPlayer == player1){
        scoreP2.textContent = `You win!`;
        scoreP1.textContent = 'You lose!';
        updateActivePlayer();
        setTimeout(() => {
            scoreP1.textContent = '0';
            scoreP2.textContent = '0';
        },5000);
    }
    else if (currentPlayer == player2){
        scoreP1.textContent = `You win!`;
        scoreP2.textContent = 'You lose!';
        updateActivePlayer();
        setTimeout(() => {
            scoreP1.textContent = '0';
            scoreP2.textContent = '0';
        },5000);
    }
}

buttonStart.addEventListener('click',() => {
    // visuals
    if (buttonStart.textContent == "New Game"){
        icon1.style.visibility = "visible";
        mainP1.style.visibility = "visible";
        mainP2.style.visibility = "visible";    
    }
    buttonStart.textContent = `Roll a D${dice.sides}`;
    scoreP1.style.visibility = "visible";
    scoreP2.style.visibility = "visible";    
    buttonHold.style.visibility = "visible";
    // logic from here onward
    currentPlayer.rollResultNum = dice.roll();
    rollResult.src = `img/dice${currentPlayer.rollResultNum}.png`;
    currentPlayer.calc();
    currentScore.textContent = currentPlayer.scoreNum;
    if (currentPlayer.rollResultNum == 1) {
        checkActivePlayer();
        playAgain(); 
    }
    else if (currentPlayer.scoreNum >= 100){
        checkActivePlayer();
        playAgain();
    }
});

buttonHold.addEventListener('click',() => {
    updateActiveIcon();
    console.log(currentPlayer);
    updateActiveScore();
    console.log(currentPlayer);
    updateActivePlayer();
})