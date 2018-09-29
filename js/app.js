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
//goal for today. push random numbers into main

// console.log('works');
/*********************************************************************************
OBJECTS IN GAME; GAME, PLAYER OBJECTS
*********************************************************************************/
const game = {
	time: null,
	score: null,
	rounds: null,
	mainNum: [],  
	playeroneNum: [], 
	playertwoNum: [],
	playerthreeNum: [],

	interval: null,
	player1: null,
	player2: null,
	player3: null, /*so you're making a game object and the object is just like building a game. generalize
	// how a game is made up. a timer, a scoreboard, the players playing. speaking of wouldn't you need to make the court, thats the exterior htmlcss i think. the functions you make simulate the actions/verbs that would happen on the court and as the game's playing ykno*/
	
	generatemainNum(){/*and take the num and put it in the empty spot up there under score*/
	
		for(let i = 0; i < 1; i ++){
			this.mainNum.push(Math.floor(Math.random() * 20));
			
			/*show once and emptyArray*/

		}
	},

	generateplayerNums(){	
		// let playerNum = [];
		for(let i = 0; i < 10; i ++){
			this.playeroneNum.push(Math.floor(Math.random() * 20))
		}

		for(let i = 0; i < 10; i ++){
			this.playertwoNum.push(Math.floor(Math.random() * 20));
		
		}
		for(let i = 0; i < 10; i ++){
			this.playerthreeNum.push(Math.floor(Math.random() * 20));
		
		}
	
	},

	checkMatches(){
		if(this.playeroneNum.indexOf(this.mainNum[0]) !== -1){
			return true;
		} else {
			return false
		}
		if(this.playertwoNum.indexOf(this.mainNum[0]) !== -1){
			return true;
		} else {
			return false					/*playertwo and playerthree check num  are connected to the playeroneNum and even if the number is in the array it'll say false. it's connected to the first set of numbers. idk why*/

		}
		if(this.playerthreeNum.indexOf(this.mainNum[0]) !== -1){
			return true;
		} else {
			return false
		}		
		// if(this.playeroneNum.includes(this.playertwoNum)){
		// 	console.log(true);;
		// } 
	},

	gameRounds(){/*we need to make a for loop here that goes 5 times that'll make */

	},

	gameWon() {
		// if(playerOne.score === 20 || playerTwo.score === 20){
		// 	return true;
		// }else {
		// 			return false;
		// }	
	},

	checkScore(){


	},

	gameTimer() {
				// this function will have somehting to do with the set interval and the timer that comes from the set interval will have something to do with how long the game will go for, meaning that this'll dictate how long the other functions are going to run, so either player has enough time to hit 10 points. 
	},

	// checkMatches(){
	// 	if(this.playeroneNum && this.playertwoNum === this.mainNum){
	// 		console.log('theres a match somewhere');
	// 	}
		//the function needs to loop through all three arrays and check if there are any similar numbers in all three arrays

	// },
	start() {/*ohh so every time the game 'starts', two players are made with the properties i gave the . the player blueprint i made down there. everyone on of those blueprints are gonna need properties, so think of it like how you would actually build a player in a game, ykno he has a name, in this case he has a score and he has numbers that we're going to randomly generate and give him to see if he has a match with the mainNum */


		//this should be connected to a button and it instantiates a player
		const playerOne = new Player('playerOne', 0);
		const playerTwo = new Player('playerTwo', 0);
		const playerThree = new Player('playerThree', 0);
	
	}
};

// }


//now make a function that runs every time the numbers are dealt to both players and the PC. then check to see if the playernum arrays have any numbers in common with the mainnum array

// ********************************************************************************
// THIS IS THE MAIN PLAYER CLASS, BLUEPRINT FOR WHEN PLAYERS INPUT THEIR NAME AND MAKE THEIR PLAYER
// ********************************************************************************
class Player {
	constructor(name) {
		this.name = name;
		this.score = 0;
		this.nums = [];


}
	increaseScore(){
		//if number in hand matches main number generated, allow increase score button to be clicked and add one to score, if score === 20 , you win
	}

	checkHand(){
		/*playerNums === mainNum generated) score++*/
		//function that checks the players numbers to see if any of them match the main number generated
	}
}




// /*********************************************************************************
// GAME WON FUNCTION, CHECKS PLAYERS SCORES, IF SCORE IS === X, RUN GAMEWON FUNCTION
// ********************************************************************************	
// ********************************************************************************
// INCREASE SCORE FUNCTION, THIS FUNCTION RUNS IF A # IN PLAYERS HAND MATCHES MAIN NUMBER GENERATED
// ********************************************************************************		
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
event listeners
*********************************************************************************/	
$('#dealbutton').on('click', ()=>{
	game.start();
	game.generatemainNum();
	game.generateplayerNums();
	// game.checkMatches();
	console.log(game.mainNum);
	console.log(game.playeroneNum);
	console.log(game.checkMatches(game.playeroneNum));
	console.log(game.playertwoNum);
	console.log(game.checkMatches(game.playertwoNum));
	console.log(game.playerthreeNum);
	// console.log(game.checkMatches(game.playerthreeNum));

	// console.log(game.checkMatches());
})
$('#checkarrays').on('click', ()=>{
	game.checkMatches();
	console.log('works');
})
