 var Element = function () {
     
      var value = '*';
      var posX;
      var posY;
      var symbols=['ƒ','$','@','#','%','†'];


     /**
      * method to genererate a random number
      */
      this.getRandom = function () {
          return Math.floor((Math.random() * 5));
      };
     /**
      * method to assign an value to an element
      */
      this.generateValue = function () {
          value = symbols[this.getRandom()];
      };
      /**
       * return the value of the element that can be 'ƒ','$','@','#','%','†'
       */
      this.getValue = function () {
            return value;
      } 
      /**
       * set the position of the element 
       * @param {x} x represents the axis x
       * @param {y} y represents the axis y
       */
      this.setPosXY = function(x,y){
        posX = x;
        posY = y;
      };
      /**
       * return an integer that represents axis x
       */
      this.getPosX=function(){
        return posX;
      };
      /**
        * return an integer that represents axis y
       */
      this.getPosY=function(){
        return posY;
      };
     
   
    };