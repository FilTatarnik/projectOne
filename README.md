------------------------------------
	USER STORIES
x User reloads page
x User sees the instructions fly into screen from the left
x User should be able to read instructions and know how the game plays and how to add to their score
x User 1 and User 2 should be able to input their names and hit the 'Start Game n00b' button to start the game
x User has a hand of random numbers that regenerate after X seconds
x Dealer has one card the regenerates after X seconds
x User needs to constantly check their hand and the Dealers hand to see if any of the numbers in their hand match the dealers
x If user see's a match, user should be able to click, "z" for Player 1 to increase their score by one, and "m" for Player 2 to increase their score by one.
x If user hits the score button when there is not a match, their score goes down one.
x First User to 10 points wins.

-


-------------------------------------
	WIRE FRAME

+------------------------------------------------------------------------------------------+
|-------------+      +---------------------------------------------------------+           |
||  Start     |      |                    INSTRUCTIONS                         |           |
||            |      +---------------------------------------------------------+           |
+-------------+               +---------------------------+                                |
|                             |                           |                                |
|                             |                           |                                |
|                             |                           |                                |
|                             |            #              |                                |
|                             |                           |                                |
|                             |                           |                                |
|                             |                           |                                |
|                             |                           |                                |
|                             +---------------------------+                                |
|                                                                                          |
|                                                                                          |
|                                                                                          |
+-------------------------------------------+----------------------------------------------+
|                                           |                                              |
|                                           |                                              |
|      Player 1 Name                        |               Player 2 Name                  |
|      Score : #                            |                   Score: #                   |
|                                           |                                              |
|       +---------+                         |                 +-----------+                |
|       |         |                         |                 |           |                |
|       |    #    |                         |                 |     #     |                |
|       |    #    |                         |                 |     #     |                |
|       |    #    |                         |                 |     #     |                |
|       |    #    |                         |                 |     #     |                |
|       |    #    |                         |                 |     #     |                |
|       |    #    |                         |                 |     #     |                |
|       |    #    |                         |                 |     #     |                |
|       |    #    |                         |                 |     #     |                |
|       |         |                         |                 |           |                |
|       |         |                         |                 |           |                |
|       +---------+                         |                 +-----------+                |
|                                           |                                              |
+-------------------------------------------+----------------------------------------------+



------
-----------------------------------

(my old MVP) MVP
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

