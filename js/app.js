/*********************************************************************************
MVP
1.Both players can input their name
2.Main number is generated up top
3.Both players have numbers generated in their playerNums 
4.Add interval timers to all three generated numbers
	-one for game which will generate every 3-4 seconds
	-one for both players random numbers that will generate every 2 seconds?
	(figure out interval times, these don't seem right or fun)
5.Allow user 1 and user 2 to click their addScore button when a number in their array matches the main number generated
6.Add 1 to playerXscore until either one gets to 10 or 20
7.If playerXscore === 10 or 20, run gameWon function and stop interval timers and tell the player who won that they won
8.Reset
*********************************************************************************/


console.log('works');
/*********************************************************************************
OBJECTS IN GAME; GAME, PLAYER OBJECTS
*********************************************************************************/
const game = {
	time: null,
	score: null,
	mainNum: null,
	interval: null,

	//main number generated
		//figure out a way to push the randomly generated number into an empty array



	

};

	const mainNum = [];
	// generateNum=()=>{
	// 	//attach interval timer to this so it generates a random number every x seconds
	// 	//one for main num and one for playerNums

	// 	 return Math.floor(Math.random() * Math.floor(20))
	// }
	for(let i = 0; i < 10; i ++){
		mainNum.push(Math.floor(Math.random() * 20));
	
		// return mainNum;
	}

// const drawCards = (whichPlayer) =>{

// 	for(let i = 0; i < 3; i++) {
// 		let randCard = Math.floor(Math.random() * deck.length);
// 		playerOne.cardsDrawn.push(deck[randCard]);
// 		deck.splice(randCard, 1);
// 	}




	//generate random numbers 
	//check hand function that compares the main number generated vs the numbers generated in each players hands
	//score button

/*********************************************************************************
THIS IS THE MAIN PLAYER CLASS, BLUEPRINT FOR WHEN PLAYERS INPUT THEIR NAME AND MAKE THEIR PLAYER
*********************************************************************************/
// class Player {
// 	constuctor(name) {
// 		this.name = name,
// 		this.score = 0,
// 		this.playerNums = null,
// 	}
// /*********************************************************************************
// GAME WON FUNCTION, CHECKS PLAYERS SCORES, IF SCORE IS === X, RUN GAMEWON FUNCTION
// *********************************************************************************/	
// 	gameWon() {
// 		if(playerOne.score === 20 || playerTwo.score === 20){
// 			return true;
// 		} else {
// 			return false;
// 		  }
// 	}
// ********************************************************************************
// INCREASE SCORE FUNCTION, THIS FUNCTION RUNS IF A # IN PLAYERS HAND MATCHES MAIN NUMBER GENERATED
// ********************************************************************************		
// 	increaseScore(){
// 		//if number in hand matches main number generated, allow increase score button to be clicked and add one to score, if score === 20 , you win
// 	}

// 	checkHand(){
// 		if(/*playerNums === mainNum generated) score++*/)
// 		//function that checks the players numbers to see if any of them match the main number generated
// 	}
// }

// /*********************************************************************************
// CREATING PLAYERS... I THINK
// *********************************************************************************/	
// const playerOne = new Player();
// const playerTwo = new Player();




//FIGURE OUT A WAY TO PUSH THE RANDOM NUMBER GENERATED INTO THE PLAYERS HAND




/*********************************************************************************

*********************************************************************************/	

// const playerOne = {
// 	score: null, 
// 	playerNums: null, 


// 	//empty array that gets populated with randomly generated number which is the players 'hand'
// 	// check hand function
// 	//if a number in hand matches the main number generated, allow score button to be clicked
// 	//player score tally
// 	//interval timer that generates new random number every time the interval happens
// 	//if numbers match, push a tally to the player score
// 	//if tally number in player score == x, then player x wins
// 	//

// };

// const playerTwo = {


// };

/*********************************************************************************
TIMER INTERVALS
*********************************************************************************/	
//overall timer that will decrease by one second from 60, when it reaches zero. stop game and check players scores, if playerOne score > playerTwo Score, playerOne wins, otherwise playerTwo wins

// setTimer() {
// 	let time = 0;
// 	this.interval = setInterval(()=>{
// 		time++;

// 	}, 1000)
	
// }






























/*********************************************************************************
EVENT LISTENERS. LISTEN FOR BUTTON CLICKS TO PUSH 1 TO SCORE
*********************************************************************************/	

