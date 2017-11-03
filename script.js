var xTurn = true;
var oTurn = false;
var oMoves = [];
var xMoves = [];


var $winConditons = $([[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]])

$('#reset').click(function () {
  $('.box').html('').attr("class", "box clear")
  xMoves = []
  oMoves = []
  xTurn = true;
  oTurn = false;
  whatPlayer();

})
//x o grid inputs
$('.box').click(function(){
  if (xTurn === true && ($(this).attr('class') === 'box'|| $(this).attr('class') ==='box clear' )) {
  //add X class and x to box
  $(this).attr('class', 'box X').html('X')
  xMoves.push(parseInt($(this).attr('data-num')))
  console.log(xMoves, 'x');
  oTurn = true;
  xTurn = false;
  whatPlayer();
  winnerCheck(xMoves, 'X')


} else if (oTurn === true && ($(this).attr('class') === 'box' || $(this).attr('class') ==='box clear' )) {
    //add O class and o to box
    $(this).attr('class', 'box O').html('O')
    oMoves.push(parseInt($(this).attr('data-num')))
    console.log(oMoves, 'o');
    oTurn = false;
    xTurn = true;
    whatPlayer();
    winnerCheck(oMoves, 'O');
  }
});
function winnerCheck(movesArray, name) {
  //
  // if (winConditons.indexOf(xMoves) > -1){
  //   alert('winner x')
  // } else if (winConditons.indexOf(oMoves) > -1)  {
  //   alert('winner y')
  // for (var i = 0; i < winConditons.length; i++) {
  //
  //   }
  //   if (winConditons[i] === xMoves ){
  //     alert('winner x')
  //   } else if (winConditons[i] === oMoves)  {
  //     alert('winner y')
  //   }
  //
  // }
  $winConditons.each(function (index, combination) {
    var winCounter = 0;
    $(combination).each(function (index, number) {
      if (movesArray.indexOf(number) !== -1) {
        winCounter++;
      }
      if (winCounter === 3) {
        alert(name + 'WINS')
      }
    })
  })
}

function whatPlayer() {
  if (xTurn ===true){
    $('.playerTurn').html("It is X's turn")
  } else if (xTurn === false) {
    $('.playerTurn').html("It is O's turn")
  }
}
