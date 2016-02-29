
var Table = function(ssize){

    var size = ssize; //size of the table
    var numberOfFields = size * size;
    var elementsMatrix = [];
    var listOfBusyPosXY = [];
    var element; 
    


    var inListPosXY = function (posXY) {
     var res = false;
       listOfBusyPosXY.forEach(function(entry) {
              if(entry == posXY)
                res = true;
            })
      return res;
   };

    var getRandom= function(){
    
        var maxNumberOfRan = size;

        return Math.floor((Math.random()*maxNumberOfRan)); //0,1,2,3,4,...
    };
   
    var fillOneElement = function (element, posX,posY) {        
      elementsMatrix[posX][posY] = element;
    };
 

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
   }

    var fillTable = function () {

          for (var i = 0; i < size; i++)
          {
                 elementsMatrix[i] = [];
              for (var j = 0; j < size; j++)
              {
                     elementsMatrix[i][j] = "*";
              }
          }
     }

   
   var getElement = function () {
      element = new Element();  //we need generate diferent objects with same value
      element.generateValue();

      return element;
   }

   this.getSize = function () {
    return size;
   }
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
   }


   this.getMatrix= function () {
     return elementsMatrix;
   }

/*
   this.getElementOfMatrix = function (posX,posY) {
      return elementsMatrix[posX][posY];
   }*/

  fillTable();
  fillPairs();

};