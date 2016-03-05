
var Table = function(size){

    
    var numberOfFields = size * size;
    var elementsMatrix = [];
    var listOfBusyPosXY = [];
    var element; 
    

    /*
    inListPosXY is a function that verify if the parameter 
    posXY(a position in the Table)has been full already by an element.
    This function is used when the table will be full. 
    */
    var inListPosXY = function (posXY) {
       var res = false;
       listOfBusyPosXY.forEach(function(entry) {
              if(entry == posXY)
                res = true;
            })
      return res;
    };
    /**
     * This method return a random number from 0 to maxNumberOfRan field
     */
    var getRandom= function(){
    
        var maxNumberOfRan = size;
        return Math.floor((Math.random()*maxNumberOfRan)); 
    };
    /*
    fillOneElement is a function that stores an element to a specific postion.
    in elementsMatrix array.
    posX: Position in X. 
    posY: Position in Y.
    */
    var fillOneElement = function (element, posX,posY) {        
      elementsMatrix[posX][posY] = element;
    };
 
    /*
    fillOnePair is a function that control the postitions(random) 
    that are not busy using fillOneElement function to store this 
    element in elementsMatrix array. 
    */
    var fillOnePair = function (element) {
       var posNotFound = true;
    
        while (posNotFound)
        {
             var posX = getRandom();
             var posY = getRandom(); 
             element.setPosXY(posX,posY);        
             var posXY = posX.toString()+posY.toString();

             if (!(inListPosXY(posXY))){
                listOfBusyPosXY.push(posXY);
                fillOneElement(element,posX,posY);
                posNotFound = false;
             }
        } 
    };
    /*
    fillTable is a function to full the table with '*' the first time.
    */
    var fillTable = function () {

          for (var i = 0; i < size; i++)
          {
                 elementsMatrix[i] = [];
              for (var j = 0; j < size; j++)
              {
                     elementsMatrix[i][j] = "*";
              }
          }
     };

    /**
     * This method return a Element and generate its value 
     */
    var getElement = function () {
      element = new Element();  
      element.generateValue();

      return element;
    };
    /**
     * This method returns the size of the table
     */
    this.getSize = function () {
      return size;
    };
    /*
    fillPairs is a function that full the table controling that 
    the number of elements of the same type will be pair.
    */
    var fillPairs = function () {
      var numberOfPairs = Math.floor(numberOfFields/2);
        while (numberOfPairs>0) {
          
            var element1 = getElement();//element to field of object
            fillOnePair(element1);


            var element2 = new Element();
            element2.setValue(element1.getGeneratedValue());
            fillOnePair(element2); 

            numberOfPairs--;
        }
    };

    /*
     * This method is to return the matrix genereated in the table class
     */
    this.getMatrix= function () {
     return elementsMatrix;
    };


    fillTable();
    fillPairs();

};