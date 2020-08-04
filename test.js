class Dice{
    constructor(){
    this.rollResultNum = 0;
    this.scoreNum = 0;
    }
    calc(){
         this.scoreNum +=this.rollResultNum;
    }
 }
 const player1 = new Dice();
 const player2 = new Dice();

 console.log(player1);
 console.log(player2);
 console.log(player1.rollResultNum)

 const scoreTrack1 = {
    rollResultNum: 0,
    scoreNum: 0,
    calc () {
        this.scoreNum += this.rollResultNum;
    },
}

const scoreTrack2 = {
    rollResultNum: 0,
    scoreNum: 0,
    calc () {
        this.scoreNum += this.rollResultNum;
    },
}
console.log(scoreTrack1);
console.log(scoreTrack2);