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
	interval: null,
	player1: null,
	player2: null,
	// player3: null, /*so you're making a game object and the object is just like building a game. generalize
	// how a game is made up. a timer, a scoreboard, the players playing. speaking of wouldn't you need to make the court, thats the exterior htmlcss i think. the functions you make simulate the actions/verbs that would happen on the court and as the game's playing ykno*/
	
/**************************************************************
This function makes the players and starts the game
**************************************************************/
	setNameandStartGame(){


		//get the name
		const name = $('#playerOneInput').val()
		//instantiate, pass in name, (get from input with jquery)
		const fil = new Player(name);

		this.player = fil;

		$('#playerOneInput').hide();

		$('#playerOneNameBut').hide();

		$('#pOneDisplay').append(name);



		const nameTwo = $('#playerTwoInput').val()
		//instantiate, pass in name, (get from input with jquery)
		const playerTwo = new Player(nameTwo);

		this.player = playerTwo;

		$('#playerTwoInput').hide();

		$('#playerTwoNameBut').hide();

		$('#pTwoDisplay').append(nameTwo);

	},

/**************************************************************
This generates the main number 
**************************************************************/
	generatemainNum(){
		/*and take the num and put it in the empty spot up there under score*/
		this.mainNum.push(Math.floor(Math.random() * 20))
			
			/*show once and emptyArray*/

	},
/**************************************************************
This generates the player numbers that are trying to match the number above ^
**************************************************************/
	generateplayerNums(){	
		
		// empty out the player divs -- remove all previous numbers

		// make player 1 nums be empty

		this.playeroneNum = [];
		for(let i = 0; i < 10; i++){

			this.playeroneNum.push(Math.floor(Math.random() * 20))
			// create div with numStyle and add

		}

		// make player 2 nums be empty

		this.playertwoNum = []
		for(let i = 0; i < 10; i++){

			// get the number in a variable

			// push it into array
			this.playertwoNum.push(Math.floor(Math.random() * 20))

			

			// create div and add to player 2
			
		}

	},
/**************************************************************
This function checks to see if the players numbers match the computers
**************************************************************/
	checkMatches(){
		if(this.playeroneNum.indexOf(this.mainNum[0]) !== -1){
			return true;
		} else {
			return false;
		}	
	},

	checkMatchesTwo(){
		if(this.playertwoNum.indexOf(this.mainNum[0]) !== -1){
			return true;
		} else {
			return false;
		  }
	},

	gameRounds(){/*we need to make a for loop here that goes 5 times that'll make */
	//while loops
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
	start() {
		/*ohh so every time the game 'starts', two players are made with the properties i gave the . the player blueprint i made down there. everyone on of those blueprints are gonna need properties, so think of it like how you would actually build a player in a game, ykno he has a name, in this case he has a score and he has numbers that we're going to randomly generate and give him to see if he has a match with the mainNum */
		//this should be connected to a button and it instantiates a player

		// const playerOne = new Player('playerOne', 0);
		// const playerTwo = new Player('playerTwo', 0);
	},
/*********************************************************************************
TIMER INTERVALS -- this determines when the random numbers get regenerated
*********************************************************************************/	
		setTimer() {
			let time = 0;
			this.interval = setInterval(()=>{
				time++;

				// updating computer number
				if(time % 5 === 0){
					this.generatemainNum()
					$('#compDiv').text(this.mainNum);
					game.mainNum = []
				}
				// update player numbers
				if(time % 3 === 0){
					this.generateplayerNums()
					$('#playerDiv1').text(this.playeroneNum);
					$('#playerDiv2').text(this.playertwoNum);
					game.playeroneNum = []
					game.playertwoNum = []
				}

				$('#timer').text('Timer ' + time);

			}, 500)

		},

};
$(document).on('keypress', (e) => { if(e.key==="n") clearInterval(game.interval) })
/**************************************************************
END GAME OBJECT
**************************************************************/
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
/**************************************************************
If the player has a matching number add one to score
**************************************************************/
	increaseScore(){
		// if(this.playertwoNum.indexOf(this.mainNum[0]) !== -1){
		// 	score++;
		}
		//if number in hand matches main number generated, allow increase score button to be clicked and add one to score, if score === 20 , you win
	

	checkHand(){
		/*playerNums === mainNum generated) score++*/
		//function that checks the players numbers to see if any of them match the main number generated
	}

}
/**************************************************************
END PLAYER OBJECT
**************************************************************/	
/*********************************************************************************
event listeners
*********************************************************************************/	
$('#dealbutton').on('click', ()=>{
	// game.start();
	game.setNameandStartGame();
	game.setTimer();
	game.generatemainNum();
	game.generateplayerNums();
	$('#compDiv').append(game.mainNum);
	$('#playerDiv1').append(game.playeroneNum);
	$('#playerDiv2').append(game.playertwoNum);


	console.log(`The dealer has drawn ${game.mainNum}, See if any of your numbers match.`);
	console.log(`PlayerOne has drawn the cards,  ${game.playeroneNum}.`);
	console.log(`PlayerTwo has drawn the cards, ${game.playertwoNum}.`);
});
/**************************************************************
This checks if the numbers in the player arrays mactch the number in the computer array
**************************************************************/
$('#checkarrays').on('click', ()=>{
	console.log(game.checkMatches(game.playeroneNum));

	console.log(game.checkMatchesTwo(game.playertwoNum));
});
//IF PLAYERONENUM&PLAYERTWONUM INCLUDE MAINNUM, ENABLE BUTTON THAT ADDS 1 TO SCORE
//IF PLAYERONENUM&PLAYERTWONUM DO NOT INCLUDE MAINNUM, DISABLE BUTTON THAT ADDS 1 TO SCORE.