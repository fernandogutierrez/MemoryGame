var imported = document.createElement('script');
imported.src = 'C:/Users/FernandoGutierrez/Desktop/Solutions/JavaScript2/MemoryGame/js/table.js';
document.head.appendChild(imported);

var Game = function(player.getName(),player.getSize())
{
    var tries;
    var score;
    var table;
    

    

    this.decrementTries = function(){
      tries--;
      }
    this.endGame = function()
      {
      return score;
      }
    this.beginGame = function (argument) {
      table = new Table(player.getSize());      	 
    }
    this.discover = function (posX,posY) {
    	table.discover(posX,posY);
    }
   

};