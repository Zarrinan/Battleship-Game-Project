window.onload = function() {

 //grab all the elements on the page
    $body = $('body');
    $landingPage = $('.landingPage');
    $gameFirst = $('.gameFirst');
    $gameSecond = $('.gameSecond');
    $gameThird = $('.gameThird');
    $grid = $('.grid')
    $startgame = $('#startgame');
    $cell = $('.cell');
    $cell2 = $('.cell2');
    $cellb = $('.cellb');
    $cellRow = $('.cellRow');
    $announce = $('.announce');
    $fleet = $('.fleet');
    $ship5 = $('#ship5');
    $ship4 = $('#ship4');
    $ship3 = $('#ship3');
    $ship3b = $('#ship3b');
    $ship2 = $('#ship2');
    $formhere = $('#formhere');
    $gameFirst.hide();
    $gameSecond.hide();
    $gameThird.hide();
    $shipCells = $('.cellb');
    $input = $('#forName');
    $winName = $('#winnersName');


//enter a default placeholder phrase in input value
  if ($input.val() === '') {
    $input.attr('placeholder', 'enter a player\'s name');
//and give a focus to the input button
    $input.focus();
  }


//once a player enters their name, by clicking on the submit button, or by
//hitting return a player goes from landding page to the game first page
$formhere.submit(function goToFirst(){
  event.preventDefault();
        $gameFirst.show();
        $gameSecond.hide();
        $landingPage.hide();
        $gameThird.hide();
    });
//once a player clicks 'start' button, the game second page uploads
$startgame.click(function goToSecond(){
        $gameFirst.hide();
        $gameSecond.show();
        $landingPage.hide();
        $gameThird.hide();
 //by clicking on ships,  a player made them invisible, I'll need them on the game second page
 //so, a while a player goes to the game second page, ships are visible again
        $ship5.css('visibility', 'visible');
        $ship4.css('visibility', 'visible');
        $ship3.css('visibility', 'visible');
        $ship3b.css('visibility', 'visible');
        $ship2.css('visibility', 'visible');
    });
//once winning condition is met, a player is automatically redirected to the third page
//with a congratulation message
function goToThird(){
        $gameFirst.hide();
        $gameSecond.hide();
        $landingPage.hide();
        $gameThird.show();
    };
//below functions are for the ships uploading to the dock
//once a player clicks on a ship, it becomes invisible (is uploaded on the dock)
$ship5.click(function placeShip5(){
        $ship5.css('visibility', 'hidden');
    });
$ship4.click(function placeShip4(){
        $ship4.css('visibility', 'hidden');
    });
$ship3.click(function placeShip3(){
        $ship3.css('visibility', 'hidden');
    });
$ship3b.click(function placeShip3b(){
        $ship3b.css('visibility', 'hidden');
    });
$ship2.click(function placeShip2(){
        $ship2.css('visibility', 'hidden');
    });


//reference array for ships placement, every ship is a nested array
// within an arrays of all ships. Every item is a cell id, where a ship is placed
const $battleShips = [['c02', 'c12', 'c22', 'c32', 'c42'], ['c86','c87','c88','c89'], ['c14', 'c15', 'c16'], ['c73','c74', 'c75'], ['c09', 'c19']];

//once there is a target hit(a player clicked on a cell where a ship is placed)
//by a cell id in a reference array, it will find it's position and place on the same
//position in this array
const $ships = [[], [], [], [], []];

//click event on all cells without ships, once clicked they'll turn grey
//which means there is no ship,
$cell2.click(function turnFired() {
$cell2 = $(this).css('background-color', 'grey');
//once a cell is clicked, it's event listener is removed
$(this).off("click");
});

//click event on all cells ships where ships are, once clicked they'll turn orange
//which means there is a ship,
$cellb.click(function turnHit() {
$cell2 = $(this).css('background-color', 'orange');
//once a cell is clicked, it's event listener is removed
$(this).off("click");
//once a target is hit, check if a whole ship is destroyed
checkShip5();
checkShip4();
checkShip3();
checkShip3b();
checkShip2();
//and check if all ships are destroyed
checkWin();
});


//once a cell with ship is clicked, take that cell's Id
//and find its position on a reference $battleships array
//and after place that cell's Id in $ships nested array to the same position
$cellb.click(function sendToArray() {
  let cellId = $(this).attr('id');
  $battleShips.forEach(function(d,i){
    const position = d.indexOf(cellId);
    if(position > -1) {
    console.log(i, position)
    $ships[i].push(cellId);
//check if it works
    console.log($ships);
    console.log($ships[0].length, $ships[1].length, $ships[2].length, $ships[3].length, $ships[4].length)
    }

  })
});

//check if a ship is destroyed, once a nested array within $ships array reaches a certain
//length, condition is met, which means, the whole ship is destroyed
function checkShip5() {
  if ($ships[0].length === 4) {
    setTimeout(function() {alert('Ship 5 has been destroyed'); }, 300);
  }
}

function checkShip4() {
  if ($ships[1].length === 3) {
    setTimeout(function() {alert('Ship 4 has been destroyed'); }, 300);
  };
}

function checkShip3() {
  if ($ships[2].length === 2) {
    setTimeout(function() {alert('Ship 3 has been destroyed'); }, 300);
  }
}

function checkShip3b() {
  if ($ships[3].length === 2) {
    setTimeout(function() {alert('Ship 3b has been destroyed'); }, 300);
  }
}

 function checkShip2() {
  if ($ships[4].length === 1) {
    setTimeout(function() {alert('Ship 2 has been destroyed'); }, 300);
    console.log($ship2);
  }
}

//check if there is a win, if the total length of all nested arrays equals to 16,
//that means all nested arrays reached their maximum length, which means there is a win
function checkWin() {
  console.log($ships[0].length + $ships[1].length + $ships[2].length + $ships[3].length + $ships[4].length);
  if ($ships[0].length + $ships[1].length + $ships[2].length + $ships[3].length + $ships[4].length === 16){
  setTimeout(function() {alert('You are a winner!'); }, 500);
//automatically redirect a player to the third page with congratulations message, after a player
//sees alerts on the last ship being destroyed and that they won
  setTimeout(function() {goToThird();}, 600);
//display a player's name in a congrats message
  $winName.append($input.val());
  }
}
};























