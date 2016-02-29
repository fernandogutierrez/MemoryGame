var ConsoleTable = function (size) {

 var table = new Table(size);
 var elementsMatrix = table.getMatrix();
 


    this.displaySelectedElm = function (posX,posY) { 
     
       currentElement = elementsMatrix[posX][posY]; //object 
	   currentElement.show();
	   control.addListEvenNumber(currentElement); 
       this.areValuesEqualsConsole();
	   this.updateConsole();
	    
    }

     var getStrings = function (tableToConvert) {
       var res = [];
      
       for (var i = 0 ; i < size; i++) {
           res.push(tableToConvert[i].getValue());
         } 
        return res;
    }


    this.updateConsole = function () {
    	console.clear();
        this.printTableWithValues();
    }
  
    this.printTableWithValues = function () {
      var values = [];
       for (var i = 0; i < size; i++){
            values = getStrings(elementsMatrix[i]);
 
            console.log(i,values.join(' '));
        } 
    }

   
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
	    }


}

 