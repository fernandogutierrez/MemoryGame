var Control = function (size,nameOfPlayer,option) {
	
    var player = new Player(nameOfPlayer);
    var tableDrawer = new TableDrawer(size,option);
    var elementEvenNumber = [];
    var tries = size*2;
    var score = 0;
   
    var tableDrawed;

    /*
    drawTable is a function that decide how will be draw
    the table according the parameter option.
    */
    this.drawTable= function () {
        tableDrawed = tableDrawer.draw();
    };

    this.decrementTries = function(){
      tries--;
    };
   
    this.getScore = function()
    {
      return score;
    };
 
    this.incrementScore = function() {
        score++;
    };
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
    this.getListEvenNumber = function () {
       return elementEvenNumber;
    };
    /*
    emptyListOfValues is a function that clear elementEvenNumber array.
    */
    this.emptyListOfValues = function () {
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
    triesG is a function that controls the number of tries.
    */
    this.triesOfConsole = function (argument) {
      var res = false;
      if (tries > 0) {

        res = true; 
      }
      return res;  
    };


 };


 



