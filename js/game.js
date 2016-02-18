

var Game = function(player)
{

    var namePlayer =  player.getName();
    var sizeTable = player.getSize();

    var tries = sizeTable*2-2;
    var score = 0;
    var table;
     /**
     *
     * @param namePlayer this string recive the name of the player
     */    

    var player = new Player(namePlayer,sizeTable);

    this.decrementTries = function(){
      tries--;
    }
   
    this.endGame = function()
    {
      return score;
    }
    this.beginGame = function () {
      table = new Table(sizeTable);
      return table;         
    }
    this.discover = function (posX,posY) {
        table.discover(posX,posY);
    }
    this.incrementScore = function() {
        score++;
    }
    


};
