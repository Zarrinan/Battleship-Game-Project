*** Zarrina Niyazova / 08/13/2017 ***

# Battleship Game Proposal

## What is Battleship game?

Battleship (also Battleships or Sea Battle) is a guessing game for two players. It is played on ruled grids on which the players' fleets of ships (including battleships) are marked. The locations of the fleet are concealed from the other player. Players alternate turns calling "shots" at the other player's ships, and the objective of the game is to destroy the opposing player's fleet (from [wikipedia source](https://en.wikipedia.org/wiki/Battleship_(game))). 


## Wireframes

Game wireframes are 

[landing page](https://image.ibb.co/jeDKcF/Screenshot_2017_08_11_10_43_49.png)

[game first page](https://image.ibb.co/kUnO4v/Screenshot_2017_08_11_10_44_13.png)

## Initial thoughts on game structure

Initially, it is a 2 player game. First, I thought there would be 2 players, and for each player there would be a 10-row grid on the screen. Since players would not be able to hide their fleets from each other while placing them, and there is only one screen, I decided to make it a one player game, with the fleet randomly distributed on one grid by a computer, where a player has to guess where the battles are. The number of a player's turns will be limited, so there still will be a chance for a player not to win the game.

If a player hits a target, the event listener for that cell is  removed, when a battle is fully destroyed (all cells are clicked on) the player is notified (message on the screen). The game stops when a player destroyed all battles.

Working with event listeners, nested array and jQuery was challenging.

## Phases of Completion

First, I wrote down how I saw the game flow and all the features I wanted to see on the screen. Scores, a player's name, timer, css, animation etc. Not all of them can be implemented. There are the minimum necessary ones, and the optional ones will come later.
Then, I create the wireframes with minimum requirements and wrote the pseudocode.
And wrote the code.


Link to the game
[Battleship Game](http://pirate-christine-32633.bitballoon.com/)

## Links and Resources
[Battleship online game](http://www.battleshiponline.org/)

[Wikipedia](https://en.wikipedia.org/wiki/Battleship)
