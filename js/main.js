
var equals = [];

var areFull=function () {

	if (typeof equals[0] === 'undefined' || typeof equals[1] === 'undefined'){
		return false;	
	}

   return true;

}


var addEquals = function (element) {
	equals.push(element); 

}

var areEquals = function() {
   if(equals[0].getValue() == equals[1].getValue())
	{
      return true;

    }
  return false;
}

console.log("************************");
console.log("Memory Game v1.1 beta   ");
console.log("************************");


var name = prompt("What is your name?");
var sizeTable = prompt("Insert the size for the table");

var player = new Player(name,sizeTable);
var game = new Game(player);

var table = game.beginGame();
var elementDiscovered = "";

//var lastElement= "";
//
while(game.getTries()>0)
{
  var positions = prompt("Inserts positions");
  var posX = positions.charAt(0);
  var posY = positions.charAt(1);
  
  table.discoverElement(posX,posY);

  elementDiscovered = table.getElementDiscovered(); //object element
  addEquals(elementDiscovered);/////////////////
  table.getFirstTable();
	if (areFull()) {
        if (areEquals()) {
		   game.incrementScore();
          //  table.getFirstTable();
		   }
		     else{
		          table.hide(equals[0]);
		          table.hide(equals[1]); 

		       
		          console.log('________________')

		          table.getFirstTable();
		          
		    }
		//table.getFirstTable();
		equals = [];
	}
	

  //table.getFirstTable();
  console.log("The current score is : "+ game.getScore());
  console.log("________________________");

  game.decrementTries();
  
}

console.log('Your final score is: ' + game.getScore());















