 var ConsoleTable = function (size) {

 var table = new Table(size);
 var elementsMatrix = table.getMatrix();
 
    
    /*
    displaySelectedElm is a function that display an element
    according a the position:
    posX: Position X.
    posY: Position Y.
    */
    this.displaySelectedElm = function (posX,posY) { 
     
     currentElement = elementsMatrix[posX][posY]; 
	   currentElement.show();
	   control.addListEvenNumber(currentElement); 
     this.areValuesEqualsConsole();
	   this.updateConsole();
	    
    };

    var getStrings = function (tableToConvert) {
       var res = [];
      
       for (var i = 0 ; i < size; i++) {
           res.push(tableToConvert[i].getValue());
       } 
       return res;
    };


    this.updateConsole = function () {
    	  console.clear();
        this.printTableWithValues();
    };
  
    this.printTableWithValues = function () {
      var values = [];
       for (var i = 0; i < size; i++){
            values = getStrings(elementsMatrix[i]);
 
            console.log(i,values.join(' '));
        } 
    };

    /*
    areValuesEqualsConsole is a function that controls if the elements selected
    */
	  this.areValuesEqualsConsole = function() {
        var elementsEventNumber = control.getListEvenNumber(); 
	        if(control.areTwoElements()){
	            if (control.compareTwoElements()) {
	                control.incrementScore();
	                return true;

	            } 
	            else{

	            	  this.updateConsole()
                  elementsEventNumber[0].hide();
	                elementsEventNumber[1].hide();
	                alert('dont assertttt');
	                this.updateConsole();
	                
	            }
              control.emptyListOfValues();
	           
	        }
	        return false;
	   };
};

 