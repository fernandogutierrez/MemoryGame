

var Table=function(ssize){

    var size = ssize; //size of the table
    var numberOfFields = size * size;
    var firstTable = [];
    var secondTable = [];
    var listOfBusyPosXY = [];
    var elementDiscovered = "";
    //
    var element; 
    

    /**
     * this method control the positions that are bussy
     * @param  {string} posXY represent the axis X and Y 'XY'
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
    * this method generated a random number from 0 to maxNumberOfRows 
    * @return {[type]} [description]
    */
    var getRandom= function(){
      /**
       * size of the table
       * @type {int}
       */
        var maxNumberOfRan = size;

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
         element.setPosXY(posX,posY);        
         var posXY = posX.toString()+posY.toString();

         if (!(inListPosXY(posXY))) 
         {
            listOfBusyPosXY.push(posXY);
            fillOneElement(element,posX,posY);
            count --;
         }
      }
   }
   /**
    * print by console the current table (first table)
    * @param  {matrix} table represent a matrix[][] to print 
    */
    var printTable = function (table) {
       for (var i = 0; i < size; i++){
            console.log(i,table[i].join(' '));
        } 
    }
    /**
     * this method is to return one array of strings
     * @param  {array} tableToConvert represents an array 
     */
    var getStrings = function (tableToConvert) {
     var res = [];
     
       for (var i = 0 ; i < size; i++) {
           res.push(tableToConvert[i].getValue());

         }  
      
        return res;
    }
  
  /**
   * method to fill two table
   */
  var fillTables = function() {
      fillTable(firstTable); 
      fillTable(secondTable);
  }
  /**
   * method to fill a matrix with (*) 
   */
  var fillTable = function (tableToFill) {

        for (var i = 0; i < size; i++)
        {
            tableToFill[i] = [];
            for (var j = 0; j < size; j++)
            {
                tableToFill[i][j] = "*";
            }
        }
   }

   //fill table with pair of elements like
   // [$,$] ,[/,/],[?,?]
   var getElement = function (argument) {
      element = new Element();
      element.generateValue();
      return element;
   }
   var fillPairs = function () {
     var numberOfPairs = Math.floor(numberOfFields/2);
        while (numberOfPairs>0) {
          
            var element = getElement();//element to field of object


            fillOnePair(element);                 
            numberOfPairs--;
        }
   }

   this.discoverElement = function(posX,posY) {
       firstTable[posX][posY] = secondTable[posX][posY].getValue();
       setElementDiscovered(secondTable[posX][posY]);
   }
   var setElementDiscovered = function(element) {
        elementDiscovered = element;

   }
  
   this.getElementDiscovered = function() {
     return elementDiscovered;
   }

   this.hide=function(element){

      var elPosX = element.getPosX();
      var elPoxY = element.getPosY();

      firstTable[elPosX][elPoxY] = '*';
   }
   this.getFirstTable = function () {

     printTable(firstTable);
      return firstTable;
   }
   
   


  fillTables();
  fillPairs();
  //this.cheat();
  //return secondTable;
};