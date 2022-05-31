var win ,i, check , flag = 1 , value , getvalue;
var seconds = 10, timeleft;
var time;

window.addEventListener('load', () => {
  count();
});

function tictac(id) {
  function element(id) {
    let player = window.localStorage.getItem("player1");
    if (flag) {
      document.getElementById('header').innerHTML = `Player 1 choose ${player} `;
      document.getElementById('result').innerHTML = "Player 1 turn" ;
      document.getElementById(id).value = player;
      flag = 0;
    }
    else {
      document.getElementById('result').innerHTML = "Player 2 turn" ;
      document.getElementById(id).value = (player === 'X') ? '0' : 'X';
      flag = 1;
    }
    reStartTimer();
    document.getElementById(id).disabled = true;
  }
  element(id);
  let b1, b2, b3, b4, b5, b6, b7, b8, b9 ;
  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  b7 = document.getElementById("b7").value;
  b8 = document.getElementById("b8").value;
  b9 = document.getElementById("b9").value;

  win = [
    [b1,b2,b3],
    [b4,b5,b6],
    [b7,b8,b9],
    [b1,b5,b9],
    [b3,b5,b7],
    [b1,b4,b7],
    [b2,b5,b8],
    [b3,b6,b9]
  ];

  let winvalue = winStatus();
  let player = window.localStorage.getItem("player1");
  if (winvalue) {
    const successMessage = player == winvalue ? 'Player 1 won' : 'Player 2 won';
    document.getElementById('result').innerHTML = successMessage;
    window.alert(successMessage);
    stopTimer();
    return;
  }
}

function winStatus() {
  for(i=0 ; i<8 ;++i) {
    value = new Set(win[i]);
    let [getvalue] = value;
    if (value.size==1) {
      return getvalue;
    }
  }
}

function reset() {
  var i,id,b;
  location.reload();
  for(i=0;i<9;i++) {
    id='b'+i;
    document.getElementById(id).value = '';
  }
}
function draw() {
  document.getElementById('result').innerHTML = "Match Draw";
  window.alert("Match Draw");
}
function playerChoice(val) {
  window.localStorage.setItem("player1",val);
}

function count() {
  time = setInterval(function () {
    timeleft = seconds--;
    if(timeleft < 0){
      clearInterval(time);
      document.getElementById('timer').innerHTML = "Your time is out";
      window.alert("your time is out");
      if (flag == 1){
        document.getElementById('result').innerHTML = `Player 2 won`;
      }
      else if (flag == 0) {
        document.getElementById('result').innerHTML = `Player 1 won`;
      }
    }
    else {
      document.getElementById('timer').innerHTML = `Timer :- ${timeleft}`;
    }
  }, 1000);
}
function reStartTimer()
{
  seconds = 10;
  clearInterval(time);
  count();
}
function stopTimer() {
  clearInterval(time);
}
