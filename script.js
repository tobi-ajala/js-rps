//Logic

var score = 0;
var playerChoice;

var readable = { //declare variable options
  '0': 'Rock',
  '1': 'Paper',
  '2': 'Scissors'
};

var cpuChoice = {
  init: function() {
    this.store = Math.floor(Math.random() * 3); //to generate cpu random number rounded to a whole up to 3 (0, 1, 2)
    this.text = readable[this.store];
  },
  store: '',
  text: '',
};

var order = [0, 1, 2, 0]; //rock paper scissors winning order

var chooseWinner = function(player, cpu) {
  if(order[player] === order[cpu]) {
    return "Oooo it's a tie!";
  }
  if(order[player] === order[cpu + 1]) { //conditions for who wins & loses
    score++;
    return "You won!";
  } else {
    //score--; //to remove one point from the score if the user loses
    return "You lost :(";
  }
}

//UI

var paragraph = document.querySelector('p');

var assignClick = function(tag, pos) {

  tag.addEventListener('click',  function() { //assign click listener
    playerChoice = pos; //set the players choice
    cpuChoice.init();
    paragraph.innerText = "The computer chose " + cpuChoice.text; //give feedback to the cpuChoice
    paragraph.innerText += "\n" + chooseWinner(playerChoice, cpuChoice.store); //determine a wiiner
    paragraph.innerText += "\n" + "Score: " + score;//dislay the winner & current score
  });
}

var images = {
  tags: document.getElementsByTagName('img'),
  init: function() {
    for(var step = 0; step < this.tags.length; step++) { //loop through users clicked option
      assignClick(this.tags[step], step);
    }
  }
};
images.init();

//console.log(chooseWinner(1, 0));

//cpuChoice.init();
//console.log('cpuChoice:', cpuChoice.store, cpuChoice.text);
