*** Zarrina Niyazova / 08/13/2017 ***

# Battleship Game Proposal

## What is a Battleship game?

"Battleship (also Battleships or Sea Battle) is a guessing game for two players. 
It is played on ruled grids on which the players' fleets of ships (including battleships) are marked. 
The locations of the fleet are concealed from the other player. Players alternate turns calling "shots" 
at the other player's ships, and the objective of the game is to destroy the opposing player's fleet". 
(from [wikipedia](https://en.wikipedia.org/wiki/Battleship_(game))). 

## Initial thoughts on game structure

Since both players would play on the same screen, they would not be able to hide their fleets from each other 
while placing them, so I decided to make it a one player game, with the fleet of battleships hidden from a player on the grid. 
A player would click on cells on the grid trying to find a battleship. If a player hits a target, (clicks on a cell, where a part 
of a battleship is located) the cell would turn orange color, when a battle is fully destroyed (all cells where a battleship is 
located are clicked on) the player is notified (alert message). If a player clicks on a cell with no battleship on it, 
it would turn grey color. The number of clicks out of a target is limited to 35, at this moment the game stops, user is notified 
with alert message and the game automatically reloads. If a player destroyed all battleships (clicked on all cells
with battleships) they win and a player is redirected to a page with a congratulation message.

## My Battleship Game Whiteboarding looked like:
<img src="https://image.ibb.co/b2eJsF/bg.jpg" alt="Drawing" width="600px" height="800px"/> 

It should've had minimum two pages - landing page and a game page. I marked in blue color all necessarily features I 
thought to include into the game. In orange color -  all optional features I would include after the game mvp is done. 
Below the wireframes I wrote down the game logic as I saw it at that moment. As I wrote it down and presented 
my game to our squad and instructor, I came up with two questions, marked in green. For the game mvp I decided to 
make one static instance of the game (with the battleships placed on a certain place, not distributed randomly).

## Phases of Completion

I expected to create a basic clikable model of the game by Friday, day three of the project. 
On the first day I came up with the game idea and the game main logic. I wrote pseudocode. At the beginning, I had an idea of creating 
the grid and cells with DOM manipulation on the fly with randomizing algorithm, bu lost one day trying to solve the functions. 
I could not predict how much time it would take or understand if I was close or not to the solution, so I went with
the static one instance of the game. On the day three I wrote the basic html, css and first functions of jQuery. On day four 
I wrote a basic clickable model, which still had some issues, which I was able to solve on the fifth day of the project.

## Technologies used

- HTML
- CSS
- jQuery

You can play Battleship Game [here](http://diver-kiloliter-41852.bitballoon.com/)
