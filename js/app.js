/*********************************************************************************
INSTRUCTIONS DIV THAT SLIDES INTO FRAME WHENEVER USER RESFRESHES PAGE
*********************************************************************************/
$(function(){
    
    $(".mydiv").addClass("active");
    console.log($(".mydiv"));
    
});	
/*********************************************************************************
OBJECTS IN GAME; GAME, PLAYER OBJECTS
*********************************************************************************/
const game = {
	time: null,
	mainNum: [],  
	playeroneNum: [], 
	playertwoNum: [],
	interval: null,
	player1: null,
	player2: null,
/**************************************************************
This function makes the players and starts the game
**************************************************************/
	setNameandStartGame(){
		//get the name
		const name = $('#playerOneInput').val()
		//instantiate, pass in name, (get from input with jquery)
		const playerOne = new Player(name);

		this.player1 = playerOne;

		$('#playerOneInput').hide();

		$('#playerOneNameBut').hide();

		$('#pOneDisplay').append(name);


		const nameTwo = $('#playerTwoInput').val()
		//instantiate, pass in name, (get from input with jquery)
		const playerTwo = new Player(nameTwo);

		this.player2 = playerTwo;

		$('#playerTwoInput').hide();

		$('#playerTwoNameBut').hide();

		$('#pTwoDisplay').append(nameTwo);


		game.setTimer();
		game.generatemainNum();
		game.generateplayerNums();

	},

	win() {
		// tell the user they won!
		$("#gamewon").append('Winner!');
		// $("#gamewon").velocity("transition.bounceIn", 2000)

		// stop the timer
		clearInterval(this.interval);

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
			$('#compDiv').css('color', "white");

			const $div = $('<div></div>')

			$div.text(num);
			$div.addClass('matchNum');

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
	},
	checkMatchesTwo(player) {
		if(this.playertwoNum.indexOf(this.mainNum[0]) !== -1){
			return true;
		} else {
			return false;
		}
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
	increaseScoreOne(){
		if(game.playeroneNum.indexOf(game.mainNum[0]) != -1){
			this.score++;
			$('#score1').text('Score: ' + this.score);	
		}else {
			this.score--;
			$('#score1').text('Score: ' + this.score);	
		}if(this.score === 10){
			game.win();
		}

	}

	increaseScoreTwo(){
		if(game.playertwoNum.indexOf(game.mainNum[0]) != -1){
			this.score++;
			$('#score2').text('Score: ' + this.score);	
		}else {
			this.score--;
			$('#score2').text('Score: ' + this.score);	
		}if(this.score === 10){
			game.win();
		}
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
		game.player1.increaseScoreOne();

	} 

	if(e.key==="m"){
		console.log(game.checkMatchesTwo(game.playertwoNum));
		game.player2.increaseScoreTwo();
	
	}
})

$('#dealbutton').on('click', ()=>{
	game.setNameandStartGame();

});

// if a player clicks their score button more than once before the other person clicks theirs, then the clicks player1 did(lets say 3) will unload onto the player2 when he clicks his. so if player1 clicks his button 3 times then player 2 hits his his score will go up or down 3 points