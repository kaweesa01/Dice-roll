/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
var score, roundScore, activePlayer, dice, x;

score = [0, 0];
roundScore = 0;
activePlayer = 0;


var ids = ['score-0', 'score-1', 'current-0', 'current-1'];
for (let index = 0; index < ids.length; index++) {
  document.getElementById(ids[index]).textContent = 0;
}

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function () {
  dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png'

  if (dice !== 1) {
    roundScore += dice;
    dice = document.querySelector('#current-' + activePlayer).textContent = roundScore;

  } else {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';

    if (activePlayer === 0) {
      document.querySelector('.player-1-panel').classList.remove('active');
      document.querySelector('.player-0-panel').classList.add('active');

    }

    if (activePlayer === 1) {
      document.querySelector('.player-1-panel').classList.add('active');
      document.querySelector('.player-0-panel').classList.remove('active');
    }
  }
})

const hold = document.querySelector('.btn-hold');

hold.addEventListener('click', function () {
  score[activePlayer] += roundScore

  document.querySelector('#score-' + activePlayer).textContent = score[activePlayer]

  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';

    if (activePlayer === 0) {
      document.querySelector('.player-1-panel').classList.remove('active');
      document.querySelector('.player-0-panel').classList.add('active');

    }

    if (activePlayer === 1) {
      document.querySelector('.player-1-panel').classList.add('active');
      document.querySelector('.player-0-panel').classList.remove('active');
    }

    if(score[0] >= 20){
      document.querySelector('.player-0-panel').classList.add('winner');
      document.querySelector('#name-0').textContent = 'Winner!'
    }
    if(score[1] >= 20){
      document.querySelector('.player-1-panel').classList.add('winner');
      document.querySelector('#name-1').textContent = 'Winner!'
    }
 // document.querySelector('#score-0').textContent = `${score[0]}`;
 // document.querySelector('#score-1').textContent = `${score[1]}`;

})

const newGame = document.querySelector('.btn-new');
newGame.addEventListener('click', function () {
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('#current-1').textContent = '0';
  document.querySelector('#current-0').textContent = '0';

  document.querySelector('#score-0').textContent = '0';
  document.querySelector('#score-1').textContent = '0';

  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'none'

  score = [0, 0];
  roundScore = 0;
  activePlayer = 1;
  document.querySelector('.player-0-panel').classList.add('active');
  console.log(score[0])
  console.log(score[1])

  document.querySelector('#name-0').textContent = 'Player 1'
  document.querySelector('#name-1').textContent = 'Player 2'
})
*/

/***************************************************************/
/***************************************************************/
/***************************************************************/

////////Previous game code

var globalScore = [0, 0];
roundScore = 0;
activePlayer = 0;

////setting all scores to zero
var scoreVariables = ["#score-0", "#score-1", "#current-0", "#current-1"];

for (let index = 0; index < scoreVariables.length; index++) {
  document.querySelector(scoreVariables[index]).textContent = "0";
}

///hidding the dices on start
document.querySelector(".dice").style.visibility = "hidden";
document.querySelector(".dice2").style.visibility = "hidden";

/////roll button event
document.querySelector(".btn-roll").addEventListener("click", function () {
  var imgSrc = document.querySelector(".dice");
  var imgSrc2 = document.querySelector(".dice2");

  imgSrc.style.visibility = "visible";
  imgSrc2.style.visibility = "visible";

  let random = Math.floor(Math.random() * 6) + 1;
  let random2 = Math.floor(Math.random() * 6) + 1;

  ////displaying images at random

  imgSrc.src = "dice-" + random + ".png";
  imgSrc2.src = "dice-" + random2 + ".png";

  ///updating the round score
  roundScore += random + random2;

  document.querySelector("#current-" + activePlayer).textContent = roundScore;

  /////losing score if the dice contains a one and change to another player

  if (random === 1 || random2 === 1) {
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    ///changing active class
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("active");

    ///losing roound score
    roundScore = 0;
    document.querySelector("#current-0").textContent = "0";
    document.querySelector("#current-1").textContent = "0";
  }

  /////losing all score if two six are rolled at once and change to another player
  if (random === 6 && random2 === 6) {
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
    document.querySelector("#current-" + activePlayer).textContent = "0";
    document.querySelector("#score-" + activePlayer).textContent = "0";
    ///losing roound score
    globalScore[activePlayer] = 0;
    roundScore = 0;

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    ///changing active class
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("active");
  }
});

////geting value from input field

