var Control = function (size,nameOfPlayer,option) {
	
    var player = new Player(nameOfPlayer);
    var tableDrawer = new TableDrawer(size,option);
    var elementEvenNumber = [];
    var tries = size*size;
    this.goal = size;

    var score = 0;
   
    var tableDrawed;

    /*
    drawTable is a function that decide how will be draw
    the table according the parameter option.
    */
    this.drawTable = function () {
        tableDrawed = tableDrawer.draw();
    };
    
    /**
     * This methos is to decrement number of tries
     */
    this.decrementTries = function(){
        tries--;
    };
    
    /*
     * This methos is to return the score riched by the player
     */
    this.getScore = function()
    {
      return score;
    };
    /*
     * This method is to increment the score when a user guess the selected cells
     */
    this.incrementScore = function() {
        score++;
    };
    /**
     * this method returns the number of tries
     */
    this.getNumberOfTries = function () {
         return tries;
    }; 
    /*
    areTwoElements is a function that verify if the elementEvenNumber is full 
    with two elements.
    */
  	this.areTwoElements = function () {
        
  		if (typeof elementEvenNumber[0] === 'undefined' || typeof elementEvenNumber[1] === 'undefined'){
  			return false;	
  		}
  	   return true;
      
  	};
     /*
    compareTwoElements is a function that verify if two elements are equals 
    when these elements were selected(Click on them).
    */
  	this.compareTwoElements = function() {

    	 if(elementEvenNumber[0].getValue() == elementEvenNumber[1].getValue()){

    	    return true;
      }

  	   return false;
  	}; 
    /*
    addListEvenNumber is a function that add an element selected(Click on it)
    in elementEvenNumber array.
    */
    this.addListEvenNumber = function (element) {
      
         elementEvenNumber.push(element);
  	    
    };
    /*
     * This method is to return the list of even numbers
     */
    this.getListEvenNumber = function () {
       return elementEvenNumber;
    };
    /*
    emptyListOfValues is a function that clear elementEvenNumber array.
    */
    this.emptyListEvenNumber = function () {
       elementEvenNumber = [];
    };
    /*
    play is a function that display an element discover in the table according:
    posX: Position en X.
    posY: Position en Y.
    */
    this.playConsole = function (posX, posY) {
      tableDrawed.displaySelectedElm(posX,posY);
    };
    /*
     * triesG is a function that controls the number of tries.
    */
    this.triesOfConsole = function (argument) {
      var res = false;
      if (tries > 0) {

        res = true; 
      }
      return res;  
    };
    /*
     * This method is to determine if the positions specifyed are numbers 
     */  
    this.isNumbers = function (positions){
      var exp = /\d$/;
      return exp.test(positions);
    }

 };


 



