var xTurn = true;
var oTurn = false;
var oMoves = [];
var xMoves = [];


var winConditons = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

$('#reset').click(function () {
  $('.box').removeClass('X, O').html('').addClass('clear')
  xMoves = []
  oMoves = []
  xTurn = true;
  oTurn = false;
  whatPlayer();

})
//x o grid inputs
$('.box').click(function(){
  if (xTurn === true) {
  //add X class and x to box
  $(this).addClass('X').html('X')
  xMoves.push(parseInt($(this).attr('data-num')))
  console.log(xMoves, 'x');
  oTurn = true;
  xTurn = false;
  whatPlayer();
  winnerCheck()


  } else if (oTurn === true) {
    //add O class and o to box
    $(this).addClass('O').html('O')
    oMoves.push(parseInt($(this).attr('data-num')))
    console.log(oMoves, 'o');
    oTurn = false;
    xTurn = true;
    whatPlayer();
  }
});
function winnerCheck() {
  for (var i = 0; i < winConditons.length; i++) {
    if (winConditons[i] === xMoves){
      alert('winner x')
    } else if (winConditons[i] === oMoves) {
      alert('winner y')
    }
  }
}
winnerCheck()
function whatPlayer() {
  if (xTurn ===true){
    $('.playerTurn').html("It is X's turn")
  } else if (xTurn === false) {
    $('.playerTurn').html("It is O's turn")
  }
}