var getScoreValue;
document.querySelector(".btn-set").addEventListener("click", function () {
  getScoreValue = document.querySelector(".win-score").value;

  if (getScoreValue.length === 0) {
    document.querySelector(".warning").textContent = "Please enter a number";
  } else {
    if (parseInt(getScoreValue)) {
      document.querySelector(".setScore-bd").classList.add("setScore-up");
      document.querySelector(".setScore").textContent = parseInt(getScoreValue);
    } else {
      document.querySelector(".warning").textContent =
        "Please enter numbers only!!";
    }
  }
});

////hold button event

document.querySelector(".btn-hold").addEventListener("click", function () {
  globalScore[activePlayer] += roundScore;
  document.querySelector("#score-" + activePlayer).textContent =
    globalScore[activePlayer];

  roundScore = 0;

  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("active");
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  ///changing active class

  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("active");

  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";

  ////setting winner
  if (globalScore[0] >= getScoreValue) {
    document.querySelector(".player-0-panel").classList.add("winner");
    document.querySelector("#name-0").textContent = "Winner!";
    document.querySelector(".btn-roll").style.visibility = "hidden";
    document.querySelector(".btn-hold").style.visibility = "hidden";
  }

  if (globalScore[1] >= getScoreValue) {
    document.querySelector(".player-1-panel").classList.add("winner");
    document.querySelector("#name-1").textContent = "Winner!";
    document.querySelector(".btn-roll").style.visibility = "hidden";
    document.querySelector(".btn-hold").style.visibility = "hidden";
  }
});

//////new game

document.querySelector(".btn-new").addEventListener("click", function () {
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("active");

  document.querySelector(".setScore-bd").classList.remove("setScore-up");

  ////setting all scores to zero
  var scoreVariables = ["#score-0", "#score-1", "#current-0", "#current-1"];
  for (let index = 0; index < scoreVariables.length; index++) {
    document.querySelector(scoreVariables[index]).textContent = "0";
  }

  globalScore = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  ////setting buttons visible
  document.querySelector(".btn-roll").style.visibility = "visible";
  document.querySelector(".btn-hold").style.visibility = "visible";

  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("active");
  ///hidding the dices on start
  document.querySelector(".dice").style.visibility = "hidden";
  document.querySelector(".dice2").style.visibility = "hidden";

  //active player
  document.querySelector("#current-" + activePlayer).textContent = roundScore;

  ////romoving winner class
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector("#name-0").textContent = "Player 1";

  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector("#name-1").textContent = "Player 2";
});

/*
/////Variable Container
var variableConatiner = (function () {

  return {
    Scorevariable: ['#score-0', '#score-1', '#current-0', '#current-1'],
    activePalyer: 'active',
    roundScore: 0,
    globalScore: [0, 0],
    diceDOM: ['.dice', '.dice2'],
    CrtBtn: ['.btn-roll', '.btn-set', '.btn-new', '.btn-hold'],
    activePalyer:0
  }

})();

//////Controller
var controller = (function (varCtr) {

  /////setting All scores to zero
  function reset() {
    for (let i = 0; i < varCtr.Scorevariable.length; i++) {
      document.querySelector(varCtr.Scorevariable[i]).textContent = '0'
    }
    for (let i = 0; i < varCtr.diceDOM.length; i++) {
      document.querySelector(varCtr.diceDOM[i]).style.visibility = 'hidden'
    }
  }

  /////setting rolling event
  document.querySelector(varCtr.CrtBtn[0]).addEventListener('click', function () {
  
    var randomDices =Math.floor(Math.random() * 6) + 1 
    var randomDices2 =Math.floor(Math.random() * 6) + 1
    ////making dices appear at random
    for (let i = 0; i < varCtr.diceDOM.length; i++) {
      document.querySelector(varCtr.diceDOM[i]).style.visibility = 'visible'
    }
      document.querySelector(varCtr.diceDOM[0]).src = 'dice-'+randomDices+'.png'
      document.querySelector(varCtr.diceDOM[1]).src = 'dice-'+randomDices2+'.png'

    /////setting active player
    console.log(varCtr.activePalyer)
    document.querySelector('.player-' + varCtr.activePalyer + '-panel').classList.add('active');

    if (randomDices === 1 || randomDices2 === 1) {
      document.querySelector('.player-' +varCtr.activePalyer+ '-panel').classList.remove('active');
      varCtr.activePlayer === 0 ? varCtr.activePlayer = 1 : varCtr.activePlayer = 0;
      document.querySelector('.player-' + varCtr.activePalyer + '-panel').classList.add('active');
  
      ///changing active class
     // document.querySelector('.player-' + varCtr.activePlayer + '-panel').classList.add('active');
  
      ///losing roound score
      roundScore = 0;
      document.querySelector('#current-0').textContent = '0'
      document.querySelector('#current-1').textContent = '0'
    }
  
  })

  reset();

})(variableConatiner);*/
