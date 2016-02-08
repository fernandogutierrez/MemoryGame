var Table=function(){
    var iMaxNum = 5;
    var numberOfElements = (iMaxNum+1) * (iMaxNum+1);
    var i, j;
   // var symbols=['*','$','@','#','%'];
    var tableHidden = [];//new Array(iMaxNum - 1);
    var tableWithValues = [];
    //list to control the bussi pos
    var listOfBusyPosXY = [];

    //1) fill with hidden elements (T)
    //2) fill another table with values
    //3) receive by console one number to " function discover table hidden with 
    // elemnts of the 2)"
    
   var inListPosXY = function (posXY) {
     var res = false;
       listOfBusyPosXY.forEach(function(entry) {
              if(entry == posXY)
                res = true;
            })
      return res;
   };
    var getRandom= function(){
        var num = iMaxNum+1;
        return Math.floor((Math.random()*num)); //0,1,2,3,4,.....
    };
    var fillElement = function  (element, posX,posY) {        
      tableWithValues[posX][posY] = element;
   }

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
        this.display();
   }
   this.displayAndFillElements = function () {
     var numberOfPares = numberOfElements/2;
        while (numberOfPares>0) {
            var element = numberOfPares;
            fillTableWithElements(element);                 
            numberOfPares--;
        }
   }
    this.display=function(){
        for (i = 0; i <= iMaxNum; i++){
            console.log(i, tableHidden[i].join(' '));
        }
    };
   
    this.displayFilledElements=function(){
        for (i = 0; i <= iMaxNum; i++){
            console.log(i,tableWithValues[i].join(' '));
        }
    };


};