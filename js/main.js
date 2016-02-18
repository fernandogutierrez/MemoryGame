
var name = prompt("What is your name?");
var sizeTable = prompt("Insert the size for the table");

var player = new Player(name,sizeTable);
var game = new Game(player);

var table = game.beginGame();
var elementDiscovered = "";
var lastElement= "";
while(game.getTries()>0)
{

  var posX = prompt("Insert a position X to discover");
  var posY = prompt("Insert a position Y to discover");
  
  table.discoverElement(posX,posY);

  elementDiscovered = table.getElementDiscovered(); //object element

  if (lastElement != "") {

  		if (lastElement.getValue() === elementDiscovered.getValue()) { 

         	game.incrementScore()

     	}
     	else{
     		table.hide(lastElement);
        	table.hide(elementDiscovered);
     	}
  	
  }
  lastElement = table.getElementDiscovered();
  game.decrementTries();
}
console.log("The score is : "+ game.endGame());











