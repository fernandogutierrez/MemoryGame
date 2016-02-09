 //5
var Table=function(ssize,listOfElements){

    var size = ssize;
    var numberOfFields = (size + 1) * (size + 1);
    var firstTable = [];
    var secondTable = [];
    var listOfBusyPosXY = [];



    var inListPosXY = function (posXY) {
     var res = false;
       listOfBusyPosXY.forEach(function(entry) {
              if(entry == posXY)
                res = true;
            })
      return res;
   };
    var getRandom= function(){
        /**
         * max number of random numbers, since 0 
         */
        var maxNumberOfRan = size+1;
        return Math.floor((Math.random()*maxNumberOfRan)); //0,1,2,3,4,...
    };
    /**
     * Fill each element of the table
     * @param  {int} element, this is the element to fill the table
     * @param  {int} posX , position in axis X
     * @param  {int} posY , position in axis Y
     */
    var fillOneElement = function (element, posX,posY) {        
      secondTable[posX][posY] = element;
   }
   /**
    * fill a table with one pair of element
    * @param  {int} element, represent the element to fill 
    */
   var fillOnePair = function (element) {
       var count = 2;
       
      while(count > 0){
         var posX = getRandom();
         var posY = getRandom();         
         var posXY = posX.toString()+posY.toString();

         if (!(inListPosXY(posXY))) 
         {
            listOfBusyPosXY.push(posXY);
            fillOneElement(element,posX,posY);
            count --;
         }
      }
   }
   var printTable = function(table) {
        for (var i = 0; i <= size; i++){
            console.log(i,table[i].join(' '));
        }
    }

  var fillTables = function() {
      fillTable(firstTable); 
      fillTable(secondTable);
  }
  var fillTable = function (tableToFill) {

        for (var i = 0; i <= size; i++)
        {
            tableToFill[i] = [];
            for (var j = 0; j <= size; j++)
            {
                tableToFill[i][j] = "*";
            }
        }
   }
   //fill table with pair of elements like
   // [2,2] , [3,3],[8,8]
   var fillPairs = function () {
     var numberOfPairs = Math.floor(numberOfFields/2);
        while (numberOfPairs>0) {
          
            var element = numberOfPairs;//element to field of object

            fillOnePair(element);                 
            numberOfPairs--;
        }
        printTable(secondTable);
   }
   this.discoverElement = function(posX,posY) {
       firstTable[posX][posY] = secondTable[posX][posY]
       printTable(firstTable);
   }

  fillTables();
  fillPairs();


};