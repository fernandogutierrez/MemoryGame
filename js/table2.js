var Table=function(){
    var iMaxNum = 5;
    var numberOfElements = (iMaxNum+1) * (iMaxNum+1);
    var i, j;
   
    var tableHidden = [];//new Array(iMaxNum - 1);
    var tableWithValues = [];
    
    var listOfBusyPosXY = [];
    
    /**
     * verify if the position [x][y] exist in list of listOfBusyPosXY    
     * @param  {string} posXY, positions selected
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
    * return one random number
    */
    var getRandom= function(){
        var num = iMaxNum+1;
        return Math.floor((Math.random()*num)); //0,1,2,3,4,.....
    };
    /**
     * Fill each element of the table
     * @param  {int} element, this is the element to fill the table
     * @param  {int} posX , position in axis X
     * @param  {int} posY , position in axis Y
     */
    var fillElement = function  (element, posX,posY) {        
      tableWithValues[posX][posY] = element;
   }
   /**
    * fill a table with a pair of element
    * @param  {int} element, represent the element to fill pairs
    */
   var fillTableWithElements = function (element) {
       var count = 2;
       
      while(count > 0){
         var posX = getRandom();
         var posY = getRandom();         
         var posXY = posX.toString()+posY.toString();

         if (!(inListPosXY(posXY))) 
         {
            listOfBusyPosXY.push(posXY);
            fillElement(element,posX,posY);
            count --;
         }
      }
   }
   var printTable = function(table) {
        for (i = 0; i <= iMaxNum; i++){
            console.log(i,table[i].join(' '));
        }
    }
  /**
   * fill two tables, the first one to hidden elements and the other one to 
   * fill the elements
   */
   this.fillTable = function () {
        for (i = 0; i <= iMaxNum; i++)
        {
            tableHidden[i] = [];
            tableWithValues[i] = [];
            for (j = 0; j <= iMaxNum; j++)
            {
                tableHidden[i][j] = "*";
                tableWithValues[i][j] = "*";
            }
        }
        printTable(tableHidden);
   }
   
   this.displayAndFillElements = function () {
     var numberOfPares = numberOfElements/2;
        while (numberOfPares>0) {
            var element = numberOfPares;
            fillTableWithElements(element);                 
            numberOfPares--;
        }
        printTable(tableWithValues);
   }

};