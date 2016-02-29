var Control = function (size,nameOfPlayer,option) {
	
    var player = new Player(nameOfPlayer);
    var tableDrawer = new TableDrawer(size,option);
    var elementEvenNumber = [];
    var namePlayer =  player;
    var tries = size*2;
    var score = 0;
   
    var tableDrawed;


    this.drawTable= function () {
        tableDrawed = tableDrawer.draw();
    }


    this.decrementTries = function(){
      tries--;
    }
   
    this.getScore = function()
    {
      return score;
    }
 
    this.incrementScore = function() {
        score++;
    }
    this.getNumberOfTries = function (argument) {
         return tries;
    } 
  	this.areTwoElements = function () {
        
  		if (typeof elementEvenNumber[0] === 'undefined' || typeof elementEvenNumber[1] === 'undefined'){
  			return false;	
  		}
  	   return true;
      
  	}

  	this.compareTwoElements = function() {

    	 if(elementEvenNumber[0].getValue() == elementEvenNumber[1].getValue()){

    	    return true;

    		}

  	   return false;
  	} 

    this.addListEvenNumber = function (element) {
      
         elementEvenNumber.push(element);
  	    
    }
    this.getListEvenNumber = function () {
       return elementEvenNumber;
    }
    this.emptyListOfValues = function () {
       elementEvenNumber = [];
    }
    
    this.play = function (posX, posY) {

      tableDrawed.displaySelectedElm(posX,posY);

    }
    this.triesG = function (argument) {
      var res = false;
      if (tries > 0) {

        res = true; 
      }
      return res;  
    }


 }


 



