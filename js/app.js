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
/*********************************************************************************
OBJECTS IN GAME; GAME, PLAYER OBJECTS
*********************************************************************************/
const game = {
	time: null,
	score: null,
	mainNum: [],  
	playeroneNum: [], 
	playertwoNum: [],
	interval: null,
	player1: null,
	player2: null,
	/*so you're making a game object and the object is just like building a game. generalize
	// how a game is made up. a timer, a scoreboard, the players playing. speaking of wouldn't you need to make the court, thats the exterior htmlcss i think. the functions you make simulate the actions/verbs that would happen on the court and as the game's playing ykno*/
	
/**************************************************************
This function makes the players and starts the game
**************************************************************/
	setNameandStartGame(){


		//get the name
		const name = $('#playerOneInput').val()
		//instantiate, pass in name, (get from input with jquery)
		const playerOne = new Player(name);

		this.player = playerOne;

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



		game.setTimer();
		game.generatemainNum();
		game.generateplayerNums();


	},

/**************************************************************
This generates the main number 
**************************************************************/
	generatemainNum(){
		this.mainNum = [],
		/*and take the num and put it in the empty spot up there under score*/
		// this.mainNum = (Math.floor(Math.random() * 20))
		$('#compDiv').text("");
			const num = (Math.floor(Math.random() * 20))
			this.mainNum.push(num);

			const $div = $('<div></div>')

			$div.text(num);

			$('#compDiv').append($div);
			
		//main number is generating and getting stored in this.mainNum but it isn't getting refreshed everytime the setInterval is being run.
	},
/**************************************************************
This generates the player numbers that are trying to match the number above ^
**************************************************************/
	generateplayerNums(){		
		// make player 1 nums be empty
		this.playeroneNum = [];

		//clear the old numbers from the screen
		$('#playerDiv1').text("");
		
		//makes 10 random numbers and writes them to the screen
		for(let i = 0; i < 10; i++){

			/// ----------- UPDATE THE DATA ------------------- ///

			// get random number in var num
			const num = (Math.floor(Math.random() * 20))

			//we're storing the number in a varibale to use later
			this.playeroneNum.push(num);


			/// ------------ UPDATE THE SCREEN to reflect changes in data ---------------- ///

			// create div with numStyle and add
			const $div = $('<div></div>');
			
			//put the number in the div
			$div.text(num);
			// console.log($div);

			//append div to pOne container
			// console.log($('#playerDiv1'));
			
			// put number divon the screen
			$('#playerDiv1').append($div);
		}


		// make player 2 nums be empty

		this.playertwoNum = []

		//clear the old numbers from the screen
		$('#playerDiv2').text("");

		//makes 10 random numbers and writes them to the screen
		for(let i = 0; i < 10; i++){

			// get the number in a variable
			const num = (Math.floor(Math.random() * 20))

			//storing the number in a variable to use later
			this.playertwoNum.push(num);
		
		/// ------------ UPDATE THE SCREEN to reflect changes in data ---------------- ///
		//create a div
		const $div = $('<div></div>');

		//put the number we stored in the variable in the div we just declared
		$div.text(num);

		//append*write* the dive to pTwo container
		$('#playerDiv2').append($div);				
		}

	},
/**************************************************************
This function checks to see if the players numbers match the computers
**************************************************************/
	checkMatches(player){
		if(this.playeroneNum.indexOf(this.mainNum[0]) !== -1){
			return true;
		} else {
			return false;
		}
		// if players's array of numbers contains main num
			// return true/
		// else 
			// return false
	},

	checkMatchesTwo(player) {

		// if players's array of numbers contains main num
			// return true/
		// else 
			// return false


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
/*********************************************************************************
TIMER INTERVALS -- this determines when the random numbers get regenerated
*********************************************************************************/	
	setTimer() {
		let time = 0;
		this.interval = setInterval(()=>{
			time++;

			// updating computer number
			if(time % 3 === 0){
				 this.generatemainNum()
			}
			// update player numbers
			if(time % 3 === 0){
				this.generateplayerNums()
			}

			$('#timer').text('Timer ' + time);

		}, 1000)

	},

};

/**************************************************************
END GAME OBJECT
**************************************************************/
/********************************************************************************
THIS IS THE MAIN PLAYER CLASS, BLUEPRINT FOR WHEN PLAYERS INPUT THEIR NAME AND MAKE THEIR PLAYER
********************************************************************************/
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
		if(game.playeroneNum.indexOf(this.mainNum[0]) != -1){
			score++;
		}
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
$(document).on('keypress', (e) => { 
	if(e.key==="z") {
	console.log(game.checkMatches(game.playeroneNum));
	// increaseScore()
	// if number in hand matches main num increaseScore()
	//else decreaseScore()

	} if(e.key==="/"){
	console.log(game.checkMatchesTwo(game.playertwoNum));
	// if number in hand matches main num increaseScore()
	//else decreaseScore()
	}
})
//connect z and / to checkMatches function, and if checkmatches function = true add one to score.
$('#dealbutton').on('click', ()=>{
	game.setNameandStartGame();

});
/**************************************************************
This checks if the numbers in the player arrays mactch the number in the computer array
**************************************************************/
// $('#checkarrays').on('click', ()=>{
// 	console.log(game.checkMatches(game.playeroneNum));
// 	console.log(game.checkMatchesTwo(game.playertwoNum));
// });
