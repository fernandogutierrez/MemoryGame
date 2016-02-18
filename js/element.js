 var Element = function () {
      var status='hidden';
      var value = '*';
      var posX;
      var posY;
      var symbols=['ƒ','$','@','#','%','†',':','!','+','?'];


      this.getRandom = function () {
          return Math.floor((Math.random() * 9));
      };

      this.generateValue = function () {
          value = symbols[this.getRandom()];
      };
    
      this.getStatus = function (argument) {
            return status;
      }
  
      this.getValue = function () {
            return value;
      } 
      this.setPosXY = function(x,y){
        posX = x;
        posY = y;
      };
      this.getPosX=function(){
        return posX;
      };
      this.getPosY=function(){
        return posY;
      };
     
   
    };
